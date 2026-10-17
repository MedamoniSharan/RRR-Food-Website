import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import About from './components/About'
import Hours from './components/Hours'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import CheckoutModal from './components/CheckoutModal'
import BookingModal from './components/BookingModal'

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Hours />
        <CtaBanner />
      </main>
      <Footer />
      <CartDrawer />
      <CheckoutModal />
      <BookingModal />
    </CartProvider>
  )
}
