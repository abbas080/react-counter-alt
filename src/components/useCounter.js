import { useState } from "react";

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const setValue = () => {
    setCount(10);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return {count, increment, decrement, setValue, reset};
}

export default useCounter;
