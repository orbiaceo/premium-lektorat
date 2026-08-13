import "./globals.css";
import { getContent } from "../lib/content";

const home = getContent("home");

export const metadata = {
  metadataBase: new URL("https://www.premium-lektorat.de"),
  title: home.seo.title,
  description: home.seo.description,
  keywords: home.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: home.seo.title,
    description: home.seo.description,
    url: "/",
    siteName: `${home.marke.name} | ${home.marke.zusatz}`,
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${home.marke.name} | ${home.marke.zusatz}`,
    description: home.seo.description,
    url: "https://www.premium-lektorat.de",
    areaServed: "DE",
    knowsLanguage: "de",
  };

  return (
    <html lang="de">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </body>
    </html>
  );
}
