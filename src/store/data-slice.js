import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchData: {},
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFetchData(state, action) {
      state.fetchData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
