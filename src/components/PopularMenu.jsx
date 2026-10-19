import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { allProducts, weightLabels } from '../data/products'
import { formatINR } from '../utils/whatsapp'
import AddToCartButton from './AddToCartButton'

const featuredIds = [
  'jaggery-urad-laddu',
  'groundnut-karam',
  'spicy-boondi',
  'rice-rings-large',
]

const blurbs = {
  'jaggery-urad-laddu': 'Traditional urad dal laddus sweetened with jaggery.',
  'groundnut-karam': 'Homemade groundnut karam — spicy, crunchy & aromatic.',
  'spicy-boondi': 'Crispy spicy boondi with peanuts and curry leaves.',
  'rice-rings-large': 'Golden rice flour murukulu — crunchy homemade snack.',
}

export default function PopularMenu() {
  const featured = featuredIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <section className="section popular" id="menu">
      <div className="container">
        <div className="popular-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">Our Specials</p>
            <h2>Popular Menu</h2>
            <p className="section-lead">
              Customer favourites from our homemade kitchen — pick a weight and
              add to cart. <strong>Delivery charges also apply.</strong>
            </p>
          </motion.div>
          <a href="#products" className="btn btn-outline">
            View Full Menu <ArrowRight size={16} />
          </a>
        </div>

        <div className="popular-grid">
          {featured.map((product, i) => (
            <PopularCard
              key={product.id}
              product={product}
              blurb={blurbs[product.id]}
              popular={i === 0}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PopularCard({ product, blurb, popular, delay }) {
  const [weight, setWeight] = useState('1/2kg')
  const price = product.prices[weight]

  return (
    <motion.article
      className="menu-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
    >
      <div className="menu-card-media">
        {popular && <span className="popular-badge">Popular</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="menu-card-body">
        <h3>
          {product.name}
          {product.priceVaries && <span className="varies">*</span>}
        </h3>
        <p>{blurb}</p>
        <div className="weight-pills" role="group" aria-label="Select weight">
          {Object.keys(product.prices).map((w) => (
            <button
              key={w}
              type="button"
              className={`weight-pill ${weight === w ? 'is-active' : ''}`}
              onClick={() => setWeight(w)}
            >
              {weightLabels[w]}
            </button>
          ))}
        </div>
        <div className="menu-card-foot">
          <strong>
            {formatINR(price)}
            {product.priceVaries && <span className="varies">*</span>}
          </strong>
          <AddToCartButton product={product} weight={weight} />
        </div>
      </div>
    </motion.article>
  )
}
