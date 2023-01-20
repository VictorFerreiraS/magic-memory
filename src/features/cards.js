import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: { value: [] },
  reducers: {
    shuffle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {shuffle} = cardsSlice.actions;

export default cardsSlice.reducer;