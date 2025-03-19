import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchClients = async () => {
  const response = await axios.get(`${API_URL}/clients`);
  return response.data;
};