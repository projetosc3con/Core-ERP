import { Link } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';

interface AdminHeaderProps {
  title: string;
  breadcrumb?: string;
  children?: React.ReactNode;
}

export default function AdminHeader({ title, breadcrumb, children }: AdminHeaderProps) {
  const { toggleSidebar, sidebarCollapsed } = useAdmin();

  return (
    <header className="sticky top-0 w-full z-10 glass-nav bg-slate-100/80 px-8 py-4 flex justify-between items-center border-b border-slate-200">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-lg hover:bg-slate-200/50 text-slate-600 transition-colors active:scale-90"
          title={sidebarCollapsed ? "Expandir menu" : "Recolher menu"}
        >
          <span className="material-symbols-outlined">
            {sidebarCollapsed ? 'menu_open' : 'menu'}
          </span>
        </button>
        <div>
          {breadcrumb && (
            <nav className="flex items-center gap-2 text-xs font-medium text-secondary mb-1">
              <Link to="/admin" className="hover:text-primary transition-colors">Dashboard</Link>
              <span className="material-symbols-outlined text-[12px] opacity-40">chevron_right</span>
              <span className="text-on-surface">{breadcrumb}</span>
            </nav>
          )}
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 font-headline">{title}</h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input
            className="bg-surface-container-low border-none rounded-full px-5 py-2 text-sm focus:ring-2 ring-orange-600/20 w-64"
            placeholder="Buscar serviços..."
            type="text"
          />
          <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 text-sm">
            search
          </span>
        </div>
        <div className="flex gap-2">
          <Link to="/login" className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-all">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
        {children}
      </div>
    </header>
  );
}
