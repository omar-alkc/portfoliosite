import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 w-full pt-28 pb-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <p className="rise font-mono text-xs sm:text-sm text-accent tracking-wider" style={{ animationDelay: "0.05s" }}>
            ~/{profile.location.toLowerCase().replace(", ", "/")} $ whoami
            <span className="blink ml-1">▍</span>
          </p>

          <h1
            className="rise font-display font-extrabold text-[2.7rem] sm:text-6xl lg:text-7xl leading-[1.05] sm:leading-[1.02] tracking-tight mt-6"
            style={{ animationDelay: "0.15s" }}
          >
            Turning raw data into{" "}
            <span className="text-accent">decisions.</span>
          </h1>

          <p
            className="rise mt-6 max-w-xl text-muted text-lg leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            I&apos;m <span className="text-foreground font-medium">{profile.name}</span> — {profile.title} based in{" "}
            {profile.location}. {profile.heroIntro}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.45s" }}>
            <a
              href="#projects"
              className="bg-accent text-background font-display font-bold px-7 py-3.5 hover:bg-accent-dim transition-colors"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="border border-line-soft px-7 py-3.5 font-display font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-5 font-mono text-xs text-muted sm:ml-2">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                GitHub ↗
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <dl className="rise mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line-soft border border-line-soft max-w-xl" style={{ animationDelay: "0.6s" }}>
            {profile.stats.map((s) => (
              <div key={s.label} className="bg-background px-4 py-4">
                <dt className="order-last font-mono text-[0.65rem] uppercase tracking-wider text-faint mt-1">{s.label}</dt>
                <dd className="font-display font-bold text-2xl text-accent">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative hidden lg:block" style={{ animationDelay: "0.35s" }}>
          <div className="absolute -inset-3 border border-accent/25 translate-x-5 translate-y-5" aria-hidden />
          <div className="relative">
            <Image
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              width={459}
              height={597}
              priority
              className="w-full h-auto grayscale-[20%] contrast-105"
              style={{ maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)" }}
            />
            <p className="absolute bottom-4 left-4 font-mono text-[0.65rem] text-accent/80 tracking-widest uppercase">
              {profile.name} · est. data 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
