# CHARTA — CORNELIA | PREMIUM LEKTORAT

**Version:** 1.0
**Stand:** 2026-08-12
**Domain:** www.premium-lektorat.de

Dieses Dokument ist der verbindliche Rahmen des Projekts.
Es beantwortet **warum** und **was** — nicht **wie**.
Alles, was hier steht, gilt, bis es hier geändert wird.
Änderungen erfolgen ausschließlich als neue Version dieses Dokuments,
begleitet von einem Ledger-Eintrag. Niemals im Chat.

---

## 1. Zweck

Eine Website für ein Premium-Lektorat, die **nicht möglichst viele**,
sondern **die richtigen** Kunden anspricht: Menschen mit anspruchsvollen
Texten, die für persönliche editorische Expertise zu zahlen bereit sind.

Die Website ist kein Verkaufskanal, sondern ein **Vertrauensbeweis**.

---

## 2. Marke

**CORNELIA | PREMIUM LEKTORAT**

Verkauft wird nicht Fehlerkorrektur, sondern:
Verständnis · Präzision · Stil · Klarheit · Redaktion · persönliche Betreuung

**Kernkompetenz:** Komplexe wissenschaftliche Sachverhalte verstehen und
klar formulieren, ohne fachliche Tiefe zu verlieren. Stimme und Gedanken
der Autorin bzw. des Autors bleiben erhalten.

**Zentrale Botschaft:**
«Ein guter wissenschaftlicher Text ist mehr als ein fehlerfreier Text.»

**Leitidee:**
«Verstehen. Präzisieren. Veredeln.»

**Gesamteindruck:**
persönlich · kompetent · diskret · anspruchsvoll · hochwertig

---

## 3. Zielgruppen

Primär:
- Masterstudierende mit hohen Ansprüchen
- Doktorandinnen und Doktoranden
- Wissenschaftler, Professorinnen und Professoren, Akademiker
- Autorinnen und Autoren von Fach- und Sachbüchern
- Expertinnen, Experten und Führungskräfte

Sekundär:
- Angehörige, die eine hochwertige Betreuung für eine wichtige
  akademische Arbeit finanzieren

---

## 4. Ausschlusskriterien (harte Grenzen)

Die Website wirkt **ausdrücklich nicht** wie:
- ein Studentenlektorat
- eine große Textagentur
- ein Online-Massendienst

Daraus folgt verbindlich — diese Elemente sind untersagt:

- ❌ Preistabellen, Pakete, Staffelpreise, Rabatte, „ab X € pro Seite"
- ❌ Countdown, Rabattbanner, Pop-ups, Newsletter-Overlay
- ❌ aggressive Verkaufsrhetorik, Superlative, Ausrufezeichen-Sprache
- ❌ Stock-Fotos von lachenden Studierenden oder Handschlag-Motiven
- ❌ überladene Startseite, Slider, animierte Zahlen-Counter
- ❌ Trust-Badges, Sterne-Widgets, „X.000 zufriedene Kunden"
- ❌ schwebende Chat-Blase unten rechts (siehe §7)

Im Zweifel gilt: **Boutique, Kanzlei, Editorial Studio** — nicht Agentur.

---

## 5. Gestaltungsprinzipien

- Viel Weißraum. Zurückhaltung ist die Gestaltung.
- Klare, ruhige Typografie als tragendes Element.
- Dezente, gedeckte Farbwelt. Wenige Farben, hoher Kontrast im Text.
- Keine Dekoration ohne Funktion.
- Mobile ist der Hauptfall, nicht die Anpassung.

Verbindliche Werte (Farben, Schriften, Abstände) stehen ausschließlich in
`docs/design-tokens.md`. Keine Farb- oder Schriftwerte im Code hartkodiert.

---

## 6. Seitenstruktur

| Seite | Aufgabe |
|---|---|
| **Home** | Positionierung, zentrale Botschaft, Weg zur Anfrage |
| **Leistungen** | Lektorat, Redaktion; Textarten: Masterarbeiten, Dissertationen, Publikationen, Fachartikel, Fach- und Sachbücher, Monografien |
| **Für wen** | Zielgruppen und ihre jeweiligen Anliegen |
| **Arbeitsweise** | Zusammenarbeit, Textanalyse, Bearbeitungsumfang, Kommunikation, Qualitätssicherung |
| **Preise** | Prinzip des individuellen Angebots — ohne Preisliste |
| **Über Cornelia** | Person, Erfahrung, Qualifikation, Verstehens-Kompetenz |
| **Kontakt** | Anfrage und persönliches Erstgespräch |
| **Impressum** | rechtlich erforderlich |
| **Datenschutz** | rechtlich erforderlich |

---

## 7. Der geführte Fragen-Bereich („Bot")

**Was er ist:** ein deterministischer, geführter Entscheidungsbaum.
Themenauswahl per Klick, Unterthemen, Antwort. Eine FAQ, durch die man
nicht scrollt, sondern navigiert.

**Was er nicht ist:** kein KI-Chat, kein Sprachmodell, keine API,
keine generierten Antworten. Alle Antworten sind vorformuliert und
stammen von Cornelia.

Das ist bewusst so: keine Halluzinationen, keine Wartezeit, keine Kosten,
volle Kontrolle über jedes Wort. Diese Entscheidung ist nicht revidierbar,
ohne diese Charta zu ändern.

**Auftreten:** ruhiger, eingebetteter Bereich im Seitenfluss.
Ausdrücklich **keine** schwebende Chat-Blase — sie ist das Erkennungs-
zeichen genau jener Agentur-Optik, die §4 ausschließt.

**Datenhaltung:** Themenbaum und Antworten liegen als Daten in
`content/faq.json`, nicht im Code. Neue Themen = Daten ergänzen.

---

## 8. Arbeitsteilung bei Inhalten

**Alle sichtbaren Texte schreibt Cornelia selbst.**

Wir bauen Struktur, Gerüst und Technik. Wir liefern niemals fertig
klingende Marketingtexte. Platzhalter werden immer eindeutig als solche
markiert (`[PLATZHALTER: …]`) und sind nie so formuliert, dass sie
versehentlich live gehen könnten.

Begründung: Die Persönlichkeit und die eigene Sprache Cornelias sind das
Produkt. Ein von uns geschriebener Text würde genau das ersetzen, was
verkauft wird.

---

## 9. Technische Leitplanken

- Vollständig responsiv, mobile-first
- Sehr schnelle Ladezeit
- Semantisch saubere Überschriftenhierarchie, SEO-tauglich
- Barrierearm: Kontraste, Fokuszustände, Tastaturbedienbarkeit
- Datenschutz und Impressum professionell integriert
- Erweiterbar, ohne Umbau

**Umgebung:**
- Code: GitHub — Entwicklung auf `dev`, Produktion auf `main`
- Deployment: Vercel — `dev` → Preview, `main` → Produktion
- Domain: Porkbun
- Datenbank / Formularrückläufe: Supabase
- Domain zeigt erst auf `main`, wenn die Seite vollständig ist

---

## 10. Grundprinzip

Nicht Reichweite. **Passung.**

Jede Entscheidung im Projekt wird an einer Frage gemessen:
*Erhöht das die Wahrscheinlichkeit, dass genau die richtige Person
Vertrauen fasst und anfragt?*

---

## 11. Offene Grundsatzentscheidungen

Diese drei Punkte sind noch nicht entschieden. Sie stehen bewusst hier
und nicht im Code, weil sie das Fundament betreffen. Bis zur Entscheidung
gilt jeweils die Empfehlung als Arbeitsannahme — **markiert, nicht gesetzt.**

### G-01 — Platzierung des Fragen-Bereichs
Eigene Seite, Block auf der Startseite oder Bereich innerhalb
„Arbeitsweise"?
*Empfehlung:* eigener, ruhiger Bereich auf einer Seite „Fragen".
**Status: offen**

### G-02 — Pflegbarkeit durch Cornelia
Das Briefing fordert, dass Cornelia die Seite selbst aktualisieren kann.
Das verträgt sich nur bedingt mit Änderungen über GitHub.
*Optionen:* (a) Inhalte als Markdown/JSON im Repo, Bearbeitung über den
GitHub-Web-Editor; (b) leichtgewichtiges CMS; (c) Inhalte in Supabase mit
kleinem geschütztem Redaktionsbereich.
*Empfehlung:* (a) für den Start, (c) später bei Bedarf.
**Status: offen**

### G-03 — Übermittlung von Textproben
Direkter Dateiupload fremder Manuskripte ist der datenschutzrechtlich
heikelste Teil des Projekts — bei „Diskretion" als Markenkern muss das
einwandfrei sein.
*Empfehlung:* Phase 1 ohne Upload. Anfrageformular ohne Anhang,
Textprobe erst nach Erstkontakt auf gesichertem Weg.
**Status: offen**

---

## 12. Änderungsregeln

1. Diese Charta ändert sich nur durch eine neue Version dieses Dokuments.
2. Jede Änderung erhält einen Ledger-Eintrag mit Begründung.
3. Farb- und Typografieänderungen erfolgen ausschließlich in
   `docs/design-tokens.md`.
4. Was hier nicht steht, wird nicht angenommen, sondern erfragt.
5. Im Chat getroffene Absprachen sind unverbindlich, bis sie in Charta,
   Ledger oder Docs stehen.
