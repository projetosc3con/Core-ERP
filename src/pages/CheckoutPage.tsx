import { useState } from 'react';
import { cartItems as initialCart } from '../data/mockData';

export default function CheckoutPage() {
  const [cart, setCart] = useState(initialCart.map(item => ({ ...item })));

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = 24.5;
  const total = subtotal + taxes;

  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative flex justify-between items-center">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-primary-container -translate-y-1/2 z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold shadow-lg">
              <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <span className="mt-2 text-xs font-semibold text-on-surface">Carrinho</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold ring-4 ring-background">
              <span className="text-sm">2</span>
            </div>
            <span className="mt-2 text-xs font-semibold text-on-surface">Pagamento</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-bold ring-4 ring-background">
              <span className="text-sm">3</span>
            </div>
            <span className="mt-2 text-xs font-medium text-secondary">Confirmação</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-7 space-y-8">
          <section>
            <h2 className="text-3xl font-extrabold tracking-tight mb-8 text-on-surface font-headline">Seu Carrinho</h2>
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="group relative flex gap-6 p-6 bg-surface-container-lowest rounded-xl transition-spring hover:scale-[1.02] hover:shadow-xl shadow-sm">
                  <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-surface-container-low">
                    <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-on-surface">{item.name}</h3>
                        <span className="text-lg font-bold text-primary">{item.priceFormatted}</span>
                      </div>
                      <p className="text-sm text-secondary mt-1">{item.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center bg-surface-container-low rounded-full px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-primary hover:bg-surface-container-high rounded-full transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="mx-4 font-bold text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-primary hover:bg-surface-container-high rounded-full transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-error flex items-center gap-1 text-xs font-medium hover:underline">
                        <span className="material-symbols-outlined text-sm">delete</span>
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Payment Selection */}
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-on-surface font-headline">Método de Pagamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="relative flex items-center p-4 bg-surface-container-lowest rounded-xl border-2 border-primary cursor-pointer shadow-sm">
                <input defaultChecked name="payment" type="radio" className="hidden" />
                <span className="material-symbols-outlined text-primary mr-3">credit_card</span>
                <div className="flex flex-col">
                  <span className="font-bold text-on-surface text-sm">Cartão de Crédito</span>
                  <span className="text-xs text-secondary">Até 12x sem juros</span>
                </div>
                <span className="material-symbols-outlined ml-auto text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </label>
              <label className="relative flex items-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-outline-variant cursor-pointer transition-all">
                <input name="payment" type="radio" className="hidden" />
                <span className="material-symbols-outlined text-secondary mr-3">qr_code_2</span>
                <div className="flex flex-col">
                  <span className="font-bold text-on-surface text-sm">PIX</span>
                  <span className="text-xs text-secondary">5% de desconto extra</span>
                </div>
              </label>
            </div>

            {/* Card Form */}
            <div className="mt-6 p-6 bg-surface-container-low rounded-xl space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Número do Cartão</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-fixed shadow-sm" placeholder="0000 0000 0000 0000" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">Validade</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-fixed shadow-sm" placeholder="MM/AA" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">CVV</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-fixed shadow-sm" placeholder="123" type="text" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-on-secondary-fixed text-inverse-on-surface p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 font-headline">Resumo do Pedido</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center opacity-80">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between items-center opacity-80">
                <span>Frete Estimado</span>
                <span className="text-tertiary-fixed">Grátis</span>
              </div>
              <div className="flex justify-between items-center opacity-80">
                <span>Impostos</span>
                <span>R$ {taxes.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="pt-6 mt-6 border-t border-on-secondary-fixed-variant">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-lg">Total</span>
                  <div className="text-right">
                    <span className="block text-2xl font-black text-primary-container">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs opacity-60">ou 10x de R$ {(total / 10).toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-4">
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-spring hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                Finalizar Compra
                <span className="material-symbols-outlined">lock</span>
              </button>
              <div className="flex items-center justify-center gap-4 py-4 border border-on-secondary-fixed-variant rounded-xl opacity-70">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span className="text-xs font-medium">Pagamento 100% Seguro</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs text-center opacity-60 italic leading-relaxed">
                Ao finalizar, você concorda com nossos termos de serviço e políticas de privacidade da Digital Sanctuary.
              </p>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="mt-6 p-6 bg-tertiary-container text-on-tertiary-container rounded-2xl flex items-center gap-4 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
            <div className="relative z-10">
              <h4 className="font-bold text-lg leading-tight font-headline">Clube Sanctuary</h4>
              <p className="text-xs opacity-90 mt-1">Assine agora e ganhe 15% de desconto fixo.</p>
            </div>
            <span className="material-symbols-outlined text-4xl opacity-20 absolute -right-2 -bottom-2 group-hover:scale-125 transition-transform">pets</span>
          </div>
        </div>
      </div>
    </main>
  );
}
