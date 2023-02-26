import timerSlice from "./timer";
import { configureStore } from "@reduxjs/toolkit";
import mouseTracerSlice from "./mouseTracer";

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    mouseTracer: mouseTracerSlice.reducer,
  },
});

export default store;
