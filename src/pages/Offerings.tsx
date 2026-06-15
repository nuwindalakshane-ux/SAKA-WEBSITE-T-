import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

const premiumTiers = [
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Elegant Foundations',
    price: 'LKR 285,000',
    icon: '◆',
    color: '#C0C0C0',
    gradient: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(192,192,192,0.1) 100%)',
    highlights: [
      '17 x 24 Main magazine album( 60 pages )',
      '6 x 8 Thank you cards (200 pcs)',
      '20 x 30 Enlargement (4 pcs)',
      '12 x 18 Wedding Group Enlargement (2 pcs)',
      '8 x 24 Family Album',
      'Preshoot Photo session ( 3 Coustumes, Slide show, 8 x 24 Preshoot Magazine Album )',
      'Wedding Cinematography ( 3 min Lovestory Video, 55 around Documentary Video, Wedding trailer)',
    ],
    description: "Designed for couples who don't want to miss a single memory. We begin at the hotel, capturing the quiet, candid anticipation as the bride and groom get ready. Your day includes an exclusive 10-hour timeline, featuring a dedicated main photo session at a location of your choice, and seamless, continuous coverage of both your ceremony and reception.",
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Luxury Experience',
    price: 'LKR 365, 000',
    icon: '◆',
    color: '#FFD700',
    gradient: 'linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,255,255,0.1) 100%)',
    highlights: [
      '12 x 24 Magazine album (60 pages)',
      '6 x 8 Thank you cards (200 pcs)',
      '24 x 36 Enlargement (4 pcs)',
      '12 x 18 Wedding Group Enlargement (2 pcs)',
      '8 x 24 Family Album',
      'Preshoot Photo session ( 3 coustumes, slide show, 8 x 24 Preshoot Magazine Album )',
      'Preshoot Video with drone ( 3 min Lovestory Video with HD quality ',
      'Wedding Cinematography ( 3 min Lovestory Video, 55 around Documentary Video, Wedding trailer) Full HD quality',
    ],
    description: "FFrom the quiet anticipation of getting ready at your hotel to the final dance of the reception, your day is covered in full. This package includes 10 hours of exclusive coverage, a dedicated photo session at a preferred location, and complete ceremony and reception documentation. Afterward, receive your entire collection as beautifully edited, high-resolution soft copies ready to cherish forever.",
    featured: true,
  },
  {
    id: 'platinum',
    name: 'Platinum',
    tagline: 'Ultimate Perfection',
    price: 'LKR 435,000',
    icon: '◆',
    color: '#E5E4E2',
    gradient: 'linear-gradient(135deg, rgba(229,228,226,0.15) 0%, rgba(255,255,255,0.1) 100%)',
    highlights: [
      '17 x24 Main magazine album (60 pages)',
      '6 x 8 Thank you cards (200 pcs)',
      '24 x 36 Enlargement (4 pcs)',
      '12 x18 Wedding Group Enlargement (2 pcs)',
      '8 x 24 family Album',
      'Preshoot Photo session ( 3 Coustumes, Slide show, 8 x 24 Preshoot Magazine Album )',
      'Preshot Video with drone ( 3 min Lovestory Video with HD quality )',
      'Wedding Cinematography ( 3 min Lovestory Video, 55 around Documentary Video, Wedding trailer) Full HD quality',
      'Homecoming cinematography ( 3 min Homecoming Video with HD quality, Dcoumentary Video with FullHD quality, Homecoming Trailer Full HD quality )',
    ],
    description: 'Experience ultimate peace of mind with 10 hours of exclusive coverage, capturing every moment from the morning preparations at your hotel to the final moments of the reception. This premium package features a dedicated main photo session at a preferred location and includes your entire collection as beautifully edited, high-resolution soft copies, ready to print and cherish forever.',
  },
]

const packages = [
  {
    id: 'aGroup',
    name: 'A Group',
    tagline: 'For quiet, beautiful beginnings',
    price: 'From LKR 115, 000',
    duration: 'Up to 8 hours',
    image: '/images/id3.jpg',
    includes: [
      '8 x 24 Magazine album (50 pages)',
      '6 x 6 Thank you cards (100 pcs)',
      '16 x 24 Enlargement (1 pcs)',
      '12 x 18 enlargement (1 pcs)',
      'Exclusive 10-hour coverage',
      'Wedding Main photo session at a preferred location',
      'Wedding Ceremony and reception coverage',
      'Edited high-resolution soft copies',
    ],
    ideal: 'Elopements & intimate ceremonies',
  },
  {
    id: 'bGroup',
    name: 'B Group',
    tagline: 'Every chapter of your day',
    price: 'From LKR 130, 000',
    duration: 'Up to 10 hours',
    image: '/images/id5.jpg',
    includes: [
      '12 x 24 Magazine album (50 pages)',
      '5 x 8 Thank you cards (100 pcs)',
      '16 x 24 Enlargement (2 pcs)',
      '12 x 18 enlargement (2 pcs)',
      'Exclusive 10-hour coverage',
      'Wedding main photo session at a preferred location',
      'Bride & Groom getting ready coverage at the hotel',
      'Wedding Ceremony and Reception coverage',
      'Edited high-resolution soft copies',
    ],
    ideal: 'Full weddings & celebrations',
    featured: true,
  },
  {
    id: 'cGroup',
    name: 'C Group',
    tagline: 'Wherever love takes you',
    price: 'From LKR 159, 000',
    duration: 'Full day coverage',
    image: '/images/id6.jpg',
    includes: [
      '12 x 30 Magazine album (50 pages)',
      '5 x 8 Thank you cards (150 pcs)',
      '16 x 24 Enlargement (4 pcs)',
      'Exclusive multi-day coverage',
      'Wedding main photo session at a preferred location',
      'Bride & Groom getting ready coverage at the hotel',
      'Wedding ceremony and reception coverage',
      'Edited high-resolution soft copies',
      'Pre-shoot photo session with 3 outfit, Pre shoot slide show (without transport)', 
    ],
    ideal: 'Destination & international weddings',
  },
  {
    id: 'dGroup',
    name: 'D Group',
    tagline: 'Celebrate the moments that matter',
    price: 'From LKR 169,000',
    duration: 'Full day coverage + pre-shoot',
    image: '/images/id9.jpg',
    includes: [
      '16 x 24 Magazine album (60 pages)',
      '5 x 8 Thank you cards (150 pcs)',
      '16 x 24 Enlargement (4 pcs)',
      '8 x 24 Family Album',
      'Exclusive 10 hours coverage',
      'Wedding main photo session at a preferred location',
      'Bride & Groom getting ready coverage at the hotel',
      'Wedding ceremony and reception coverage',
      'Edited high-resolution soft copies',
      'Pre-shoot photo session with 3 outfit, Pre shoot slide show (without transport)',
    ],
    ideal: 'Ceremonies & receptions only',
  },
  {
    id: 'eGroup',
    name: 'E Group',
    tagline: 'Comprehensive coverage with extra touch',
    price: 'From LKR 198,000',
    duration: 'Full day coverage + pre-shoot',
    image: '/images/id2.jpg',
    includes: [
      '17 x 24 Magazine album (60 pages)',
      '5 x 8 Thank you cards (200 pcs)',
      '16 x 24 Enlargement (4 pcs)',
      '8 x 24 Family Album',
      'Exclusive 10 hours coverage',
      'Wedding main photo session at a preferred location',
      'Bride & Groom getting ready coverage at the hotel',
      'Wedding ceremony and reception coverage',
      'Edited high-resolution soft copies',
      'Pre-shoot photo session with 3 outfit, Pre shoot slide show (without transport)',
      '8 x 24 Preshoot Magazine Album',
    ],
    ideal: 'Weddings with pre-event content',
  },
]

const addons = [
  { name: 'Fine Art Album', desc: 'Handcrafted linen albums, printed on archival paper. A family heirloom.', price: 'From LKR 20,000' },
  { name: 'Engagement Session', desc: 'A relaxed portrait session before the big day. Perfect for getting comfortable in front of the lens.', price: 'LKR 30,000' },
  { name: 'Second Photographer', desc: 'A second artistic eye for full coverage of simultaneous moments.', price: 'LKR 40,000' },
  { name: 'Rush Delivery', desc: 'Receive your full gallery within 2 weeks of your wedding day.', price: 'LKR 28,000' },
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

      {/* Premium Tiers */}
      <section style={{ padding: '0 clamp(1rem, 5vw, 5rem) clamp(4rem, 10vw, 8rem)', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 8vw, 4rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 500 }}>Signature Collections</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 5vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2 }}>Premium Tiers</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1.5rem, 3vw, 2.5rem)', alignItems: 'stretch' }} className="tier-grid">
          {premiumTiers.map((tier, i) => (
            <motion.div key={tier.id} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.15 }}
              style={{
                background: tier.gradient,
                border: `2px solid ${tier.color}`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(2rem, 4vw, 2.5rem)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: tier.featured ? 'scale(1.04)' : 'scale(1)',
                zIndex: tier.featured ? 10 : 1,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = tier.color;
                el.style.boxShadow = `0 20px 60px rgba(${tier.color === '#FFD700' ? '255, 215, 0' : tier.color === '#C0C0C0' ? '192, 192, 192' : '229, 228, 226'}, 0.25)`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.boxShadow = 'none';
              }}
            >
              {tier.featured && (
                <div style={{
                  position: 'absolute',
                  top: -15,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: `linear-gradient(135deg, ${tier.color} 0%, rgba(255,215,0,0.8) 100%)`,
                  padding: 'clamp(0.3rem, 0.8vw, 0.5rem) clamp(1rem, 2vw, 1.5rem)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.6rem)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--black)',
                  whiteSpace: 'nowrap',
                  fontWeight: 600,
                  boxShadow: `0 10px 30px rgba(255, 215, 0, 0.3)`,
                }}>
                  ★ Most Luxurious ★
                </div>
              )}

              <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: tier.color, marginBottom: '1rem', opacity: 0.8 }}>{tier.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '0.5rem' }}>{tier.name}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', color: tier.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{tier.tagline}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.5vw, 0.78rem)', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{tier.description}</p>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem', flex: 1 }}>
                {tier.highlights.map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: tier.color, marginTop: '0.2rem', flexShrink: 0, fontSize: '0.5rem' }}>●</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.68rem, 1.3vw, 0.75rem)', color: 'var(--text-secondary)', letterSpacing: '0.01em', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'stretch', marginTop: 'auto', borderTop: `1px solid ${tier.color}33`, paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: tier.color, fontWeight: 400 }}>{tier.price}</p>
                <Link to="/contact" style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.6rem, 1.2vw, 0.68rem)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: tier.color,
                  background: tier.featured ? `rgba(255,215,0,0.1)` : 'transparent',
                  border: `1.5px solid ${tier.color}`,
                  padding: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  fontWeight: 500,
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.background = `rgba(${tier.color === '#FFD700' ? '255, 215, 0' : tier.color === '#C0C0C0' ? '192, 192, 192' : '229, 228, 226'}, 0.15)`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.background = tier.featured ? `rgba(255,215,0,0.1)` : 'transparent';
                  }}
                >Inquire Now</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Packages Section */}
      <section style={{ padding: '0 clamp(1rem, 5vw, 5rem) clamp(4rem, 10vw, 8rem)', marginTop: 'clamp(2rem, 8vw, 5rem)' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 8vw, 4rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>More Options</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 5vw, 3rem)', fontWeight: 300, color: 'var(--cream)' }}>Additional Collections</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 2vw, 1.5rem)', alignItems: 'stretch' }} className="pkg-grid">
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
            Dates for 2026 & 2027<br />are filling quickly
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
          .tier-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .pkg-grid { grid-template-columns: 1fr !important; }
          .tier-grid { grid-template-columns: 1fr !important; }
          .addon-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
