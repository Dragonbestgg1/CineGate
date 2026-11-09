import { MovieCard, PageHeading } from "@/components/site-ui";
import { movies } from "@/lib/mock-data";

export default function MoviesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <PageHeading
        eyebrow="Film catalogue"
        title="Choose your next film"
        description="Browse all current and upcoming CineGate releases, then view showtimes and reserve your seats."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
