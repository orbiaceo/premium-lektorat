// Nimmt Anfragen entgegen und schickt sie per E-Mail.
// Empfaenger und Zugangsschluessel stehen ausschliesslich in
// Umgebungsvariablen (Charta §9), nie im Code.
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const fachgebiet = String(body.fachgebiet || "").trim();
    const nachricht = String(body.nachricht || "").trim();
    if (String(body.website || "").trim()) return Response.json({ ok: true }); // Roboterfalle

    if (!name || !email || !nachricht) {
      return Response.json({ ok: false, fehler: "unvollstaendig" }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || nachricht.length > 5000) {
      return Response.json({ ok: false, fehler: "ungueltig" }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    const an = process.env.ANFRAGE_EMPFAENGER;
    const von = process.env.ANFRAGE_ABSENDER || "Website <onboarding@resend.dev>";
    if (!key || !an) {
      console.error("RESEND_API_KEY oder ANFRAGE_EMPFAENGER fehlt");
      return Response.json({ ok: false, fehler: "konfiguration" }, { status: 500 });
    }

    const text = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Fachgebiet und Umfang: ${fachgebiet || "—"}`,
      "",
      "Nachricht:",
      nachricht,
    ].join("\n");

    const antwort = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: von,
        to: [an],
        reply_to: email,
        subject: `Anfrage über die Website — ${name}`,
        text,
      }),
    });

    if (!antwort.ok) {
      console.error("Resend:", await antwort.text());
      return Response.json({ ok: false, fehler: "versand" }, { status: 500 });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    return Response.json({ ok: false, fehler: "unbekannt" }, { status: 500 });
  }
}
