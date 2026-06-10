import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const U = 'https://images.unsplash.com'

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

const packages = [
  {
    id: 'intimate',
    name: 'Intimate',
    tagline: 'For quiet, beautiful beginnings',
    price: 'From $2,400',
    duration: 'Up to 6 hours',
    image: `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
    includes: [
      '6 hours of coverage',
      'One photographer',
      '400+ edited images',
      'Private online gallery',
      'Print release included',
    ],
    ideal: 'Elopements & intimate ceremonies',
  },
  {
    id: 'full',
    name: 'Full Day',
    tagline: 'Every chapter of your day',
    price: 'From $4,200',
    duration: 'Up to 12 hours',
    image: `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
    includes: [
      '12 hours of coverage',
      'Two photographers',
      '800+ edited images',
      'Private online gallery',
      'Engagement session',
      'Fine art album (optional add-on)',
    ],
    ideal: 'Full weddings & celebrations',
    featured: true,
  },
  {
    id: 'destination',
    name: 'Destination',
    tagline: 'Wherever love takes you',
    price: 'From $6,800',
    duration: 'Multi-day',
    image: `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
    includes: [
      'Full day coverage',
      'Two photographers',
      '1,000+ edited images',
      'Pre-wedding session',
      'Private online gallery',
      'Travel included worldwide',
      'Luxury fine art album',
    ],
    ideal: 'Destination & international weddings',
  },
]

const addons = [
  { name: 'Fine Art Album', desc: 'Handcrafted linen albums, printed on archival paper. A family heirloom.', price: 'From $650' },
  { name: 'Engagement Session', desc: 'A relaxed portrait session before the big day. Perfect for getting comfortable in front of the lens.', price: '$380' },
  { name: 'Second Photographer', desc: 'A second artistic eye for full coverage of simultaneous moments.', price: '$400/day' },
  { name: 'Rush Delivery', desc: 'Receive your full gallery within 2 weeks of your wedding day.', price: '$280' },
]

const process = [
  { num: '01', title: 'Reach Out', desc: 'Send us a message with your date and vision. We\'ll get back within 24 hours.' },
  { num: '02', title: 'Consultation', desc: 'A relaxed video call to get to know each other and walk through your day.' },
  { num: '03', title: 'Reserve Your Date', desc: 'A retainer secures your date. We only take a limited number of weddings per year.' },
  { num: '04', title: 'The Day', desc: 'We arrive, we disappear into the background, and we capture everything.' },
  { num: '05', title: 'Delivery', desc: 'Your gallery is ready within 6–8 weeks, crafted with care.' },
]

export default function Offerings() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', minHeight: '100vh' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', padding: '0 clamp(1rem, 4vw, 2rem) clamp(2rem, 8vw, 5rem)' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Investment</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1 }}>
          Our <em>Offerings</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.75rem, 1.8vw, 0.82rem)', color: 'var(--text-muted)', marginTop: '1.25rem', letterSpacing: '0.04em', maxWidth: '100%', margin: '1.25rem auto 0', lineHeight: 1.9, padding: '0 1rem' }}>
          Each collection is thoughtfully crafted to honour your unique love story. Every package includes our full artistic commitment.
        </p>
      </motion.div>

      {/* Packages */}
      <section style={{ padding: '0 clamp(1rem, 5vw, 5rem) clamp(3rem, 8vw, 6rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)', alignItems: 'stretch' }} className="pkg-grid">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.id} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.12 }}
              style={{
                border: `1px solid ${pkg.featured ? 'var(--gold)' : 'var(--border)'}`,
                background: pkg.featured ? 'var(--surface)' : 'transparent',
                position: 'relative', display: 'flex', flexDirection: 'column',
                transition: 'border-color 0.4s',
              }}>

              {pkg.featured && (
                <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', padding: 'clamp(0.2rem, 0.5vw, 0.3rem) clamp(0.8rem, 2vw, 1.2rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.5rem, 1.2vw, 0.6rem)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--black)', whiteSpace: 'nowrap' }}>
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.5vw, 0.62rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>{pkg.duration}</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.4rem' }}>{pkg.name}</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.5vw, 0.78rem)', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>{pkg.tagline}</p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem', flex: 1 }}>
                  {pkg.includes.map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', marginTop: '0.15rem', flexShrink: 0, fontSize: '0.6rem' }}>—</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.5vw, 0.78rem)', color: 'var(--text-secondary)', letterSpacing: '0.02em' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'stretch' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--cream)', fontWeight: 400 }}>{pkg.price}</p>
                  <Link to="/contact" style={{
                    fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.3vw, 0.65rem)', letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: pkg.featured ? 'var(--gold)' : 'var(--text-secondary)',
                    borderBottom: `1px solid ${pkg.featured ? 'var(--gold)' : 'var(--border)'}`,
                    paddingBottom: '2px', transition: 'all 0.3s', textAlign: 'center'
                  }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.color = 'var(--gold)'; el.style.borderColor = 'var(--gold)' }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.color = pkg.featured ? 'var(--gold)' : 'var(--text-secondary)'; el.style.borderColor = pkg.featured ? 'var(--gold)' : 'var(--border)' }}
                  >Inquire</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', color: 'var(--text-muted)', marginTop: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '0.04em' }}>
          All packages include travel within Sri Lanka. Custom quotes available for international destinations.
        </motion.p>
      </section>

      {/* Add-ons */}
      <section style={{ background: 'var(--surface)', padding: 'clamp(3rem, 9vw, 8rem) clamp(1rem, 5vw, 5rem)' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Enhance</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--cream)' }}>Add-Ons</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(0.75rem, 2vw, 1rem)', maxWidth: 900, margin: '0 auto' }} className="addon-grid">
          {addons.map((a, i) => (
            <motion.div key={a.name} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.1 }}
              style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', border: '1px solid var(--border)', transition: 'border-color 0.4s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 400, color: 'var(--cream)' }}>{a.name}</h3>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.85rem, 1.8vw, 1rem)', color: 'var(--gold)', whiteSpace: 'nowrap', flexShrink: 0 }}>{a.price}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.5vw, 0.78rem)', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.02em' }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: 'clamp(3rem, 9vw, 8rem) clamp(1rem, 5vw, 5rem)' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>How It Works</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--cream)' }}>The Process</h2>
        </motion.div>

        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {process.map((step, i) => (
            <motion.div key={step.num} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: i * 0.08 }}
              style={{ display: 'grid', gridTemplateColumns: 'clamp(60px, 15vw, 80px) 1fr', gap: 'clamp(1.25rem, 3vw, 2rem)', padding: 'clamp(1.5rem, 3vw, 2rem) 0', borderBottom: i < process.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }}
              onClick={() => setExpanded(expanded === step.num ? null : step.num)}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: 'rgba(201,169,110,0.3)', lineHeight: 1 }}>{step.num}</p>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 400, color: 'var(--cream)' }}>{step.title}</h3>
                  <span style={{ color: 'var(--gold)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', transition: 'transform 0.3s', transform: expanded === step.num ? 'rotate(45deg)' : 'none' }}>+</span>
                </div>
                <AnimatePresence>
                  {expanded === step.num && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }}
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.75rem, 1.5vw, 0.82rem)', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.03em', marginTop: '0.75rem', overflow: 'hidden' }}>
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--surface)', padding: 'clamp(3rem, 9vw, 8rem) clamp(1rem, 4vw, 2rem)', textAlign: 'center' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', fontStyle: 'italic', color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>Ready to begin?</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2, marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', padding: '0 1rem' }}>
            Dates for 2025 & 2026<br />are filling quickly
          </h2>
          <Link to="/contact" style={{
            display: 'inline-block', padding: 'clamp(0.8rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem)',
            background: 'var(--gold)', color: 'var(--black)',
            fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.72rem)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 400,
            transition: 'background 0.4s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
          >Reserve Your Date</Link>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .pkg-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .pkg-grid { grid-template-columns: 1fr !important; }
          .addon-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
