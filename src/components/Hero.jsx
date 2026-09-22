import { Link } from 'react-router-dom'
import { negocio } from '../config'

export default function Hero() {
  return (
    <section className="relative grain-charcoal overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <p className="text-maiz font-semibold tracking-wide mb-3">{negocio.horario}</p>
          <h1 className="font-display text-cream leading-[0.95] text-[3.4rem] sm:text-[4.5rem] md:text-[5rem]">
            {negocio.nombre}
          </h1>
          <p className="mt-5 text-cream/80 text-lg max-w-md">{negocio.descripcion}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 bg-ember hover:bg-ember-light text-cream font-display text-lg px-7 py-3.5 rounded-full transition-colors"
            >
              Ver la carta
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 border-2 border-cream/40 hover:border-cream text-cream font-display text-lg px-7 py-3.5 rounded-full transition-colors"
            >
              Cómo llegar
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <FlameIllustration className="w-64 sm:w-80 md:w-full max-w-sm" />
        </div>
      </div>

      <div
        className="h-6 md:h-8"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #FAF6EE 25%, transparent 25%), linear-gradient(225deg, #FAF6EE 25%, transparent 25%)',
          backgroundSize: '24px 24px',
          backgroundColor: '#1C1917',
        }}
        aria-hidden="true"
      />
    </section>
  )
}

function FlameIllustration({ className }) {
  return (
    <svg viewBox="0 0 320 320" className={className} role="img" aria-label="Ilustración de brasas y llama">
      <circle cx="160" cy="230" r="120" fill="#2B2622" />
      <g>
        <ellipse cx="120" cy="255" rx="14" ry="9" fill="#B91C1C" />
        <ellipse cx="150" cy="262" rx="16" ry="10" fill="#E8590C" />
        <ellipse cx="182" cy="253" rx="15" ry="9" fill="#B91C1C" />
        <ellipse cx="210" cy="260" rx="13" ry="8" fill="#E8590C" />
        <ellipse cx="165" cy="242" rx="20" ry="11" fill="#FF7A2E" opacity="0.9" />
      </g>
      <path
        d="M160 90c-22 30-38 46-38 74a38 38 0 0076 0c0-15-7-23-15-33 2 11-4 19-11 19-9 0-13-8-11-17 3-11 6-27-1-43z"
        fill="#F5B700"
      />
      <path
        d="M160 120c-13 18-22 27-22 43a22 22 0 0044 0c0-9-4-14-9-19 1 6-2 11-6 11-5 0-8-4-6-10 2-6 4-16-1-25z"
        fill="#E8590C"
      />
    </svg>
  )
}
