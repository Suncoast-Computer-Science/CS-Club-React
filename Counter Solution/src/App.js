import "./App.css";
import { useState } from "react";
import CounterBasic from "./components/counterBasic";
import CounterAdvanced from "./components/counterAdvanced";
import MyCounter from "./components/myCounter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {/* <CounterBasic count={count} increment={increment} /> */}
      {/* <CounterAdvanced count={count} increment={increment} decrement={decrement} reset={reset} /> */}

      <CounterAdvanced count={count} increment={increment} decrement={decrement} reset={reset} />

      {/* <MyCounter />       */}
    </div>
  );
}

export default App;
