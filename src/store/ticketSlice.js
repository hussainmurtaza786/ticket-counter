import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addMovieTicket, addSportTicket, getSportTicketsByUserId, getTransportationTicketsByUserId, getMovieTicketsByUserId, addTransportTicket } from "../services";

/* Thunks */
const loadTicketsThunk = createAsyncThunk(
    "loadTicketsThunk",
    async (userId, thunkAPI) => {
        if (!userId) throw Error("UserId not provided");
        const movies = await getMovieTicketsByUserId({ userId });
        // console.log("movies ==>", movies)
        const transports = await getTransportationTicketsByUserId({ userId });
        const sports = await getSportTicketsByUserId({ userId });
        return {
            movies,
            sports,
            transports,
        }
    }
)
const addMovieTicketThunk = createAsyncThunk(
    "addMovieTicket",
    async ({ movie, rating, price, image, imdb_url, userId }, thunkAPI) => {
        const movieTicket = await addMovieTicket({ movie, rating, price, image, imdb_url, userId });
        // const transportTicket = await getFlightTickets({ name, email, phone, passengers, depAirport, desAirport, depDate, depTime, returnDate, returnTime, userId });
        return movieTicket;
        // return transportTicket
    }
)
 
const addTransportTicketThunk = createAsyncThunk(
    "addTransportTicket",
    async ({ type, from, to, price, departure_time, arrival_time, userId }, thunkAPI) => {
        const transportTicket = await addTransportTicket({ type, from, to, price, departure_time, arrival_time, userId });
        return transportTicket

    } 
)

const addSportTicketThunk = createAsyncThunk(
    "addSportTicket",
    async ({  date, matchDate, venue, teams, price, cricketType, userId }, thunkAPI) => {
        const sportTicket = await addSportTicket({  date, matchDate, venue, teams, price, cricketType, userId });
        return sportTicket

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
            addTransportTicket: false,
            addSportTicket: false,
        },
        error: {
            loadTickets: null,
            addMovieTicket: null,
            addTransportTicket: null,
            addSportTicket: null,

        }
    },
    reducers: {},
    extraReducers: builder => {

        // Load tickets 
        builder.addCase(loadTicketsThunk.pending, (state) => {
            state.fetchingState.loadTickets = true;
        });
        builder.addCase(loadTicketsThunk.fulfilled, (state, { payload }) => {
            state.fetchingState.loadTickets = false;
            state.error.loadTickets = null;
            state.movies = payload.movies;
            state.transports = payload.transports;
            state.sports = payload.sports;
        });
        builder.addCase(loadTicketsThunk.rejected, (state, { error }) => {
            state.fetchingState.loadTickets = false;
            state.error.loadTickets = error.message;
        });

        //  movie ticket
        builder.addCase(addMovieTicketThunk.pending, (state) => {
            state.fetchingState.addMovieTicket = true;
        });
        builder.addCase(addMovieTicketThunk.fulfilled, (state, { payload }) => {
            state.fetchingState.addMovieTicket = false;
            state.error.addMovieTicket = null;
            state.movies.push(payload);
        });
        builder.addCase(addMovieTicketThunk.rejected, (state, { error }) => {
            state.fetchingState.addMovieTicket = false;
            state.error.addMovieTicket = error.message;
        });

        //  transport ticket
        builder.addCase(addTransportTicketThunk.pending, (state) => {
            state.fetchingState.addTransportTicket = true;
        });
        builder.addCase(addTransportTicketThunk.fulfilled, (state, { payload }) => {
            state.fetchingState.addTransportTicket = false;
            state.error.addTransportTicket = null;
            state.transports.push(payload);
        });
        builder.addCase(addTransportTicketThunk.rejected, (state, { error }) => {
            state.fetchingState.addTransportTicket = false;
            state.error.addTransportTicket = error.message;
        });
        //  Sport ticket
        builder.addCase(addSportTicketThunk.pending, (state) => {
            state.fetchingState.addSportTicket = true;
        });
        builder.addCase(addSportTicketThunk.fulfilled, (state, { payload }) => {
            state.fetchingState.addSportTicket = false;
            state.error.addSportTicket = null;
            state.sports.push(payload);
        });
        builder.addCase(addSportTicketThunk.rejected, (state, { error }) => {
            state.fetchingState.addSportTicket = false;
            state.error.addSportTicket = error.message;
        });
    }
});

export default slice.reducer;
export { loadTicketsThunk, addMovieTicketThunk, addTransportTicketThunk, addSportTicketThunk }