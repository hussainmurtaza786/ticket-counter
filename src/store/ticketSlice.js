import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addMovieTicket, getTransportationTicketsByUserId,getMovieTicketsByUserId, addTransportTicket } from "../services";

/* Thunks */
const loadTicketsThunk = createAsyncThunk(
    "loadTicketsThunk",
    async (userId, thunkAPI) => {
        if (!userId) throw Error("UserId not provided");
        const movies = await getMovieTicketsByUserId({ userId });
        // console.log("movies ==>", movies)
        const transport = await getTransportationTicketsByUserId({ userId });
        return {
            movies,
            transport,
        }
    }
)
const addMovieTicketThunk = createAsyncThunk(
    "addMovieTicket",
    async ({ name, price, seat, timestamp, userId, genre }, thunkAPI) => {
        const movieTicket = await addMovieTicket({ name, price, seat, timestamp, userId, genre });
        // const transportTicket = await getFlightTickets({ name, email, phone, passengers, depAirport, desAirport, depDate, depTime, returnDate, returnTime, userId });
        return movieTicket;
        // return transportTicket
    }
)

const addTransportTicketThunk =createAsyncThunk(
    "addTransportTicket",
    async({ name, email, phone, passengers, depAirport, desAirport, depDate, depTime, returnDate, returnTime, userId },thunkAPI)=>{
        const transportTicket = await addTransportTicket({ name, email, phone, passengers, depAirport, desAirport, depDate, depTime, returnDate, returnTime, userId });
        return transportTicket
    
    }
)


const slice = createSlice({
    name: 'ticket',
    initialState: {
        movies: [],
        transports: [],
        sports: [],
        fetchingState: {
            loadTickets: false,
            addMovieTicket: false,
        },
        error: {
            loadTickets: null,
            addMovieTicket: null,
        }
    },
    reducers: {},
    extraReducers: builder => {

        builder.addCase(loadTicketsThunk.pending, (state, { payload }) => {
            state.fetchingState.loadTickets = true;
        })
        builder.addCase(loadTicketsThunk.fulfilled, (state, { payload }) => {
            state.fetchingState.loadTickets = false;
            state.error.loadTickets = null;
            state.movies = payload.movies;

        })
        builder.addCase(loadTicketsThunk.rejected, (state, { payload, error }) => {
            state.fetchingState.loadTickets = false;
            state.error.loadTickets = error;
        })


        builder.addCase(addMovieTicketThunk.pending, (state, { payload }) => {
            state.fetchingState.addMovieTicket = true;
        })
        builder.addCase(addMovieTicketThunk.fulfilled, (state, { payload }) => {
            state.fetchingState.addMovieTicket = false;
            state.error.addMovieTicket = null;
            state.movies.push(payload);
        })
        builder.addCase(addMovieTicketThunk.rejected, (state, { payload, error }) => {
            state.fetchingState.addMovieTicket = false;
            state.error.addMovieTicket = error;
        })


    
        builder.addCase(addTransportTicketThunk.pending, (state, { payload }) => {
            state.fetchingState.addMovieTicket = true;
        })
        builder.addCase(addTransportTicketThunk.fulfilled, (state, { payload }) => {
            state.fetchingState.addMovieTicket = false;
            state.error.addMovieTicket = null;
            state.movies.push(payload);
        })
        builder.addCase(addTransportTicketThunk.rejected, (state, { payload, error }) => {
            state.fetchingState.addMovieTicket = false;
            state.error.addMovieTicket = error;
        })





    }
})

export default slice.reducer;
export { loadTicketsThunk, addMovieTicketThunk ,addTransportTicketThunk }