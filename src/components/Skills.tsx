import { skillGroups } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="02" label="toolkit" title="What I work with" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line-soft border border-line-soft">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 100} className="h-full">
              <div className="group bg-background h-full p-7 hover:bg-surface transition-colors">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display font-bold text-lg">{group.title}</h3>
                  <span className="font-mono text-[0.65rem] text-faint uppercase tracking-wider group-hover:text-accent transition-colors">
                    {group.note}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs text-muted border border-line-soft px-2.5 py-1 group-hover:border-accent/30 transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
