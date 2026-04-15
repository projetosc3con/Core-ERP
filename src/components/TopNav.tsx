import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartDropdown from './CartDropdown';

export default function TopNav() {
  const location = useLocation();
  const isCart = location.pathname === '/checkout';
  const { totalItems } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 font-headline">
            SeoPet
          </Link>
          <div className="hidden md:flex gap-6 items-center font-headline text-sm font-medium">
            <Link
              to="/"
              className="text-slate-600 hover:text-orange-600 transition-all duration-400 hover:scale-105"
            >
              Sobre nós
            </Link>
            <Link
              to="/"
              className="text-slate-600 hover:text-orange-600 transition-all duration-400 hover:scale-105"
            >
              Contato
            </Link>
            <Link
              to="/"
              className="text-white bg-orange-600 rounded-full px-4 py-1.5 transition-all duration-400 hover:scale-105"
            >
              Serviços
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              className="bg-surface-container-low border-none rounded-full px-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary-container"
              placeholder="Buscar produtos..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400">
              search
            </span>
          </div>
          <div className="flex gap-3">
            {/* Cart Button with Badge & Dropdown */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={toggleDropdown}
                className={`relative p-2 hover:text-orange-600 transition-all active:scale-90 ${isCart || isDropdownOpen ? 'text-orange-600' : 'text-slate-600'
                  }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={isCart || isDropdownOpen ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  shopping_cart
                </span>

                {/* Badge */}
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-primary-container text-white text-[10px] font-black rounded-full px-1 leading-none shadow-sm shadow-primary-container/30 animate-[popIn_300ms_ease-out]">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              {/* Floating Cart Dropdown */}
              {isDropdownOpen && (
                <CartDropdown onClose={() => setIsDropdownOpen(false)} />
              )}
            </div>

            <Link
              to="/login"
              className="p-2 text-slate-600 hover:text-orange-600 transition-all active:scale-90"
            >
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
