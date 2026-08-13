import { getContent } from "../lib/content";

// Gemeinsame Darstellung fuer Impressum und Datenschutz.
export default function Rechtstext({ name }) {
  const c = getContent(name);
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
          {c.abschnitte.map((a) => (
            <div key={a.titel}>
              <h2>{a.titel}</h2>
              {a.zeilen.map((z, i) => (
                <p key={i}>{z}</p>
              ))}
            </div>
          ))}
          <p style={{ marginTop: "3rem" }}>
            <a href="/">Zurück zur Startseite</a>
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <nav>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href="/kontakt">Kontakt</a>
          </nav>
          <p style={{ margin: 0 }}>{home.fuss.zeile}</p>
        </div>
      </footer>
    </>
  );
}
