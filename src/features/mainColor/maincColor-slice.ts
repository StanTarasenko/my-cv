import { createSlice } from '@reduxjs/toolkit';

interface MainColorState {
  value: string;
};

const initialState: MainColorState = {
  value: 'blue',
};

const mainColorSlice = createSlice({
  name: 'MainColor',
  initialState,
  reducers: {
    addColor(state, action) {
      state.value = action.payload;
    }
  }
})

export const { addColor } = mainColorSlice.actions;
export default mainColorSlice.reducer;
