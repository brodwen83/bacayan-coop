interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className ?? ""}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base">{subtitle}</p>
      )}
    </div>
  );
}
