function CounterBasic({ count, increment }) {
  return (
    <div className="CounterBasic">
      <h1> Counter </h1>
      <p> {count} </p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterBasic;
