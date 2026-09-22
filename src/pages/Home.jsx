import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { contenidoInicio, productos } from '../config'
import TarjetaProducto from '../components/TarjetaProducto'
import PlatoIlustrado from '../components/PlatoIlustrado'

export default function Home() {
  const destacados = productos.filter((p) => p.destacado)

  return (
    <>
      <Hero />

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl mb-5">{contenidoInicio.historia.titulo}</h2>
        <p className="text-lg text-charcoal/75 leading-relaxed">{contenidoInicio.historia.texto}</p>
      </section>

      <section className="bg-charcoal/[0.03] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          {contenidoInicio.bloques.map((b) => (
            <div key={b.titulo}>
              <h3 className="font-display text-xl mb-2">{b.titulo}</h3>
              <p className="text-charcoal/70">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col gap-20 md:gap-28">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <PlatoIlustrado variante={1} className="mx-auto" />
          <div>
            <h3 className="font-display text-2xl md:text-3xl mb-3">{contenidoInicio.vitrina[0].titulo}</h3>
            <p className="text-charcoal/70 text-lg leading-relaxed">{contenidoInicio.vitrina[0].texto}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl mb-3">{contenidoInicio.vitrina[1].titulo}</h3>
            <p className="text-charcoal/70 text-lg leading-relaxed">{contenidoInicio.vitrina[1].texto}</p>
          </div>
          <PlatoIlustrado variante={2} className="mx-auto" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between mb-4 gap-4">
          <h2 className="font-display text-3xl md:text-4xl">{contenidoInicio.destacadosTitulo}</h2>
          <Link to="/productos" className="text-ember font-semibold whitespace-nowrap hover:text-ember-dark">
            Ver toda la carta →
          </Link>
        </div>
        <div>
          {destacados.map((p) => (
            <TarjetaProducto key={p.id} producto={p} />
          ))}
        </div>
      </section>
    </>
  )
}
