import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addMovieTicket } from "../services";



const moviesThunk = createAsyncThunk(
    'movie-Data',
    async ({ name, timestamp, price, seat, genre, userId }, thunkAPI) => {
        const movie = await addMovieTicket({ name, timestamp, price, seat, genre, userId });
        // console.log("singup thunk user ==>", user)
        return movie;
    }
)

const initialState = {
    isLoading: false,
    error: null,
    data: []
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(moviesThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(moviesThunk.fulfilled, (state, action) => {

                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(moviesThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default movieSlice.reducer;
export { moviesThunk }


