export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://www.premium-lektorat.de";
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
