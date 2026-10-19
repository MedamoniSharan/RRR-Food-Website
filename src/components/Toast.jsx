import { ShoppingBag, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { weightLabels } from '../data/products'

export default function Toast() {
  const { toast, clearToast, setCartOpen } = useCart()

  if (!toast) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      <div className="toast-media">
        {toast.image ? (
          <img src={toast.image} alt="" width="48" height="48" />
        ) : (
          <ShoppingBag size={20} />
        )}
      </div>
      <div className="toast-body">
        <strong>Added to cart</strong>
        <span>
          {toast.name} · {weightLabels[toast.weight] ?? toast.weight}
        </span>
      </div>
      <button
        type="button"
        className="btn btn-order btn-sm"
        onClick={() => {
          clearToast()
          setCartOpen(true)
        }}
      >
        View cart
      </button>
      <button
        type="button"
        className="icon-btn toast-close"
        aria-label="Dismiss"
        onClick={clearToast}
      >
        <X size={16} />
      </button>
    </div>
  )
}
