import { useState } from 'react'
import { motion } from 'framer-motion'
import { categories, weightLabels } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatINR } from '../utils/whatsapp'

function ProductCard({ product, categoryName }) {
  const { addItem } = useCart()
  const [weight, setWeight] = useState('1/2kg')
  const price = product.prices[weight]

  return (
    <article className="product-card">
      <div className="product-media">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="400"
          height="320"
        />
      </div>

      <div className="product-body">
        <p className="product-cat">{categoryName}</p>
        <h3>
          {product.name}
          {product.priceVaries && (
            <span className="varies" title="Price may vary">
              *
            </span>
          )}
        </h3>

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

        <div className="product-buy">
          <p className="product-price">
            {formatINR(price)}
            {product.priceVaries && <span className="varies">*</span>}
          </p>
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={() => addItem({ ...product, categoryName }, weight)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  const [active, setActive] = useState(categories[0].id)
  const current = categories.find((c) => c.id === active) ?? categories[0]

  return (
    <section className="section products" id="products">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Our menu</p>
          <h2>Shop homemade favorites</h2>
          <p className="section-lead">
            Choose your weight, add to cart, and place an advance order. Items
            marked * may vary slightly in price.
          </p>
        </motion.div>

        <div className="category-tabs" role="tablist" aria-label="Product categories">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active === c.id}
              className={`category-tab ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          className="product-panel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="panel-blurb">{current.blurb}</p>
          <div className="product-grid">
            {current.products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                categoryName={current.name}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
