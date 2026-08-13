export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://www.premium-lektorat.de";
  const jetzt = new Date();
  return [
    { url: base, lastModified: jetzt, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/kontakt`, lastModified: jetzt, changeFrequency: "yearly", priority: 0.8 },
  ];
}
