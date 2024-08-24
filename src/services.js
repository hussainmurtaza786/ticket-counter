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
// async function getUsers() {
//     const usersRes = await fetch(`${DATABASE_CONNECTION_STRING}/users.json`,)
//     if (!usersRes.ok) { throw new Error('Something went wrong') }
//     return await usersRes.json() || [];
// }


/////////////////////// Movie ticket services ///////////////////
// export async function getMovieTicketsByAge({ age }) {
//     const users = await getUsers();
//     const userByAge = users.filter(u => u.age === age);

//     const moviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`,)
//     if (!moviesRes.ok) { throw new Error('Something went wrong') }
//     const movies = await moviesRes.json() || [];

//     const userIds = userByAge.map(u => u.id);
//     return movies.filter(m => userIds.includes(m.userId))

// }
// getMovieTicketsByAge({age: 15})

export async function getMovieTicketsByUserId({ userId }) {
    const moviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`,)
    if (!moviesRes.ok) { throw new Error('Something went wrong') }
    const movies = await moviesRes.json() || [];

    return movies.filter(m => m.userId === userId);
}

export async function addMovieTicket({ name, timestamp, price, seat, genre, userId }) {
    const moviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`,)
    if (!moviesRes.ok) { throw new Error('Something went wrong') }
    const movies = await moviesRes.json() || [];

    /* adding new movie ticket here */
    const newMovieTicket = { id: nanoid(), name, timestamp, price, seat, genre, userId };
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



