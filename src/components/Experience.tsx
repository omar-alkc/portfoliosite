import { experience, education, certifications } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-surface/30 border-y border-line-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="04" label="track record" title="Where I've worked" />
        </Reveal>

        <div className="relative space-y-12 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-line-soft">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={Math.min(i * 80, 240)}>
              <article className="relative pl-10">
                <span
                  className={`absolute left-0 top-2 w-[11px] h-[11px] rotate-45 ${
                    job.current ? "bg-accent" : "bg-faint"
                  }`}
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display font-bold text-xl sm:text-2xl">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-accent border border-accent/40 px-2 py-0.5">
                      current
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-muted mt-1.5 tracking-wide">
                  {job.company} · {job.location} · <span className="text-accent/80">{job.period}</span>
                </p>
                <p className="text-muted leading-relaxed mt-4 max-w-3xl">{job.summary}</p>
                <ul className="mt-4 space-y-2 max-w-3xl">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted leading-relaxed flex gap-3">
                      <span className="text-accent shrink-0 mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="border border-line-soft bg-background p-7 sm:p-8 h-full">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-faint">Education</h3>
              <ul className="mt-5 space-y-6">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-display font-bold text-lg">{e.degree}</p>
                    <p className="text-muted text-sm mt-1">
                      {e.school} · {e.place} · <span className="text-accent/80 font-mono text-xs">{e.year}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-line-soft bg-background p-7 sm:p-8 h-full">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-faint">Certifications</h3>
              <ul className="mt-5 grid gap-2">
                {certifications.map((c) => (
                  <li key={c} className="text-sm text-muted leading-relaxed flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
