import Table from "../components/Table";

const Orders = () => {
  const columns = ["Order ID", "Client", "Product", "Quantity", "Total"];
  const data = [
    { "Order ID": "001", Client: "Red-Rim", Product: "Laptop", Quantity: 1, Total: "$1000" },
    { "Order ID": "002", Client: "Raphinha", Product: "Mouse", Quantity: 2, Total: "$40" },
    { "Order ID": "003", Client: "Salma", Product: "Keyboard", Quantity: 1, Total: "$50" },
  ];

  return (
    <div className="p-8 ml-60">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Orders;