"use client";

import { useState } from "react";

const navItems = [
  { label: "Resume", href: "#resume" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-4xl px-6 h-12 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-bold tracking-tight hover:opacity-60 transition-opacity"
        >
          Usuginu
        </a>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-4 flex flex-col gap-1">
            <span
              className={`block h-px bg-foreground transition-transform origin-center ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`}
            />
            <span
              className={`block h-px bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-foreground transition-transform origin-center ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
            />
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-b border-border bg-white/95 backdrop-blur-md">
          <ul className="flex flex-col items-center py-4 gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs text-muted hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
