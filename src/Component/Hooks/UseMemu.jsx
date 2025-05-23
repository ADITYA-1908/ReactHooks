import { useMemo, useState } from "react";

function UseMemu() {
  const [number, setNumber] = useState(0);
  const [counter, setcounter] = useState(0);

  function cube(num) {
    console.log("cube");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => {
    return cube(number);
  }, [number]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 gap-6">
      <h1 className="text-3xl font-bold underline text-cyan-700">
        4. useMemo Hook
      </h1>

      <div className="space-y-2">
        <p className="text-xl text-gray-700">* It returns a memoized value.</p>
        <p className="text-xl text-gray-700">
          * It only runs when one of its dependencies is updated.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          className="border border-gray-300 rounded px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p className="text-lg font-medium text-gray-800">
          Cube of the number: {result}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <p className="text-xl text-gray-800">Counter: {counter}</p>
        <button
          onClick={() => setcounter(counter + 1)}
          className="bg-cyan-600 text-white px-4 py-2 rounded shadow hover:bg-cyan-700 transition"
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
}

export default UseMemu;
