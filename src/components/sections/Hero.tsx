import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-14 h-screen flex items-center relative">
      <div className="mx-auto max-w-4xl px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-16 w-full">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            {profile.name}
          </h1>
          <p className="mt-3 text-base tracking-wide text-muted">
            {profile.title}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted max-w-md">
            {profile.description}
          </p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-border rounded-full px-5 py-1.5 text-xs tracking-wide text-muted hover:text-foreground hover:border-foreground transition-colors"
          >
            GitHub →
          </a>
        </div>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={256}
          height={256}
          priority
          className="w-48 md:w-64 h-auto opacity-90 flex-shrink-0"
        />
      </div>

      <a
        href="#resume"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
}
