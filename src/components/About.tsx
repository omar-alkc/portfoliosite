import Image from "next/image";
import { profile, languages } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <Reveal>
        <SectionHeading index="01" label="about" title="Engineer by training, data scientist by obsession" />
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_0.55fr] gap-12 items-start">
        <div className="space-y-5 text-muted text-lg leading-relaxed">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <p>{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="pt-4 flex flex-wrap gap-3">
              {languages.map((l) => (
                <span key={l.name} className="font-mono text-xs border border-line-soft px-3 py-1.5 text-faint">
                  <span className="text-foreground">{l.name}</span> — {l.level}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:hidden xl:block">
          <div className="relative max-w-xs">
            <div className="absolute -inset-2 border border-accent/25 -translate-x-3 translate-y-3" aria-hidden />
            <Image
              src={profile.portraitBw}
              alt={`Black and white portrait of ${profile.name}`}
              width={459}
              height={597}
              className="relative w-full h-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
