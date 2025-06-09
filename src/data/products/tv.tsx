import { Product } from "@/types/product";

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

const tv: Product[] = [
  {
    id: 7,
    categoryId: 7,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-smart-tv-86-inch",
    title: "TV LED 86\"",
    description: "Ukuran bukan segalanya! Yakin? Dengan <strong>TV Sultan 86 inch yang super gede</strong>, resolusi tajam, dan warna yang hidup, TV LED ini siap jadi pusat semesta di ruang tamu, ruang meeting, atau ruang seminar. Cocok buat turnamen, nobar bola, presentasi.<br />Port lengkap, speaker mantap, dan tampilan premium siap bikin setiap momen jadi megah. Pokoknya, sekali nyala, semua mata langsung ke dia.",
    spec: "4K/Smart TV",
    reviews: 45,
    rating: 4.9,
    featured: true,
    popular: true,
    priority: 7,
    imgs: {
      thumbnails: [
        "/images/products/sewa-smart-tv-86-inch-sm.webp",
        "/images/products/sewa-smart-tv-sm.webp",
      ],
      previews: [
        "/images/products/sewa-smart-tv-86-inch-bg.webp",
        "/images/products/sewa-smart-tv-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
  },
];

export default tv;