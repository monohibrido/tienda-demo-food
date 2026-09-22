import { useCart } from '../CartContext'

function formatoCLP(valor) {
  return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
}

export default function TarjetaProducto({ producto }) {
  const { agregar } = useCart()

  return (
    <article className="flex gap-4 items-start py-5 border-b border-charcoal/15">
      <div className="w-16 h-16 shrink-0 rounded-full bg-maiz/25 border-2 border-charcoal flex items-center justify-center">
        <FlamitaMini />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl leading-snug">{producto.nombre}</h3>
          <span className="font-semibold whitespace-nowrap">{formatoCLP(producto.precio)}</span>
        </div>
        <p className="text-charcoal/65 mt-1 max-w-[52ch]">{producto.descripcion}</p>
        <button
          onClick={() => agregar(producto)}
          className="mt-3 text-sm font-semibold text-ember hover:text-ember-dark inline-flex items-center gap-1"
        >
          Agregar al pedido
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </article>
  )
}

function FlamitaMini() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2c-3 4-5 6-5 10a5 5 0 0010 0c0-2-1-3-2-4.5.2 1.5-.5 2.5-1.5 2.5-1.3 0-1.7-1-1.5-2.2.3-1.4.5-3.4-.2-5.8z"
        fill="#E8590C"
      />
    </svg>
  )
}
