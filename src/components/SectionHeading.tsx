type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
};

export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase">
        {index} / {label}
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-3">
        {title}
      </h2>
      <div className="mt-5 h-px w-24 bg-accent" aria-hidden />
    </div>
  );
}
