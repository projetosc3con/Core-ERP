import { Link, useLocation } from 'react-router-dom';
import { adminNavItems } from '../data/mockData';
import { useAdmin } from '../contexts/AdminContext';
import logo from '../assets/logo.png';

export default function Sidebar() {
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useAdmin();

  const isActive = (path: string) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {!sidebarCollapsed && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen bg-slate-100 p-4 gap-2 z-40 shrink-0 transition-all duration-300 border-r border-slate-200 flex flex-col
        ${sidebarCollapsed ? '-translate-x-full md:translate-x-0 md:w-20' : 'translate-x-0 w-64'}
      `}
      >
        {/* Brand */}
        <div className={`mb-8 px-2 shrink-0 flex items-center gap-3 ${sidebarCollapsed ? 'md:justify-center' : ''}`}>
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg object-contain" />
          <div className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${sidebarCollapsed ? 'md:w-0' : 'w-auto'}`}>
            <h1 className="text-lg font-black text-slate-900 tracking-tight font-headline">Corerp</h1>
            <p className="text-xs text-slate-500 font-medium">SeoPet</p>
          </div>
          {/* Close button for mobile only */}
          <button onClick={toggleSidebar} className="md:hidden ml-auto p-2 text-slate-500 hover:text-slate-900">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto sidebar-scroll pr-1">
          {adminNavItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => { if (window.innerWidth < 768) toggleSidebar(); }}
                title={sidebarCollapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg transition-all cursor-pointer ${sidebarCollapsed ? 'md:justify-center' : ''} ${active
                  ? 'bg-orange-100 text-orange-700 font-semibold'
                  : 'text-slate-500 hover:bg-slate-200/50 hover:translate-x-1'
                  }`}
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className={`text-sm overflow-hidden whitespace-nowrap transition-all duration-300 ${sidebarCollapsed ? 'md:w-0 md:opacity-0' : 'w-auto opacity-100'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto space-y-4 pt-4 shrink-0">
        <Link
            to="/admin/agenda"
            onClick={() => { if (window.innerWidth < 768) toggleSidebar(); }}
            className={`w-full bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-orange-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 overflow-hidden ${sidebarCollapsed ? 'md:px-0' : 'px-4'}`}
          >
            <span className="material-symbols-outlined shrink-0">calendar_month</span>
            <span className={`whitespace-nowrap transition-all duration-300 ${sidebarCollapsed ? 'md:w-0 md:opacity-0' : 'w-auto opacity-100'}`}>
              Agenda
            </span>
          </Link>
          <div className={`flex items-center gap-3 px-2 py-2 bg-slate-200/50 rounded-lg ${sidebarCollapsed ? 'md:justify-center' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 shrink-0">
              <span className="material-symbols-outlined text-sm">person</span>
            </div>
            <div className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${sidebarCollapsed ? 'md:w-0' : 'w-auto'}`}>
              <p className="text-xs font-bold text-slate-900 truncate">Dr. Ricardo</p>
              <p className="text-[10px] text-slate-500 truncate">Admin PetShop</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
