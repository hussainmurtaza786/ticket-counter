import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieData } from "../services";



const moviesThunk = createAsyncThunk(
    'movie-Data',
    async ({ firstName, lastName, movieName, email, time, date }, thunkAPI) => {
        const movie = await movieData({ firstName, lastName, movieName, email, time, date });
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


