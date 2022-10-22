import "./App.css";
import { useState } from "react";
import CounterBasic from "./components/counterBasic";
import CounterAdvanced from "./components/counterAdvanced";

function App() {
  const [count, setCount] = useState(0);

  // When this function is called it runs setCount to incrememnt the stores 'count' value by 1.
  const increment = () => {
    setCount(count + 1); // In more traditional styles of programming, this is the equivalent of 'count = count+1'
  };

  const decrement = () => {
    // Add functionality that will decrement the current count
    // Write code here:
  };

  const reset = () => {
    // Add functionality that will reset the counter to 0
    // Write code here:
  };

  return (
    <div className="App">
      <CounterBasic count={count} increment={increment} />

      {/* When you are ready to use CounterAdvanced, comment the above line out and uncomment the below line (make sure to fill in all of the arguments) */}
      {/* <CounterAdvanced count={} increment={} decrement={} reset={} /> */}
    </div>
  );
}

export default App;
