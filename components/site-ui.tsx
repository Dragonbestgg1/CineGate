import Link from "next/link";
import type { Movie } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

const posterThemes: Record<string, string> = {
  "neon-horizon": "from-fuchsia-700 via-purple-800 to-slate-950",
  "midnight-signal": "from-cyan-800 via-slate-900 to-black",
  "small-giants": "from-amber-400 via-orange-500 to-rose-600",
  "last-frame": "from-stone-700 via-zinc-900 to-black",
};

/** Reusable movie-card presentation used on the home and catalogue pages. */
export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex aspect-[3/4] items-end bg-gradient-to-br p-5 text-white ${posterThemes[movie.slug]}`}
        role="img"
        aria-label={`${movie.title} poster artwork placeholder`}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {movie.genres[0]}
          </p>
          <h3 className="text-2xl font-bold leading-tight">{movie.title}</h3>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{movie.durationMinutes} min</span>
          <span>★ {movie.rating.toFixed(1)}</span>
        </div>
        <Link
          href={`/movies/${movie.slug}`}
          className="inline-flex cursor-pointer items-center rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
        >
          View film
        </Link>
      </div>
    </article>
  );
}

/** Shared page heading for clear, consistent content sections. */
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto max-w-3xl space-y-3 text-center">
      <p className="font-heading text-xl font-extralight uppercase tracking-[0.15em] text-purple-700">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </header>
  );
}

export function Price({ cents }: { cents: number }) {
  return <span>{formatPrice(cents)}</span>;
}
