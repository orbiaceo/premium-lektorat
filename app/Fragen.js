"use client";

import { useState } from "react";

export default function Fragen({ begruessung, hinweis, themen }) {
  const [offen, setOffen] = useState(null);
  const thema = themen.find((t) => t.id === offen);

  return (
    <div className="ask-inner">
      {!thema && (
        <>
          <p className="greet">{begruessung}</p>
          <div className="topics">
            {themen.map((t) => (
              <button
                key={t.id}
                className="topic"
                type="button"
                onClick={() => setOffen(t.id)}
              >
                {t.titel}
                <small>{t.unterzeile}</small>
              </button>
            ))}
          </div>
          <p className="hint">{hinweis}</p>
        </>
      )}

      {thema && (
        <>
          <p className="greet">{thema.titel}</p>
          <div className="answer">
            {thema.unterthemen.map((u) => (
              <div key={u.id}>
                <h4>{u.frage}</h4>
                <p>{u.antwort}</p>
              </div>
            ))}
          </div>
          <button className="back" type="button" onClick={() => setOffen(null)}>
            Zurück zur Themenauswahl
          </button>
        </>
      )}
    </div>
  );
}
