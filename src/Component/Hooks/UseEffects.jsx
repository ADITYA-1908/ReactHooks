import { useEffect, useState } from "react";

function UseEffects() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [showState, setShowText] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const stopTimer = () => setIsRunning(false);
  const continueTimer = () => setIsRunning(true);
  const clearCount = () => setCount(0);

  useEffect(() => {
    if (count === 5) setShowText(true);
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4 gap-6">
      <h1 className="text-3xl font-bold underline text-cyan-700">
        2. useEffect Hook
      </h1>

      <div className="space-y-2">
        <p className="text-xl text-gray-700">
          * useEffect is a powerful hook that allows you to perform side effects
          in functional components.
        </p>
        <p className="text-xl text-gray-700">
          * It includes a callback function and an optional dependency array{" "}
          <code>[]</code>.
        </p>
        <pre className="text-left text-md text-gray-800 bg-white p-4 rounded shadow">
          Example: 1. Fetching data from API 2. Updating a state based on an
          event 3. Listening to a DOM event 4. Timer like setTimeout/setInterval
        </pre>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">Example 1</h2>
        <p className="text-xl">I've rendered {count} times</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <button
            onClick={stopTimer}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Stop
          </button>
          <button
            onClick={continueTimer}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Continue
          </button>
          <button
            onClick={clearCount}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">Example 2</h2>
        <p className="text-xl">Your count: {count}</p>
        {showState && (
          <p className="text-green-700 font-semibold text-lg">
            ✅ Task Complete!
          </p>
        )}
      </div>
    </div>
  );
}

export default UseEffects;
