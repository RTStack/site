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

const laptop: Product[] = [
  {
    id: 1,
    categoryId: 1,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-laptop-i7",
    title: "Notebook Core i7",
    description:"Multitasking, rendering, gaming, atau kerja berat? Santuy, dengan Intel Core i7 terbaru, semua dilibas tanpa lag. Desain sleek, layar tajam, dan baterai awet siap nemenin kamu seharian.<br />Buat yang butuh speed plus power, ini pilihan tepat supaya kerja makin gegas dan gaya makin fyp.",
    spec: "SSD/8GB-16GB",
    reviews: 85,
    rating: 4.9,
    featured: true,
    popular: true,
    priority: 1,
    imgs: {
      thumbnails: [
        "/images/products/sewa-laptop-i7-sm.webp",
        "/images/products/sewa-laptop-2-sm.webp",
      ],
      previews: [
        "/images/products/sewa-laptop-i7-bg.webp",
        "/images/products/sewa-laptop-2-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
  },
  {
    id: 2,
    categoryId: 1,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-macbook-pro",
    title: "Macbook Pro",
    description:"MacBook Pro bukan cuma laptop, tapi statement! Mesin bertenaga dengan chip Apple Silicon terbaru yang bikin kerja berat, editing video, coding, dan nge-game jadi mulus. Desain premium, layar Retina super tajam, dan baterai tahan lama bikin kamu bisa kerja nonstop tanpa cari colokan.<br />Buat kamu yang pengen performa gila plus gaya yang nggak pernah kalah, MacBook Pro ini pilihan nomor satu.",
    spec: "512/16GB",
    reviews: 79,
    rating: 4.8,
    featured: true,
    popular: true,
    priority: 2,
    imgs: {
      thumbnails: [
        "/images/products/sewa-macbook-pro-sm.webp",
        "/images/products/sewa-macbook-pro-2-sm.webp",
      ],
      previews: [
        "/images/products/sewa-macbook-pro-bg.webp",
        "/images/products/sewa-macbook-pro-2-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
  },
  {
    id: 4,
    categoryId: 1,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-macbook-air",
    title: "MacBook Air",
    description: "Ringan di tangan, berat di performa. MacBook Air hadir adem tanpa kipas dan chip Apple Silicon yang kenceng banget, bikin multitasking, ngoding, edit konten, sampai Netflix-an jadi super smooth. Baterai tahan seharian.<br />Buat kamu yang butuh laptop enteng tapi nggak ecek-ecek, MacBook Air itu sahabat produktif paling stylish.",
    spec: "256/8GB",
    reviews: 61,
    rating: 4.7,
    featured: true,
    popular: true,
    priority: 4,
    imgs: {
      thumbnails: [
        "/images/products/sewa-macbook-sm.webp",
        "/images/products/sewa-macbook-2-sm.webp",
      ],
      previews: [
        "/images/products/sewa-macbook-bg.webp",
        "/images/products/sewa-macbook-2-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
  },
  {
    id: 6,
    categoryId: 1,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-laptop-i5",
    title: "Notebook Core i5",
    description:"Laptop kece dengan prosesor Intel Core i5 generasi terbaru, siap multitasking dan kerja berat. Cocok banget buat kamu yang butuh performa handal buat kerja, kuliah, atau nge-game ringan. Layar jernih, baterai tahan lama, dan desain slim bikin kamu makin pede bawa kemana-mana. Upgrade gaya dan produktivitasmu sekarang juga loh!",
    spec: "SSD/8GB-16GB",
    reviews: 51,
    rating: 4.8,
    featured: true,
    popular: true,
    priority: 6,
    imgs: {
      thumbnails: [
        "/images/products/sewa-laptop-i5-sm.webp",
        "/images/products/sewa-laptop-2-sm.webp",
      ],
      previews: [
        "/images/products/sewa-laptop-i5-bg.webp",
        "/images/products/sewa-laptop-2-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
  },
  {
    id: 8,
    categoryId: 1,
    promo: "Diskon hingga 30%",
    promoDesc: "Diskon hingga 30% khusus untuk pelanggan bisnis bukan perorangan",
    slug: "sewa-laptop-gaming",
    title: "Laptop Gaming",
    description: "Bukan laptop kaleng-kaleng, ini monster beneran!<br/>Ditenagai prosesor kencang dan GPU gahar, laptop gaming ini siap melibas game AAA, multitasking berat, dan streaming tanpa nge-lag sedikit pun. Layar refresh rate tinggi, keyboard RGB yang ngejreng, dan sistem cooling cerdas bikin sesi gaming makin maksimal tanpa panas-panasan.<br/>Cocok buat kamu yang pengen nge-push rank, ngedit video, atau flex di tongkrongan.",
    spec: "NVMe/16GB",
    reviews: 42,
    rating: 5,
    featured: true,
    popular: true,
    priority: 8,
    imgs: {
      thumbnails: [
        "/images/products/sewa-laptop-gaming-msi-sm.webp",
        "/images/products/sewa-laptop-gaming-asus-sm.webp",
        "/images/products/sewa-laptop-gaming-acer-sm.webp",
      ],
      previews: [
        "/images/products/sewa-laptop-gaming-msi-bg.webp",
        "/images/products/sewa-laptop-gaming-asus-bg.webp",
        "/images/products/sewa-laptop-gaming-acer-bg.webp",
      ],
    },
    ...basePromo,
    ...baseFreeDelivery,
    ...baseRent,
  },
];

export default laptop;