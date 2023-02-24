import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timerSlice",
  initialState: {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  },
  reducers: {
    updateHours: (state, action) => {
      state.hours = action.payload;
    },
    updateMinutes: (state, action) => {
      state.minutes = action.payload;
    },
    updateSeconds: (state, action) => {
      state.seconds = action.payload;
    },
  },
});

export default timerSlice;
