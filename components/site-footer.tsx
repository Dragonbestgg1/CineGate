import Link from "next/link";
import { siteContact } from "@/lib/mock-data";

/** Global footer with contact information required across the CineGate site. */
export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-purple-100 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-extralight text-white">
            CineGate
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            Your local gateway to the biggest stories on the biggest screens.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-white">Explore</h2>
          <nav
            aria-label="Footer navigation"
            className="mt-3 grid gap-2 text-sm"
          >
            <Link href="/movies" className="w-fit hover:text-white">
              Films
            </Link>
            <Link href="/showtimes" className="w-fit hover:text-white">
              Showtimes
            </Link>
            <Link href="/tickets" className="w-fit hover:text-white">
              Ticket prices
            </Link>
            <Link href="/contact" className="w-fit hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="font-semibold text-white">Contact</h2>
          <address className="mt-3 space-y-1 text-sm not-italic text-slate-400">
            <p>{siteContact.openingHours}</p>
            <a
              href={`tel:${siteContact.phone.replaceAll(" ", "")}`}
              className="block hover:text-white"
            >
              {siteContact.phone}
            </a>
            <a
              href={`mailto:${siteContact.email}`}
              className="block hover:text-white"
            >
              {siteContact.email}
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}
