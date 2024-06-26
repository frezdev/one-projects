interface ItemTypes {
  iconActive: string
  iconInactive: string
  label: string
  href: string
}

export const itemsData: ItemTypes[] = [
  {
    iconActive: '/icons/home-activo.png',
    iconInactive: '/icons/home-inactivo.png',
    label: 'Inicio',
    href: '/'
  },
  {
    iconActive: '/icons/mas-vistas-activo.png',
    iconInactive: '/icons/mas-vistas-inactivo.png',
    label: 'Mas visto',
    href: '/mas-vistos'
  },
  {
    iconActive: '/icons/me-gusta-activo.png',
    iconInactive: '/icons/me-gusta-inactivo.png',
    label: 'Me gusta',
    href: '/me-gusta'
  },
  {
    iconActive: '/icons/nuevas-activo.png',
    iconInactive: '/icons/nuevas-inactivo.png',
    label: 'Nuevas',
    href: '/nuevas'
  },
  {
    iconActive: '/icons/sorprendeme-activo.png',
    iconInactive: '/icons/sorprendeme-inactivo.png',
    label: 'Sorprendeme',
    href: '/sorprendeme'
  },
]