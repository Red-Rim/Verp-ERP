import Table from "../components/Table";

const Invoices = () => {
  const columns = ["Invoice ID", "Client", "Price", "Date", "Status"];
  const data = [
    { "Invoice ID": "#01", Client: "Red-Rim", Price: "$400", Date: "2025-03-01", Status: "Paid" },
    { "Invoice ID": "#02", Client: "Raphinha", Price: "$300", Date: "2025-03-02", Status: "Pending" },
    { "Invoice ID": "#03", Client: "Salma", Price: "$200", Date: "2025-03-03", Status: "unpaid" },
  ];

  return (
    <div className="p-8 ml-60">
      <h2 className="text-xl font-bold mb-4">Invoices</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Invoices;