"use client";

import { useState } from "react";

/** Browser-only validated feedback form; submissions deliberately remain local. */
export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-5 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        if (event.currentTarget.checkValidity()) setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="feedback-name" className="mb-2 block text-sm font-semibold text-slate-900">Name</label>
        <input id="feedback-name" name="name" required minLength={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200" />
      </div>
      <div>
        <label htmlFor="feedback-email" className="mb-2 block text-sm font-semibold text-slate-900">Email</label>
        <input id="feedback-email" name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200" />
      </div>
      <div>
        <label htmlFor="feedback-message" className="mb-2 block text-sm font-semibold text-slate-900">Message</label>
        <textarea id="feedback-message" name="message" required minLength={10} rows={5} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200" />
      </div>
      <button type="submit" className="cursor-pointer rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-800">Send feedback</button>
      {submitted && <p className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">Thanks! This coursework demo validates the form locally and does not send your data.</p>}
    </form>
  );
}
