import { configureStore } from '@reduxjs/toolkit';
import { appProcess } from './app/app';

export const store = configureStore({
  reducer: appProcess.reducer,
});
