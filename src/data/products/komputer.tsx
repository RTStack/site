import { Product } from "@/types/product";
import { specifications } from "./spec-komputer";

const basePromo = {
  promo: "30% OFF*",
  promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
};

const baseFreeDelivery = {
  freeDelivery: true,
  freeDeliveryDesc: 'Gratis ongkir untuk area <a href="/coverage" title="Lihat area tercover" class="underline hover:text-blue">tercover</a>',
};

const baseRent = {
  rentDuration: { all: true },
  client: {
    government: true,
    company: true,
    school: true,
    event_organizer: true,
    startup: true,
    professional: true,
    individual: true,
  },
};

const komputer: Product[] = [
  {
    id: 3,
    categoryId: 2,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-imac-24-inch",
    title: "Apple iMac 24-inch",
    description: "Kerja, ngedesain, ngedit video, atau sekadar pamer meja kerja? iMac jawabannya. All-in-one desktop dengan layar Retina 4K yang super jernih, ditenagai chip Apple Silicon buat performa ngebut tanpa kipas angin berdengung. Desainnya minimalis, tapi isinya maksimalis.<br />Cocok banget buat kamu yang butuh power kreatif, ruang kerja aesthetic, dan tentu aja—flex yang halus tapi fatal.",
    spec: "SSD/8GB-16GB",
    reviews: 65,
    rating: 5,
    featured: true,
    popular: true,
    priority: 3,
    imgs: {
      thumbnails: [
        "/images/products/sewa-imac-sm.webp",
        "/images/products/sewa-imac-back-sm.webp",
      ],
      previews: [
        "/images/products/sewa-imac-bg.webp",
        "/images/products/sewa-imac-back-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
    ...specifications.imac,
  },
  {
    id: 5,
    categoryId: 2,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-pc-editing-i7",
    title: "PC Editing i7",
    description: "Siap tempur buat dunia editing! PC ini dibekali prosesor Intel Core i7 yang ngebut, cocok buat rendering video, motion graphic, color grading, atau ngedit 4K tanpa drama nge-lag. Dipadu RAM gede, SSD ngebut, dan VGA yang siap ngangkat project berat kamu, hasilnya? Workflow mulus, deadline aman.<br/>Buat kamu yang cari performa stabil, cepat, dan tahan melotot, set PC ini adalah senjata editing yang bisa diandalkan.",
    spec: "SSD/8GB-16GB/VGA",
    reviews: 53,
    rating: 5,
    featured: true,
    popular: true,
    priority: 5,
    imgs: {
      thumbnails: [
        "/images/products/sewa-pc-editing-1-sm.webp",
        "/images/products/sewa-pc-editing-2-sm.webp",
      ],
      previews: [
        "/images/products/sewa-pc-editing-1-bg.webp",
        "/images/products/sewa-pc-editing-2-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
    ...specifications.pc,
  },
];

export default komputer;