import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../components/features/mailSlice';
import maildataSlice from '../components/features/maildataSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    maildata:maildataSlice
  },
});
