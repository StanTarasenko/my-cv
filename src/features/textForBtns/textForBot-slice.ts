import { createSlice } from '@reduxjs/toolkit';

interface TextForBot {
  value: string;
};

const initialState: TextForBot = {
  value: '',
};

const textForBotSlice = createSlice({
  name: 'TextForBot',
  initialState,
  reducers: {
    addText(state, action) {
      state.value = action.payload;
    }
  }
})

export const { addText } = textForBotSlice.actions;
export default textForBotSlice.reducer;
