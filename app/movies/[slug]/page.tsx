import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeading } from "@/components/site-ui";
import { movies, screenings } from "@/lib/mock-data";

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
  const movieScreenings = screenings.filter((screening) => screening.movieId === movie.id);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <PageHeading eyebrow={movie.genres.join(" · ")} title={movie.title} description={movie.synopsis} />
      <section className="mt-12 grid gap-8 rounded-3xl bg-slate-950 p-8 text-white md:grid-cols-3">
        <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 p-6 md:col-span-1"><p className="font-heading text-xl font-extralight uppercase tracking-[0.2em]">{movie.ageRating}</p><p className="mt-16 text-3xl font-bold">{movie.durationMinutes} min</p><p className="mt-1 text-slate-200">Audience rating ★ {movie.rating}</p></div>
        <div className="md:col-span-2"><h2 className="text-2xl font-bold">Book a screening</h2><p className="mt-2 text-slate-300">Available showtimes for this film:</p><div className="mt-5 grid gap-3">{movieScreenings.map((screening) => <Link key={screening.id} href={`/booking/${screening.id}`} className="cursor-pointer rounded-xl border border-white/15 p-4 transition hover:bg-white/10"><span className="font-semibold">{new Date(screening.startsAt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}</span><span className="ml-3 text-sm text-slate-300">{screening.format} · {screening.auditorium} · {screening.availableSeats} seats left</span></Link>)}</div></div>
      </section>
    </main>
  );
}
