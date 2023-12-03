import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount( count + 1)
  };
  return <div onClick={handleIncrement}>Increment {count}</div>;
};

export default Counter;
