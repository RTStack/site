import * as React from 'react';
import { Metadata } from "next";

import { notFound } from "next/navigation";

import categories from "@/data/categories";
import areaList from "@/data/area";
import CategoryDetails from "@/components/CategoryDetails";
import CategoryContents from "@/components/CategoryContents";
import Faq from "@/components/Faq";
import Categories from "@/components/Home/Categories";

// Helper buat normalisasi nama area jadi slug
const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// Generate semua kombinasi kategori + area
export async function generateStaticParams() {
  const baseSlugs = categories.filter(c => !c.newTab).map(c => c.url.replace("/", ""));
  const areaSlugs = areaList.map(slugify);

  const params = [];

  for (const base of baseSlugs) {
    params.push({ category: base }); // tanpa area
    for (const area of areaSlugs) {
      params.push({ category: `${base}-${area}` }); // dengan area
    }
  }

  return params;
}

// Metadata dinamis
export const generateMetadata = async ({ params }: { params: { category: string } }): Promise<Metadata> => {
  const { baseCategory, selectedArea } = parseSlug(params.category);
  const category = categories.find((c) => c.url.replace("/", "") === baseCategory);

  if (!category) {
    return {
      title: "Kategori tidak ditemukan",
      description: "Kategori yang kamu cari gak tersedia, coba yang lain ya.",
    };
  }

  const title = selectedArea
    ? category.title.replace(/terdekat/i, selectedArea)
    : category.title;

  const description = selectedArea
    ? category.description.replace(/terdekat/gi, selectedArea)
    : category.description;

  return {
    title,
    description,
  };
};

// Halaman utama kategori
export default async function RentalCategoryPage({ params }: { params: { category: string } }) {
  const { baseCategory, selectedArea } = parseSlug(params.category);
  const category = categories.find((c) => c.url.replace("/", "") === baseCategory);

  if (!category) return notFound();

  const patchedTitle = selectedArea
    ? category.title.replace(/terdekat/gi, selectedArea)
    : category.title;

  const patchedDescription = selectedArea
    ? category.description.replace(/terdekat/gi, selectedArea)
    : category.description;

  let finalContent = category.content;

  // Coba ambil konten khusus area kalau ada
  if (selectedArea) {
    const areaSlug = slugify(selectedArea);
    try {
      const areaContentModule = await import(`@/data/categories/area/${areaSlug}/${baseCategory}.tsx`);
      finalContent = areaContentModule.default || areaContentModule[`${baseCategory}Contents`];
    } catch (err) {
      console.warn(`Konten /data/categories/area/${areaSlug}/${baseCategory} khusus tidak ditemukan untuk ${selectedArea} - pakai fallback patch.`);
      finalContent = patchReactNode(category.content, selectedArea);
    }
  }

  const patchedCategory = {
    ...category,
    title: patchedTitle,
    description: patchedDescription,
    content: finalContent,
  };

  return (
    <main>
      <CategoryDetails category={patchedCategory} />
      <Categories />
      <CategoryContents content={patchedCategory.content} />
      <Faq categoryName={category?.name || baseCategory} areaName={selectedArea} />
    </main>
  );
}


// 🔍 Parsing slug jadi { baseCategory, selectedArea }
function parseSlug(slug: string) {
  const parts = slug.split("-");
  let baseCategory = slug;
  let selectedArea = "";

  for (let i = parts.length - 1; i > 0; i--) {
    const maybeArea = parts.slice(i).join("-");
    const formatted = areaList.find(
      (a) => slugify(a) === maybeArea
    );
    if (formatted) {
      selectedArea = formatted;
      baseCategory = parts.slice(0, i).join("-");
      break;
    }
  }

  return { baseCategory, selectedArea };
}

// Rekursif: replace teks "terdekat" dalam semua children string ReactNode
function patchReactNode(node: React.ReactNode, selectedArea: string): React.ReactNode {
  if (typeof node === "string") {
    return node.replace(/terdekat/gi, selectedArea);
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => {
      const patched = patchReactNode(child, selectedArea);
      // Kalau hasil patch adalah elemen, dan belum punya key, kasih key
      if (React.isValidElement(patched) && patched.key == null) {
        return React.cloneElement(patched, { key: index });
      }
      return patched;
    });
  }

  if (React.isValidElement(node)) {
    return React.cloneElement(node, {
      ...node.props,
      children: patchReactNode(node.props.children, selectedArea),
    });
  }

  return node;
}
