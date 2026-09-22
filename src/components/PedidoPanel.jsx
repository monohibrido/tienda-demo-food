import { useCart } from '../CartContext'
import { negocio } from '../config'

function formatoCLP(valor) {
  return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
}

export default function PedidoPanel({ abierto, onCerrar }) {
  const { items, agregar, quitar, vaciar, total } = useCart()

  function enviarPorWhatsApp() {
    if (items.length === 0) return
    const lineas = items.map((i) => `• ${i.cantidad}x ${i.nombre} — ${formatoCLP(i.precio * i.cantidad)}`)
    const mensaje = [
      `Hola ${negocio.nombre}, quiero hacer este pedido para retiro:`,
      '',
      ...lineas,
      '',
      `Total: ${formatoCLP(total)}`,
    ].join('\n')
    const url = `https://wa.me/${negocio.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-charcoal/50 z-50 transition-opacity ${
          abierto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onCerrar}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          abierto ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Tu pedido"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-charcoal">
          <h2 className="font-display text-2xl">Tu pedido</h2>
          <button onClick={onCerrar} aria-label="Cerrar panel de pedido" className="p-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-2 text-charcoal/70">
              <p className="font-display text-xl text-charcoal">Aún no agregas nada</p>
              <p className="max-w-[26ch]">
                Ve a Productos y toca "Agregar" en lo que se te antoje. Aparecerá aquí.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((i) => (
                <li key={i.id} className="flex items-center justify-between gap-3 pb-4 border-b border-charcoal/15">
                  <div>
                    <p className="font-semibold">{i.nombre}</p>
                    <p className="text-sm text-charcoal/60">{formatoCLP(i.precio)} c/u</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => quitar(i.id)}
                      aria-label={`Quitar una unidad de ${i.nombre}`}
                      className="w-8 h-8 rounded-full border-2 border-charcoal flex items-center justify-center font-bold hover:bg-charcoal hover:text-cream transition-colors"
                    >
                      −
                    </button>
                    <span className="w-5 text-center font-semibold">{i.cantidad}</span>
                    <button
                      onClick={() => agregar(i)}
                      aria-label={`Agregar una unidad más de ${i.nombre}`}
                      className="w-8 h-8 rounded-full border-2 border-charcoal flex items-center justify-center font-bold hover:bg-charcoal hover:text-cream transition-colors"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t-2 border-charcoal flex flex-col gap-3">
            <div className="flex items-center justify-between font-display text-xl">
              <span>Total</span>
              <span>{formatoCLP(total)}</span>
            </div>
            <button
              onClick={enviarPorWhatsApp}
              className="w-full bg-ember hover:bg-ember-dark text-cream font-display text-lg py-3 rounded-full transition-colors"
            >
              Confirmar por WhatsApp
            </button>
            <button onClick={vaciar} className="text-sm text-charcoal/60 hover:text-brasa underline underline-offset-2 self-center">
              Vaciar pedido
            </button>
            <p className="text-xs text-charcoal/50 text-center">
              Retiro en {negocio.direccion}. Coordinamos la hora por WhatsApp.
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
