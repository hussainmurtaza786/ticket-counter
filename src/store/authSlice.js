import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signUp, signIn } from '../services';
import { loadTicketsThunk } from './ticketSlice';

const signUpThunk = createAsyncThunk(
  'auth-signUp',
  async ({ username, age, phone, email, password }, thunkAPI) => {
    try {
      return await signUp({ username, age, phone, email, password });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const signInThunk = createAsyncThunk(
  'auth-signIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await signIn({ email, password });
      thunkAPI.dispatch(loadTicketsThunk(user.id));
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
    builder.addCase(signUpThunk.pending, (state) => {
      state.isAuthenticating = true;
      state.error = null;
    })
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.error = null;
    })
    builder.addCase(signUpThunk.rejected, (state, { payload }) => {
      state.isAuthenticating = false;
      state.error = payload;
    })

    builder.addCase(signInThunk.pending, (state) => {
      state.isAuthenticating = true;
      state.error = null;
    })
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.user = payload;
    })
    builder.addCase(signInThunk.rejected, (state, { payload }) => {
      state.isAuthenticating = false;
      state.error = payload;
    })
  }
})
export const authAction = Slice.actions
export default Slice.reducer;
export { signUpThunk, signInThunk };