import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend } from 'recharts';

//arear Chart
const areaData = [
  { name: 'January', revenue: 4000, orders: 2400 },
  { name: 'February', revenue: 5000, orders: 3000 },
  { name: 'March', revenue: 6000, orders: 4000 },
  { name: 'April', revenue: 7000, orders: 5000 },
];

//donut Chart
const donutData = [
  { name: 'Revenue', value: 4000, color: '#4f46e5' },
  { name: 'Orders', value: 3000, color: '#10b981' },
  { name: 'Clients', value: 1000, color: '#f97316' },
  { name: 'Invoices', value: 2000, color: '#ef4444' },
];

const Chart = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Area Chart */}
      <div className="bg-[#1e1e2f] rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Revenue and Orders</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: '#2b2b42', color: '#f4f4f9' }} />
            <Legend />
            <Area type="monotone" dataKey="revenue" stroke="#4f46e5" fill="#4f46e5" />
            <Area type="monotone" dataKey="orders" stroke="#10b981" fill="#10b981" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Donut Chart */}
      <div className="bg-[#1e1e2f] rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Performance Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {donutData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <PieTooltip contentStyle={{ backgroundColor: '#2b2b42', color: '#f4f4f9' }} itemStyle={{ color: '#f4f4f9' }} />
            <PieLegend iconSize={10} layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ color: '#f4f4f9' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;