import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-white p-8 shadow-lg">
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-teal-200"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-teal-200"
            }
          >
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-teal-200"
            }
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/invoices"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-teal-200"
            }
          >
            Invoices
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}