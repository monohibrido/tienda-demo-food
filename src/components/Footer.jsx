import { Link } from 'react-router-dom'
import { negocio } from '../config'

export default function Footer() {
  return (
    <footer className="grain-charcoal text-cream mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl mb-2">{negocio.nombre}</p>
          <p className="text-cream/70 max-w-[30ch]">{negocio.eslogan}</p>
        </div>
        <div>
          <p className="font-semibold text-maiz mb-3">Visítanos</p>
          <p className="text-cream/70">{negocio.direccion}</p>
          <p className="text-cream/70">{negocio.horario}</p>
        </div>
        <div>
          <p className="font-semibold text-maiz mb-3">Explora</p>
          <nav className="flex flex-col gap-2">
            <Link to="/productos" className="text-cream/70 hover:text-cream w-fit">Productos</Link>
            <Link to="/sobre-nosotros" className="text-cream/70 hover:text-cream w-fit">Sobre Nosotros</Link>
            <Link to="/contacto" className="text-cream/70 hover:text-cream w-fit">Contacto</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-cream/15 py-5 text-center text-sm text-cream/50">
        © {new Date().getFullYear()} {negocio.nombre}. Todos los derechos reservados.
      </div>
    </footer>
  )
}
