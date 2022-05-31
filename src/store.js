import { configureStore } from '@redux-toolkit';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    // events: EventReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());