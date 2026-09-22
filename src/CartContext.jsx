import { createContext, useContext, useMemo, useState } from 'react'

// Carrito en memoria: vive solo mientras la pestaña está abierta.
// No hay cuentas, login ni almacenamiento persistente por diseño.
const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // { id, nombre, precio, cantidad }

  function agregar(producto) {
    setItems((prev) => {
      const existe = prev.find((i) => i.id === producto.id)
      if (existe) {
        return prev.map((i) =>
          i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i,
        )
      }
      return [...prev, { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 }]
    })
  }

  function quitar(id) {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter((i) => i.cantidad > 0),
    )
  }

  function vaciar() {
    setItems([])
  }

  const total = useMemo(
    () => items.reduce((acc, i) => acc + i.precio * i.cantidad, 0),
    [items],
  )
  const cantidadTotal = useMemo(
    () => items.reduce((acc, i) => acc + i.cantidad, 0),
    [items],
  )

  return (
    <CartContext.Provider value={{ items, agregar, quitar, vaciar, total, cantidadTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
