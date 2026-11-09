import FeedbackForm from "@/components/feedback-form";
import { PageHeading } from "@/components/site-ui";
import { movies, reviews } from "@/lib/mock-data";

export default function ReviewsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <PageHeading
        eyebrow="Visitor feedback"
        title="Reviews"
        description="Read what local cinema-goers enjoyed, or leave feedback for the CineGate team."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <section className="space-y-4">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-bold text-slate-950">{review.author}</h2>
                <span className="text-sm text-purple-700">
                  {"★".repeat(review.rating)}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                {movies.find((movie) => movie.id === review.movieId)?.title} ·{" "}
                {new Date(review.date).toLocaleDateString("en-GB")}
              </p>
              <p className="mt-4 leading-7 text-slate-700">{review.comment}</p>
            </article>
          ))}
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            Leave feedback
          </h2>
          <FeedbackForm />
        </section>
      </div>
    </main>
  );
}
