import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timerSlice",
  initialState: {
    date: {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    },
  },
  reducers: {
    update: (state, action) => {
      state.date = {
        hours: action.payload.hours,
        minutes: action.payload.minutes,
        seconds: action.payload.seconds,
      };
    },
  },
});

export default timerSlice;
