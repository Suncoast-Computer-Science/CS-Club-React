function CounterAdvanced({ count, increment, decrement, reset }) {
  return (
    <div className="CounterAdvanced">
      <h1> Counter </h1>
      <p> {count} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterAdvanced;
