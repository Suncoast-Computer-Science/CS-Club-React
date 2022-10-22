// LEVEL 1 - BASIC COUNTER

// This is the basic counter component. It includes a heading that says 'Counter', an element that displays the current count, and a button that increments (adds 1) to the count.
// Notice that the component is a function and takes parameters in and then returns an element. The parameters are used to add functionality to the counter.

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
