import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

const stats = [
  { number: '8+', label: 'Years of Experience' },
  { number: '200+', label: 'Weddings Captured' },
  { number: '15+', label: 'Locations Covered' },
  { number: '500+', label: 'Happy Couples' },
]

export default function AboutSection() {
  return (
    <section style={{
      padding: 'clamp(3rem, 10vw, 9rem) clamp(1rem, 5vw, 5rem)',
      background: 'var(--surface)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(2rem, 6vw, 6rem)',
        alignItems: 'center',
      }}>

        {/* ── LEFT: Portrait Image ── */}
        <motion.div
          variants={fade} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'relative',
            aspectRatio: '3/4',
            overflow: 'hidden',
          }}>
            <img
              src="/images/aboutp.jpg"
              alt="Sakshmina Dinushan — Studio D Focus"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* gold accent border offset */}
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              right: '-1rem',
              width: '60%',
              height: '60%',
              border: '1px solid rgba(201,169,110,0.3)',
              zIndex: -1,
              pointerEvents: 'none',
            }} />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              position: 'absolute',
              bottom: 'clamp(1rem, 3vw, 2rem)',
              left: 'clamp(-0.5rem, -2vw, -1.5rem)',
              background: 'var(--black)',
              border: '1px solid var(--border-hover)',
              padding: '1rem 1.5rem',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 300,
              color: 'var(--gold)',
              lineHeight: 1,
            }}>8+</p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--cream-muted)',
              marginTop: '0.25rem',
            }}>Years of Experience</p>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Content ── */}
        <motion.div
          variants={fade} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.15 }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>About the Photographer</p>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: 'var(--cream)',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
          }}>
            Sakshmina<br />
            <em style={{ color: 'var(--gold)' }}>Dinushan</em>
          </h2>

          <div style={{ width: 40, height: 1, background: 'var(--gold)', marginBottom: '1.75rem' }} />

          <p style={{
            fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.85,
            letterSpacing: '0.02em',
            marginBottom: '1.25rem',
          }}>
            Based in Ibbagamuwa, Kurunegala, I am a wedding photographer with a deep passion
            for capturing the quiet, unscripted moments that make each love story unique. Every
            wedding I photograph is treated as an honour — a once-in-a-lifetime day that deserves
            to be preserved with care, intention, and artistry.
          </p>

          <p style={{
            fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.85,
            letterSpacing: '0.02em',
            marginBottom: '2.5rem',
          }}>
            From traditional Sri Lankan ceremonies to intimate garden weddings and destination
            celebrations, my work spans a range of styles — always rooted in authenticity,
            always guided by light.
          </p>

          {/* Stats row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border)',
          }}>
            {stats.slice(1).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}>{stat.number}</p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.55rem, 1.4vw, 0.62rem)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4,
                }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/work"
            style={{
              display: 'inline-block',
              padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(1.75rem, 4vw, 2.5rem)',
              border: '1px solid rgba(201,169,110,0.5)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              transition: 'all 0.4s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'var(--gold)'
              el.style.color = 'var(--black)'
              el.style.borderColor = 'var(--gold)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'transparent'
              el.style.color = 'var(--cream)'
              el.style.borderColor = 'rgba(201,169,110,0.5)'
            }}
          >
            See My Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}