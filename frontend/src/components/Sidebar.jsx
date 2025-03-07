import { Link } from "react-router-dom";
import { FaHome, FaUser, FaClipboardList, FaFileInvoice } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5 fixed">
      <h2 className="text-xl font-semibold mb-6">Menu</h2>
      <ul>
        <li className="mb-4"><Link to="/" className="flex items-center gap-2 hover:text-gray-400"><FaHome /> Dashboard</Link></li>
        <li className="mb-4"><Link to="/clients" className="flex items-center gap-2 hover:text-gray-400"><FaUser /> Clients</Link></li>
        <li className="mb-4"><Link to="/orders" className="flex items-center gap-2 hover:text-gray-400"><FaClipboardList /> Orders</Link></li>
        <li><Link to="/invoices" className="flex items-center gap-2 hover:text-gray-400"><FaFileInvoice /> Invoices</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;