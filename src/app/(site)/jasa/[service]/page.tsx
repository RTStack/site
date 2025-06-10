import * as React from 'react';
import { Metadata } from "next";
import { notFound } from "next/navigation";
import services from "@/data/services";

// Buat list halaman statis yang perlu di-*generate*
export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

// Buat metadata SEO dinamis per layanan
export const generateMetadata = async ({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> => {
  const serviceItem = services.find(
    (s) => s.slug === params.service
  );

  if (!serviceItem) {
    return {
      title: "Layanan tidak ditemukan",
      description: "Layanan yang kamu cari gak tersedia. Coba cek layanan lainnya, ya!",
    };
  }

  return {
    title: serviceItem.title,
    description: serviceItem.description,
  };
};

// Halaman utama per layanan
export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const serviceItem = services.find(
    (s) => s.slug === params.service
  );

  if (!serviceItem) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-40">
      <h1 className="text-3xl font-bold mb-4">{serviceItem.title}</h1>
      <p className="text-gray-700">{serviceItem.description}</p>
    </main>
  );
}
