import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { AdminProvider } from '../contexts/AdminContext';

export default function AdminLayout() {
  return (
    <AdminProvider>
      <div className="bg-background text-on-background flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto relative bg-surface">
          <Outlet />
        </main>
      </div>
    </AdminProvider>
  );
}
