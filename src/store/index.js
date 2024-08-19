import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import dataSlice from "./data-slice";
import movieSlice from "./movie-action";


const store = configureStore({
  reducer: { ui: uiSlice.reducer, data: dataSlice.reducer, movie: movieSlice.reducer },
});

export default store;
