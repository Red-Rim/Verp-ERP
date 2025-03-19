import { Home, Users, FileText, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-[#1e1e2f] to-[#2b2b42] w-64 h-screen p-6 fixed">
      <h2 className="text-2xl font-semibold text-white mb-10 tracking-wide">Menu</h2>
      <nav className="flex flex-col gap-6">
        {[
          { icon: <Home />, label: 'Dashboard', path: '/' },
          { icon: <Users />, label: 'Clients', path: '/clients' },
          { icon: <FileText />, label: 'Invoices', path: '/invoices' },
          { icon: <ShoppingCart />, label: 'Orders', path: '/orders' }
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center gap-4 text-gray-300 hover:bg-white/10 py-3 px-4 rounded-lg transition"
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;