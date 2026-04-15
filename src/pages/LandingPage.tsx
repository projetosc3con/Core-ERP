import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/mockData';

export default function LandingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative px-6 py-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6 z-10">
            <span className="inline-block px-4 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold uppercase tracking-widest">
              New Arrival
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter font-headline">
              Seu pet merece <span className="text-primary-container">o melhor</span> santuário.
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-md">
              Produtos curados e serviços premium para o bem-estar do seu melhor amigo. Qualidade editorial em cada detalhe.
            </p>
            <div className="flex gap-4">
              <Link
                to="/checkout"
                className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary-container/20 transition-spring hover:scale-105 active:scale-95"
              >
                Explorar Agora
              </Link>
              <button className="px-8 py-4 rounded-xl font-bold text-on-surface hover:bg-surface-container-low transition-all">
                Ver Coleções
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container-high group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="French Bulldog in designer raincoat"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGew2DQ2sLLvxTlFGUeM_l1IKpTuWwu8kkgBsOm5EeyJoBhCDhT6JF-sc1zK-Np0NdBKlSx1KKUXFrBiZ-CPZO0hQLqUHT34qRom2qbNij6fg7gad74wQROUszrbVFHtW5lehtybvsu_QiZOPHhqHoAda4BBHN1sf4heEySi3OAZEW0CSIsZnTMbRZIBv4fu-UbpREeGobhuTu1z1HYexv4cGtiMO_yDVBS7KWFXRmmtgHGiTwLHjPDYvb64UuckehRR1hk7rbAGPN"
              />
              <div className="absolute bottom-8 left-8 bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl">
                <p className="font-headline font-bold text-slate-900">Featured collection</p>
                <p className="text-slate-700 text-sm">Outdoor Essentials 2024</p>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Featured Products Bento Grid */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-on-surface tracking-tight font-headline">Destaques da Estação</h2>
              <p className="text-secondary mt-2">Escolhas inteligentes para pets felizes.</p>
            </div>
            <Link to="#" className="text-primary-container font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Ver tudo <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Bento Card */}
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="z-10">
                <span className="text-primary-container font-bold text-sm">Best Seller</span>
                <h3 className="text-3xl font-bold mt-2 font-headline">Camas Ortopédicas Premium</h3>
                <p className="text-secondary mt-2 max-w-[200px]">Conforto absoluto para o descanso do seu pet.</p>
                <button className="mt-6 bg-on-surface text-white px-6 py-2 rounded-full text-sm font-bold">Comprar</button>
              </div>
              <img
                className="absolute -bottom-10 -right-10 w-3/4 object-contain transition-transform duration-500 group-hover:scale-105 translate-y-4 group-hover:translate-y-0"
                alt="Orthopedic dog bed"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4QZJEJHastkNzB49naNMgc6yUXYEFaO9KAfmwanDEysaMa-cvOAJHu7TDroQY97lEF8KCB8_ntGDmQdWdXYfd37oXAI5A8iSQDMHm4MVMMOhJH4vbtlExFnJ_DSDqffISvL2UexTRhkFm4ToOUI9iNrGCdtR7Wrxk0_EEnzl8a6Sts-k2EQLSdDp1t5ZSebON_q3d9bvgrX_7HaTa4n-PzKM1AmaqOTy-Lr0RMJJDvE-PnXSEa7O9Ey1DHcgmviAwulRlm0m0urK"
              />
            </div>

            {/* Small Eco Toys Card */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-3xl p-8 flex items-center gap-6 overflow-hidden group">
              <div className="flex-1">
                <h3 className="text-xl font-bold font-headline">Brinquedos Ecológicos</h3>
                <p className="text-secondary text-sm">Sustentabilidade e diversão.</p>
                <span className="text-primary-container font-bold block mt-4">R$ 49,90</span>
              </div>
              <div className="w-32 h-32 rounded-2xl bg-tertiary-container/10 flex items-center justify-center p-4">
                <img
                  className="w-full h-full object-contain group-hover:rotate-12 transition-transform"
                  alt="Eco toys"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGdyllA7BGa-dDUFq7qhYkkVfO2O1I07x2DA2AMgyQduxZCA1u-h9O31q4wfslmWPZ4fexlCpqPVlBDZEkQ14iJMiwatHkA-De_hGmyCZgpINChI4IXWfDp-5VvGCnFlX-HhNNB5yNr1qYO1uG0a4NdD5QH8OqqLrYY1KN3KioZ0ApHoi74r6ZE-Z16oUrIBlSn6SNrwhD0v7d_CIeV7Opt2ykBitI0TYhKpX0j1ysppOOPS7YmrDbHRCTUhpP5Uz10ag_19hC4LV"
                />
              </div>
            </div>

            {/* Hygiene Kit */}
            <div className="md:col-span-1 bg-surface-container-highest rounded-3xl p-6 flex flex-col justify-between group">
              <div className="h-40 w-full rounded-xl overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  alt="Grooming brush set"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7HKmL53kgy_PbKpxk_VarjHEqOzVNne-gl7XYERLXA7D2-ws7pL0O_Qp7lcCxoi0r4akY7g0bM9mHPQfHZoO3mevskw3JaBzK-rVprrO_clv4SdPvi1xJ13TvbL6W2XMC0Mz79oSEt5W9qJzl6MEFgPbBYhSRTpwJiyYoI9noUQsHxTDhZ7s2BQoPsr63zL90X1_8kFUmrz3V1FvNYJc96ZJAdNFkilMNafX5EGmbknCw-qtJWmrU7oyXmnjoDPbh3JxaIa5Lgv1A"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">Kit Higiene Deluxe</h3>
                <p className="text-primary-container font-bold text-lg mt-1">R$ 129,00</p>
              </div>
            </div>

            {/* Club CTA */}
            <div className="md:col-span-1 bg-primary-container text-white rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="z-10">
                <h3 className="font-bold text-lg font-headline">Assine o Club</h3>
                <p className="text-sm opacity-90 mt-2">Ganhe 15% OFF em todas as compras.</p>
              </div>
              <button className="z-10 mt-6 bg-white text-primary-container px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                Assinar
              </button>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-20">pets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid with Sidebar Filters */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-10">
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined">filter_list</span> Categorias
              </h4>
              <ul className="space-y-3">
                <li><button className="w-full text-left px-4 py-2 rounded-lg bg-orange-100 text-orange-700 font-semibold transition-all">Todos os Produtos</button></li>
                <li><button className="w-full text-left px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-all">Cães</button></li>
                <li><button className="w-full text-left px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-all">Gatos</button></li>
                <li><button className="w-full text-left px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-all">Aves & Outros</button></li>
                <li><button className="w-full text-left px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-all">Alimentação</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 font-headline">Preço</h4>
              <input className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary-container" type="range" />
              <div className="flex justify-between text-xs text-secondary mt-2">
                <span>R$ 0</span>
                <span>R$ 1000+</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl">
              <h4 className="font-bold text-sm mb-4">Newsletter</h4>
              <p className="text-xs text-secondary mb-4">Receba dicas de cuidado e promoções exclusivas.</p>
              <input className="w-full bg-white border-none rounded-lg px-4 py-2 text-xs mb-2" placeholder="E-mail" type="email" />
              <button className="w-full bg-primary text-white py-2 rounded-lg text-xs font-bold">Enviar</button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            <div className="flex justify-between items-center mb-8">
              <p className="text-secondary text-sm">
                <span className="font-bold text-on-surface">24</span> produtos encontrados
              </p>
              <select className="bg-transparent border-none text-sm font-medium focus:ring-0">
                <option>Ordenar por: Relevância</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-surface-container-lowest aspect-[4/5] rounded-[1.5rem] p-4 flex flex-col transition-spring hover:scale-[1.02] hover:shadow-2xl hover:shadow-on-surface/5 relative">
                    <button className="absolute top-6 right-6 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-300 hover:text-red-500 transition-colors shadow-md">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <div className="flex-1 flex items-center justify-center p-6">
                      <img
                        className="max-w-full max-h-full object-contain -mt-8 group-hover:scale-110 transition-transform duration-500"
                        alt={product.name}
                        src={product.image}
                      />
                    </div>
                    <div className="space-y-2">
                      {product.rating && (
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-orange-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-xs font-bold">{product.rating}</span>
                          <span className="text-xs text-secondary">({product.reviews} reviews)</span>
                        </div>
                      )}
                      <h3 className="font-headline font-bold text-on-surface">{product.name}</h3>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xl font-black text-on-surface">{product.price}</span>
                        <button className="w-10 h-10 bg-on-surface text-white rounded-full flex items-center justify-center transition-transform active:scale-90">
                          <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-bold">1</button>
              <button className="w-10 h-10 rounded-lg hover:bg-surface-container-high flex items-center justify-center font-bold">2</button>
              <button className="w-10 h-10 rounded-lg hover:bg-surface-container-high flex items-center justify-center font-bold">3</button>
              <button className="w-10 h-10 rounded-lg hover:bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
        <span className="material-symbols-outlined">support_agent</span>
      </button>
    </main>
  );
}
