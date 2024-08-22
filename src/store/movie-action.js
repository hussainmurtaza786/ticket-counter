import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const fetchMovie = createAsyncThunk('movie/fetchMovie', async () => {
    const response = await fetch('https://react-http-c8f4f-default-rtdb.firebaseio.com/movies.json');
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data
});

const initialState = {
    isLoading: false,
    data: [],
    error: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(fetchMovie.fulfilled, (state, action) => {

                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default movieSlice;


