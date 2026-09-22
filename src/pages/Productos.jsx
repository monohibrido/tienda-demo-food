import { useEffect, useState } from 'react'
import { categorias, productos } from '../config'
import TarjetaProducto from '../components/TarjetaProducto'

export default function Productos() {
  const [activa, setActiva] = useState(categorias[0].id)

  useEffect(() => {
    const secciones = categorias.map((c) => document.getElementById(c.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiva(visible.target.id)
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: 0.1 },
    )
    secciones.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl md:text-5xl mb-3">La carta</h1>
        <p className="text-charcoal/70 text-lg">
          Todo se prepara al momento. Elige una categoría o simplemente recorre la carta completa.
        </p>
      </header>

      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-14">
        <aside className="hidden md:block">
          <nav className="sticky top-28 flex flex-col gap-1">
            {categorias.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                  activa === c.id
                    ? 'bg-ember text-cream'
                    : 'text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal'
                }`}
              >
                {c.nombre}
              </a>
            ))}
          </nav>
        </aside>

        {/* Selector de categorías para mobile */}
        <nav className="md:hidden -mx-5 px-5 mb-2 flex gap-2 overflow-x-auto pb-2">
          {categorias.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`shrink-0 px-4 py-2 rounded-full font-semibold text-sm border-2 ${
                activa === c.id ? 'bg-ember text-cream border-ember' : 'border-charcoal/20 text-charcoal/70'
              }`}
            >
              {c.nombre}
            </a>
          ))}
        </nav>

        <div className="min-w-0">
          {categorias.map((c) => {
            const items = productos.filter((p) => p.categoria === c.id)
            if (items.length === 0) return null
            return (
              <section id={c.id} key={c.id} className="scroll-mt-28 mb-14">
                <h2 className="font-display text-2xl md:text-3xl mb-1 pb-3 border-b-2 border-charcoal">
                  {c.nombre}
                </h2>
                <div>
                  {items.map((p) => (
                    <TarjetaProducto key={p.id} producto={p} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
