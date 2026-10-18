import { useEffect, useState } from 'react'
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { business } from '../data/business'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const { count, setCartOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = ['top', 'menu', 'about', 'gallery', 'contact']
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${id}`)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="brand" aria-label={`${business.name} home`}>
          <img src="/logo.png" alt="" className="brand-logo" width="52" height="52" />
          <span className="brand-text">
            <span className="brand-name">RRR Food</span>
            <span className="brand-tag">Traditional Taste · Homemade Love</span>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? 'is-active' : ''}
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
            <span className="cart-badge">{count}</span>
          </button>
          <a href="#menu" className="btn btn-order">
            Order Now <ArrowRight size={16} />
          </a>
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
