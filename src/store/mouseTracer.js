import { createSlice } from "@reduxjs/toolkit";

const mouseTracerSlice = createSlice({
  name: "mouseTracerSlice",
  initialState: {
    loc: { x: 0, y: 0, isInside: false },
  },
  reducers: {
    update: (state, action) => {
      state.loc = {
        x: action.payload.x,
        y: action.payload.y,
        isInside: action.payload.isInside,
      };
    },
  },
});

export default mouseTracerSlice;
