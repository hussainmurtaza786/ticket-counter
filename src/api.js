const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDU2NzI3YjJhNTQ5M2EwY2VjYThjMGMxNDE2MTA2MSIsInN1YiI6IjY2Mjc3YjkyNTVhNTkzMDE3Y2I4Y2FkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9jFQfKeqRORhZzKzPgl3t0ju8QQdY-I_jbN2Z5b5C98';
const TMDB_BASE = 'https://api.themoviedb.org/3';

async function tmdbFetch(url) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TMDB_TOKEN}` },
  });
  if (!res.ok) throw new Error('Failed to fetch movies');
  return res.json();
}

export async function fetchPopularMovies(page = 1) {
  const data = await tmdbFetch(`${TMDB_BASE}/movie/popular?page=${page}`);
  return data.results.map((m) => ({
    id: m.id,
    movie: m.title,
    rating: m.vote_average.toFixed(1),
    price: (Math.floor(Math.random() * 25) + 8) * 10,
    image: m.poster_path
      ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
      : 'https://via.placeholder.com/300x450?text=No+Poster',
    imdb_url: `https://www.themoviedb.org/movie/${m.id}`,
  }));
}

export async function searchMovies(query) {
  const data = await tmdbFetch(`${TMDB_BASE}/search/movie?query=${encodeURIComponent(query)}`);
  return data.results.map((m) => ({
    id: m.id,
    movie: m.title,
    rating: m.vote_average.toFixed(1),
    price: (Math.floor(Math.random() * 25) + 8) * 10,
    image: m.poster_path
      ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
      : 'https://via.placeholder.com/300x450?text=No+Poster',
    imdb_url: `https://www.themoviedb.org/movie/${m.id}`,
  }));
}

const cricketData = [
  { teams: "India vs Australia", cricketType: "ODI", matchDate: "2026-08-15", venue: "Wankhede Stadium, Mumbai", price: 45 },
  { teams: "England vs Pakistan", cricketType: "T20", matchDate: "2026-08-22", venue: "Lords, London", price: 55 },
  { teams: "Australia vs England", cricketType: "Test", matchDate: "2026-09-05", venue: "MCG, Melbourne", price: 60 },
  { teams: "India vs Pakistan", cricketType: "T20", matchDate: "2026-09-12", venue: "Eden Gardens, Kolkata", price: 75 },
  { teams: "South Africa vs New Zealand", cricketType: "ODI", matchDate: "2026-09-20", venue: "SuperSport Park, Centurion", price: 35 },
  { teams: "Sri Lanka vs Bangladesh", cricketType: "Test", matchDate: "2026-09-28", venue: "R.Premadasa, Colombo", price: 30 },
  { teams: "West Indies vs England", cricketType: "T20", matchDate: "2026-10-05", venue: "Sabina Park, Jamaica", price: 40 },
  { teams: "India vs England", cricketType: "ODI", matchDate: "2026-10-15", venue: "Chinnaswamy, Bangalore", price: 50 },
];

const footballData = [
  { teams: "Barcelona vs Real Madrid", matchDate: "2026-08-20", venue: "Camp Nou, Barcelona", price: 80 },
  { teams: "Manchester United vs Liverpool", matchDate: "2026-08-27", venue: "Old Trafford, Manchester", price: 70 },
  { teams: "Bayern Munich vs Dortmund", matchDate: "2026-09-03", venue: "Allianz Arena, Munich", price: 65 },
  { teams: "Juventus vs AC Milan", matchDate: "2026-09-10", venue: "Allianz Stadium, Turin", price: 55 },
  { teams: "PSG vs Marseille", matchDate: "2026-09-17", venue: "Parc des Princes, Paris", price: 60 },
  { teams: "Arsenal vs Chelsea", matchDate: "2026-09-24", venue: "Emirates Stadium, London", price: 68 },
  { teams: "Inter Milan vs AC Milan", matchDate: "2026-10-01", venue: "San Siro, Milan", price: 58 },
  { teams: "Real Madrid vs Atletico Madrid", matchDate: "2026-10-08", venue: "Santiago Bernabeu, Madrid", price: 72 },
];

const tennisData = [
  { match: "US Open Final", date: "2026-09-08", venue: "Arthur Ashe Stadium, New York", price: 120 },
  { match: "Wimbledon Final", date: "2026-07-14", venue: "Centre Court, London", price: 150 },
  { match: "Australian Open Final", date: "2026-01-26", venue: "Rod Laver Arena, Melbourne", price: 130 },
  { match: "French Open Final", date: "2026-06-08", venue: "Philippe Chatrier, Paris", price: 110 },
  { match: "Indian Wells Masters", date: "2026-03-16", venue: "Indian Wells Tennis Garden, California", price: 85 },
  { match: "Miami Open", date: "2026-03-30", venue: "Hard Rock Stadium, Miami", price: 75 },
  { match: "Monte Carlo Masters", date: "2026-04-13", venue: "Monte Carlo Country Club", price: 90 },
  { match: "Laver Cup", date: "2026-09-22", venue: "O2 Arena, London", price: 95 },
];

const transportData = [
  { id: "f1", type: "flight", from: "New York", to: "London", price: 450, available: true, departure_time: "08:00", arrival_time: "20:00" },
  { id: "f2", type: "flight", from: "New York", to: "Dubai", price: 550, available: true, departure_time: "22:00", arrival_time: "10:00" },
  { id: "f3", type: "flight", from: "New York", to: "Tokyo", price: 700, available: true, departure_time: "23:00", arrival_time: "15:00" },
  { id: "f4", type: "flight", from: "London", to: "New York", price: 430, available: true, departure_time: "10:00", arrival_time: "13:00" },
  { id: "f5", type: "flight", from: "London", to: "Dubai", price: 320, available: true, departure_time: "14:00", arrival_time: "23:00" },
  { id: "f6", type: "flight", from: "London", to: "Paris", price: 120, available: true, departure_time: "07:00", arrival_time: "08:30" },
  { id: "f7", type: "flight", from: "Dubai", to: "New York", price: 580, available: true, departure_time: "02:00", arrival_time: "08:00" },
  { id: "f8", type: "flight", from: "Dubai", to: "London", price: 310, available: true, departure_time: "01:00", arrival_time: "05:00" },
  { id: "f9", type: "flight", from: "Paris", to: "New York", price: 410, available: true, departure_time: "09:00", arrival_time: "12:00" },
  { id: "f10", type: "flight", from: "Tokyo", to: "New York", price: 680, available: true, departure_time: "11:00", arrival_time: "07:00" },
  { id: "b1", type: "bus", from: "New York", to: "Boston", price: 45, available: true, departure_time: "06:00", arrival_time: "10:00" },
  { id: "b2", type: "bus", from: "New York", to: "Washington DC", price: 35, available: true, departure_time: "07:00", arrival_time: "11:30" },
  { id: "b3", type: "bus", from: "London", to: "Manchester", price: 25, available: true, departure_time: "08:00", arrival_time: "11:00" },
  { id: "b4", type: "bus", from: "Paris", to: "Lyon", price: 30, available: true, departure_time: "09:00", arrival_time: "13:00" },
  { id: "t1", type: "train", from: "New York", to: "Washington DC", price: 65, available: true, departure_time: "06:30", arrival_time: "09:30" },
  { id: "t2", type: "train", from: "London", to: "Paris", price: 90, available: true, departure_time: "07:00", arrival_time: "10:30" },
  { id: "t3", type: "train", from: "Tokyo", to: "Osaka", price: 80, available: true, departure_time: "06:00", arrival_time: "08:30" },
  { id: "t4", type: "train", from: "Paris", to: "Amsterdam", price: 55, available: true, departure_time: "08:00", arrival_time: "11:00" },
];

let cachedMovies = null;

export async function getMovies() {
  if (cachedMovies) return cachedMovies;
  try {
    cachedMovies = await fetchPopularMovies();
    return cachedMovies;
  } catch {
    return [];
  }
}

export async function getCricket() { return cricketData; }
export async function getFootball() { return footballData; }
export async function getTennis() { return tennisData; }
export async function getTransport() { return transportData; }

export async function searchTransport(from, to) {
  const data = await getTransport();
  return data.filter(
    (t) =>
      t.from.toLowerCase() === from.toLowerCase() &&
      t.to.toLowerCase() === to.toLowerCase() &&
      t.available
  );
}
