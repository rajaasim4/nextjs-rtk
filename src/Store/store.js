import CounterSlice from "@/Slices/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    CounterSlice: CounterSlice,
  },
});
