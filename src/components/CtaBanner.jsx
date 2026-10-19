import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="crave-cta" aria-label="Delivery call to action">
      <div className="crave-panel">
        <motion.div
          className="crave-copy"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow light">Good Food Always</p>
          <h2>
            Crave It? <span>We’ll Deliver It!</span>
          </h2>
          <p>
            Order homemade laddus, snacks, and spices online — fresh taste,
            home delivery, and advance booking for bulk orders.
          </p>
          <a href="#menu" className="btn btn-order">
            Order Now <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          className="crave-media"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <img
            src="/products/hero.jpg"
            alt="Fresh homemade snacks ready for delivery"
          />
          <span className="crave-note" aria-hidden="true">
            Good Food, Homemade Love!
          </span>
        </motion.div>
      </div>
    </section>
  )
}
