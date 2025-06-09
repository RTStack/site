const SITE_URL = "https://rtsindo.com";
import { site } from "@/data/default";
import categories from "@/data/categories";

const categories = categories.map((cat) => cat.url);

const areas = [
  "jakarta",
  "tangerang",
  "depok",
  "bekasi",
  "bogor",
  "karawang",
];

export async function GET() {
  const pages = [
    "",
    "about",
    "contact",
    ...categories,
    ...categories.flatMap((cat) => areas.map((area) => `${cat}-${area}`)),
  ];

  const urls = pages.map((slug) => {
    const path = slug ? `/${slug}` : "";
    return `
<url>
  <loc>${SITE_URL}${path}</loc>
  <changefreq>weekly</changefreq>
  <priority>${slug ? "0.8" : "1.0"}</priority>
</url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
