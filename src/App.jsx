import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from './CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BotonWhatsApp from './components/BotonWhatsApp'
import Home from './pages/Home'
import Productos from './pages/Productos'
import SobreNosotros from './pages/SobreNosotros'
import Contacto from './pages/Contacto'

function ScrollAlTope() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <CartProvider>
      <ScrollAlTope />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <BotonWhatsApp />
    </CartProvider>
  )
}
