import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar.jsx';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#FDFBFD] flex flex-col font-sans">
      
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}