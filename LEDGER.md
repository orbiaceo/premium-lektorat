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
- G-01, G-02, G-03 aus #001 weiterhin offen
