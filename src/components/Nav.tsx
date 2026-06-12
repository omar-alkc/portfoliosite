"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-line-soft" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          omar<span className="text-accent">.</span>alqaysi
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-muted">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">
                <span className="text-accent/60 mr-1">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Omar-Alqaysi-CV.docx"
              download
              className="border border-accent/40 text-accent px-4 py-2 hover:bg-accent hover:text-background transition-colors"
            >
              CV ↓
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-muted hover:text-accent font-mono text-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-background/95 backdrop-blur-md border-b border-line-soft px-6 pb-6 pt-2 space-y-4 font-mono text-sm">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block text-muted hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="text-accent/60 mr-2">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/Omar-Alqaysi-CV.docx" download className="inline-block border border-accent/40 text-accent px-4 py-2">
              Download CV ↓
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
