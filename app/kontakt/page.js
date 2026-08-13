import Formular from "./Formular";
import { getContent } from "../../lib/content";

const c = getContent("kontakt");

export const metadata = {
  title: c.seo.title,
  description: c.seo.description,
  alternates: { canonical: "/kontakt" },
};

export default function Seite() {
  const home = getContent("home");

  return (
    <>
      <header>
        <div className="wrap bar">
          <p className="mark">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              {home.marke.name} <i>|</i> {home.marke.zusatz}
            </a>
          </p>
        </div>
      </header>

      <section className="doc">
        <div className="wrap">
          <h1>{c.titel}</h1>
          <p className="lead">{c.einleitung}</p>
          <Formular
            texte={{
              button: c.button,
              danke: c.danke,
              fehler: c.fehler,
              hinweis: c.hinweis,
            }}
          />
          <p style={{ marginTop: "2.5rem" }}>
            <a href="/">Zurück zur Startseite</a>
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <nav>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </nav>
          <p style={{ margin: 0 }}>{home.fuss.zeile}</p>
        </div>
      </footer>
    </>
  );
}
