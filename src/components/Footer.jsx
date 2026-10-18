import { Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../data/business'

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.1C16.7 4 15.7 4 14.6 4 12.2 4 10.5 5.5 10.5 8.2V10.5H8v3h2.5V20h3.5v-6.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <img src="/logo.png" alt="RRR Food" width="64" height="64" />
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
              {business.address.line1}, {business.address.line2}
              <br />
              {business.address.line4}
            </span>
          </p>
        </div>

        <div className="footer-hours">
          <h3>Business Hours</h3>
          {business.hours.map((h) => (
            <p key={h.days}>
              <strong>{h.days}</strong>
              <br />
              {h.time}
            </p>
          ))}
          <p className="fineprint-light">Online orders available 24/7</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RRR Food. All rights reserved.</p>
        <div className="social-links compact">
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
    </footer>
  )
}
