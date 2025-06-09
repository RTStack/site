import { site } from "@/data/default";

export const heroList = [
  {
    discount: 30,
    discountText: "Diskon<br />Bisnis*",
    title: "Pusat Rental",
    subtitle: "Sewa Laptop Terdekat <br />Jakarta Bogor Depok Tangerang Bekasi",
    description:
      "Pusat Penyewaan Laptop Terdekat untuk kebutuhan kantor, event, atau sekolah.<br /><strong>Durasi: ✓ Harian ✓ Mingguan ✓ Bulanan</strong><br />Jakarta Bogor Depok Tangerang Bekasi Karawang.",
    image: {
      url: "/images/hero/sewa-laptop.webp",
      blurUrl: "/images/hero/sewa-laptop-blur.webp",
      alt: "Sewa Laptop Terdekat - Jakarta Bogor Depok Tangerang Bekasi",
      width: 360,
      height: 360,
    },
    button: {
      label: "Penawaran",
      title: "Dapatkan Penawaran Spesial Jika Anda Memesan Rental Laptop Lebih Dari 1 Unit",
      url: "/harga-sewa-laptop",
    },
  },
  {
    discount: 30,
    discountText: "Diskon<br />Bisnis*",
    title: "Terlengkap",
    subtitle: "Pusat Penyewaan Komputer (PC Desktop) <br />Terbaik & Terlengkap",
    description:
      "Butuh Rental Komputer terbaik & terlengkap untuk Kantor, Event, atau Sekolah?<br /><strong>Durasi: Harian hingga Tahunan</strong><br />Cakupan Jabotabek dan sekitarnya.",
    image: {
      url: "/images/hero/sewa-komputer-pc-desktop.webp",
      blurUrl: "/images/hero/sewa-komputer-pc-desktop-blur.webp",
      alt: "Penyewaan Komputer Terdekat Terbaik dan Terlengkap",
      width: 360,
      height: 360,
    },
    button: {
      label: "Penawaran",
      title: "Dapatkan Penawaran Spesial Jika Anda Memesan Rental Komputer Lebih Dari 1 Unit",
      url: "/harga-sewa-komputer",
    },
  },
];

export const offerList = [
  {
    header: "Sewa",
    title: "Macbook Pro",
    specification:"512/16GB",
    image: {
      src: "/images/hero/macbook-pro.webp",
      alt: "mobile image",
      width: 180,
      height: 180,
    },
    label: "Penawaran Terbatas",
    discount: 30,
    discountText: "Diskon Khusus*",
    url: `https://wa.me/${site.whatsapp}?text=Hai+${site.name},%0ASaya+tertarik+penawaran+terbatas+sewa+laptop+macbook+pro+512/16GB.`,
    urlTitle: "Penawaran Terbatas Sewa Laptop Macbook Pro 512/16GB",
  },
  {
    header: "Sewa",
    title: "Laptop Gaming",
    specification:"512/16GB",
    image: {
      src: "/images/hero/laptop-gaming.webp",
      alt: "mobile image",
      width: 180,
      height: 180,
    },
    label: "Penawaran Terbatas",
    discount: 30,
    discountText: "Diskon Khusus*",
    url: `https://wa.me/${site.whatsapp}?text=Hai+${site.name},%0ASaya+tertarik+penawaran+terbatas+sewa+laptop+gaming+512/16GB.`,
    urlTitle: "Penawaran Terbatas Sewa Laptop Gaming 512/16GB",
  },
];