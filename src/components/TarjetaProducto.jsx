import { useCart } from '../CartContext'

function formatoCLP(valor) {
  return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
}

export default function TarjetaProducto({ producto }) {
  const { agregar } = useCart()

  return (
    <article className="flex gap-4 items-start py-5 border-b border-charcoal/15">
      {/* Imagen del producto: subir en 400x400 px (cuadrada). Se muestra a ~112 px. */}
      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="400"
        height="400"
        loading="lazy"
        className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-2xl object-cover border-2 border-charcoal bg-maiz/25"
      />
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
