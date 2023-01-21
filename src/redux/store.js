import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsReducer } from './contacts/contactsSlice';
import { contactsFilterReducer } from './contacts/filterSlice';
import { authPresistedReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authPresistedReducer,
    contacts: contactsReducer,
    filter: contactsFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
