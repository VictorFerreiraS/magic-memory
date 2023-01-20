import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cardsRedux",
  initialState: { value: [] },
  reducers: {
    setCardsRedux: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCardsRedux } = cardsSlice.actions;

export default cardsSlice.reducer;
