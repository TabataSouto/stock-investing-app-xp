import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const negotiationSlice = createSlice({
  name: 'negotiation',
  initialState,
  reducers: {
    stockToBeTraded: (state, action) => {
      state.asset = action.payload;
    },
  },
});

export const { stockToBeTraded } = negotiationSlice.actions;

export default negotiationSlice.reducer;
