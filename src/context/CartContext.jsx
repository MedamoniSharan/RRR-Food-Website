import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'rrr-food-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    }
  }, [])

  const clearToast = () => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(null)
  }

  const showToast = (payload) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(payload)
    toastTimer.current = setTimeout(() => setToast(null), 3200)
  }

  const addItem = (product, weight, qty = 1) => {
    const key = `${product.id}:${weight}`
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i,
        )
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          image: product.image,
          categoryName: product.categoryName,
          weight,
          unitPrice: product.prices[weight],
          priceVaries: product.priceVaries,
          qty,
        },
      ]
    })
    // Keep shopping — do not open the cart drawer
    showToast({
      name: product.name,
      weight,
      image: product.image,
    })
  }

  const updateQty = (key, qty) => {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty } : i))
        .filter((i) => i.qty > 0),
    )
  }

  const removeItem = (key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  const clearCart = () => setItems([])

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items],
  )

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0),
    [items],
  )

  const value = {
    items,
    count,
    total,
    addItem,
    updateQty,
    removeItem,
    clearCart,
    cartOpen,
    setCartOpen,
    checkoutOpen,
    setCheckoutOpen,
    bookingOpen,
    setBookingOpen,
    toast,
    clearToast,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
