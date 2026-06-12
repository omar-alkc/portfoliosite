import { skillGroups } from "@/data/profile";

export default function Ticker() {
  const items = skillGroups.flatMap((g) => g.items.slice(0, 4));
  const row = [...items, ...items];

  return (
    <div className="border-y border-line-soft py-4 overflow-hidden bg-surface/40" aria-hidden>
      <div className="ticker-track flex w-max gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm text-faint whitespace-nowrap">
            {item}
            <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
