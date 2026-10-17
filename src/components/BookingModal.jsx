import { useState } from 'react'
import { X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { buildBookingMessage, openWhatsApp } from '../utils/whatsapp'

const initial = {
  name: '',
  phone: '',
  email: '',
  service: 'On-site food preparation',
  date: '',
  guests: '',
  address: '',
  notes: '',
}

const serviceOptions = [
  'On-site food preparation',
  'Bulk order for function / occasion',
  'Home delivery inquiry',
  'Other',
]

export default function BookingModal() {
  const { bookingOpen, setBookingOpen } = useCart()
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')

  if (!bookingOpen) return null

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please enter your name and phone number.')
      return
    }
    setError('')
    openWhatsApp(buildBookingMessage(form))
    setForm(initial)
    setBookingOpen(false)
  }

  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <button
        type="button"
        className="modal-backdrop"
        aria-label="Close"
        onClick={() => setBookingOpen(false)}
      />
      <div className="modal-panel">
        <div className="modal-head">
          <h2 id="booking-title">Book a service</h2>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setBookingOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <p className="modal-lead">
          Advance booking required for on-site food preparation. Service charges
          are confirmed separately during business hours.
        </p>

        <form className="form" onSubmit={submit}>
          <label>
            Full name *
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
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
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
            />
          </label>
          <label>
            Service *
            <select name="service" value={form.service} onChange={onChange}>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
          <label>
            Preferred date
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={onChange}
            />
          </label>
          <label>
            Guests / approximate quantity
            <input
              name="guests"
              value={form.guests}
              onChange={onChange}
              placeholder="e.g. 50 guests or 10 kg laddus"
            />
          </label>
          <label>
            Event / kitchen location
            <textarea
              name="address"
              rows={2}
              value={form.address}
              onChange={onChange}
            />
          </label>
          <label>
            Additional details
            <textarea
              name="notes"
              rows={2}
              value={form.notes}
              onChange={onChange}
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary btn-block">
            Send booking on WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
