import {
  GalleryVerticalEnd,
  ChartNoAxesCombined,
  HandHelping,
  CreditCard,
  Handshake,
  Wallet,
  Landmark,
  Banknote,
  HandCoins,
  Receipt,
  MessagesSquare,
  Bell
} from 'lucide-react';
export const NAV_ICONS = {
    'logo': GalleryVerticalEnd,
    'quotes': ChartNoAxesCombined,
    'actions': ChartNoAxesCombined,
    'cedears': ChartNoAxesCombined,
    'bonuses': ChartNoAxesCombined,
    'letters': ChartNoAxesCombined,
    'futures': ChartNoAxesCombined,
    'tenders': ChartNoAxesCombined,
    'funds': ChartNoAxesCombined,
    'sureties': ChartNoAxesCombined,
    'negotiable_obligations': ChartNoAxesCombined,
    'assets_usa': ChartNoAxesCombined,
    'services': HandHelping,
    'bullpay': CreditCard,
    'operate': Handshake,
    'statement': Wallet,
    'current_account': Landmark,
    'portfolio_evolution': Banknote,
    'cash_flow': HandCoins,
    'messaging': MessagesSquare,
    'my_tenders': Receipt,
    'notification': Bell,
}

export const NAV_MAIN = [
    {
      title: 'Cotizaciones',
      url: '#',
      icon: NAV_ICONS.quotes,
      isActive: true,
      items: [
        {
          title: 'Acciones',
          url: '#',
        },
        {
          title: 'CEDEARs',
          url: '#',
        },
        {
          title: 'Bonos',
          url: '#',
        },
        {
          title: 'Letras',
          url: '#',
        },
        {
          title: 'Futuros',
          url: '#',
        },
        {
          title: 'Licitaciones',
          url: '#',
        },
        {
          title: 'Fondos',
          url: '#',
        },
        {
          title: 'Cauciones',
          url: '#',
        },
        {
          title: 'Oblig. Negociables',
          url: '#',
        },
        {
          title: 'Activos USA',
          url: '#',
        },
      ],
    },
    {
      title: 'Servicios',
      url: '#',
      icon: NAV_ICONS.services,
      items: [
        {
          title: 'FondosOnline.com',
          url: '#',
        },
        {
          title: 'Whealth Management',
          url: '#',
        },
        {
          title: 'Bull Training',
          url: '#',
        },
        {
          title: 'US Broker-Dealer',
          url: '#',
        },
      ],
    },
    {
      title: 'Bull Pay',
      url: '#',
      icon: NAV_ICONS.bullpay,
      items: [
        {
          title: 'Descargar App',
          url: '#',
        },
        {
          title: 'Beneficios',
          url: '#',
        },
        {
          title: 'Costos',
          url: '#',
        },
        {
          title: 'Ayuda',
          url: '#',
        },
      ],
    },
    {
      title: 'Operar',
      url: '#',
      icon: NAV_ICONS.operate,
      items: [
        {
          title: 'Cargar orden',
          url: '#',
        },
        {
          title: 'Comprar Dolar MEP en un clic!',
          url: '#',
        },
        {
          title: 'Vender Dolar MEP en un clic!',
          url: '#',
        },
        {
          title: 'Estado de ordenes',
          url: '#',
        },
        {
          title: 'Licitar',
          url: '#',
        },
        {
          title: 'Aranceles y comisiones',
          url: '#',
        },
      ],
    },
]

export const NAV_SECOND = [
    {
      name: 'Estado de Cuenta',
      url: '#',
      icon: NAV_ICONS.statement,
    },
    {
      name: 'Cuenta Corriente',
      url: '#',
      icon: NAV_ICONS.current_account,
    },
    {
      name: 'Evolución de cartera',
      url: '#',
      icon: NAV_ICONS.portfolio_evolution,
    },
    {
      name: 'Movimiento de Dinero',
      url: '#',
      icon: NAV_ICONS.cash_flow,
    },
    {
      name: 'Mensajeria',
      url: '#',
      icon: NAV_ICONS.messaging,
    },
    {
      name: 'Mis Licitaciones',
      url: '#',
      icon: NAV_ICONS.my_tenders,
    }
]
export const USER_DATA = {
    name: 'Skyleen',
    email: 'skyleen@example.com',
    avatar:
      'https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg',
}
export const NAV_ICONS_LIST = Object.values(NAV_ICONS);
export const NAV_ICONS_KEYS = Object.keys(NAV_ICONS);