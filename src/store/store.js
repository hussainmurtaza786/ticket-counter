import { configureStore } from '@reduxjs/toolkit';
import Slice from './authSlice'; 

const store = configureStore({
    reducer: {
        auth: Slice, 
    },
});

export default store;
