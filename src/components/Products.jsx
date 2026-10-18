import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { categories, weightLabels } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatINR } from '../utils/whatsapp'

function ProductCard({ product, categoryName }) {
  const { addItem } = useCart()
  const [weight, setWeight] = useState('1/2kg')
  const price = product.prices[weight]

  return (
    <article className="menu-card">
      <div className="menu-card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="menu-card-body">
        <p className="product-cat">{categoryName}</p>
        <h3>
          {product.name}
          {product.priceVaries && <span className="varies">*</span>}
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
        <div className="menu-card-foot">
          <strong>
            {formatINR(price)}
            {product.priceVaries && <span className="varies">*</span>}
          </strong>
          <button
            type="button"
            className="btn btn-order btn-sm"
            onClick={() => addItem({ ...product, categoryName }, weight)}
          >
            <ShoppingBag size={15} /> Add to Cart
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
          className="section-head center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Full Menu</p>
          <h2>All Products</h2>
          <p className="section-lead">
            Spices, sweets, and hot snacks — choose weight and order in advance.
            Items marked * may vary slightly in price.
          </p>
        </motion.div>

        <div className="category-tabs" role="tablist">
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="panel-blurb">{current.blurb}</p>
          <div className="popular-grid full">
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
