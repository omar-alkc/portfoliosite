import { projects, otherProjects, profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <Reveal>
        <SectionHeading index="03" label="selected work" title="Things I've built" />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 120}>
            <article className="group relative border border-line-soft bg-surface/50 p-7 sm:p-8 h-full hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                  {project.category}
                </p>
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
              </div>

              <h3 className="font-display font-bold text-2xl mt-4 group-hover:text-accent transition-colors">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.name} ↗
                  </a>
                ) : (
                  project.name
                )}
              </h3>

              <p className="text-muted leading-relaxed mt-3">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="font-mono text-[0.7rem] text-faint bg-background border border-line-soft px-2.5 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-12 border border-line-soft p-7 sm:p-8">
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
            Also on the workbench
          </h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-10 gap-y-2.5">
            {otherProjects.map((p) => (
              <li key={p} className="text-muted text-sm leading-relaxed">
                <span className="text-accent mr-2">▸</span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 font-mono text-xs text-accent hover:underline underline-offset-4"
          >
            more on github ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
