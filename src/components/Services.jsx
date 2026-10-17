import { motion } from 'framer-motion'
import { services } from '../data/business'
import { useCart } from '../context/CartContext'
import {
  ShoppingBag,
  Truck,
  PartyPopper,
  ChefHat,
  CreditCard,
} from 'lucide-react'

const icons = {
  ordering: ShoppingBag,
  delivery: Truck,
  bulk: PartyPopper,
  onsite: ChefHat,
  payments: CreditCard,
}

export default function Services() {
  const { setBookingOpen } = useCart()

  return (
    <section className="section services" id="services">
      <div className="container">
        <motion.div
          className="section-head light"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">What we offer</p>
          <h2>Products & services</h2>
          <p className="section-lead">
            From everyday spices to festival bulk orders and on-site kitchen
            service — all in one place.
          </p>
        </motion.div>

        <div className="service-grid">
          {services.map((s, i) => {
            const Icon = icons[s.id] ?? ShoppingBag
            return (
              <motion.article
                key={s.id}
                className="service-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
              >
                <div className="service-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="services-cta">
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => setBookingOpen(true)}
          >
            Book food preparation service
          </button>
          <p className="fineprint">
            Advance booking required. Separate service charges apply.
          </p>
        </div>
      </div>
    </section>
  )
}
