"use client";

import {
  CustomCounter,
  IncreaseCounter,
  decreaseCounter,
} from "@/Slices/CounterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [customValue, setCustomValue] = useState(0);
  const intialCounter = useSelector((state) => state.CounterSlice.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="number"
        onChange={(e) => dispatch(CustomCounter({ value: e.target.value }))}
      />
      <div className="flex gap-5 items-center ">
        <button
          onClick={() => dispatch(IncreaseCounter())}
          className="px-2 py-2 text-2xl border rounded-md border-black w-10"
        >
          +
        </button>
        <h2 className="text-xl">{intialCounter}</h2>
        <button
          onClick={() => dispatch(decreaseCounter())}
          className="px-2 py-2 text-2xl border rounded-md border-black w-10"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
