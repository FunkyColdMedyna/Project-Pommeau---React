import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import logger from 'redux-logger';
import { eventsReducer } from "./features/events/eventsSlice.js"
import { marketsReducer } from './features/market/marketsSlice.js';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    market: marketsReducer,
    user: useReducer,
    //  comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());

