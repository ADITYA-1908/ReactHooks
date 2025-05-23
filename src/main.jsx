import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ApiFetch from "./Component/ApiFetch.jsx";
import Home from "./Component/Home.jsx";
import Theory from "./Component/Hooks/Theory.jsx";
import UseCallback from "./Component/Hooks/UseCallback.jsx";
import UseContext from "./Component/Hooks/useContext.jsx";
import UseEffects from "./Component/Hooks/UseEffects.jsx";
import UseFetch from "./Component/Hooks/UseFetch.jsx";
import UseLayout from "./Component/Hooks/UseLayout.jsx";
import UseMemu from "./Component/Hooks/UseMemu.jsx";
import UseReducer from "./Component/Hooks/UseReducer.jsx";
import UseRef from "./Component/Hooks/UseRef.jsx";
import UseState from "./Component/Hooks/UseState.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="theroy" element={<Theory />} />
      <Route path="/usecallback" element={<UseCallback />} />
      <Route path="/useeffect" element={<UseEffects />} />
      <Route path="/usememu" element={<UseMemu />} />
      <Route path="/UseRef" element={<UseRef />} />
      <Route path="/usestate" element={<UseState />} />
      <Route path="/fetchApi" element={<ApiFetch />} />
      <Route path="/usecontext" element={<UseContext />} />
      <Route path="/usereducer" element={<UseReducer />} />
      <Route path="/uselayout" element={<UseLayout />} />
      <Route path="/usefetch" element={<UseFetch />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
