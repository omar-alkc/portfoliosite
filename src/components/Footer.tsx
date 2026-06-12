import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-faint">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p>
          built with <span className="text-accent">Next.js</span> · designed in the dark
        </p>
      </div>
    </footer>
  );
}
