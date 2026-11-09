"use client";

import { useMemo, useState } from "react";
import { TheaterSeatSelect } from "react-seat-select";
import type { Seat, TicketType } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

const maximumSeats = 8;

/** Seat selector that will later hand its cart to Stripe Checkout. */
export default function BookingPanel({
  seats,
  ticketTypes,
}: {
  seats: Seat[];
  ticketTypes: TicketType[];
}) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [ticketTypeId, setTicketTypeId] = useState(ticketTypes[0].id);
  const [confirmed, setConfirmed] = useState(false);
  const ticket =
    ticketTypes.find((item) => item.id === ticketTypeId) ?? ticketTypes[0];
  const total = ticket.priceCents * selectedSeats.length;
  const seatConfig = useMemo(
    () => [
      {
        title: "Standard seating",
        seats: seats.reduce<Record<string, Seat[]>>((rows, seat) => {
          (rows[seat.row] ??= []).push(seat);
          return rows;
        }, {}),
      },
    ],
    [seats],
  );
  const reservedSeats = seats
    .filter((seat) => seat.status === "reserved")
    .map((seat) => seat.id);

  function selectSeat(seat: { id: string }) {
    setSelectedSeats((current) =>
      current.includes(seat.id) ? current : [...current, seat.id],
    );
    setConfirmed(false);
  }

  function unselectSeat(seat: { id: string }) {
    setSelectedSeats((current) => current.filter((id) => id !== seat.id));
    setConfirmed(false);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      <section
        aria-label="Seat selection"
        className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm"
      >
        <div className="mx-auto max-w-2xl overflow-hidden">
          <TheaterSeatSelect
            config={seatConfig}
            reservedSeats={reservedSeats}
            onSelect={selectSeat}
            onUnselect={unselectSeat}
            maxSelectedSeats={maximumSeats}
            autoSeatExpansion={false}
            showSelectedSeatLabel
            showReservedSeatLabel
            screenConfig={{
              screenVariant: 3,
              width: 520,
              screenColor: "#0f172a",
              textColor: "#ffffff",
              screenText: "SCREEN",
            }}
            customStyles={[
              {
                rowGap: "12px",
                columnGap: "12px",
                headerStyles: {
                  color: "#334155",
                  fontSize: "16px",
                  marginBottom: "20px",
                },
                seatStyles: {
                  width: "44px",
                  height: "40px",
                  borderRadius: "10px",
                  fontWeight: 700,
                },
                availableStyles: {
                  backgroundColor: "#ede9fe",
                  color: "#4c1d95",
                },
                selectedStyles: {
                  backgroundColor: "#7e22ce",
                  color: "#ffffff",
                },
                reservedStyles: {
                  backgroundColor: "#e2e8f0",
                  color: "#64748b",
                },
              },
            ]}
            legendConfig={{
              availableSeatText: "Available",
              selectedSeatText: "Selected",
              reservedSeatText: "Reserved",
              bookedSeatText: "",
              disabledSeatText: "",
            }}
          />
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">
          Choose up to {maximumSeats} seats per booking.
        </p>
      </section>

      <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white">
        <h2 className="text-xl font-bold">Your booking</h2>
        <label
          htmlFor="ticket-type"
          className="mt-5 block text-sm text-slate-300"
        >
          Ticket type
        </label>
        <select
          id="ticket-type"
          value={ticketTypeId}
          onChange={(event) => setTicketTypeId(event.target.value)}
          className="mt-2 w-full cursor-pointer rounded-lg bg-white p-2 text-slate-900"
        >
          {ticketTypes.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} — {formatPrice(item.priceCents)}
            </option>
          ))}
        </select>
        <p className="mt-5 text-sm text-slate-300">
          Seats:{" "}
          {selectedSeats.length ? selectedSeats.join(", ") : "Choose seats"}
        </p>
        <p className="mt-2 text-2xl font-bold">{formatPrice(total)}</p>
        <button
          type="button"
          disabled={!selectedSeats.length}
          onClick={() => setConfirmed(true)}
          className="mt-5 w-full cursor-pointer rounded-lg bg-purple-500 px-4 py-3 font-semibold hover:bg-purple-400 disabled:cursor-not-allowed disabled:bg-slate-700"
        >
          Continue to payment
        </button>
        {confirmed && (
          <p className="mt-4 rounded-lg bg-emerald-500/15 p-3 text-sm text-emerald-200">
            Demo booking saved locally. Stripe Checkout will be connected here.
          </p>
        )}
      </aside>
    </div>
  );
}
