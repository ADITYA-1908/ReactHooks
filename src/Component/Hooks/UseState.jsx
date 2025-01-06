import React, { useState } from "react";

function UseState() {
  // --------------------single usestate --------------------
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);

  const changeColor = () => {
    if (color === "red") {
      setColor("cyan");
    } else {
      setColor("red");
    }
  };

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const clear = () => {
    setCount(0);
  };

  // --------------------multiple usestate--------------------
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Corolla",
    color: "red",
    year: 2020,
  });

  const changeCarColor = () => {
    if (car.color === "red") {
      setCar({ ...car, color: "green", brand: "BMW" });
    } else {
      setCar({ ...car, color: "red", brand: "Audi" });
    }
  };

  return (
    <div className="pb-20">
      {" "}
      {/* --------------------single usestate -------------------- */}
      <h1 className="underline">1. useState Hook</h1>
      <br />
      <p className="text-xl">
        It creates a state variable that helps us track changes in components
        and updates the user interface when the state changes.
      </p>
      <br />
      <h1>1.1 Single useState Hook</h1>
      <br />
      <h2 className="text-xl" style={{ color: color }}>
        The color is {color}!
      </h2>
      <br />
      <button onClick={changeColor}>
        Switch color to {color === "red" ? "cyan" : "red"}
      </button>
      <br />
      <br />
      <h2>Increase and Decrease</h2>
      <p className="text-xl">Count: {count}</p>
      <button onClick={incCount} className="m-2">
        +
      </button>
      <button onClick={decCount}>-</button>
      <button onClick={clear} className="m-2">
        Clear
      </button>
      {/* --------------------multiple usestate-------------------- */}
      <br />
      <br />
      <h1>1.2 Multiple useState Hooks</h1>
      <br />
      <p className="text-xl">My {car.brand}</p>
      <br />
      <p className="text-xl" style={{ color: car.color }}>
        It is {car.color} of model {car.model} and I bought it in {car.year}.
      </p>
      <br />
      <button onClick={changeCarColor}>Switch color</button>
    </div>
  );
}

export default UseState;
