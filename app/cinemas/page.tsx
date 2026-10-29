import Link from "next/link";
import { PageHeading } from "@/components/site-ui";
import { cinemas } from "@/lib/mock-data";

export default function CinemasPage() {
  return <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6"><PageHeading eyebrow="Our locations" title="Find your CineGate" description="Choose a local cinema to see its facilities, contact information, and available screenings." /><div className="mt-12 grid gap-6 md:grid-cols-2">{cinemas.map((cinema) => <article key={cinema.id} className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm"><p className="font-heading text-lg font-extralight text-purple-700">{cinema.city}</p><h2 className="mt-2 text-2xl font-bold text-slate-950">{cinema.name}</h2><p className="mt-3 text-slate-600">{cinema.address}</p><ul className="mt-5 flex flex-wrap gap-2">{cinema.facilities.map((facility) => <li key={facility} className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-800">{facility}</li>)}</ul><Link href={`/cinemas/${cinema.slug}`} className="mt-6 inline-flex cursor-pointer rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800">View cinema</Link></article>)}</div></main>;
}
