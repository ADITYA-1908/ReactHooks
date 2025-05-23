import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [value, setvalue] = useState(0);
  const count = useRef(0);

  const increase = () => setvalue((prev) => prev + 1);
  const decrease = () => setvalue((prev) => prev - 1);

  useEffect(() => {
    count.current++;
    console.log("Component re-rendered");
  });

  // Accessing DOM element
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current);
    inputRef.current.style.background = "yellow";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4 gap-6">
      <h1 className="text-3xl font-bold underline text-indigo-700">
        3. useRef Hook
      </h1>

      <div className="space-y-2 max-w-xl">
        <p className="text-xl text-gray-700">
          * useRef is a React hook that allows you to create mutable variables,
          which do not trigger re-renders.
        </p>
        <p className="text-xl text-gray-700">
          * It is also used for directly accessing DOM elements.
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          3.1 Mutable Example
        </h2>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={increase}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            +1
          </button>
          <h2 className="text-xl font-medium">Count: {value}</h2>
          <button
            onClick={decrease}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            -1
          </button>
        </div>
        <h2 className="text-lg text-gray-700">Render count: {count.current}</h2>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          3.2 Accessing DOM Element
        </h2>
        <input
          type="text"
          ref={inputRef}
          className="bg-gray-200 px-4 py-2 rounded text-black"
        />
        <button
          onClick={handleClick}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Click to Highlight Input
        </button>
      </div>
    </div>
  );
}

export default UseRef;
