import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { dataActions } from "./data-slice";
import { uiActions } from "./ui-slice";


// export const fetchMovieData = () => {
//     return async (dispatch) => {
//         dispatch(dataActions.setLoading(true));
//         dispatch(dataActions.setError(null));

//         const fetchData = async () => {
//             const response = await fetch(
//                 "https://react-http-c8f4f-default-rtdb.firebaseio.com/movies.json"
//             );

//             if (!response.ok) {
//                 throw new Error("Could not fetch login data");
//             }

//             const data = await response.json();
//             return data;
//         };

//         try {
//             const loginData = await fetchData();
//             dispatch(dataActions.setFetchData(loginData));
//             dispatch(dataActions.setLoading(false));
//         } catch (error) {
//             dispatch(dataActions.setLoading(false));
//             dispatch(dataActions.setError(error.message));
//             dispatch(
//                 uiActions.showNotification({
//                     status: "error",
//                     title: "Error",
//                     message: "Fetching login data failed",
//                 })
//             );
//         }
//     };
// };




export const fetchMovie = createAsyncThunk('movie/fetchMovie', async () => {
    const response = await fetch('https://react-http-c8f4f-default-rtdb.firebaseio.com/movies.json');
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data;
});

const initialState = {
    isLoading: false,
    data: {},
    error: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.pending, (state) => {
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

export default movieSlice.reducer;




export const sendMovieData = (movieData) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-http-c8f4f-default-rtdb.firebaseio.com/movies.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(movieData),

                })

            if (!response.ok) {
                throw new Error('Sending login data failed.')
            }
        }

        try {
            await sendRequest()



        } catch (error) {


        }

    }

}