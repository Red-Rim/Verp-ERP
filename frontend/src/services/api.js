const API_URL = "http://localhost:5000/api";

// Fetch Clients
export const getClients = async () => {
  const res = await fetch(`${API_URL}/clients`);
  return await res.json();
};

// Fetch Orders
export const getOrders = async () => {
  const res = await fetch(`${API_URL}/orders`);
  return await res.json();
};
