import AdminHeader from '../components/AdminHeader';
import { weekSchedule, type Appointment } from '../data/mockData';

function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const typeConfig = {
    tosa: { label: 'Tosa', bg: 'bg-orange-100', color: 'text-primary-container' },
    banho: { label: 'Banho', bg: 'bg-orange-100', color: 'text-primary-container' },
    vet: { label: 'Vet', bg: 'bg-tertiary/10', color: 'text-tertiary' },
  };

  const statusConfig = {
    confirmed: { icon: 'radio_button_unchecked', color: 'text-slate-300' },
    pending: { icon: 'schedule', color: 'text-orange-400' },
    urgent: { icon: 'error_outline', color: 'text-error' },
    done: { icon: 'check_circle', color: 'text-green-500' },
  };

  const type = typeConfig[appointment.type];
  const status = statusConfig[appointment.status];

  const borderClass = appointment.type === 'vet' ? 'border-l-4 border-tertiary' : 'border-l-4 border-primary';

  return (
    <div className={`p-3 rounded-xl bg-surface-container-low ${borderClass} hover:shadow-lg transition-all duration-400 cursor-pointer`}>
      <div className="flex justify-between items-start mb-2">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${type.bg} ${type.color} uppercase`}>
          {type.label}
        </span>
        <span className={`material-symbols-outlined text-sm ${status.color}`} style={appointment.status === 'done' ? { fontVariationSettings: "'FILL' 1" } : undefined}>
          {status.icon}
        </span>
      </div>
      <h4 className="font-bold text-sm text-on-surface">
        {appointment.petName} ({appointment.breed})
      </h4>
      <p className="text-[11px] text-secondary">{appointment.time}</p>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <>
      <AdminHeader title="Cronograma Semanal" breadcrumb="Agenda">
        <div className="flex flex-wrap items-center gap-3 bg-surface-container-low p-2 rounded-xl ml-4">
          <button className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm font-medium text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filtros
          </button>
          <div className="h-6 w-px bg-outline-variant/30 mx-1" />
          <button className="px-4 py-2 rounded-lg hover:bg-surface-container-high transition-colors text-sm font-medium text-tertiary">Banhos</button>
          <button className="px-4 py-2 rounded-lg hover:bg-surface-container-high transition-colors text-sm font-medium text-primary">Tosa</button>
          <button className="px-4 py-2 rounded-lg hover:bg-surface-container-high transition-colors text-sm font-medium text-secondary">Veterinário</button>
        </div>
      </AdminHeader>

      <div className="p-6 md:p-10">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight">Cronograma Semanal</h1>
          <p className="text-secondary mt-1">Gerencie os atendimentos da clínica para esta semana.</p>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-7 gap-1 bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10 shadow-xl shadow-on-surface/5">
          {weekSchedule.map((day) => (
            <div
              key={day.dayShort}
              className={`flex flex-col min-h-[600px] ${
                day.isActive
                  ? 'bg-white ring-1 ring-primary/10 shadow-inner'
                  : day.isClosed
                    ? 'bg-slate-100/50'
                    : 'bg-surface-container-lowest/50 border-r border-outline-variant/5'
              }`}
            >
              {/* Day Header */}
              <div className={`p-4 border-b border-outline-variant/10 text-center ${day.isActive ? 'bg-primary/5' : ''}`}>
                <span className={`block text-xs font-bold uppercase tracking-widest ${
                  day.isActive ? 'text-primary' : day.isClosed ? 'text-slate-400' : 'text-secondary'
                }`}>
                  {day.dayShort}
                </span>
                <span className={`text-2xl font-black font-headline ${day.isClosed ? 'text-slate-400' : 'text-on-surface'}`}>
                  {day.dayNumber}
                </span>
              </div>

              {/* Day Content */}
              <div className="p-2 space-y-3 flex-1">
                {day.isClosed ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className="material-symbols-outlined text-slate-300 text-4xl mb-2">event_busy</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Fechado</span>
                  </div>
                ) : day.isMaintenance ? (
                  <div className="p-3 rounded-xl bg-secondary-container/20 border border-secondary-container">
                    <h4 className="font-bold text-sm text-secondary">Manutenção</h4>
                    <p className="text-[11px] text-secondary/70 italic">Sem agendamentos</p>
                  </div>
                ) : day.appointments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-outline-variant/20 rounded-xl opacity-40">
                    <span className="material-symbols-outlined text-slate-400">add</span>
                  </div>
                ) : (
                  day.appointments.map((apt) => <AppointmentCard key={apt.id} appointment={apt} />)
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-xs text-secondary font-medium">Confirmado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
              <span className="text-xs text-secondary font-medium">Pendente</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="text-xs text-secondary font-medium">Concluído</span>
            </div>
          </div>
          <div className="text-xs text-slate-400">Última atualização: Hoje, 08:45</div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white shadow-2xl flex items-center justify-center transition-spring hover:scale-110 active:scale-95 group z-50">
        <span className="material-symbols-outlined text-3xl transition-transform group-hover:rotate-90">add</span>
      </button>
    </>
  );
}
