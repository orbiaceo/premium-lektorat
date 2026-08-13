import Rechtstext from "../Rechtstext";
import { getContent } from "../../lib/content";

const c = getContent("datenschutz");
export const metadata = {
  title: c.seo.title,
  description: c.seo.description,
  robots: { index: false, follow: true },
};

export default function Seite() {
  return <Rechtstext name="datenschutz" />;
}
