import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../features/authSlice';
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authSlice.middleware),
  devTools: false
});
