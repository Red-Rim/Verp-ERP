import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { DollarSign, Users, FileText, ShoppingCart } from 'react-feather'; //icons
import Chart from '../components/Chart';

const Dashboard = () => {
  return (
    <div className="p-8 ml-64 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Total Revenue"
        value="$1900"
        icon={<DollarSign size={28} />}
        gradient="bg-gradient-to-r from-[#4f46e5] to-[#4338ca]"
      />
      <DashboardCard
        title="Orders"
        value="15"
        icon={<ShoppingCart size={28} />}
        gradient="bg-gradient-to-r from-[#10b981] to-[#059669]"
      />
      <DashboardCard
        title="Clients"
        value="3"
        icon={<Users size={28} />}
        gradient="bg-gradient-to-r from-[#f97316] to-[#ea580c]"
      />
      <DashboardCard
        title="Invoices"
        value="5"
        icon={<FileText size={28} />}
        gradient="bg-gradient-to-r from-[#ef4444] to-[#dc2626]"
      />
      <div className="col-span-4">
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;