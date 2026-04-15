import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

export default function PublicLayout() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
}
