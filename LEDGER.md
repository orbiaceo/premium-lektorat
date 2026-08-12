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
- GitHub: Entwicklung auf `dev`, Produktion auf `main` (geschützt)
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
