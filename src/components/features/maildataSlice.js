import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  mailData: null
};

export const mailSlice = createSlice({
  name: 'maildata',
  initialState,
  reducers: {
    setData1: (state, action) =>{
      state.mailData = action.payload;
    }
  },
});

export const { setData1 } = mailSlice.actions;
export const selectMailData = (state) => state.maildata.mailData;
export default mailSlice.reducer;