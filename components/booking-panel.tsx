"use client";

import { useState } from "react";
import type { Seat, TicketType } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

/** Local seat selector that will later hand its cart to Stripe Checkout. */
export default function BookingPanel({ seats, ticketTypes }: { seats: Seat[]; ticketTypes: TicketType[] }) {
  const [selectedSeats, setSelectedSeats] = useState(seats.filter((seat) => seat.status === "selected").map((seat) => seat.id));
  const [ticketTypeId, setTicketTypeId] = useState(ticketTypes[0].id);
  const [confirmed, setConfirmed] = useState(false);
  const ticket = ticketTypes.find((item) => item.id === ticketTypeId) ?? ticketTypes[0];
  const total = ticket.priceCents * selectedSeats.length;
  const seatsByRow = ["A", "B", "C"].map((row) => seats.filter((seat) => seat.row === row));

  function toggleSeat(seat: Seat) {
    if (seat.status === "reserved") return;
    setSelectedSeats((current) => current.includes(seat.id) ? current.filter((id) => id !== seat.id) : [...current, seat.id]);
    setConfirmed(false);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      <section aria-label="Seat selection" className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
        <div className="mx-auto mb-8 max-w-lg rounded-b-full bg-slate-900 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white">Screen</div>
        <div className="mx-auto grid max-w-sm gap-3">
          {seatsByRow.map((row) => <div key={row?.[0]?.row} className="grid grid-cols-4 gap-3">
            {row?.map((seat) => {
              const selected = selectedSeats.includes(seat.id);
              return <button key={seat.id} type="button" disabled={seat.status === "reserved"} onClick={() => toggleSeat(seat)} className={`cursor-pointer rounded-lg p-3 text-sm font-semibold disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 ${selected ? "bg-purple-700 text-white" : "bg-purple-100 text-purple-900 hover:bg-purple-200"}`}>{seat.id}</button>;
            })}
          </div>)}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">Purple: selected · Pale: available · Grey: reserved</p>
      </section>
      <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white">
        <h2 className="text-xl font-bold">Your booking</h2>
        <label htmlFor="ticket-type" className="mt-5 block text-sm text-slate-300">Ticket type</label>
        <select id="ticket-type" value={ticketTypeId} onChange={(event) => setTicketTypeId(event.target.value)} className="mt-2 w-full cursor-pointer rounded-lg bg-white p-2 text-slate-900">
          {ticketTypes.map((item) => <option key={item.id} value={item.id}>{item.name} — {formatPrice(item.priceCents)}</option>)}
        </select>
        <p className="mt-5 text-sm text-slate-300">Seats: {selectedSeats.length ? selectedSeats.join(", ") : "Choose seats"}</p>
        <p className="mt-2 text-2xl font-bold">{formatPrice(total)}</p>
        <button type="button" disabled={!selectedSeats.length} onClick={() => setConfirmed(true)} className="mt-5 w-full cursor-pointer rounded-lg bg-purple-500 px-4 py-3 font-semibold hover:bg-purple-400 disabled:cursor-not-allowed disabled:bg-slate-700">Continue to payment</button>
        {confirmed && <p className="mt-4 rounded-lg bg-emerald-500/15 p-3 text-sm text-emerald-200">Demo booking saved locally. Stripe Checkout will be connected here.</p>}
      </aside>
    </div>
  );
}
