import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface CartDropdownProps {
  onClose: () => void;
}

export default function CartDropdown({ onClose }: CartDropdownProps) {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Dropdown Panel */}
      <div className="absolute top-full right-0 mt-3 w-[420px] max-h-[520px] bg-surface-container-lowest rounded-2xl shadow-2xl shadow-on-surface/10 border border-outline-variant/10 z-50 flex flex-col overflow-hidden animate-[fadeSlideIn_200ms_ease-out]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-xl">shopping_bag</span>
            <h3 className="font-headline font-bold text-on-surface text-sm">
              Meu Carrinho
            </h3>
            <span className="bg-primary-container text-white text-[10px] font-black px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-surface-container-low rounded-lg transition-colors text-slate-400 hover:text-slate-600"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Items List */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12 px-6">
            <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">shopping_cart</span>
            <p className="font-headline font-bold text-on-surface mb-1">Carrinho vazio</p>
            <p className="text-xs text-secondary text-center">Explore nosso marketplace e adicione produtos incríveis!</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-xs text-on-surface truncate">{item.name}</h4>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-300 hover:text-error transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                    >
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-secondary truncate">{item.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-surface-container-lowest rounded-full border border-outline-variant/15">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors"
                      >
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-on-surface">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors"
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span>
                      </button>
                    </div>
                    <span className="font-bold text-xs text-on-surface">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-outline-variant/10 shrink-0 space-y-3 bg-surface-container-lowest">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-secondary">Subtotal</span>
              <span className="font-headline font-extrabold text-on-surface">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full text-center bg-gradient-to-br from-primary to-primary-container text-white font-bold py-3 rounded-xl shadow-lg shadow-primary-container/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all text-sm"
            >
              Finalizar Compra
            </Link>
            <button
              onClick={onClose}
              className="w-full text-center text-xs font-semibold text-secondary hover:text-primary transition-colors py-1"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
