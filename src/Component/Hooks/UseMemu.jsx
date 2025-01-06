import React, { useMemo, useState } from "react";

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
    <>
      <div className="pb-20">
        <h1 className="underline">4. usememo Hook</h1>
        <br />
        <p className="text-xl">* It return a memorized value.</p>
        <p className="text-xl">
          * It only run when one of it's value get updated.
        </p>
        <div className="inline-flex items-baseline gap-5 mt-4 mb-6">
          <input
            className="bg-white text-black"
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
          <p>Cube of a number: {result}</p>
        </div>
        <br />
        <div className="inline-flex items-baseline gap-5 mt-4 mb-6">
          <p className="text-xl">Counter: {counter}</p>
          <button
            onClick={() => {
              setcounter(counter + 1);
            }}
          >
            Counter
          </button>
        </div>
      </div>
    </>
  );
}

export default UseMemu;
