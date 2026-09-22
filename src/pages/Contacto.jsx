import { useState } from 'react'
import { negocio } from '../config'

export default function Contacto() {
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  async function manejarEnvio(e) {
    e.preventDefault()
    const form = e.target

    // Honeypot: si este campo viene lleno, es un bot. Se descarta en silencio.
    if (form.elements.namedNueces.value) {
      setEnviado(true)
      return
    }

    setEnviando(true)
    setError(false)
    try {
      const respuesta = await fetch(negocio.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (respuesta.ok) {
        setEnviado(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setEnviando(false)
    }
  }

  const urlWhatsApp = `https://wa.me/${negocio.telefonoWhatsApp}?text=${encodeURIComponent(
    `Hola ${negocio.nombre}, tengo una consulta.`,
  )}`

  const direccionMapa = 'Metro Ciudad del Niño, San Miguel, Santiago de Chile'
  const urlMapa = `https://www.google.com/maps?q=${encodeURIComponent(direccionMapa)}&output=embed`

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-14">
      <div>
        <h1 className="font-display text-4xl md:text-5xl mb-4">Contacto</h1>
        <p className="text-charcoal/70 text-lg mb-8 max-w-md">
          Escríbenos por el formulario o directo por WhatsApp.
        </p>

        <dl className="flex flex-col gap-5 mb-10">
          <div>
            <dt className="font-semibold text-sm uppercase tracking-wide text-charcoal/50">Dirección</dt>
            <dd className="text-lg">{negocio.direccion}</dd>
          </div>
          <div>
            <dt className="font-semibold text-sm uppercase tracking-wide text-charcoal/50">Horario</dt>
            <dd className="text-lg">{negocio.horario}</dd>
          </div>
          <div>
            <dt className="font-semibold text-sm uppercase tracking-wide text-charcoal/50">Correo</dt>
            <dd className="text-lg">{negocio.emailContacto}</dd>
          </div>
        </dl>

        <a
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-700 text-cream font-display text-lg px-6 py-3 rounded-full transition-colors"
        >
          Escribir por WhatsApp
        </a>
      </div>

      <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
        <input
          type="text"
          name="namedNueces"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <label className="flex flex-col gap-1.5">
          <span className="font-semibold text-sm">Nombre</span>
          <input
            required
            type="text"
            name="nombre"
            className="border-2 border-charcoal/20 focus:border-ember rounded-xl px-4 py-3 bg-transparent outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-semibold text-sm">Correo</span>
          <input
            required
            type="email"
            name="email"
            className="border-2 border-charcoal/20 focus:border-ember rounded-xl px-4 py-3 bg-transparent outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-semibold text-sm">Mensaje</span>
          <textarea
            required
            name="mensaje"
            rows="5"
            className="border-2 border-charcoal/20 focus:border-ember rounded-xl px-4 py-3 bg-transparent outline-none resize-none"
          />
        </label>

        <button
          type="submit"
          disabled={enviando}
          className="mt-2 bg-ember hover:bg-ember-dark disabled:opacity-60 text-cream font-display text-lg py-3.5 rounded-full transition-colors"
        >
          {enviando ? 'Enviando…' : 'Enviar mensaje'}
        </button>

        {enviado && <p className="text-sm text-green-700">Recibimos tu mensaje, te respondemos pronto.</p>}
        {error && <p className="text-sm text-brasa">No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.</p>}
      </form>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl md:text-3xl mb-4">Cómo llegar</h2>
        <div className="rounded-2xl overflow-hidden border-2 border-charcoal">
          <iframe
            title={`Ubicación en ${direccionMapa}`}
            src={urlMapa}
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-charcoal/60 mt-2">Referencia: {direccionMapa}.</p>
      </div>
    </div>
  )
}
