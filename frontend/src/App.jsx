import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Invoices from './pages/Invoices';
import Orders from './pages/Orders';

const App = () => (
  <BrowserRouter>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  </BrowserRouter>
);

export default App; 