import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../components/features/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
