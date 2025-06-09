export async function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://rtsindo.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}