# Fuego Callejero — plantilla de tienda de comida

Plantilla React + Vite + Tailwind inspirada en la estructura de mcdonalds.cl
(banner grande, contenido editorial en el home, menú lateral de categorías),
con identidad propia de comida callejera/parrilla. Sin login ni sesiones:
todo el sitio es contenido público, y el "pedido" es un carrito en memoria
que se envía por WhatsApp.

## Cómo se arma para un cliente nuevo

1. `npm install`
2. Edita **src/config.js**: datos del negocio, categorías y productos.
3. Cambia el número de WhatsApp (`telefonoWhatsApp`) y el endpoint de
   Formspree (`formspreeEndpoint`) por los del cliente.
4. Ajusta paleta en `tailwind.config.js` si el rubro no es parrilla/anticuchos
   (los tokens `ember`, `maiz`, `brasa`, `charcoal`, `cream` están pensados
   para reemplazarse fácil).
5. `npm run dev` para previsualizar, `npm run build` para producción.
6. Deploy en Vercel: el `vercel.json` ya trae el rewrite para SPA.

## Estructura

- `src/config.js` — único archivo que un cliente nuevo necesita tocar para
  el contenido (negocio, categorías, productos, textos del home).
- `src/CartContext.jsx` — carrito en memoria (sin persistencia, sin cuentas).
- `src/components/` — Navbar (con el CTA destacado "Haz tu pedido"),
  PedidoPanel (panel lateral del carrito → WhatsApp), Hero, Footer, etc.
- `src/pages/` — Home, Productos (con sidebar de categorías tipo mcdonalds.cl),
  Sobre Nosotros, Contacto (formulario Formspree + honeypot anti-spam).

## Notas de diseño

Paleta: carbón `#1C1917`, brasa `#E8590C`, maíz `#F5B700`, cream `#FAF6EE`.
Tipografía: Anton para titulares (evoca rótulo de carro de comida), Plus
Jakarta Sans para texto. El hero usa una ilustración SVG propia (sin fotos
externas) para que la plantilla funcione desde el primer `npm install`,
sin depender de banco de imágenes hasta que el cliente tenga fotos reales.
