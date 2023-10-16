import { createSlice } from '@reduxjs/toolkit';

interface GuestNameState {
  value: string;
};

const initialState: GuestNameState = {
  value: '',
};

const guestNameSlice = createSlice({
  name: 'GuestName',
  initialState,
  reducers: {
    addName(state, action) {
      state.value = action.payload;
    }
  }
})

export const { addName } = guestNameSlice.actions;
export default guestNameSlice.reducer;
