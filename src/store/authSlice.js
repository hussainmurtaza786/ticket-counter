import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signUp, signIn } from '../services';

const signUpThunk = createAsyncThunk(
    'auth-signUp',
    async ({ username, age, phone, email, password }, thunkAPI) => {
        const user = await signUp({ username, age, phone, email, password });
        // console.log("singup thunk user ==>", user)
        return user;
    }
)

// const signInThunk = createAsyncThunk(
//     'auth-signIn',
//     async ({ email, password }, thunkAPI) => {
//         // try {
//         const user = await signIn({ email, password });
//         return user;
//         // console.log("signIn Thunk user ==>", user)
//         // } catch (error) {
//         //     throw error.toString();
//         // }
//     }
// )
const signInThunk = createAsyncThunk(
    'auth-signIn',
    async ({ email, password }, thunkAPI) => {
        try {
            const user = await signIn({ email, password });
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const Slice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        isAuthenticating: false,
        user: null,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUpThunk.pending, (state, { payload, meta }) => {
            state.isAuthenticating = true;
        })
        builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
            state.isAuthenticating = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.error = null;
        })
        builder.addCase(signUpThunk.rejected, (state, { payload, error }) => {
            state.isAuthenticating = false;
            state.isAuthenticated = false;
            state.error = error;
            state.user = null;
        })


        builder.addCase(signInThunk.pending, (state, { payload, meta }) => {
            state.isAuthenticating = true;

        })
        builder.addCase(signInThunk.fulfilled, (state, { payload, }) => {
            state.isAuthenticating = false;
            state.isAuthenticated = true;
            state.user = payload;


        })
        builder.addCase(signInThunk.rejected, (state, { payload, error }) => {
            state.isAuthenticating = false;
            state.isAuthenticated = false;
            state.error = payload;
            state.user = null;
        })


    }
})
export const authAction = Slice.actions
export default Slice.reducer;
export { signUpThunk, signInThunk };
