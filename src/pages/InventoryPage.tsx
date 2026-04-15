import AdminHeader from '../components/AdminHeader';
import { inventoryStats, inventoryItems } from '../data/mockData';

export default function InventoryPage() {
  const statusConfig = {
    in_stock: { label: 'Em Estoque', bg: 'bg-tertiary/10', color: 'text-tertiary' },
    low_stock: { label: 'Estoque Baixo', bg: 'bg-error/10', color: 'text-error' },
    out_of_stock: { label: 'Esgotado', bg: 'bg-slate-200', color: 'text-slate-500' },
  };

  return (
    <>
      <AdminHeader title="Gestão de Estoque" breadcrumb="Estoque">
        <div className="h-8 w-[1px] bg-outline-variant/20 mx-2" />
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-spring">
          <span className="material-symbols-outlined">add_circle</span>
          Cadastrar Novo Produto
        </button>
      </AdminHeader>

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {inventoryStats.map((stat) => (
            <div key={stat.label} className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <span className={`material-symbols-outlined ${stat.iconColor}`}>{stat.icon}</span>
                </div>
                {stat.trend && <span className={`text-xs font-bold ${stat.trendColor}`}>{stat.trend}</span>}
              </div>
              <p className="text-secondary text-xs font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-on-surface mt-1 font-headline">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="sticky top-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm mb-6 p-4 flex flex-wrap items-center justify-between gap-4 z-40 border border-outline-variant/5">
          <div className="flex-1 min-w-[300px] relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-60">search</span>
            <input
              className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="Pesquisar produtos por nome, SKU ou categoria..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-4 py-2">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Status:</span>
              <select className="bg-transparent border-none text-sm font-medium text-on-surface focus:ring-0 cursor-pointer">
                <option>Todos</option>
                <option>Em Estoque</option>
                <option>Estoque Baixo</option>
                <option>Esgotado</option>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-4 py-2">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Categoria:</span>
              <select className="bg-transparent border-none text-sm font-medium text-on-surface focus:ring-0 cursor-pointer">
                <option>Todas</option>
                <option>Rações</option>
                <option>Brinquedos</option>
                <option>Higiene</option>
                <option>Acessórios</option>
              </select>
            </div>
            <button className="p-3 bg-surface-container-low hover:bg-surface-container-high rounded-xl text-secondary transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-5 text-[11px] font-bold text-secondary uppercase tracking-widest">Produto</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-secondary uppercase tracking-widest">SKU</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-secondary uppercase tracking-widest">Categoria</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-secondary uppercase tracking-widest">Preço</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-secondary uppercase tracking-widest text-center">Estoque</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-secondary uppercase tracking-widest text-center">Status</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-secondary uppercase tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {inventoryItems.map((item) => {
                  const status = statusConfig[item.status];
                  const isOutOfStock = item.status === 'out_of_stock';
                  return (
                    <tr key={item.id} className="hover:bg-surface-container-low/30 transition-all group cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className={`h-12 w-12 rounded-lg bg-surface-container-high overflow-hidden shrink-0 ${isOutOfStock ? 'grayscale opacity-60' : ''}`}>
                            <img alt={item.name} className="h-full w-full object-cover" src={item.image} />
                          </div>
                          <div>
                            <p className={`font-bold text-sm ${isOutOfStock ? 'text-on-surface/60' : 'text-on-surface'}`}>{item.name}</p>
                            <p className="text-xs text-secondary">{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 font-mono text-xs ${isOutOfStock ? 'text-secondary/60' : 'text-secondary'}`}>{item.sku}</td>
                      <td className={`px-6 py-4 ${isOutOfStock ? 'opacity-60' : ''}`}>
                        <span className="px-3 py-1 bg-surface-container-high text-on-secondary-container text-[11px] font-bold rounded-full">{item.category}</span>
                      </td>
                      <td className={`px-6 py-4 font-semibold text-sm ${isOutOfStock ? 'opacity-60' : ''}`}>{item.price}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`font-bold ${item.status === 'low_stock' ? 'text-error' : isOutOfStock ? 'text-secondary/60' : 'text-on-surface'}`}>
                          {item.stock}
                        </span>
                        <span className={`text-[10px] ml-1 ${isOutOfStock ? 'text-secondary/40' : 'text-secondary'}`}>unid.</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 ${status.bg} ${status.color} text-[10px] font-black rounded-full uppercase tracking-tighter`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end items-center gap-1">
                          <button className="p-2 hover:bg-white rounded-lg text-secondary hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button className="p-2 hover:bg-white rounded-lg text-secondary hover:text-error transition-all">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-5 bg-surface-container-low/30 border-t border-outline-variant/10 flex items-center justify-between">
            <p className="text-xs text-secondary font-medium">
              Exibindo <span className="text-on-surface font-bold">1-4</span> de <span className="text-on-surface font-bold">128</span> produtos
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white rounded-lg text-xs font-bold text-secondary hover:bg-surface-container-high transition-all border border-outline-variant/10">
                Anterior
              </button>
              <button className="px-4 py-2 bg-slate-900 rounded-lg text-xs font-bold text-white hover:bg-slate-800 transition-all">
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
