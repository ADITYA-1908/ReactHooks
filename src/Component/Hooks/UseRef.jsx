import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  // --------------------Mutable--------------------
  const [value, setvalue] = useState(0);

  const count = useRef(0);
  console.log(count);

  const increase = () => {
    setvalue((prv) => prv + 1);
  };
  const decrease = () => {
    setvalue((prv) => prv - 1);
  };

  useEffect(() => {
    count.current++;
    console.log("Component re-rendered");
  });
  {
    /* --------------------Accessing DOM element-------------------- */
  }
  const element = useRef();
  const btmClicked = () => {
    console.log(element.current);
    element.current.style.background = "yellow";
  };

  return (
    <>
      <div className="pb-20">
        <h1 className="underline">3. useref Hook</h1>
        <br />
        <p className="text-xl">
          * useref is a react hook that allow to create mutable variables, which
          will not re-render the component.
        </p>
        <p className="text-xl"> * It is used to for accessing DOM element.</p>
        <br />
        <h1>3.1 Mutable</h1>
        <br />
        <div className="inline-flex items-baseline gap-5">
          <button onClick={increase}>+1</button>
          <h2>count:{value}</h2>
          <button onClick={decrease}>-1</button>
        </div>
        <br />
        <br />
        <br />
        <h2>Render count: {count.current}</h2>

        {/* --------------------Accessing DOM element-------------------- */}
        <h1>3.2 Accessing DOM element</h1>
        <br />
        <input className="m-4 bg-white text-black" type="text" ref={element} />
        <button onClick={btmClicked}>Click here</button>
      </div>
    </>
  );
}

export default UseRef;
