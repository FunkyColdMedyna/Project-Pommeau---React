import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import logger from 'redux-logger';
import { eventsReducer } from "./features/events/eventsSlice.js"
import { marketsReducer } from './features/market/marketsSlice.js';
import { postsReducer } from './features/posts/postsSlice.js';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    market: marketsReducer,
    user: useReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());

