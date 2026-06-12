import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-28 sm:py-36 text-center overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-accent/[0.05] blur-3xl pointer-events-none"
        aria-hidden
      />

      <Reveal>
        <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase">05 / contact</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-5">
          Have data? <span className="text-accent">Let&apos;s talk.</span>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mt-6">
          Whether it&apos;s a BI platform that needs building, a dataset that needs untangling,
          or an idea worth exploring — my inbox is open.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="bg-accent text-background font-display font-bold px-8 py-4 hover:bg-accent-dim transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.cvFile}
            download
            className="border border-line-soft px-8 py-4 font-display font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            Download CV ↓
          </a>
        </div>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-10 flex justify-center gap-8 font-mono text-xs text-muted">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub ↗
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            LinkedIn ↗
          </a>
          <span className="text-faint">{profile.phone}</span>
        </div>
      </Reveal>
    </section>
  );
}
