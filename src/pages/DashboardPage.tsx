import AdminHeader from '../components/AdminHeader';
import { dashboardStats, salesChart, popularServices, recentActivities } from '../data/mockData';

export default function DashboardPage() {
  return (
    <>
      <AdminHeader title="Dashboard" />

      <div className="px-8 py-8 max-w-7xl mx-auto space-y-8">
        {/* Indicator Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardStats.map((stat) => (
            <div key={stat.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-100/10 group hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 ${stat.iconBg} ${stat.iconColor} rounded-lg`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <span className={`text-xs font-bold flex items-center gap-1 px-2 py-1 rounded-full ${
                  stat.trendUp
                    ? 'text-tertiary bg-tertiary-fixed/30'
                    : 'text-error bg-error-container'
                }`}>
                  {stat.trend}
                  <span className="material-symbols-outlined text-[12px]">
                    {stat.trendUp ? 'trending_up' : 'trending_down'}
                  </span>
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-extrabold text-slate-900 font-headline">{stat.value}</h3>
            </div>
          ))}
        </section>

        {/* Charts & Activity Bento Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sales Chart */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-slate-100/10 h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-headline">Evolução de Vendas</h4>
                <p className="text-xs text-slate-500">Comparativo mensal de faturamento</p>
              </div>
              <select className="bg-slate-100 border-none rounded-lg text-xs font-semibold px-3 py-1.5 focus:ring-0">
                <option>Últimos 6 meses</option>
                <option>Último ano</option>
              </select>
            </div>
            <div className="flex-1 flex items-end gap-4 pb-4">
              {salesChart.map((bar) => (
                <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group">
                  <div
                    className={`w-full rounded-t-lg relative transition-colors ${
                      bar.active
                        ? 'bg-orange-600 shadow-lg shadow-orange-600/20'
                        : 'bg-slate-100 group-hover:bg-orange-200'
                    }`}
                    style={{ height: `${bar.height}%` }}
                  >
                    {bar.value && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {bar.value}
                      </div>
                    )}
                    {!bar.active && (
                      <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-10 rounded-t-lg" />
                    )}
                  </div>
                  <span className={`text-[10px] font-bold ${bar.active ? 'text-slate-900' : 'text-slate-400'}`}>
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="lg:col-span-4 bg-surface-container-low p-8 rounded-2xl h-[400px] flex flex-col">
            <h4 className="text-lg font-bold text-slate-900 mb-6 font-headline">Serviços Populares</h4>
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {popularServices.map((service) => (
                <div key={service.name}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-slate-700">{service.name}</span>
                    <span className={service.textColor}>{service.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full ${service.color} rounded-full`} style={{ width: `${service.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200/50">
              <button className="w-full text-center text-xs font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase tracking-widest">
                Ver Detalhes
              </button>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-slate-100/10">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold text-slate-900 font-headline">Atividades Recentes</h4>
              <button className="text-xs font-semibold text-orange-600 hover:underline">Limpar log</button>
            </div>
            <div className="divide-y divide-slate-100">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="py-4 flex items-center gap-4 group cursor-pointer hover:bg-slate-50 transition-colors rounded-xl px-2">
                  <div className={`w-10 h-10 rounded-full ${activity.iconBg} flex items-center justify-center ${activity.iconColor} shrink-0`}>
                    <span className="material-symbols-outlined">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">{activity.title}</p>
                    <p className="text-xs text-slate-500">{activity.description}</p>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Promotional Card */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl h-full min-h-[300px]">
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 transition-transform duration-700"
              alt="Luxury pet spa interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYtvKBou1K1tLL5YrSD_Cwp043tzpXHcOzT3_5R6WiFd179ZEM9nixSpX0t4y0Hz1EM5b8DcnOhGO1fb0MFvBXZ0pxQZJtpeDuyB598jCWUVvmgkg9X72tapb5OSvCuxOWCZvTRCE5_H6ZwZgpQ5X4ae1IHvnndx7qPd75THl-mxbSB7vjmgm24nmPjFxqB4roEMqXLlRRRbgv4uGJ3l-6Bckds4fUyPAB8Y8uDPhqLYY1DtkQL8c3c3cOX8VIdU7eonBsEefV6E44"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="bg-orange-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                Dica de Gestão
              </span>
              <h4 className="text-xl font-bold mb-2 font-headline">Aumente seus agendamentos recorrentes</h4>
              <p className="text-sm text-slate-200 mb-6">Ofereça planos mensais para fidelizar seus clientes em 30% mais.</p>
              <button className="flex items-center gap-2 text-sm font-bold bg-white text-slate-900 px-6 py-2.5 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                Saiba Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
