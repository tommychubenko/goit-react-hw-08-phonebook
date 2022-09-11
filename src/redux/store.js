import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './authSlice';
// import { contactsApi } from './oldContactsApi';

export const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persisted = persistReducer(persistConfig, user);

export const store = configureStore({
  reducer: {
    user: persisted,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
