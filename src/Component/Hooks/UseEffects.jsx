import React, { useEffect, useState } from "react";

function UseEffects() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  const continueTimer = () => {
    setIsRunning(true);
  };
  const clearCount = () => {
    setCount(0);
  };

  return (
    <>
      <br />
      <div className="pb-20">
        <h1 className="underline">2. useEffect Hook</h1>
        <br />
        <p className="text-xl">
          * useEffect is a powerful hook that allows you to perform side effects
          in your functional components.
        </p>
        <p className="text-xl">
          * It includes a parameter of a callback function and an optional
          dependency array ([]).
        </p>
        <pre className="text-xl">
          Example:- <br />
          1. Fetching data from API
          <br />
          2. Updating a state based on an event
          <br />
          3. Listening to a DOM event
          <br />
          4. Timer like setTimeout and setInterval event
          <br />
        </pre>
        <br />
        <h1>Example </h1>
        <br />
        <p className="text-xl">I've rendered {count} times</p>
        <br />
        <button onClick={stopTimer}>Stop</button>
        <button className="ml-2" onClick={continueTimer}>
          Continue
        </button>
        <button className="ml-2" onClick={clearCount}>
          Clear
        </button>
      </div>
    </>
  );
}

export default UseEffects;
