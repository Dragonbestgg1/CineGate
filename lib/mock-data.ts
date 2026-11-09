import type {
  Cinema,
  Movie,
  Review,
  Screening,
  Seat,
  TicketType,
} from "./types";

// Movie catalogue content for the home page, catalogue, and movie detail pages.
export const movies = [
  {
    id: "movie-neon-horizon",
    slug: "neon-horizon",
    title: "Neon Horizon",
    synopsis:
      "A courier discovers that the final delivery of her shift can change the fate of a rain-soaked future city.",
    poster: "/images/posters/neon-horizon.jpg",
    backdrop: "/images/backdrops/neon-horizon.jpg",
    genres: ["Science fiction", "Thriller"],
    ageRating: "12+",
    durationMinutes: 118,
    releaseDate: "2026-11-06",
    rating: 8.4,
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: true,
  },
  {
    id: "movie-midnight-signal",
    slug: "midnight-signal",
    title: "Midnight Signal",
    synopsis:
      "When every radio in town begins broadcasting the same voice, three friends follow the signal beyond the city limits.",
    poster: "/images/posters/midnight-signal.jpg",
    backdrop: "/images/backdrops/midnight-signal.jpg",
    genres: ["Mystery", "Drama"],
    ageRating: "12+",
    durationMinutes: 106,
    releaseDate: "2026-10-30",
    rating: 7.9,
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featured: true,
  },
  {
    id: "movie-small-giants",
    slug: "small-giants",
    title: "Small Giants",
    synopsis:
      "A young inventor and her tiny robot build a flying machine for the neighbourhood science fair.",
    poster: "/images/posters/small-giants.jpg",
    backdrop: "/images/backdrops/small-giants.jpg",
    genres: ["Animation", "Family"],
    ageRating: "U",
    durationMinutes: 92,
    releaseDate: "2026-11-13",
    rating: 8.1,
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "movie-last-frame",
    slug: "last-frame",
    title: "The Last Frame",
    synopsis:
      "An archive restorer finds one missing frame in a silent film—and a mystery that was never meant to be projected.",
    poster: "/images/posters/last-frame.jpg",
    backdrop: "/images/backdrops/last-frame.jpg",
    genres: ["Crime", "Mystery"],
    ageRating: "16+",
    durationMinutes: 124,
    releaseDate: "2026-11-20",
    rating: 8.7,
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
] satisfies Movie[];

// Cinema locations supply the contacts page and the nested cinema/screenings routes.
export const cinemas = [
  {
    id: "cinema-riga-centre",
    slug: "riga-centre",
    name: "CineGate Riga Centre",
    address: "Brīvības iela 45",
    city: "Riga, Latvia",
    phone: "+371 20 123 456",
    email: "riga@cinegate.lv",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Brivibas%20iela%2045%2C%20Riga&output=embed",
    facilities: [
      "IMAX screen",
      "Wheelchair access",
      "Snack bar",
      "Bike parking",
    ],
  },
  {
    id: "cinema-jurmala",
    slug: "jurmala",
    name: "CineGate Jūrmala",
    address: "Jomas iela 36",
    city: "Jūrmala, Latvia",
    phone: "+371 20 654 321",
    email: "jurmala@cinegate.lv",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Jomas%20iela%2036%2C%20Jurmala&output=embed",
    facilities: ["Family room", "Wheelchair access", "Snack bar"],
  },
] satisfies Cinema[];

// ISO timestamps make it easy to group screenings by day in timetable tables.
export const screenings = [
  {
    id: "screening-001",
    movieId: "movie-neon-horizon",
    cinemaId: "cinema-riga-centre",
    auditorium: "Hall 1",
    startsAt: "2026-11-06T18:30:00+02:00",
    format: "IMAX",
    language: "English",
    subtitles: "Latvian",
    availableSeats: 42,
  },
  {
    id: "screening-002",
    movieId: "movie-neon-horizon",
    cinemaId: "cinema-riga-centre",
    auditorium: "Hall 3",
    startsAt: "2026-11-06T21:15:00+02:00",
    format: "2D",
    language: "English",
    subtitles: "Latvian",
    availableSeats: 18,
  },
  {
    id: "screening-003",
    movieId: "movie-midnight-signal",
    cinemaId: "cinema-riga-centre",
    auditorium: "Hall 2",
    startsAt: "2026-11-06T19:00:00+02:00",
    format: "2D",
    language: "English",
    subtitles: "Latvian",
    availableSeats: 66,
  },
  {
    id: "screening-004",
    movieId: "movie-small-giants",
    cinemaId: "cinema-riga-centre",
    auditorium: "Hall 4",
    startsAt: "2026-11-07T12:00:00+02:00",
    format: "3D",
    language: "Latvian",
    availableSeats: 74,
  },
  {
    id: "screening-005",
    movieId: "movie-last-frame",
    cinemaId: "cinema-riga-centre",
    auditorium: "Hall 3",
    startsAt: "2026-11-07T20:30:00+02:00",
    format: "2D",
    language: "English",
    subtitles: "Latvian",
    availableSeats: 31,
  },
  {
    id: "screening-006",
    movieId: "movie-neon-horizon",
    cinemaId: "cinema-jurmala",
    auditorium: "Seaside Hall",
    startsAt: "2026-11-06T19:30:00+02:00",
    format: "2D",
    language: "English",
    subtitles: "Latvian",
    availableSeats: 38,
  },
  {
    id: "screening-007",
    movieId: "movie-small-giants",
    cinemaId: "cinema-jurmala",
    auditorium: "Seaside Hall",
    startsAt: "2026-11-08T11:30:00+02:00",
    format: "2D",
    language: "Latvian",
    availableSeats: 52,
  },
] satisfies Screening[];

// These values drive the visible ticket-price table and a future Stripe Checkout line item.
export const ticketTypes = [
  {
    id: "ticket-adult",
    name: "Adult",
    description: "Standard admission for guests aged 18–64.",
    priceCents: 950,
    currency: "EUR",
    stripePriceId: "price_mock_adult_950",
  },
  {
    id: "ticket-student",
    name: "Student",
    description: "Valid student ID required at entry.",
    priceCents: 750,
    currency: "EUR",
    stripePriceId: "price_mock_student_750",
  },
  {
    id: "ticket-child",
    name: "Child",
    description:
      "For guests aged 4–12. Children under 4 enter free with an adult.",
    priceCents: 600,
    currency: "EUR",
    stripePriceId: "price_mock_child_600",
  },
  {
    id: "ticket-senior",
    name: "Senior",
    description: "For guests aged 65 and over.",
    priceCents: 700,
    currency: "EUR",
    stripePriceId: "price_mock_senior_700",
  },
] satisfies TicketType[];

// Example seating data for the booking page. A real system will lock seats server-side.
export const seats = [
  { id: "A1", row: "A", number: 1, status: "reserved" },
  { id: "A2", row: "A", number: 2, status: "reserved" },
  { id: "A3", row: "A", number: 3, status: "available" },
  { id: "A4", row: "A", number: 4, status: "available" },
  { id: "B1", row: "B", number: 1, status: "available" },
  { id: "B2", row: "B", number: 2, status: "selected" },
  { id: "B3", row: "B", number: 3, status: "selected" },
  { id: "B4", row: "B", number: 4, status: "available" },
  { id: "C1", row: "C", number: 1, status: "available" },
  { id: "C2", row: "C", number: 2, status: "available" },
  { id: "C3", row: "C", number: 3, status: "reserved" },
  { id: "C4", row: "C", number: 4, status: "available" },
] satisfies Seat[];

// Customer quotes populate the home page and the future reviews page.
export const reviews = [
  {
    id: "review-001",
    author: "Elīna K.",
    rating: 5,
    date: "2026-10-18",
    comment: "Quick booking, comfortable seats, and a genuinely helpful team.",
    movieId: "movie-midnight-signal",
  },
  {
    id: "review-002",
    author: "Rihards P.",
    rating: 4,
    date: "2026-10-21",
    comment:
      "The timetable was easy to compare and the family screening was perfect.",
    movieId: "movie-small-giants",
  },
  {
    id: "review-003",
    author: "Marta S.",
    rating: 5,
    date: "2026-10-25",
    comment:
      "Loved the IMAX experience and being able to choose seats before paying.",
    movieId: "movie-neon-horizon",
  },
] satisfies Review[];

export const siteContact = {
  companyName: "CineGate SIA",
  registrationNumber: "LV40203500000",
  email: "hello@cinegate.lv",
  phone: "+371 20 123 456",
  openingHours: "Daily 10:00–22:30",
  socialLinks: {
    instagram: "https://instagram.com/cinegate",
    facebook: "https://facebook.com/cinegate",
  },
} as const;
