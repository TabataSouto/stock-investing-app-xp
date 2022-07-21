/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL_API = 'https://asset-db-prsl-xp.herokuapp.com/assets';

const initialState = {
  list: [],
  status: null,
};

export const fetchAssets = createAsyncThunk(
  'assets/fetchAssets',
  async () => fetch(URL_API)
    .then((data) => data.json()),
);

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    availableAssets: (state, action) => {
      state.list = action.payload;
    },
  },
  // substitui as antigas actions de casos de erro e sucesso;
  extraReducers: {
    [fetchAssets.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAssets.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'sucess';
    },
    [fetchAssets.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { availableAssets } = assetsSlice.actions;

export default assetsSlice.reducer;
