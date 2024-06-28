const { createSlice } = require("@reduxjs/toolkit");
const InitalState = {
  counter: 0,
};
const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: InitalState,
  reducers: {
    IncreaseCounter: (state, action) => {
      state.counter++;
    },
    decreaseCounter: (state, action) => {
      if (state.counter <= 0) {
        state.counter = 0;
      } else {
        state.counter--;
      }
    },
    CustomCounter: (state, action) => {
      console.log(action.payload);
      state.counter = state.counter + parseInt(action.payload.value);
    },
  },
});

export const { IncreaseCounter, decreaseCounter, CustomCounter } =
  CounterSlice.actions;

export default CounterSlice.reducer;
