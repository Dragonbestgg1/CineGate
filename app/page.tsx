import Link from "next/link";
import { MovieCard, PageHeading } from "@/components/site-ui";
import { movies, reviews, screenings } from "@/lib/mock-data";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="font-heading text-xl font-extralight uppercase tracking-[0.18em] text-purple-300">Now showing</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Your next great story starts here.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Discover new films, compare showtimes, choose your seat, and make cinema night simple.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/showtimes" className="cursor-pointer rounded-lg bg-purple-500 px-5 py-3 font-semibold hover:bg-purple-400">Find a screening</Link>
              <Link href="/movies" className="cursor-pointer rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Browse films</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-purple-400/30 bg-gradient-to-br from-purple-700 to-fuchsia-500 p-8 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-100">This week</p>
            <p className="mt-5 text-5xl font-bold">{screenings.length}</p>
            <p className="mt-1 text-purple-100">screenings ready to book</p>
            <p className="mt-10 border-t border-white/20 pt-5 text-sm text-purple-100">Easy booking, local cinemas, and prices shown clearly before you pay.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <PageHeading eyebrow="On screen" title="Films worth leaving the sofa for" description="From family adventures to after-dark mysteries, find a story for every kind of cinema night." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>
      </section>
      <section className="bg-purple-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-950">What visitors say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{reviews.map((review) => <blockquote key={review.id} className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-purple-700">{"★".repeat(review.rating)}</p><p className="mt-4 leading-7 text-slate-700">“{review.comment}”</p><footer className="mt-4 text-sm font-semibold text-slate-950">{review.author}</footer></blockquote>)}</div>
        </div>
      </section>
    </main>
  );
}
