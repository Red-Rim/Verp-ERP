import Table from "../components/Table";

const Clients = () => {
  const columns = ["ID", "Name", "Email", "Phone", "Status"];
  const data = [
    { ID: 1, Name: "Red-Rim", Email: "rimy@gmail.com", Phone: "000-000-000", Status: "Active" },
    { ID: 2, Name: "Raphinha", Email: "rapha@gmail.com", Phone: "222-222-222", Status: "Active" },
    { ID: 3, Name: "Salma", Email: "salma@gmail.com", Phone: "333-333-333", Status: "Inactive" },
  ];

  return (
    <div className="p-8 ml-60">
      <h2 className="text-xl font-bold mb-4">Clients</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Clients;