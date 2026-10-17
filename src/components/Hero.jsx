import { motion } from 'framer-motion'
import { business } from '../data/business'
import { useCart } from '../context/CartContext'

export default function Hero() {
  const { setBookingOpen } = useCart()

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-photo" />
        <div className="hero-veil" />
        <div className="hero-grain" />
      </div>

      <div className="hero-content">
        <motion.img
          src="/logo.png"
          alt="RRR Food logo"
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.h1
          className="hero-brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          RRR Food
        </motion.h1>

        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.65 }}
        >
          Traditional taste, homemade love
        </motion.p>

        <motion.p
          className="hero-support"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Homemade laddus, traditional snacks, and fresh masala powders — order
          online or book our kitchen for your next celebration.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.6 }}
        >
          <a href="#products" className="btn btn-primary">
            Shop now
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setBookingOpen(true)}
          >
            Book a service
          </button>
        </motion.div>
      </div>

      <a href="#products" className="hero-scroll" aria-label="Scroll to products">
        <span />
      </a>
    </section>
  )
}
