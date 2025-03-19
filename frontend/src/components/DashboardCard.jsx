const DashboardCard = ({ title, value, icon, gradient }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg text-white ${gradient} transition hover:scale-105`}
    >
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;