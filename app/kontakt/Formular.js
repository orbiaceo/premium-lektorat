"use client";

import { useState } from "react";

export default function Formular({ texte }) {
  const [status, setStatus] = useState("bereit");

  async function senden(e) {
    e.preventDefault();
    setStatus("sendet");
    const f = new FormData(e.currentTarget);
    const daten = Object.fromEntries(f.entries());
    try {
      const r = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(daten),
      });
      setStatus(r.ok ? "fertig" : "fehler");
    } catch {
      setStatus("fehler");
    }
  }

  if (status === "fertig") {
    return <p className="lead">{texte.danke}</p>;
  }

  return (
    <form onSubmit={senden} className="formular">
      <label>
        Name
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        E-Mail
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Fachgebiet und Umfang
        <input name="fachgebiet" type="text" />
      </label>
      <label>
        Ihre Nachricht
        <textarea name="nachricht" rows={6} required maxLength={5000} />
      </label>

      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />

      <button className="button" type="submit" disabled={status === "sendet"}>
        {status === "sendet" ? "Wird gesendet …" : texte.button}
      </button>

      {status === "fehler" && <p className="fehler">{texte.fehler}</p>}
      <p className="hint">{texte.hinweis}</p>
    </form>
  );
}
