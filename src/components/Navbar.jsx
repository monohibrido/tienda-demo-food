import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { negocio } from '../config'
import { useCart } from '../CartContext'
import PedidoPanel from './PedidoPanel'

const enlaces = [
  { to: '/productos', label: 'Productos' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [pedidoAbierto, setPedidoAbierto] = useState(false)
  const { cantidadTotal } = useCart()

  const linkClase = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-wide transition-colors ${
      isActive ? 'text-ember' : 'text-charcoal hover:text-ember'
    }`

  return (
    <>
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b-2 border-charcoal">
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-2xl md:text-[1.7rem] leading-none text-charcoal">
              {negocio.nombre}
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {enlaces.map((e) => (
              <NavLink key={e.to} to={e.to} className={linkClase}>
                {e.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPedidoAbierto(true)}
              className="relative inline-flex items-center gap-2 bg-ember hover:bg-ember-dark text-cream font-display text-base md:text-lg tracking-wide px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-[0_4px_0_0_#7C2D12] active:shadow-none active:translate-y-1 transition-all"
            >
              Haz tu pedido
              {cantidadTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-maiz text-charcoal text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-cream">
                  {cantidadTotal}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 -mr-2"
              aria-label="Abrir menú"
              aria-expanded={menuAbierto}
              onClick={() => setMenuAbierto((v) => !v)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {menuAbierto && (
          <nav className="md:hidden border-t-2 border-charcoal bg-cream px-5 py-4 flex flex-col gap-4">
            {enlaces.map((e) => (
              <NavLink key={e.to} to={e.to} className={linkClase} onClick={() => setMenuAbierto(false)}>
                {e.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <PedidoPanel abierto={pedidoAbierto} onCerrar={() => setPedidoAbierto(false)} />
    </>
  )
}
