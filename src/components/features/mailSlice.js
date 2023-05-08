import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  mailId: null,
  mailData: null
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    setMailId: (state, action) => {
      state.mailId = action.payload;
    },
    setData: (state, action) =>{
      state.mailData = action.payload;
    }
  },
});

export const { setMailId , setData } = mailSlice.actions;
export const selectMailId = (state) => state.mail.mailId;
export const selectMailData = (state) => state.mail.mailData;
export default mailSlice.reducer;