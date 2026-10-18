import { motion } from 'framer-motion'

const shots = [
  { src: '/products/hero-laddu.jpg', alt: 'Homemade laddus' },
  { src: '/products/chilli.jpg', alt: 'Homemade chilli karam' },
  { src: '/products/rice-rings-large.jpg', alt: 'Rice flour rings' },
  { src: '/products/gujiya.jpg', alt: 'Sweet gujiya' },
  { src: '/products/spicy-boondi.jpg', alt: 'Spicy boondi' },
  { src: '/products/turmeric.jpg', alt: 'Turmeric powder' },
]

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">From our kitchen</p>
          <h2>Gallery</h2>
          <p className="section-lead">
            A glimpse of the homemade goodness we prepare every day.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <img src={s.src} alt={s.alt} loading="lazy" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
