import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeading } from "@/components/site-ui";
import { cinemas, movies, screenings } from "@/lib/mock-data";

export function generateStaticParams() {
  return cinemas.map((cinema) => ({ slug: cinema.slug }));
}

export default async function CinemaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cinema = cinemas.find((item) => item.slug === slug);
  if (!cinema) notFound();
  const cinemaScreenings = screenings.filter(
    (screening) => screening.cinemaId === cinema.id,
  );
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <PageHeading
        eyebrow={cinema.city}
        title={cinema.name}
        description={`${cinema.address} · ${cinema.phone} · ${cinema.email}`}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <section>
          <h2 className="text-2xl font-bold text-slate-950">Screenings</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-purple-100 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-purple-50 text-purple-900">
                <tr>
                  <th className="p-4">Film</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Format</th>
                </tr>
              </thead>
              <tbody>
                {cinemaScreenings.map((screening) => (
                  <tr key={screening.id} className="border-t border-slate-100">
                    <td className="p-4 font-semibold">
                      {
                        movies.find((movie) => movie.id === screening.movieId)
                          ?.title
                      }
                    </td>
                    <td className="p-4">
                      {new Date(screening.startsAt).toLocaleString("en-GB", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="p-4">
                      <Link
                        href={`/booking/${screening.id}`}
                        className="cursor-pointer text-purple-700 hover:underline"
                      >
                        {screening.format} — book
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <aside className="rounded-2xl bg-slate-950 p-7 text-white">
          <h2 className="text-xl font-bold">Facilities</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {cinema.facilities.map((facility) => (
              <li key={facility}>✓ {facility}</li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
