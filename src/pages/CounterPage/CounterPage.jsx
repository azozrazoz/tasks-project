import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import s from "./CounterPage.module.scss";
import { addBy, decrement, increment } from "../../store/counterSlice";

function CounterPage() {
    const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter);

  const handlerIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddByTen = () => {
    dispatch(addBy(10));
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          type="button"
          onClick={handleDecrement}
          style={{
            padding: "20px",
            margin: "20px",
            backgroundColor: "lightgray",
          }}
        >
          -1
        </button>
        <button
          type="button"
          onClick={handlerIncrement}
          style={{
            padding: "20px",
            margin: "20px",
            backgroundColor: "lightgray",
          }}
        >
          +1
        </button>
        <button
          type="button"
          onClick={handleAddByTen}
          style={{
            padding: "20px",
            margin: "20px",
            backgroundColor: "lightgray",
          }}
        >
          +10
        </button>
      </div>
    </div>
  );
}

export default CounterPage;
