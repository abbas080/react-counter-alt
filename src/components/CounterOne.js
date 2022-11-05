import React from "react";
import useCounter from "./useCounter";
import { Helmet } from "react-helmet-async";

const CounterOne = () => {
  const { increment, decrement, setValue, reset, count } = useCounter(0, 2);

  return (
    <>
      <Helmet>
        <title>CounterOne</title>
        <meta
          name="description"
          content="A counter created using custom-hook"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1 className="header">CounterOne</h1>
      <div className="App">
        <h2 className="count">Count = {count}</h2>
        <div className="buttons">
          <button onClick={increment} className="increment">
            INCREMENT
          </button>
          <button onClick={decrement} className="decrement">
            DECREMENT
          </button>
          <button onClick={setValue} className="setValue">
            SETVALUE
          </button>
          <button onClick={reset} className="reset">
            RESET
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterOne;
