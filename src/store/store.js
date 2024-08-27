import { configureStore } from '@reduxjs/toolkit';
import Slice from './authSlice';
import ticketSlice from './ticketSlice';

const store = configureStore({
    reducer: {
        auth: Slice,
        ticket: ticketSlice,
    },
});

export default store;
