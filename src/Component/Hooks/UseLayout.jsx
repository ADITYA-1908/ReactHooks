import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayout = () => {
  const divref = useRef();
  const inputref = useRef();

  useEffect(() => {
    console.log("useeffect");
    inputref.current.value = "subham";
  }, []);

  useLayoutEffect(() => {
    console.log("uselayout");
    const getdivRef = divref.current;
    getdivRef.style.opacity = 0;
    setTimeout(() => {
      getdivRef.style.opacity = 1;
      getdivRef.style.color = "orange";
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        UseLayoutEffect Example
      </h1>
      <div ref={divref} className="text-lg font-medium">
        Hello world
      </div>
      <div>
        <input
          ref={inputref}
          type="text"
          defaultValue="Aditya"
          className="border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
    </div>
  );
};

export default UseLayout;
