import { nanoid } from "@reduxjs/toolkit";

const DATABASE_CONNECTION_STRING = `https://react-http-c8f4f-default-rtdb.firebaseio.com`

//////////////////////////// User services ////////////////////////
//Sign up Function
export async function signUp({ username, age, phone, email, password }) {
    const usersRes = await fetch(`${DATABASE_CONNECTION_STRING}/users.json`,)
    if (!usersRes.ok) { throw new Error('Something went wrong') }
    const users = await usersRes.json() || [];

    // checking if user already exist
    const user = users.find(user => user.email === email);
    if (user) {
        throw Error("User already exist");
    }

    const newUser = { id: nanoid(), username, age, phone, email, password, };
    users.push(newUser);

    const addNewUserRes = await fetch(`${DATABASE_CONNECTION_STRING}/users.json`, {
        method: 'PUT',
        body: JSON.stringify(users)
    })

    if (!addNewUserRes.ok) {
        throw new Error('Sending card data failed.')
    }
    const res = await addNewUserRes.json();
    console.log("signup-response", res);
    return newUser;
}

//Sign in Function
export async function signIn({ email, password }) {
    const usersRes = await fetch(`${DATABASE_CONNECTION_STRING}/users.json`,)
    if (!usersRes.ok) { throw new Error('Something went wrong') }
    const users = await usersRes.json() || [];

    // checking if user exist
    const user = users.find(user => user.email === email);
    if (!user) {
        throw Error("Invalid Email address");
    }

    if (user.password !== password) {
        throw Error("Incorrect password");
    }

    return user

}

//////////////////////////// Movie Ticket /////////////////////////

export async function getMovieTicketsByUserId({ userId }) {
    const moviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`,)
    if (!moviesRes.ok) { throw new Error('Something went wrong') }
    const movies = await moviesRes.json() || [];

    return movies.filter(m => m.userId === userId);
}

export async function addMovieTicket({ movie, rating, price, image, imdb_url, userId }) {
    const moviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`,)
    if (!moviesRes.ok) { throw new Error('Something went wrong') }
    const movies = await moviesRes.json() || [];

    /* adding new movie ticket here */
    const newMovieTicket = { id: nanoid(), movie, rating, price, image, imdb_url, userId };
    movies.push(newMovieTicket);

    const addNewMoviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`, {
        method: 'PUT',
        body: JSON.stringify(movies)
    })

    if (!addNewMoviesRes.ok) {
        throw new Error('Something went wrongs.')
    }
    const updatedMoviesList = await addNewMoviesRes.json();
    console.log("movies-response", updatedMoviesList);
    return newMovieTicket;
}

////////////////////////// Transportation Ticket ////////////////////////


export async function getTransportationTicketsByUserId({ userId }) {
    const transportRes = await fetch(`${DATABASE_CONNECTION_STRING}/transport.json`,)
    if (!transportRes.ok) { throw new Error('Something went wrong') }
    const transport = await transportRes.json() || [];
    return transport.filter(m => m.userId === userId);
}


export async function addTransportTicket({ type, from, to, price, departure_time, arrival_time, userId }) {
    const transportRes = await fetch(`${DATABASE_CONNECTION_STRING}/transport.json`,)
    if (!transportRes.ok) { throw new Error('Something went wrong') }
    const transport = await transportRes.json() || [];

    /* adding new transport ticket here */
    const newTransportTicket = { id: nanoid(), type, from, to, price, departure_time, arrival_time, userId };
    transport.push(newTransportTicket);

    const addNewTransportRes = await fetch(`${DATABASE_CONNECTION_STRING}/transport.json`, {
        method: 'PUT',
        body: JSON.stringify(transport)
    })

    if (!addNewTransportRes.ok) {
        throw new Error('Something went wrongs.')
    }
    const updatedTransportList = await addNewTransportRes.json();
    // console.log("transport-response", updatedTransportList);
    return newTransportTicket;
}


///////////////// Sport Ticket /////////




export async function getSportTicketsByUserId({ userId }) {
    const sportRes = await fetch(`${DATABASE_CONNECTION_STRING}/sports.json`,)
    if (!sportRes.ok) { throw new Error('Something went wrong') }
    const sport = await sportRes.json() || [];
    return sport.filter(m => m.userId === userId);
}


export async function addSportTicket({ date, matchDate, venue, teams, price, stadium, team, match, cricketType, userId }) {
    const sportRes = await fetch(`${DATABASE_CONNECTION_STRING}/sports.json`,)
    if (!sportRes.ok) { throw new Error('Something went wrong') }
    const sport = await sportRes.json() || [];

    /* adding new Sport ticket here */
    const newSportTicket = { id: nanoid(), date, matchDate, venue, teams, price, stadium, team, match, cricketType, userId };
    sport.push(newSportTicket);

    const addNewSportRes = await fetch(`${DATABASE_CONNECTION_STRING}/sports.json`, {
        method: 'PUT',
        body: JSON.stringify(sport)
    })

    if (!addNewSportRes.ok) {
        throw new Error('Something went wrongs.')
    }
    const updatedSportList = await addNewSportRes.json();
    console.log("Sport-response", updatedSportList);
    return newSportTicket;
}
