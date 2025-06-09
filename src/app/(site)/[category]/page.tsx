import * as React from 'react';
import { Metadata } from "next";
import { notFound } from "next/navigation";
import categories from "@/data/categories";
import CategoryDetails from "@/components/CategoryDetails";

// Digunakan untuk pre-render semua halaman kategori
export async function generateStaticParams() {
  return categories
    .filter(cat => !cat.newTab)
    .map((category) => ({
      category: category.url.replace("/", ""),
    }));
}

// Metadata dinamis per kategori
export const generateMetadata = async ({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> => {
  const category = categories.find(
    (p) => p.url.replace("/", "") === params.category
  );

  if (!category) {
    return {
      title: "Kategori tidak ditemukan",
      description: "Kategori yang kamu cari gak tersedia, coba yang lain ya.",
    };
  }

  return {
    title: category.title,
    description: category.img.alt, // fallback deskripsi pakai alt img
  };
};

// Halaman utama per kategori
export default function RentalCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find(
    (cat) => cat.url.replace("/", "") === params.category
  );

  if (!category) return notFound();

  return (
    <main>
      <CategoryDetails category={category} />
    </main>
  );
}
