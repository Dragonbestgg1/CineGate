import FeedbackForm from "@/components/feedback-form";
import { PageHeading } from "@/components/site-ui";
import { cinemas, siteContact } from "@/lib/mock-data";

export default function ContactPage() {
  const mainCinema = cinemas[0];
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <PageHeading
        eyebrow="Get in touch"
        title="Contact CineGate"
        description="Questions about a booking, accessibility, or a screening? Our team is happy to help."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <section className="space-y-6">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="text-2xl font-bold">CineGate support</h2>
            <dl className="mt-5 space-y-3 text-slate-300">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-purple-300">
                  Phone
                </dt>
                <dd>{siteContact.phone}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-purple-300">
                  Email
                </dt>
                <dd>{siteContact.email}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-purple-300">
                  Hours
                </dt>
                <dd>{siteContact.openingHours}</dd>
              </div>
            </dl>
          </div>
          <iframe
            title={`Map of ${mainCinema.name}`}
            src={mainCinema.mapEmbedUrl}
            className="h-80 w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            Send a message
          </h2>
          <FeedbackForm />
        </section>
      </div>
    </main>
  );
}
