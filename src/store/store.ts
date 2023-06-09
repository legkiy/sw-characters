import { configureStore } from '@reduxjs/toolkit';
import swListReducer from './swList/swListSlice';

export const store = configureStore({
  reducer: swListReducer,
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
