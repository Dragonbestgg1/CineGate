import { notFound } from "next/navigation";
import BookingPanel from "@/components/booking-panel";
import { PageHeading } from "@/components/site-ui";
import {
  cinemas,
  movies,
  screenings,
  seats,
  ticketTypes,
} from "@/lib/mock-data";

export function generateStaticParams() {
  return screenings.map((screening) => ({ screeningId: screening.id }));
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ screeningId: string }>;
}) {
  const { screeningId } = await params;
  const screening = screenings.find((item) => item.id === screeningId);
  if (!screening) notFound();
  const movie = movies.find((item) => item.id === screening.movieId);
  const cinema = cinemas.find((item) => item.id === screening.cinemaId);
  if (!movie || !cinema) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <PageHeading
        eyebrow="Choose your seats"
        title={movie.title}
        description={`${cinema.name} · ${new Date(screening.startsAt).toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" })} · ${screening.format}`}
      />
      <section className="mt-12">
        <BookingPanel seats={seats} ticketTypes={ticketTypes} />
      </section>
    </main>
  );
}
