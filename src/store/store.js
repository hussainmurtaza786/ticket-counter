import { configureStore } from '@reduxjs/toolkit';
import Slice from './authSlice';
import movieSlice from './movieSlice';

const store = configureStore({
    reducer: {
        auth: Slice,
        movie: movieSlice
    },
});

export default store;
