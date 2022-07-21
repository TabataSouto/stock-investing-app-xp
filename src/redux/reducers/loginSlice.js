import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;
