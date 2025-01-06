import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-screen bg-gray-200 h-screen flex items-center justify-center">
      {/* Big Box */}
      <div className="w-1/3 h-4/5 bg-cyan-500 flex items-center justify-center">
        {/* Row of Small Boxes */}
        <div className="flex flex-col gap-4 items-center">
          <div className="w-80 h-20 bg-yellow-500 flex items-center justify-center">
            <NavLink
              to="/usestate"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Use State
            </NavLink>
          </div>
          <div className="w-80 h-20 bg-yellow-500 flex items-center justify-center">
            <NavLink
              to="/useeffect"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Use Effect
            </NavLink>
          </div>
          <div className="w-80 h-20 bg-yellow-500 flex items-center justify-center">
            <NavLink
              to="/UseRef"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Use Ref
            </NavLink>
          </div>
          <div className="w-80 h-20 bg-yellow-500 flex items-center justify-center">
            <NavLink
              to="/usecallback"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Use Call Back
            </NavLink>
          </div>
          <div className="w-80 h-20 bg-yellow-500 flex items-center justify-center">
            <NavLink
              to="/usememu"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Use memu
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
