import { nanoid } from "@reduxjs/toolkit";

const DB_URL = `https://react-http-c8f4f-default-rtdb.firebaseio.com`

function toArray(data) {
  return data ? (Array.isArray(data) ? data : Object.values(data)) : [];
}

async function fetchCollection(path) {
  const res = await fetch(`${DB_URL}/${path}.json`);
  if (!res.ok) throw new Error('Something went wrong');
  return toArray(await res.json());
}

async function putCollection(path, data) {
  const res = await fetch(`${DB_URL}/${path}.json`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Something went wrong.');
  return res.json();
}

//////////////////////////// User services ////////////////////////
export async function signUp({ username, age, phone, email, password }) {
  const users = await fetchCollection('users');
  if (users.find(user => user.email === email)) {
    throw Error("User already exist");
  }
  const newUser = { id: nanoid(), username, age, phone, email, password };
  users.push(newUser);
  await putCollection('users', users);
  return newUser;
}

export async function signIn({ email, password }) {
  const users = await fetchCollection('users');
  const user = users.find(user => user.email === email);
  if (!user) throw Error("Invalid Email address");
  if (user.password !== password) throw Error("Incorrect password");
  return user;
}

//////////////////////////// Movie Ticket /////////////////////////
export async function getMovieTicketsByUserId({ userId }) {
  const movies = await fetchCollection('movies');
  return movies.filter(m => m.userId === userId);
}

export async function addMovieTicket({ movie, rating, price, image, imdb_url, userId }) {
  const movies = await fetchCollection('movies');
  const newMovieTicket = { id: nanoid(), movie, rating, price, image, imdb_url, userId };
  movies.push(newMovieTicket);
  await putCollection('movies', movies);
  return newMovieTicket;
}

////////////////////////// Transportation Ticket ////////////////////////
export async function getTransportationTicketsByUserId({ userId }) {
  const transport = await fetchCollection('transport');
  return transport.filter(m => m.userId === userId);
}

export async function addTransportTicket({ type, from, to, price, departure_time, arrival_time, userId }) {
  const transport = await fetchCollection('transport');
  const newTransportTicket = { id: nanoid(), type, from, to, price, departure_time, arrival_time, userId };
  transport.push(newTransportTicket);
  await putCollection('transport', transport);
  return newTransportTicket;
}

///////////////// Sport Ticket /////////
export async function getSportTicketsByUserId({ userId }) {
  const sport = await fetchCollection('sports');
  return sport.filter(m => m.userId === userId);
}

export async function addSportTicket({ date, matchDate, venue, teams, price, stadium, team, match, cricketType, userId }) {
  const sport = await fetchCollection('sports');
  const newSportTicket = { id: nanoid(), date, matchDate, venue, teams, price, stadium, team, match, cricketType, userId };
  sport.push(newSportTicket);
  await putCollection('sports', sport);
  return newSportTicket;
}
