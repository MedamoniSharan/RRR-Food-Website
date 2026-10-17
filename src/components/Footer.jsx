import { useState } from 'react'
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react'
import { business } from '../data/business'

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.1C16.7 4 15.7 4 14.6 4 12.2 4 10.5 5.5 10.5 8.2V10.5H8v3h2.5V20h3.5v-6.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const faqs = [
  {
    q: 'How do I place an advance order?',
    a: 'Add items to your cart, fill in your details, and send the order on WhatsApp. We’ll confirm availability, delivery, and payment.',
  },
  {
    q: 'Do you deliver?',
    a: 'Yes — we offer home delivery and shipping. Delivery charges depend on location and order size; confirmed when you place the order.',
  },
  {
    q: 'Can I book on-site food preparation?',
    a: 'Yes. Advance booking is required and separate service charges apply. Use “Book a service” or contact us during business hours.',
  },
  {
    q: 'Why do some prices have a *?',
    a: 'Those items may vary slightly based on ingredients or market rates. We’ll confirm the final amount before you pay.',
  },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button type="button" onClick={() => setOpen((v) => !v)}>
        <span>{item.q}</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>
      {open && <p>{item.a}</p>}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="RRR Food" width="72" height="72" />
          <h2>RRR Food</h2>
          <p>{business.tagline}</p>
          <div className="social-links">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <a href={`tel:${business.phone}`}>
            <Phone size={16} /> {business.phoneDisplay}
          </a>
          <a href={`mailto:${business.email}`}>
            <Mail size={16} /> {business.email}
          </a>
          <p className="footer-address">
            <MapPin size={16} />
            <span>
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.line3}
              <br />
              {business.address.line4}
            </span>
          </p>
        </div>

        <div className="footer-faq">
          <h3>Have questions?</h3>
          {faqs.map((f) => (
            <FaqItem key={f.q} item={f} />
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RRR Food. All rights reserved.</p>
        <p>Miyapur · Hyderabad · Telangana</p>
      </div>
    </footer>
  )
}
