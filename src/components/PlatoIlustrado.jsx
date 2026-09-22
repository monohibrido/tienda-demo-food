// Ilustración de un plato, usada como reemplazo temporal de una fotografía
// real del producto. Pensada en proporción retrato (ideal 400x600) para
// las secciones de "vitrina" del home. Cuando el cliente tenga fotos
// propias, esta ilustración se reemplaza por una <img> o fondo real.

export default function PlatoIlustrado({ variante = 1, className = '' }) {
  return (
    <div
      className={`w-full max-w-[400px] aspect-[2/3] rounded-[2rem] overflow-hidden border-2 border-charcoal bg-charcoal/[0.04] ${className}`}
    >
      {variante === 1 ? <PlatoAnticuchos /> : <PlatoParrillada />}
    </div>
  )
}

function PlatoAnticuchos() {
  return (
    <svg viewBox="0 0 400 600" className="w-full h-full" role="img" aria-label="Ilustración de un plato de anticuchos">
      <rect width="400" height="600" fill="#FAF6EE" />
      <ellipse cx="200" cy="330" rx="150" ry="150" fill="#2B2622" opacity="0.06" />
      <ellipse cx="200" cy="330" rx="128" ry="128" fill="#FFFFFF" stroke="#1C1917" strokeWidth="3" />
      <ellipse cx="200" cy="330" rx="96" ry="96" fill="none" stroke="#1C1917" strokeOpacity="0.15" strokeWidth="2" />

      {/* brochetas */}
      <g strokeLinecap="round">
        <line x1="108" y1="300" x2="292" y2="300" stroke="#7C4A26" strokeWidth="6" />
        <line x1="118" y1="345" x2="282" y2="345" stroke="#7C4A26" strokeWidth="6" />
      </g>
      {[130, 165, 200, 235, 270].map((x, i) => (
        <rect key={x} x={x - 14} y={i % 2 === 0 ? 282 : 327} width="28" height="34" rx="6" fill={i % 2 === 0 ? '#B91C1C' : '#7A2E0E'} />
      ))}
      {[113, 148, 183, 218, 253, 288].map((x, i) => (
        <rect key={`p-${x}`} x={x - 10} y={i % 2 === 0 ? 330 : 285} width="20" height="18" rx="4" fill="#E8590C" />
      ))}

      {/* guarnición */}
      <ellipse cx="150" cy="400" rx="34" ry="14" fill="#F5B700" />
      <ellipse cx="255" cy="404" rx="30" ry="12" fill="#3F6B2B" />
      <circle cx="200" cy="230" r="10" fill="#F5B700" opacity="0.7" />

      {/* vapor */}
      <path d="M170 210c-8-14 6-18 0-32M200 200c-8-14 6-18 0-32M230 210c-8-14 6-18 0-32" stroke="#1C1917" strokeOpacity="0.2" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function PlatoParrillada() {
  return (
    <svg viewBox="0 0 400 600" className="w-full h-full" role="img" aria-label="Ilustración de un plato de parrillada">
      <rect width="400" height="600" fill="#FAF6EE" />
      <rect x="40" y="230" width="320" height="200" rx="26" fill="#2B2622" opacity="0.05" />
      <ellipse cx="200" cy="330" rx="140" ry="118" fill="#FFFFFF" stroke="#1C1917" strokeWidth="3" />

      {/* chorizo */}
      <rect x="120" y="290" width="150" height="34" rx="17" fill="#B91C1C" transform="rotate(-6 195 307)" />
      <rect x="130" y="292" width="130" height="6" rx="3" fill="#7A2E0E" transform="rotate(-6 195 295)" opacity="0.5" />

      {/* choclo */}
      <ellipse cx="145" cy="365" rx="42" ry="18" fill="#F5B700" transform="rotate(10 145 365)" />
      <g stroke="#C89100" strokeWidth="2">
        <line x1="112" y1="360" x2="178" y2="370" />
        <line x1="114" y1="368" x2="176" y2="378" />
      </g>

      {/* papas */}
      <circle cx="255" cy="370" r="16" fill="#E8590C" />
      <circle cx="280" cy="358" r="14" fill="#F5B700" />
      <circle cx="270" cy="382" r="13" fill="#E8590C" />

      {/* pebre */}
      <circle cx="200" cy="280" r="20" fill="#3F6B2B" />
      <circle cx="194" cy="274" r="3" fill="#B91C1C" />
      <circle cx="206" cy="284" r="3" fill="#B91C1C" />

      <path d="M150 245c-8-14 6-18 0-32M255 245c-8-14 6-18 0-32" stroke="#1C1917" strokeOpacity="0.2" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}
