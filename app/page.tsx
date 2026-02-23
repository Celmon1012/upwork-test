import { RoomCard } from "./components/RoomCard";

const TABS = [
  "Overview",
  "Photos",
  "Rooms",
  "Amenities",
  "About",
  "Reviews",
  "Map",
] as const;

const ROOMS = [
  {
    name: "Double Deluxe",
    sleeps: 2,
    sqft: "—",
    perNight: 252,
    total: 755,
  },
  {
    name: "Double (adapted)",
    sleeps: 2,
    sqft: "",
    perNight: 257,
    total: 770,
  },
  {
    name: "Deluxe Room, Accessible, 1 Queen Bed, NonSmoking",
    sleeps: 2,
    sqft: "",
    perNight: 263,
    total: 788,
  },
  {
    name: "Deluxe Room, 1 Queen Bed, NonSmoking",
    sleeps: 2,
    sqft: "",
    perNight: 267,
    total: 800,
  },
  {
    name: "Double room Easy Access",
    sleeps: 2,
    sqft: "",
    perNight: 252,
    total: 755,
  },
  {
    name: "Deluxe room",
    sleeps: 2,
    sqft: "",
    perNight: 257,
    total: 770,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Tab navigation */}
      <nav
        className="border-b border-gray-200"
        aria-label="Hotel detail sections"
      >
        <ul className="flex flex-wrap gap-0">
          {TABS.map((tab) => (
            <li key={tab}>
              <a
                href="#"
                className={`block border-b px-5 py-4 text-sm font-medium transition-colors sm:px-6 ${
                  tab === "Photos"
                    ? "-mb-px border-b-4 border-blue-600 text-blue-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900"
                }`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content - background full width, padding inside */}
      <main className="bg-gray-50 mt-10 pt-[80px] pb-12">
        <div className="mx-auto px-[30px]">
        {/* Room Options header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Room Options
          </h1>
          <div className="flex items-center gap-1.5 text-xs font-normal text-[#696969]">
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(48, 140, 92)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span>Best Price Guaranteed</span>
          </div>
        </div>

        {/* Room cards grid */}
        <section
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Available room types"
        >
          {ROOMS.map((room) => (
            <RoomCard
              key={room.name}
              name={room.name}
              sleeps={room.sleeps}
              sqft={room.sqft}
              perNight={room.perNight}
              total={room.total}
            />
          ))}
        </section>

        {/* View more */}
        <div className="mt-8 flex justify-center">
          <a
            href="#more-rooms"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none rounded"
          >
            View More Room Options
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
        </div>
      </main>
    </div>
  );
}
