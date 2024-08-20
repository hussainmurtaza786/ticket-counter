
const DATABASE_CONNECTION_STRING = `https://react-http-c8f4f-default-rtdb.firebaseio.com`

export async function signUp({ username, age, phone, email, password }) {
    const usersRes = await fetch(`${DATABASE_CONNECTION_STRING}/users.json`,)
    if (!usersRes.ok) { throw new Error('Could not fetch cart data') }
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

export async function signIn({ email, password }) {
    const usersRes = await fetch(`${DATABASE_CONNECTION_STRING}/users.json`,)
    if (!usersRes.ok) { throw new Error('Could not fetch cart data') }
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