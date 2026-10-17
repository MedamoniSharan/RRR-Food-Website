import { motion } from 'framer-motion'
import { Clock, Package, Phone } from 'lucide-react'
import { business } from '../data/business'

export default function Hours() {
  return (
    <section className="section hours" id="hours">
      <div className="container hours-inner">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">When we’re open</p>
          <h2>Business hours</h2>
        </motion.div>

        <div className="hours-layout">
          <ul className="hours-list">
            {business.hours.map((h) => (
              <li key={h.days}>
                <Clock size={18} aria-hidden="true" />
                <div>
                  <strong>{h.days}</strong>
                  <span>{h.time}</span>
                </div>
              </li>
            ))}
          </ul>

          <ul className="hours-notes">
            <li>
              <Package size={18} aria-hidden="true" />
              <span>Online orders available 24/7</span>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <span>
                Customer support & service bookings during business hours
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
