import { negocio } from '../config'

export default function BotonWhatsApp() {
  const url = `https://wa.me/${negocio.telefonoWhatsApp}?text=${encodeURIComponent(
    `Hola ${negocio.nombre}, tengo una consulta.`,
  )}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-30 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#FAF6EE">
        <path d="M12.04 2c-5.5 0-10 4.5-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0012.04 22c5.5 0 10-4.5 10-10s-4.5-10-10-10zm0 18.2c-1.6 0-3.13-.43-4.46-1.24l-.32-.19-3.12.82.83-3.04-.2-.32a8.18 8.18 0 01-1.27-4.4c0-4.53 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.67 8.37-7.86 8.37zm4.5-6.14c-.25-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.65 4.2 3.71.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28z" />
      </svg>
    </a>
  )
}
