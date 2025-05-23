import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/theroy", label: "Theory" },
  { path: "/usestate", label: "Use State" },
  { path: "/useeffect", label: "Use Effect" },
  { path: "/UseRef", label: "Use Ref" },
  { path: "/Usereducer", label: "Use Reducer" },
  { path: "/Uselayout", label: "Use Layout" },
  { path: "/Usefetch", label: "Use Fetch" },
  { path: "/usecallback", label: "Use Callback" },
  { path: "/usememu", label: "Use Memo" },
  { path: "/usecontext", label: "use Context" },
  { path: "/fetchApi", label: "Fetch API" },
];

export default function Header() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-cyan-300 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          React Hooks Navigation
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block text-center py-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out shadow-md hover:scale-105 ${
                  isActive
                    ? "bg-orange-100 text-orange-700"
                    : "bg-yellow-400 text-gray-800 hover:bg-yellow-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
