function MyCounter({ count, increment, incrementBy5, decrement, reset }) {
  // prettier-ignore
  return (
    <div className="MyCounter">
      <h1> My Counter </h1>

      {/* Challenge 6. */}
      <h1 className='hundredHeading'>{'💯'.repeat(Math.floor(count/100))}</h1> 

      {/* Challenge 2. */}
      <p> The current count is: {count} </p> 
      <button onClick={incrementBy5}>Increment by 5</button>

      {/* Challenge 1. */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default MyCounter;
