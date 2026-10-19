import { useEffect, useState } from 'react'
import { Check, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function AddToCartButton({ product, weight, className = 'btn btn-order btn-sm' }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return undefined
    const t = setTimeout(() => setAdded(false), 1600)
    return () => clearTimeout(t)
  }, [added])

  return (
    <button
      type="button"
      className={`${className}${added ? ' is-added' : ''}`}
      onClick={() => {
        addItem(product, weight)
        setAdded(true)
      }}
    >
      {added ? (
        <>
          <Check size={15} /> Added
        </>
      ) : (
        <>
          <ShoppingBag size={15} /> Add to Cart
        </>
      )}
    </button>
  )
}
