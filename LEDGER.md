# LEDGER — CORNELIA | PREMIUM LEKTORAT

Chronologisches Entscheidungsprotokoll.
**Append-only.** Neue Einträge werden unten angehängt.
Bestehende Einträge werden nicht umgeschrieben — nur durch spätere
Einträge korrigiert oder aufgehoben.

Format:

```
## #NNN — JJJJ-MM-TT — Titel
**Was:**      Die Entscheidung in einem Satz.
**Warum:**    Begründung.
**Betrifft:** Dateien oder Bereiche.
**Status:**   offen | entschieden | umgesetzt auf dev | live auf main
**Offen:**    Was daraus noch folgt.
```

---

## #001 — 2026-08-12 — Projektstart, Charta v1.0

**Was:** Briefing „CORNELIA | PREMIUM LEKTORAT" angenommen und in
`CHARTA.md` v1.0 überführt. Arbeitsweise, Repo-Struktur und
Deployment-Kette festgelegt.

**Warum:** Projektstart. Der Rahmen muss vor jeder Umsetzung feststehen,
damit jede spätere Sitzung ohne Gedächtnisverlust anschlussfähig ist.

**Betrifft:** `CHARTA.md`, `LEDGER.md`, Repo-Setup

**Status:** umgesetzt auf dev

**Festgelegt:**
- Domain www.premium-lektorat.de (Porkbun), Datenbank Supabase
- Repository: `orbiaceo/premium-lektorat`
- GitHub: Entwicklung auf `dev`, Produktion auf `main`
- `dev` ist Standard-Branch — Schutz gegen versehentliche Commits
  auf `main`
- Vercel: `dev` → Preview, `main` → Produktion
- Domain zeigt erst auf `main`, wenn die Seite vollständig ist
- Alle sichtbaren Texte schreibt Cornelia selbst; wir liefern nur
  markierte Platzhalter
- Der Fragen-Bereich ist ein deterministischer Entscheidungsbaum,
  kein KI-Chat; Daten in `content/faq.json`
- Keine schwebende Chat-Blase (widerspricht der Markenanmutung)
- Farben und Typografie ausschließlich in `docs/design-tokens.md`
- Kein Kanban-Board; offene Punkte stehen in diesem Ledger

**Offen:**
- G-01 Platzierung des Fragen-Bereichs
- G-02 Pflegbarkeit durch Cornelia (Repo-Editor vs. CMS vs. Supabase)
- G-03 Übermittlung von Textproben (Datenschutz)
- `docs/design-tokens.md` noch nicht vorhanden — entsteht mit dem
  ersten Prototyp
- `content/faq.json` noch nicht vorhanden — braucht Themenliste
  von Cornelia

---

## #002 — 2026-08-12 — Kontext-Anbindung geklärt

**Was:** Das Repository `orbiaceo/premium-lektorat` ist als
GitHub-Verbindung im Kontext des Claude-Projekts eingebunden.
Charta, Ledger und Docs werden ausdrücklich **nicht** zusätzlich als
Dokumente in den Projekt-Kontext hochgeladen.

**Warum:** Zwei Kopien derselben Datei driften auseinander. Eine einzige
Quelle ist der Kern des gesamten Setups — sonst liest Claude
widersprüchliche Stände und vermischt sie unbemerkt.

**Betrifft:** Projekt-Kontext, Arbeitsablauf

**Status:** umgesetzt

**Verfahren (verbindlich):**
1. Änderung wird von Claude als fertiger Textblock geliefert
2. Commit auf `dev`
3. Im Claude-Projekt einmal **Sync** drücken

Die GitHub-Verbindung aktualisiert sich nicht selbsttätig. Ohne Sync
arbeitet Claude mit einem veralteten Stand.

**Kontrollmechanismus:** Claude beginnt jede Antwort mit dem tatsächlich
gelesenen Ledger-Stand. Weicht dieser vom letzten Commit ab, fehlt ein
Sync — dann zuerst synchronisieren, dann weiterarbeiten.

**Hinweis zur Umgebung:** Die GitHub-Verbindung steht in der Claude-App
am Handy nicht zur Verfügung, nur im Browser. Struktur- und
Kontextänderungen daher am Rechner vornehmen; die tägliche Arbeit am
Handy bleibt davon unberührt.

**Offen:**
- Briefing als `docs/00-briefing.md` ins Repo aufnehmen, damit es
  versioniert vorliegt und nicht nur als Projektbeschreibung existiert
- G-01, G-03 aus #001 weiterhin offen

---

## #003 — 2026-08-12 — G-02 entschieden: Inhaltspflege in zwei Phasen

**Was:** G-02 ist entschieden. **Phase 1:** Alle Seiteninhalte liegen als
Markdown- und JSON-Dateien im Repo. Kein eigener Admin-Bereich, kein CMS.
Pflege erfolgt über den GitHub-Web-Editor oder durch die Entwicklung.
**Phase 2** (später, nicht beauftragt): eine Redaktionsoberfläche unter
`/admin` kann nachgerüstet werden.

**Warum:** Cornelia kennt WordPress und arbeitet ungern mit Technik. Ein
selbstgebauter Admin-Bereich bedeutet jedoch Anmeldung, Sitzungs- und
Rechteverwaltung, Passwort-Rücksetzung und dauerhafte Wartung — auf einer
Website, deren Markenkern Diskretion ist, ist das eine Angriffsfläche mit
Pflegeaufwand. Vor der ersten fertigen Seite ist dieser Aufwand nicht
gerechtfertigt.

Entscheidend ist nicht das Werkzeug, sondern die Trennung: Solange
Inhalte in Dateien und nicht im Code stehen, lässt sich jede
Redaktionsoberfläche später ohne Umbau ergänzen. Genau das sichert
diese Entscheidung.

**Betrifft:** `CHARTA.md` (§9, §11 G-02), `content/`, gesamte
Code-Architektur

**Status:** entschieden

**Verbindliche Folge — Trennungsregel:**
Kein sichtbarer Text steht im Code. Alle Seiteninhalte liegen unter
`content/` als Markdown oder JSON. Der Code liest Inhalte, er enthält sie
nicht. Diese Regel gilt ab dem ersten Commit und ist die technische
Voraussetzung für Phase 2.

**Ergänzend festgelegt:**
- Supabase ist ausschließlich für Formularrückläufe zuständig,
  nicht für Seiteninhalte
- Die Wahl des CMS für Phase 2 wird bewusst offengelassen; sie wird
  erst getroffen, wenn Phase 2 beauftragt wird

**Offen:**
- G-01 Platzierung des Fragen-Bereichs
- G-03 Übermittlung von Textproben (Datenschutz)
- Phase 2 nicht beauftragt — vor Umsetzung neuer Ledger-Eintrag
- `CHARTA.md` auf v1.1 anheben (G-02 dort als entschieden führen)

---

## #004 — 2026-08-12 — Direkter Repo-Zugriff statt Sync-Ritual

**Was:** Das Repository bleibt bis zur Fertigstellung **öffentlich**.
Claude liest `CHARTA.md`, `LEDGER.md` und `docs/` künftig direkt aus dem
Branch `dev`. Das manuelle Drücken von „Sync" im Projekt-Kontext entfällt
als Pflichtschritt.

**Warum:** Der Sync ist ein manueller Schritt, der vergessen wird — dann
arbeitet Claude unbemerkt mit einem veralteten Stand. Direktes Lesen
liefert immer den tatsächlichen Stand von `dev`, ohne Zutun. Damit gilt
die Einzige-Quelle-Regel aus #002 nicht nur auf dem Papier, sondern
technisch.

**Betrifft:** Arbeitsablauf, `CHARTA.md` §9

**Status:** umgesetzt

**Verfahren (ersetzt Schritt 3 aus #002):**
1. Änderung wird von Claude als fertige Datei geliefert
2. Commit auf `dev`
3. — kein weiterer Schritt —

**Verbindliche Folge — Schlüsselregel:**
Weil das Repository öffentlich ist, dürfen **niemals** Zugangsdaten,
API-Schlüssel oder Supabase-Credentials im Repo liegen. Sie gehören
ausschließlich in die Umgebungsvariablen von Vercel. Diese Regel gilt
unabhängig davon, ob das Repo später auf privat gestellt wird.

**Rückfallebene:** Wird das Repo auf privat gestellt, entfällt der
direkte Lesezugriff ersatzlos. Dann gilt wieder das Verfahren aus #002
(Dokumente im Projekt-Kontext, Sync nach jedem Commit). Die Umstellung
auf privat erfordert einen eigenen Ledger-Eintrag.

**Bewertung des Risikos:** Öffentlich heißt, dass Charta, Ledger und
später der Quelltext lesbar sind. Kundendaten sind nie betroffen — diese
liegen in Supabase. In der Bauphase ist das vertretbar.

**Offen:**
- Vor dem Livegang entscheiden, ob das Repo auf privat gestellt wird
- G-01 Platzierung des Fragen-Bereichs
- G-03 Übermittlung von Textproben (Datenschutz)
- Briefing als `docs/00-briefing.md` ins Repo aufnehmen
