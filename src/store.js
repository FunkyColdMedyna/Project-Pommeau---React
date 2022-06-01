import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { eventsReducer } from "./features/events/eventsSlice.js"

export const store = configureStore({
  reducer: {
    events: eventsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());

