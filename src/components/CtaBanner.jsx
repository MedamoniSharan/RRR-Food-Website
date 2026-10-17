import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function CtaBanner() {
  const { setBookingOpen } = useCart()

  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Ready for traditional homemade goodness?</h2>
          <p>
            Order spices, sweets, and snacks online — or book our kitchen for
            your next function.
          </p>
          <div className="hero-ctas">
            <a href="#products" className="btn btn-accent">
              Shop products
            </a>
            <button
              type="button"
              className="btn btn-ghost-light"
              onClick={() => setBookingOpen(true)}
            >
              Book a service
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
