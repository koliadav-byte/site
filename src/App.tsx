import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import ArchivePage from './pages/Archive';
import NavigatorPage from './pages/Navigator';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/navigator" element={<NavigatorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
