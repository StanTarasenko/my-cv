import { createSlice } from '@reduxjs/toolkit';

interface TextForFaceBot {
  value: object;
};

const initialState: TextForFaceBot = {
  value: {},
};

const textForFaceBotSlice = createSlice({
  name: 'TextForFaceBot',
  initialState,
  reducers: {
    addTextForFaceBot(state, action) {
      state.value = action.payload;
    }
  }
})

export const { addTextForFaceBot } = textForFaceBotSlice.actions;
export default textForFaceBotSlice.reducer;
