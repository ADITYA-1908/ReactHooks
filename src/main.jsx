import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Component/Home.jsx";
import UseCallback from "./Component/Hooks/UseCallback.jsx";
import UseEffects from "./Component/Hooks/UseEffects.jsx";
import UseMemu from "./Component/Hooks/UseMemu.jsx";
import UseRef from "./Component/Hooks/UseRef.jsx";
import UseState from "./Component/Hooks/UseState.jsx";
import "./index.css";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/usecallback" element={<UseCallback />} />
      <Route path="/useeffect" element={<UseEffects />} />
      <Route path="/usememu" element={<UseMemu />} />
      <Route path="/UseRef" element={<UseRef />} />
      <Route path="/usestate" element={<UseState />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
