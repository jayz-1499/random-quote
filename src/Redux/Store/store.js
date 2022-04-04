import { configureStore } from '@reduxjs/toolkit'
import QuoteSlice from '../Slice/randomQuoteSlice';
export const store = configureStore({
  reducer: {
    quote:QuoteSlice,
  },
})