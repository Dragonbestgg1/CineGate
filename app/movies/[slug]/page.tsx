import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock3,
  Film,
  Languages,
  MapPin,
  Play,
  Star,
  Users,
} from "lucide-react";
import { PageHeading } from "@/components/site-ui";
import { cinemas, movies, screenings } from "@/lib/mock-data";

export function generateStaticParams() {
  return movies.map((movie) => ({ slug: movie.slug }));
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const movie = movies.find((item) => item.slug === slug);
  if (!movie) notFound();

  const movieScreenings = screenings.filter(
    (screening) => screening.movieId === movie.id,
  );
  const releaseDate = new Date(
    `${movie.releaseDate}T12:00:00`,
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formats = [
    ...new Set(movieScreenings.map((screening) => screening.format)),
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <PageHeading
        eyebrow={movie.genres.join(" · ")}
        title={movie.title}
        description={movie.synopsis}
      />

      <section className="mt-12 overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-h-80 flex-col justify-between bg-gradient-to-br from-purple-700 via-fuchsia-700 to-slate-950 p-8 sm:p-10">
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold"
                >
                  {genre}
                </span>
              ))}
            </div>
            <div>
              <p className="font-heading text-2xl font-extralight uppercase tracking-[0.2em] text-purple-100">
                {movie.ageRating}
              </p>
              <p className="mt-3 text-4xl font-bold leading-tight">
                {movie.title}
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
              Film details
            </p>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <MovieFact
                icon={<CalendarDays />}
                label="Release date"
                value={releaseDate}
              />
              <MovieFact
                icon={<Clock3 />}
                label="Running time"
                value={`${movie.durationMinutes} minutes`}
              />
              <MovieFact
                icon={<Star className="text-amber-300" />}
                label="Audience rating"
                value={`${movie.rating.toFixed(1)} / 10`}
              />
              <MovieFact
                icon={<Film />}
                label="Presentation"
                value={formats.join(" · ") || "Coming soon"}
              />
            </dl>
            <a
              href={movie.trailerUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-purple-500 px-5 py-3 font-semibold transition hover:bg-purple-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              <Play className="size-4 fill-current" />
              Watch trailer
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
              Now booking
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Choose a screening
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {movieScreenings.length}{" "}
            {movieScreenings.length === 1 ? "showtime" : "showtimes"} available
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {movieScreenings.map((screening) => {
            const cinema = cinemas.find(
              (item) => item.id === screening.cinemaId,
            );

            return (
              <Link
                key={screening.id}
                href={`/booking/${screening.id}`}
                className="group cursor-pointer rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-slate-950">
                      {new Date(screening.startsAt).toLocaleString("en-GB", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="size-4 text-purple-600" />
                      {cinema?.name ?? "CineGate"}
                    </p>
                  </div>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">
                    {screening.format}
                  </span>
                </div>
                <div className="mt-5 grid gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600 sm:grid-cols-3">
                  <span className="flex items-center gap-2">
                    <Film className="size-4" />
                    {screening.auditorium}
                  </span>
                  <span className="flex items-center gap-2">
                    <Languages className="size-4" />
                    {screening.language}
                    {screening.subtitles ? `, ${screening.subtitles} subs` : ""}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="size-4" />
                    {screening.availableSeats} seats left
                  </span>
                </div>
              </Link>
            );
          })}
          {!movieScreenings.length && (
            <p className="rounded-2xl bg-purple-50 p-6 text-slate-700 md:col-span-2">
              No screenings are scheduled yet. Please check back soon.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

function MovieFact({
  icon,
  label,
  value,
}: {
  icon: React.ReactElement<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-purple-300 [&>svg]:size-5">{icon}</span>
      <div>
        <dt className="text-xs uppercase tracking-wide text-slate-400">
          {label}
        </dt>
        <dd className="mt-1 font-semibold">{value}</dd>
      </div>
    </div>
  );
}
