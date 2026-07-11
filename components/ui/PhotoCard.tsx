import Image from "next/image";

interface PhotoCardProps {
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  priority?: boolean;
}

export function PhotoCard({
  title,
  date,
  description,
  imageSrc,
  priority = false,
}: PhotoCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-sm shadow-ink/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-accent-soft">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{date}</p>
        <h3 className="mt-2 font-serif text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}
