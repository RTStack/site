import React from "react";
import ProductDetails from "@/components/ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({ product: product.slug }));
}

export const generateMetadata = async ({ params }: { params: { product: string } }): Promise<Metadata> => {
  const product = products.find((p) => p.slug === params.product);

  if (!product) return { title: "Produk tidak ditemukan" };

  return {
    title: `${product.title} | RTSIndo`,
    description: product.description,
  };
};

const ProductDetailPage = async ({ params }: { params: { product: string } }) => {
  const product = products.find((p) => p.slug === params.product);

  if (!product) return notFound();

  return (
    <main>
      <ProductDetails product={product} />
    </main>
  );
};

export default ProductDetailPage;
