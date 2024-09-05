// src/Counter.js
import React, { useState } from 'react';
import './style.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-container">
        <button onClick={incrementCounter}>+1</button>
        <button onClick={decrementCounter}>-1</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
