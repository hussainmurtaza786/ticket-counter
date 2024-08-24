import { configureStore } from '@reduxjs/toolkit';
import Slice from './authSlice';
import movieSlice from './movieSlice';
import ticketSlice from './ticketSlice';

const store = configureStore({
    reducer: {
        auth: Slice,
        movie: movieSlice,
        ticket: ticketSlice,
    },
});

export default store;
