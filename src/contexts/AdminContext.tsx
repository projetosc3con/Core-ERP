import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AdminContextType {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 1024);

  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  // Responsive default
  useEffect(() => {
    const handleResize = () => {
      // Don't auto-toggle once user has interacted? 
      // For now just handle initial load or large jumps
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AdminContext.Provider value={{ sidebarCollapsed, toggleSidebar }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within an AdminProvider');
  return context;
}
