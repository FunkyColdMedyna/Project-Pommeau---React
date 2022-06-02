import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { eventsReducer } from "../features/events/eventsSlice.js"
import { producerReducer } from '../features/producers/producersSlice.js';
import { marketsReducer } from '../features/market/marketsSlice.js';
import { userReducer } from '../features/user/userSlice.js';


export const store = configureStore({
  reducer: {
    events: eventsReducer,
    producers: producerReducer,
    markets: marketsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());

