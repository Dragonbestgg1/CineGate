export type Movie = {
  id: string;
  slug: string;
  title: string;
  synopsis: string;
  poster: string;
  backdrop: string;
  genres: string[];
  ageRating: "U" | "7+" | "12+" | "16+";
  durationMinutes: number;
  releaseDate: string;
  rating: number;
  trailerUrl: string;
  featured?: boolean;
};

export type Cinema = {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  facilities: string[];
};

export type Screening = {
  id: string;
  movieId: string;
  cinemaId: string;
  auditorium: string;
  startsAt: string;
  format: "2D" | "3D" | "IMAX";
  language: string;
  subtitles?: string;
  availableSeats: number;
};

export type TicketType = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  currency: "EUR";
  stripePriceId: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  movieId?: string;
};

export type Seat = {
  id: string;
  row: string;
  number: number;
  status: "available" | "selected" | "reserved";
};
