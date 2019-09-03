import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count => count + 1);
  };

  const decrement = () => {
    setCount(count => count - 1);
  };

  return (
    <>
      <div className="t-count">{count}</div>
      <button className="t-inc" onClick={increment}>Increment</button>
      <button className="t-dec" onClick={decrement}>Decrement</button>
    </>
  );
};
