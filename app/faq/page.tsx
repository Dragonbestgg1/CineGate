import { PageHeading } from "@/components/site-ui";

const questions = [
  ["When should I arrive?", "Please arrive at least 15 minutes before the scheduled start time so you can collect snacks and find your seat."],
  ["Can I change my seats?", "In this prototype, seat changes are local only. The final booking flow will explain the change and refund rules before Stripe payment."],
  ["Do you offer accessible screenings?", "Yes. Each cinema page lists wheelchair access and you can contact us for help planning your visit."],
  ["What languages are films shown in?", "Each showtime table lists the spoken language and available subtitles before you book."],
];

export default function FaqPage() {
  return <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6"><PageHeading eyebrow="Helpful answers" title="Frequently asked questions" description="Everything you need to know before booking a CineGate screening." /><div className="mt-12 space-y-4">{questions.map(([question, answer]) => <details key={question} className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm"><summary className="cursor-pointer font-semibold text-slate-950">{question}</summary><p className="mt-3 leading-7 text-slate-600">{answer}</p></details>)}</div></main>;
}
