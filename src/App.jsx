import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import PopularMenu from './components/PopularMenu'
import Products from './components/Products'
import CtaBanner from './components/CtaBanner'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Gallery from './components/Gallery'
import Hours from './components/Hours'
import Services from './components/Services'
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
        <PopularMenu />
        <CtaBanner />
        <TrustBar />
        <Products />
        <About />
        <Gallery />
        <Services />
        <Hours />
      </main>
      <Footer />
      <CartDrawer />
      <CheckoutModal />
      <BookingModal />
    </CartProvider>
  )
}
