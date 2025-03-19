const Header = () => {
  return (
    <div className="bg-[#1c1c28] text-white shadow-md py-4 px-6 fixed top-0 left-64 right-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Verp-ERP</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white rounded-lg transition">
            + New Task
          </button>
          <button className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-white/10 transition">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;