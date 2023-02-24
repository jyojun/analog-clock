import timerSlice from "./timer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
  },
});

export default store;
