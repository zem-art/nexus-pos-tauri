import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Tambahkan route lain di sini nanti */}
        {/* <Route path="/pos" element={<POSPage />} /> */}
      </Routes>
    </Router>
  );
}