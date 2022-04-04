import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getQuote = createAsyncThunk('quote/getQuote', async () => {
  let {data:res} = await axios.get(
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  );  
  return res;
  
});

export const QuoteSlice = createSlice({
  name: 'quote',
  initialState:{
      qoutes:[],
      loading:false,
      status: '',
  },
  reducers: {},
  extraReducers:{
    [getQuote.pending]: (state)=> {
    console.log('pending');  
    state.loading = true;
    state.status='loading';
    },
    [getQuote.fulfilled]:(state,action)=> {
        state.qoutes = [...action.payload.quotes];
        console.log('done');
        state.loading= false;
        state.status='success';    
    }
  },

});

export default QuoteSlice.reducer;
