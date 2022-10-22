import "./App.css";
import { useState } from "react";
import CounterBasic from "./components/counterBasic";
import CounterAdvanced from "./components/counterAdvanced";
import MyCounter from "./components/myCounter";

function App() {
  // This is the most basic version that starts at a value of 0
  const [count, setCount] = useState(0);

  // This is the solution code for challenge 4.
  // If you would like to see how it works, uncomment it and comment out the other useStates
  // const init = 10
  // const [count, setCount] = useState(init);

  // This is the solution code for challenge 5.
  // If you would like to see how it works, uncomment it and comment out the other useStates
  // const max = 100;
  // let init = Math.floor(Math.random() * max);
  // const [count, setCount] = useState(init);

  const increment = () => {
    setCount(count + 1);
  };

  // This function is used for challenege 1.
  const incrementBy5 = () => {
    setCount(count + 5);
  };

  const decrement = () => {
    // Challenge 3.
    // If the count is 0 then keep it at 0 otherwise decrement.
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {/* <CounterBasic count={count} increment={increment} /> */}
      {/* <CounterAdvanced count={count} increment={increment} decrement={decrement} reset={reset} /> */}

      {/* <CounterAdvanced
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      /> */}

      <MyCounter
        count={count}
        increment={increment}
        incrementBy5={incrementBy5}
        decrement={decrement}
        reset={reset}
      />
    </div>
  );
}

export default App;
