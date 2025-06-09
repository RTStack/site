import { Menu } from "@/types/Menu";
import categories from "@/data/categories";

const rentalSubmenu = categories.map((item, index) => ({
  id: index + 1, // ID bisa disesuaikan, atau pakai item.id kalau ada
  name: item.name,
  title: item.title,
  newTab: item.newTab,
  path: item.url, // Hati-hati: di categories pakai `url`, bukan `path`
}));

export const menuData: Menu[] = [
  {
    id: 1,
    name: "Popular",
    title: "Popular",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    title: "Shop",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    name: "Contact",
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    name: "pages",
    title: "pages",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        name: "Shop With Sidebar",
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        name: "Shop Without Sidebar",
        title: "Shop Without Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        name: "Checkout",
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        name: "Cart",
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        name: "Wishlist",
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        name: "Sign in",
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        name: "Sign up",
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        name: "My Account",
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        name: "Contact",
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        name: "Error",
        title: "Error",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        name: "Mail Success",
        title: "Mail Success",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 7,
    name: "blogs",
    title: "blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        name: "Blog Grid with sidebar",
        title: "Blog Grid with sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        name: "Blog Grid",
        title: "Blog Grid",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        name: "Blog details with sidebar",
        title: "Blog details with sidebar",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        name: "Blog details",
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];

export const mainMenu: Menu[] = [
  {
    id: 1,
    name: "Tentang",
    title: "Tentang Kami",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    name: "Rental",
    title: "Produk rental lain untuk disewa",
    newTab: false,
    submenu: rentalSubmenu,
  },
  {
    id: 4,
    name: "Jasa",
    title: "Jasa Tenaga IT Profesional",
    newTab: false,
    submenu: [
      {
        id: 41,
        name: "Software Development",
        title: "Harga Jasa Pembuatan Software",
        newTab: false,
        path: "/jasa-pembuatan-software",
      },
      {
        id: 42,
        name: "Web Development",
        title: "Harga Jasa Pembuatan Website Murah",
        newTab: false,
        path: "/jasa-pembuatan-website",
      },
      {
        id: 43,
        name: "UI/UX Design",
        title: "Harga Jasa UI/UX Design Profesional",
        newTab: false,
        path: "/jasa-ui-ux-design",
      },
      {
        id: 44,
        name: "Digital Marketing",
        title: "Harga Jasa Iklan Google & Sosmed",
        newTab: false,
        path: "/jasa-iklan-digital-marketing",
      },
      {
        id: 45,
        name: "Jaringan & CCTV",
        title: "Harga Jasa Instalasi Jaringan & CCTV",
        newTab: false,
        path: "/jasa-instalasi-jaringan-cctv",
      },
    ]
  },
  {
    id: 5,
    name: "Kontak",
    title: "Hubungi Kami",
    newTab: false,
    path: "/kontak",
  },
  {
    id: 6,
    name: "FAQ",
    title: "Pertanyaan yang sering ditanyakan seputar sewa dan jasa",
    newTab: false,
    path: "/faq",
  },
];
