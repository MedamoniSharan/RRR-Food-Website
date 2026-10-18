import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Truck, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Leaf, label: 'Fresh Ingredients' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: ShieldCheck, label: 'Hygienic & Safe' },
]

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-photo" />
        <div className="hero-veil" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fresh · Tasty · Homemade
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            Food Made with{' '}
            <span className="hero-script">Love</span>
          </motion.h1>

          <motion.p
            className="hero-support"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.55 }}
          >
            Homemade laddus, traditional snacks, and fresh masala powders —
            crafted with care and delivered to your door.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.55 }}
          >
            <a href="#menu" className="btn btn-order btn-lg">
              Order Now <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.ul
            className="hero-features"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.55 }}
          >
            {features.map(({ icon: Icon, label }) => (
              <li key={label}>
                <span className="hero-feature-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <img
            src="/products/hero-laddu.jpg"
            alt="Homemade laddus from RRR Food"
            className="hero-dish"
          />
          <div className="hero-badge" aria-hidden="true">
            <img src="/logo.png" alt="" width="56" height="56" />
            <span>Best homemade in town</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
