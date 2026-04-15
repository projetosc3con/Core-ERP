import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';

import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import InventoryPage from './pages/InventoryPage';
import CheckoutPage from './pages/CheckoutPage';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Standalone Login (no layout) */}
          <Route path="/login" element={<LoginPage />} />

          {/* Public Routes (TopNav + Footer) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>

          {/* Admin Routes (Sidebar + Content) */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="agenda" element={<SchedulePage />} />
            <Route path="estoque" element={<InventoryPage />} />
            {/* Placeholder routes for other admin pages */}
            <Route path="perfis" element={<DashboardPage />} />
            <Route path="funcionarios" element={<DashboardPage />} />
            <Route path="clientes" element={<DashboardPage />} />
            <Route path="pets" element={<DashboardPage />} />
            <Route path="servicos" element={<DashboardPage />} />
            <Route path="marketplace" element={<DashboardPage />} />
            <Route path="fornecedores" element={<DashboardPage />} />
            <Route path="categorias" element={<DashboardPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}
