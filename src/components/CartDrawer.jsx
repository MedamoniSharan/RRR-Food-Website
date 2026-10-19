import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { weightLabels } from '../data/products'
import { formatINR } from '../utils/whatsapp'

export default function CartDrawer() {
  const {
    items,
    total,
    cartOpen,
    setCartOpen,
    updateQty,
    removeItem,
    setCheckoutOpen,
  } = useCart()

  if (!cartOpen) return null

  return (
    <div className="drawer-root" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        className="drawer-backdrop"
        aria-label="Close cart"
        onClick={() => setCartOpen(false)}
      />
      <aside className="drawer-panel">
        <div className="drawer-head">
          <h2>Your cart</h2>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setCartOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="drawer-empty">
            Your cart is empty. Browse spices, sweets, and snacks to get started.
          </p>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item.key} className="cart-item">
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="cart-thumb"
                      width="56"
                      height="56"
                    />
                  )}
                  <div className="cart-item-info">
                    <strong>
                      {item.name}
                      {item.priceVaries && <span className="varies">*</span>}
                    </strong>
                    <span className="cart-meta">
                      {weightLabels[item.weight]} · {formatINR(item.unitPrice)}
                    </span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-ctrl">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQty(item.key, item.qty - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateQty(item.key, item.qty + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="icon-btn danger"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.key)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="drawer-foot">
              <div className="cart-total">
                <span>Estimated total</span>
                <strong>{formatINR(total)}</strong>
              </div>
              <p className="charge-note">
                The final price might change depending on the order.{' '}
                <strong>Delivery charges also apply.</strong>
              </p>
              <p className="fineprint">
                Confirmed on WhatsApp. * may vary.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  setCartOpen(false)
                  setCheckoutOpen(true)
                }}
              >
                Place order
              </button>
              <button
                type="button"
                className="btn btn-outline btn-block"
                onClick={() => setCartOpen(false)}
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
