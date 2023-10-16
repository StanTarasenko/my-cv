import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
import mainColorReducer from '../features/mainColor/maincColor-slice.ts';
// @ts-ignore
import guestNameReducer from '../features/guestName/guestName-slice.ts';
// @ts-ignore
import textForBotReducer from '../features/textForBtns/textForBot-slice.ts';
// @ts-ignore
import textForFaceBotReducer from '../features/textForFaceBot/textForFaceBot-slice.ts';

export const store = configureStore({
  reducer: { 
    mainColor: mainColorReducer, 
    guestName: guestNameReducer,
    textForBot: textForBotReducer, 
    textForFaceBot: textForFaceBotReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
