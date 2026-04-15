// ─── Dashboard Mock Data ───

export const dashboardStats = [
  {
    id: 'sales',
    label: 'Vendas Totais',
    value: 'R$ 42.850,00',
    trend: '+12.5%',
    trendUp: true,
    icon: 'payments',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    id: 'customers',
    label: 'Novos Clientes',
    value: '142',
    trend: '+8.2%',
    trendUp: true,
    icon: 'group_add',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 'appointments',
    label: 'Agendamentos',
    value: '58',
    trend: '-3.1%',
    trendUp: false,
    icon: 'calendar_month',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

export const salesChart = [
  { month: 'JAN', height: 40, active: false },
  { month: 'FEV', height: 65, active: false },
  { month: 'MAR', height: 55, active: false },
  { month: 'ABR', height: 85, active: false },
  { month: 'MAI', height: 95, active: true, value: 'R$ 12.4k' },
  { month: 'JUN', height: 70, active: false },
];

export const popularServices = [
  { name: 'Banho & Tosa', percent: 65, color: 'bg-orange-600', textColor: 'text-orange-600' },
  { name: 'Consulta Veterinária', percent: 22, color: 'bg-tertiary', textColor: 'text-tertiary' },
  { name: 'Hospedagem', percent: 13, color: 'bg-secondary', textColor: 'text-secondary' },
];

export const recentActivities = [
  {
    id: 1,
    title: 'Pedido #4829 pago',
    description: 'Compra de Ração Royal Canin Adulto',
    time: 'Há 2 min',
    icon: 'check_circle',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    id: 2,
    title: 'Novo agendamento: Thor',
    description: 'Banho e Tosa Completa às 14:30',
    time: 'Há 15 min',
    icon: 'add_task',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    title: 'Novo cliente registrado',
    description: 'Ana Maria Silva & Belinha (Poodle)',
    time: 'Há 1 hora',
    icon: 'person_outline',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-500',
  },
];

// ─── Inventory Mock Data ───

export interface InventoryItem {
  id: number;
  name: string;
  description: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
  image: string;
}

export const inventoryStats = [
  { label: 'Total de Itens', value: '1,284', icon: 'inventory', iconColor: 'text-primary', trend: '+12% vs m-1', trendColor: 'text-tertiary' },
  { label: 'Estoque Baixo', value: '24', icon: 'warning', iconColor: 'text-error', trend: 'Urgente', trendColor: 'text-error' },
  { label: 'Valor em Estoque', value: 'R$ 42.500', icon: 'trending_up', iconColor: 'text-tertiary', trend: '', trendColor: '' },
  { label: 'Categorias Ativas', value: '18', icon: 'category', iconColor: 'text-secondary', trend: '', trendColor: '' },
];

export const inventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: 'Ração Premium Adulto (15kg)',
    description: 'Frango e Cereais Integrais',
    sku: 'RA-2024-001',
    category: 'Rações',
    price: 'R$ 189,90',
    stock: 142,
    status: 'in_stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJLeCNqZx0GW4ba7ExGZZrR3Use3jbisUXhPCD95d5bd-SXIEqDE4wVeqb0wcGyTKP7ZfvsyJncZ_URZ6A7I3H_94j26LFW3IoZAUHQokjOcks3V1_CPzabYNh0M564MlKyMHRT71ZAFr-e4k9rxsDAXv1SxLmJ0J1bHQD2rxacbdV6JJnaRHTjXKyRlgDojFGuMm0iS5rJLYFlR4WmG7jeVcgSn1e71LkpcGsBqpTB36FZQ7-ep_S6aYwejlYRIqkBpHfIepo0I0X',
  },
  {
    id: 2,
    name: 'Mordedor Corda Ultra',
    description: 'Resistência Máxima',
    sku: 'BR-2024-045',
    category: 'Brinquedos',
    price: 'R$ 45,00',
    stock: 8,
    status: 'low_stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI7ExpubhJcC4fily_tCYEma5ctLqUpkYh992SrGVw1JxAVCC9huieDzo2xnmzpTFd_u7PWfFneM-jMdPBjTHfPRnMy6rySwvGEfi-9zvR5nJ98PZfQ3Lt88cgI_yFqUx7itiJq4gl4QeXRmZQSIxMIQlD9wwvj4NxRaAeKsF25vLY_kcnAxinsHPZf_1E00vj51ynlsxrK6vuCTFXC9Z1EhEZPRRqM7kzvVNuW5nzwyyakQk6JvgFJ_zOj15H0A6zU64jO_zrn_M-',
  },
  {
    id: 3,
    name: 'Shampoo Neutro Soft (1L)',
    description: 'Uso Profissional',
    sku: 'HI-2023-112',
    category: 'Higiene',
    price: 'R$ 62,90',
    stock: 0,
    status: 'out_of_stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO7tVAy_-G2S8oinxJ0fASo3hJobROtCfDByVsDMtXrCQh5j8Wn-wuhXDPf3GdK0ucugWZ8UTvmzieelb3VhGUdM4gZ6iby59owYZwNcHybz6xaz85M2PV5Er_sDJSbcnBsSamHR1Zg55QT1_KD2gT_giQe3SukW0Hj1nAfSD5wH-pI0RWVzfjZ63Q0ishXtZximp_l1oepHJbYZ28hl6-gAUJuE70zyItenZPQMz-0ensf0RTxKx9oG5ApsMV6gmnhwOLH4vVdC7_',
  },
  {
    id: 4,
    name: 'Coleira em Couro Blue Sky',
    description: 'Tamanho Médio',
    sku: 'AC-2024-009',
    category: 'Acessórios',
    price: 'R$ 120,00',
    stock: 45,
    status: 'in_stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMdJ9KJQ9FYb5ZjUagBtmRlxeU5VDrWVtu2VfcJPuInoKzt6m_qcMsPdb88_DbGHCZ8qRQpElXqS2U5SMDkq_Mn2PQ6LjVZNJeHWHrPKUpExfhm74gzqJqsQHEEO1XDLLtsW2H1zNrKzOMLh3mGCYXCBPufq_MLnv6XidN64r3hExaQSJwTDqQVP3-mC9eJexzKrtwWmyGwk11w3k2oH-uwl3idcKLdCvVa_fqUS6FentqqT8q7y-W7BrWLGnMk5Rl7uQx0Ku3AGXp',
  },
];

// ─── Schedule Mock Data ───

export interface Appointment {
  id: number;
  petName: string;
  breed: string;
  type: 'tosa' | 'banho' | 'vet';
  time: string;
  status: 'confirmed' | 'pending' | 'urgent' | 'done';
}

export interface DaySchedule {
  dayShort: string;
  dayNumber: number;
  isActive?: boolean;
  isClosed?: boolean;
  isMaintenance?: boolean;
  appointments: Appointment[];
}

export const weekSchedule: DaySchedule[] = [
  {
    dayShort: 'Seg',
    dayNumber: 12,
    appointments: [
      { id: 1, petName: 'Luna', breed: 'Golden', type: 'tosa', time: '09:00 - 10:30', status: 'done' },
    ],
  },
  {
    dayShort: 'Ter',
    dayNumber: 13,
    isActive: true,
    appointments: [
      { id: 2, petName: 'Thor', breed: 'Bulldog', type: 'banho', time: '14:00 - 15:00', status: 'pending' },
      { id: 3, petName: 'Mel', breed: 'Poodle', type: 'vet', time: '16:30 - 17:15', status: 'urgent' },
    ],
  },
  { dayShort: 'Qua', dayNumber: 14, appointments: [] },
  {
    dayShort: 'Qui',
    dayNumber: 15,
    appointments: [
      { id: 4, petName: 'Max', breed: 'Boxer', type: 'banho', time: '08:30 - 09:30', status: 'confirmed' },
    ],
  },
  { dayShort: 'Sex', dayNumber: 16, appointments: [] },
  { dayShort: 'Sab', dayNumber: 17, isMaintenance: true, appointments: [] },
  { dayShort: 'Dom', dayNumber: 18, isClosed: true, appointments: [] },
];

// ─── Marketplace/Landing Mock Data ───

export interface Product {
  id: number;
  name: string;
  price: string;
  rating?: number;
  reviews?: number;
  image: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Coleira Couro Artesanal',
    price: 'R$ 89,00',
    rating: 4.9,
    reviews: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2-1lcx8gTkiHZaHSWi7x77lWcJuTyoj3Ac8-inUPXEe-b9y6i14ViXtpIVbrBtYcyp7HGnQ2QACmFy83CVc9suZcIz7hW38OQWGNqrn2XDd8P6CUsIUuLiM4_QD_DSD7OCTmZnNuMbV6QVCDgs-tQEcIEbjIlVZF9T_o5XqoVxUDzQVY-CKGeil4lT_9d5FoaLqMpJXmEcJBXAswQUlwcGlAJEZ6jPJr_xuuLXXX_FU-Fv66rGKC12yR8o_ED9KuU8okGOnbdCK_Y',
  },
  {
    id: 2,
    name: 'Fonte Cerâmica QuietFlow',
    price: 'R$ 245,00',
    rating: 4.8,
    reviews: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdqTZofMsyEJ5xq8dVKewBcCkmGeEGYrPfhzEWx8BXPDJ2vjgFc-v7Xndl__A7prhfbbXw5AMXZrNbk3lC4aTo5W35eJXysYOGuEAJ74arLnLcQWMqLoIkiCsQA9J8D-f0dd9nSn-aS2YxVSv0ObvsW-HSVgmUKm-uF3wt65-b_OelDR5TKW0vKMcZnyi_IIM0S8ay43ZyuuYW3-rZHjKv3piWedZNd6AubnTiaa8wZl6VdQFXPrGCZkwyNH22iD-4ufQa_iuDoYm_',
  },
  {
    id: 3,
    name: 'Ração Natural Grain-Free',
    price: 'R$ 159,00',
    rating: 5.0,
    reviews: 230,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD-VbQ1-HJ4GTKvIbI_Xq_sbM9QjzGLBa3Mvi5fXKSku00zicnATkwjJ1PnnPb1j1DH53GL8SUBPqRa-b8vMB8HKTMpMZggSo_Mj05qdvJM3h27zh5m_W-D-JJv2wFk7YkeKm9Iztg9HzVTnTC1M_j9AIv7eunUoEtCGtw9iLw0fq_K43IdhC1VXk2D6zbPPwENFXQoVv7Sqnu4VG-esM7DJt6TidB3t7DDHk43XbPaKblB48m2cSoR80WKrdcVenB1AdvELXCC-Lu',
  },
  {
    id: 4,
    name: 'Kit Bandanas Estampadas',
    price: 'R$ 39,00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgBROwTF4zPYFPfp136QsqHfq7lIJF9ZG2cM34Pvp491Mv4LV2N9VzwLGNB1n--UQbuXx6DRN3_-c1FKgFitIbdUVXHD28hwyZdYAgIq1tMO5h5XFi3wDqu5zVvqJ0pmjivj4dlGoC_bvL3aqdKTnT5WaQUf1pap54Ejo9fREyKCAvPvV99cdEnqC0opRb3vkJ4fGZg5AfjRLUMsJdBoWhjT5-4G65ZLPl3fY-kfFlHVd_JmHSznF79LV-hx4DmKDn2kclPn9AMFhB',
  },
  {
    id: 5,
    name: 'Arranhador Escultural Wood',
    price: 'R$ 310,00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvPXYrtQUTxux5kqcPPHwF6pXIdcuM8iOWuTis-GcF1DO4utYgFb1MxJGeUbvbx0kaPbhZrwSPaiQodOwdRvYO8e-jz02zHHJ-TIq7KOHSpZ5g2vZNuRoU0lbzTjLsqe3q4KC8BbKzm5vdVhbFy_vuGZ0td0h-oSqRCZmsxS6dAbVU7gI4JjzTnujZE0wpKm-elaR30z3yGjsirhtfs10-OrizkQZGlH-QQ4u12oOSAqp2M6wy79VoyytiD8nTdoBFEbMA_OAM2N1G',
  },
  {
    id: 6,
    name: 'Guia Explorer Rope',
    price: 'R$ 115,00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEybUtNCPcPi4gI9eEHbBjHNldHIt4KC3unoO2LKhufgLSbDYm-FEKnqahcxdXfgwOAUINZEd_FHzjDC2Gvz8uWgPcYbxjOagGbIwl_hEvz4RZEuiIyayA1HJtoo_vAhtzJlKG6Oi_CHPnjhOZwDEAGlvwlA7lYi4FoSNfB_CZkV7IzwlaGim885jYjI6YvRilVkaOeaqEO6ZDmyi6ZUVB51CaU4KEzIAOpP4rJeuvgC1FtGWuK8Tu68ZYG4wXsWiy1mvyqsZuWMOa',
  },
];

// ─── Checkout Mock Data ───

export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
  quantity: number;
  image: string;
}

export const cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Ração Premium Sanctuary',
    description: 'Sabor Salmão & Batata Doce - 15kg',
    price: 189.9,
    priceFormatted: 'R$ 189,90',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLPRegOJ6_chmS7ylWhwX5BcupE7J8La2mj5cXJ8BTkFfhNPO9RC6hlOyYQiNlpLpZKORV-HqRgrknWx1GoDo3tszk9rkCZUjeRx8JD3EqWNuRfS703M4ZKVnCEj7Iihoc3KpIg4Jw_U27z2AF6zvsuvhEVAjGCNLGQASWIvGHzoEyYtOE1r3QE82iNmG_rJ-L55eRqBBqmI2M-fEmPlVW3gjTQ0rg02-Wia7LFUCtO0FZAM_fF036QEEuYD2aOMoAyJB2rFjJIe2-',
  },
  {
    id: 2,
    name: 'Cama OrthoComfort XL',
    description: 'Cor Grafite - Ergonômica',
    price: 449.0,
    priceFormatted: 'R$ 449,00',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGeHWEBWS-FC8g0zPw0HEa--D3p9zNESwiMG-ItCHvhK_s5OX_kFOcO-cy74CacR-ELPyg3DL_pU_ejeFfmd7gF7zRwXqHhkCf18kDR--p-mqmVjxn6RL1BwvFM_uLNAmO6qg7oXbhlcpREKDdQGpW9s8lxN5FvFexsPZq66rFpl3ud0k1aWEmgl27tIocdMry-zgPlhbcNctxGMDPy8_NPU3WydpfrOl7pbF1o2uKf2DPg_3pK0TlUg3RPDiLakdjhbtIddI4KfV',
  },
];

// ─── Sidebar Navigation Items ───

export interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export const adminNavItems: NavItem[] = [
  { label: 'Dashboard', icon: 'group', path: '/admin' },
  { label: 'Perfis', icon: 'badge', path: '/admin/perfis' },
  { label: 'Funcionários', icon: 'engineering', path: '/admin/funcionarios' },
  { label: 'Clientes', icon: 'person_heart', path: '/admin/clientes' },
  { label: 'Pets', icon: 'pets', path: '/admin/pets' },
  { label: 'Serviços', icon: 'medical_services', path: '/admin/servicos' },
  { label: 'Marketplace', icon: 'storefront', path: '/admin/marketplace' },
  { label: 'Estoque', icon: 'inventory_2', path: '/admin/estoque' },
  { label: 'Fornecedores', icon: 'local_shipping', path: '/admin/fornecedores' },
  { label: 'Categorias', icon: 'category', path: '/admin/categorias' },
];
