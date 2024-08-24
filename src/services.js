
const DATABASE_CONNECTION_STRING = `https://react-http-c8f4f-default-rtdb.firebaseio.com`


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

    users.push({ username, age, phone, email, password })

    const addNewUserRes = await fetch(`${DATABASE_CONNECTION_STRING}/users.json`, {
        method: 'PUT',
        body: JSON.stringify(users)
    })

    if (!addNewUserRes.ok) {
        throw new Error('Sending card data failed.')
    }
    const res = await addNewUserRes.json();
    console.log("signup-response", res);
    return res;
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


//Movie Data Function

export async function movieData({ firstName, lastName, movieName, email, time, date }) {
    const moviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`,)
    if (!moviesRes.ok) { throw new Error('Something went wrong') }
    const users = await moviesRes.json() || [];

    users.push({ firstName, lastName, movieName, email, time, date })

    const addNewMoviesRes = await fetch(`${DATABASE_CONNECTION_STRING}/movies.json`, {
        method: 'PUT',
        body: JSON.stringify(users)
    })

    if (!addNewMoviesRes.ok) {
        throw new Error('Something went wrongs.')
    }
    const res = await addNewMoviesRes.json();
    console.log("signup-response", res);
    return res;
}
