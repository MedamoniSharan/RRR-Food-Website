import { Leaf, Star, Truck, CreditCard } from 'lucide-react'

const items = [
  { icon: Leaf, label: '100% Fresh Ingredients' },
  { icon: Star, label: 'Top Rated by Customers' },
  { icon: Truck, label: 'Delivery Available' },
  { icon: CreditCard, label: 'Secure Online Payment' },
]

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Why choose us">
      <div className="container trust-grid">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              <Icon size={22} />
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
