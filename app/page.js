import Image from "next/image";
import { getContent } from "../lib/content";
import StickyNav from "./StickyNav";
import Fragen from "./Fragen";

export default function Home() {
  const c = getContent("home");
  const faq = getContent("faq");

  return (
    <>
      <StickyNav marke={c.marke} navigation={c.navigation} />

      <header>
        <div className="wrap bar">
          <p className="mark">
            {c.marke.name} <i>|</i> {c.marke.zusatz}
          </p>
          <nav>
            {c.navigation.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <h1 className="claim">
            {c.hero.claimVor}
            <em>{c.hero.claimHervor}</em>
            {c.hero.claimNach}
          </h1>
          <p className="idea">{c.hero.leitidee}</p>
          <p className="lead intro">{c.hero.intro}</p>
        </div>
      </section>

      <section id="leistungen">
        <div className="wrap">
          <p className="eyebrow">{c.leistungen.eyebrow}</p>
          <h2>{c.leistungen.titel}</h2>
          <ul className="cards">
            {c.leistungen.punkte.map((p) => (
              <li key={p.titel}>
                <h3>{p.titel}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <ul className="tags">
            {c.leistungen.textarten.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="fuerwen">
        <div className="wrap">
          <p className="eyebrow">{c.fuerwen.eyebrow}</p>
          <h2>{c.fuerwen.titel}</h2>
          <ul className="plain">
            {c.fuerwen.gruppen.map((g) => (
              <li key={g.titel}>
                <h3>{g.titel}</h3>
                <p>{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="ueber">
        <div className="wrap">
          <p className="eyebrow">{c.ueber.eyebrow}</p>
          <figure className="portrait">
            <Image
              src={c.ueber.bild}
              alt={`Porträt von ${c.marke.name}`}
              width={560}
              height={948}
              sizes="(min-width: 700px) 192px, 168px"
              priority
            />
            <figcaption>{c.ueber.bildunterschrift}</figcaption>
          </figure>
          <h2>{c.ueber.titel}</h2>
          {c.ueber.absaetze.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
          <p className="sign">{c.ueber.signatur}</p>
        </div>
      </section>

      <section id="fragen">
        <div className="wrap">
          <p className="eyebrow">{c.fragen.eyebrow}</p>
          <Fragen
            begruessung={c.fragen.begruessung}
            hinweis={c.fragen.hinweis}
            themen={faq.themen}
          />
        </div>
      </section>

      <section id="anfrage" className="cta">
        <div className="wrap">
          <p className="eyebrow">{c.anfrage.eyebrow}</p>
          <h2>{c.anfrage.titel}</h2>
          <p>{c.anfrage.text}</p>
          <p style={{ marginTop: "1.9rem" }}>
            <a className="button" href="/kontakt">{c.anfrage.button}</a>
          </p>
          <p className="hint">{c.anfrage.hinweis}</p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <nav>
            {c.fuss.links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <p style={{ margin: 0 }}>{c.fuss.zeile}</p>
        </div>
      </footer>
    </>
  );
}
