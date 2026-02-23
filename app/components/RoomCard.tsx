"use client";

export interface RoomCardProps {
  name: string;
  sleeps: number;
  sqft: string;
  perNight: number;
  total: number;
  nonRefundable?: boolean;
}

export function RoomCard({
  name,
  sleeps,
  sqft,
  perNight,
  total,
  nonRefundable = true,
}: RoomCardProps) {
  return (
    <article
      className="min-w-0 flex flex-col rounded-lg border border-gray-200 bg-white px-5 py-4 pr-6 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
      data-room-card
    >
      <h3 className="text-sm font-semibold leading-snug text-gray-900">
        {name}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Sleeps {sleeps} • {sqft || "—"} sq ft
      </p>
      <a
        href="#room-details"
        className="mt-1.5 inline-block text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
      >
        Room Details and Photos
      </a>
      <hr className="my-3 mt-5 border-gray-200" />
      <p className="mt-3 text-sm font-medium text-gray-900">
        {nonRefundable ? "Non-Refundable" : "Free cancellation"}
      </p>
      <p className="mt-3 text-sm text-gray-600">
        Per night{" "}
        <span className="font-semibold text-gray-900">${perNight}</span>
      </p>
      <div className="mt-1 mb-3 flex flex-wrap items-end justify-between gap-2">
        <p className="text-lg font-bold text-gray-900">
          ${total} <span className="text-base font-normal text-gray-600">total</span>
        </p>
        <button
          type="button"
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:bg-green-800 disabled:opacity-50"
        >
          Book
        </button>
      </div>
    </article>
  );
}
