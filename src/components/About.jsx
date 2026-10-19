import { motion } from 'framer-motion'
import { about, business } from '../data/business'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/products/hero.jpg"
            alt="Homemade snacks and sweets from RRR Food"
            className="about-photo-img"
          />
          <div className="about-logo-wrap">
            <img src="/logo.png" alt="" width="100" height="100" />
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">About us</p>
          <h2>About {business.name}</h2>
          <p className="about-welcome">{about.welcome}</p>
          {about.body.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
          <p className="about-mission">{about.mission}</p>
          <p className="about-signoff">
            {business.name} — {business.tagline}.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
