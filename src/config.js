// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL LOCAL
// Edita este archivo para adaptar la plantilla a un nuevo cliente.
// No hay login ni sesiones: todo el sitio es contenido público.
// ─────────────────────────────────────────────────────────────

export const negocio = {
  nombre: 'Tienda Food',
  eslogan: 'Comida con carácter',
  descripcion:
    'Anticuchos, completos y parrilla al paso, cocina a la vista para que experimentes desde primera fila.',
  telefonoWhatsApp: '56930570613', // sin '+' ni espacios
  direccion: 'Av. Siempre viva 742, San Miguel, Santiago',
  horario: 'Mar a Dom, 18:00 – 23:30',
  instagram: 'https://instagram.com/',
  emailContacto: 'info@tiendafood.cl',
  // Reemplaza por el endpoint real de Formspree del cliente.
  formspreeEndpoint: 'https://formspree.io/f/xxxxxxxx',
}

export const categorias = [
  { id: 'anticuchos', nombre: 'Anticuchos' },
  { id: 'completos', nombre: 'Completos' },
  { id: 'parrilla', nombre: 'Parrilla al plato' },
  { id: 'bebidas', nombre: 'Bebidas' },
  { id: 'postres', nombre: 'Postres' },
]

export const productos = [
  {
    id: 'p1',
    imagen: '/productos/p1.png',
    categoria: 'anticuchos',
    nombre: 'Anticucho de vacuno',
    descripcion: 'Brocheta de posta rostizada, pimentón y cebolla, a la parrilla.',
    precio: 3200,
    destacado: true,
  },
  {
    id: 'p2',
    imagen: '/productos/p2.png',
    categoria: 'anticuchos',
    nombre: 'Anticucho mixto',
    descripcion: 'Vacuno, chorizo y pollo en una misma brocheta con chimichurri.',
    precio: 3800,
  },
  {
    id: 'p3',
    imagen: '/productos/p3.png',
    categoria: 'anticuchos',
    nombre: 'Anticucho de pollo',
    descripcion: 'Trutro marinado en ají panca, cebolla morada y limón.',
    precio: 2900,
  },
  {
    id: 'p4',
    imagen: '/productos/p4.png',
    categoria: 'completos',
    nombre: 'Completo italiano',
    descripcion: 'Vienesa, palta, tomate y mayo casera en pan amasado.',
    precio: 2400,
    destacado: true,
  },
  {
    id: 'p5',
    imagen: '/productos/p5.png',
    categoria: 'completos',
    nombre: 'Completo a lo pobre',
    descripcion: 'Vienesa, huevo frito, papas fritas y cebolla caramelizada.',
    precio: 3100,
  },
  {
    id: 'p6',
    imagen: '/productos/p6.png',
    categoria: 'completos',
    nombre: 'Dinámico',
    descripcion: 'Vienesa, chucrut, tomate, palta y salsa americana.',
    precio: 2600,
  },
  {
    id: 'p7',
    imagen: '/productos/p7.png',
    categoria: 'parrilla',
    nombre: 'Costillar ahumado',
    descripcion: 'Costillar de cerdo ahumado 6 horas, papas rústicas y ensalada.',
    precio: 8900,
    destacado: true,
  },
  {
    id: 'p8',
    imagen: '/productos/p8.png',
    categoria: 'parrilla',
    nombre: 'Choripán completo',
    descripcion: 'Chorizo artesanal, pebre y pan de campo, con papas fritas.',
    precio: 4500,
  },
  {
    id: 'p9',
    imagen: '/productos/p9.png',
    categoria: 'bebidas',
    nombre: 'Mote con huesillo',
    descripcion: 'Receta tradicional, bien helado.',
    precio: 1800,
  },
  {
    id: 'p10',
    imagen: '/productos/p10.png',
    categoria: 'bebidas',
    nombre: 'Bebida lata 350ml',
    descripcion: 'A elección: Coca-Cola, Sprite o Fanta.',
    precio: 1200,
  },
  {
    id: 'p11',
    imagen: '/productos/p11.png',
    categoria: 'postres',
    nombre: 'Mil hojas casero',
    descripcion: 'Manjar artesanal entre capas crocantes.',
    precio: 2200,
  },
  {
    id: 'p12',
    imagen: '/productos/p12.png',
    categoria: 'postres',
    nombre: 'Sopaipilla pasada',
    descripcion: 'Bañada en chancaca caliente con naranja y canela.',
    precio: 1500,
  },
]

export const contenidoInicio = {
  historia: {
    titulo: 'De la plancha a tu plato. Convertimos tu hambre en alegría',
    texto:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, repellendus. Mollitia labore, expedita magni nam tempora iste in eveniet. Ipsum voluptate id, culpa doloribus beatae iusto in nesciunt earum quia!',
  },
  vitrina: [
    {
      titulo: 'El plato que todos piden',
      imagen: '/platos/anticuchos.jpg',
      alt: 'Anticuchos a la parrilla con pebre y pan',
      texto:
        'Anticuchos jugosos, marinados desde la noche anterior y terminados al carbón justo antes de servir. Vienen con pebre casero y pan recién horneado para no dejar nada en el plato.',
    },
    {
      titulo: 'Hecho para compartir',
      imagen: '/platos/parrillada.jpg',
      alt: 'Fuente de chorizos, choclo asado y papas doradas',
      texto:
        'Chorizo artesanal, choclo asado y papas doradas en la parrilla, pensado para la mesa completa. Es el plato que pedimos cuando queremos quedar bien con las visitas.',
    },
  ],
  destacadosTitulo: 'Lo que más se repite',
  bloques: [
    {
      titulo: 'Retiro rápido o coordinado por WhatsApp',
      texto: 'Escríbenos, arma tu pedido y pasa a buscarlo sin filas ni esperas.',
    },
    {
      titulo: 'Ingredientes premium',
      texto: 'Seleccionamos y cocinamos los mejores productos.',
    },
  ],
}
