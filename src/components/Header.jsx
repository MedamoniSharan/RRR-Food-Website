import { useEffect, useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { business } from '../data/business'

const links = [
  { href: '#products', label: 'Shop' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#hours', label: 'Hours' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const { count, setCartOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="brand" aria-label={`${business.name} home`}>
          <img src="/logo.png" alt="" className="brand-logo" width="48" height="48" />
          <span className="brand-text">
            <span className="brand-name">RRR Food</span>
            <span className="brand-tag">{business.tagline}</span>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn cart-btn"
            onClick={() => setCartOpen(true)}
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingBag size={20} strokeWidth={2} />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
