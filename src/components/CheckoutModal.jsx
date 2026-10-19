import { useState } from 'react'
import { X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import {
  buildOrderMessage,
  formatINR,
  openWhatsApp,
} from '../utils/whatsapp'

const initial = {
  name: '',
  phone: '',
  email: '',
  address: '',
  date: '',
  notes: '',
}

export default function CheckoutModal() {
  const { items, total, checkoutOpen, setCheckoutOpen, clearCart } = useCart()
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')

  if (!checkoutOpen) return null

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please enter your name and phone number.')
      return
    }
    if (items.length === 0) {
      setError('Your cart is empty.')
      return
    }
    setError('')
    openWhatsApp(buildOrderMessage({ items, total, customer: form }))
    clearCart()
    setForm(initial)
    setCheckoutOpen(false)
  }

  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
      <button
        type="button"
        className="modal-backdrop"
        aria-label="Close"
        onClick={() => setCheckoutOpen(false)}
      />
      <div className="modal-panel">
        <div className="modal-head">
          <h2 id="checkout-title">Place your order</h2>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setCheckoutOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <p className="modal-lead">
          We’ll open WhatsApp with your order details so we can confirm stock,
          delivery, and online payment. Estimated total:{' '}
          <strong>{formatINR(total)}</strong>
        </p>

        <p className="charge-note">
          The final price might change depending on the order.{' '}
          <strong>Delivery charges also apply.</strong>
        </p>

        <form className="form" onSubmit={submit}>
          <label>
            Full name *
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
            />
          </label>
          <label>
            Phone *
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={onChange}
              required
              autoComplete="tel"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              autoComplete="email"
            />
          </label>
          <label>
            Delivery address
            <textarea
              name="address"
              rows={2}
              value={form.address}
              onChange={onChange}
            />
          </label>
          <label>
            Preferred delivery / pickup date
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={onChange}
            />
          </label>
          <label>
            Notes (bulk order, allergies, etc.)
            <textarea
              name="notes"
              rows={2}
              value={form.notes}
              onChange={onChange}
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary btn-block">
            Send order on WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
