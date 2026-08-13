"use client";

import { useEffect, useState } from "react";

export default function StickyNav({ marke, navigation }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const head = document.querySelector("header");
    const tick = () => {
      if (!head) return;
      setOn(window.scrollY > head.offsetTop + head.offsetHeight - 16);
    };
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick, { passive: true });
    window.addEventListener("hashchange", () => setTimeout(tick, 60));
    tick();
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  return (
    <div className={on ? "sticky on" : "sticky"}>
      <div className="inner">
        <p className="mini">
          {marke.name} <i>|</i> Lektorat
        </p>
        <nav>
          {navigation.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}
