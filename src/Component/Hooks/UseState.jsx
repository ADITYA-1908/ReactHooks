import { useState } from "react";

function UseState() {
  // -------------------- Single useState --------------------
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);
  const initialState = { name: "", city: "" };
  const [formData, setFormData] = useState(initialState);

  const changeColor = () =>
    setColor((prev) => (prev === "red" ? "green" : "red"));
  const incCount = () => setCount((prev) => prev + 1);
  const decCount = () => setCount((prev) => (prev === 0 ? 0 : prev - 1));
  const clear = () => setCount(0);

  // -------------------- Multiple useState --------------------
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

  const handleNameChange = (e) =>
    setFormData({ ...formData, name: e.target.value });

  const handleCityChange = (e) =>
    setFormData({ ...formData, city: e.target.value });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12 text-center space-y-10">
      <h1 className="text-3xl font-bold text-indigo-700 underline">
        1. useState Hook
      </h1>

      <div className="space-y-3 max-w-xl">
        <p className="text-xl text-gray-700">
          * useState allows functional components to track and update state.
        </p>
      </div>

      {/* -------------------- Single useState -------------------- */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-semibold">1.1 Single useState</h2>

        <h3 className="text-xl" style={{ color }}>
          The color is {color}!
        </h3>
        <button
          onClick={changeColor}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Switch color to {color === "red" ? "green" : "red"}
        </button>

        <div>
          <h3 className="text-xl mt-6">Increase and Decrease</h3>
          <p className="text-xl font-medium">Count: {count}</p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={incCount}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              +
            </button>
            <button
              onClick={decCount}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              -
            </button>
            <button
              onClick={clear}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* -------------------- Multiple useState -------------------- */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-semibold">1.2 Multiple useState</h2>

        <p className="text-xl">My {car.brand}</p>
        <p className="text-xl" style={{ color: car.color }}>
          It is {car.color}, model {car.model}, bought in {car.year}.
        </p>
        <button
          onClick={changeCarColor}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Switch color
        </button>
      </div>

      {/* -------------------- Form with useState -------------------- */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-semibold">Form Handling with useState</h2>

        <form className="space-y-4">
          <div className="flex flex-col items-start space-y-2">
            <label className="text-gray-700 font-medium">Username:</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleNameChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>

          <div className="flex flex-col items-start space-y-2">
            <label className="text-gray-700 font-medium">City:</label>
            <select
              name="city"
              onChange={handleCityChange}
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="">Select City</option>
              <option value="BBSR">BBSR</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="text-left text-lg">
            <p>
              Name:{" "}
              <span className="font-semibold text-gray-800">
                {formData.name}
              </span>
            </p>
            <p>
              City:{" "}
              <span className="font-semibold text-gray-800">
                {formData.city}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UseState;
