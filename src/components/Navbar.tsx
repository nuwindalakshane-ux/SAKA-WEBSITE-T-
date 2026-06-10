import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Recent Work' },
  { to: '/offerings', label: 'Offerings' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 4vw, 3rem)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(13,12,10,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.12)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.5s ease',
        }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.75rem, 2vw, 0.95rem)', fontWeight: 400, letterSpacing: '0.12em', color: 'var(--cream)', lineHeight: 1.4, minWidth: 'max-content' }}>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>SAKSHMINA DINUSHAN</span>
          <span style={{ fontSize: 'clamp(0.45rem, 1.5vw, 0.6rem)', letterSpacing: '0.25em', color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontWeight: 300, display: 'block' }}>PHOTOGRAPHY</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 'clamp(1.5rem, 4vw, 2.5rem)', alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', fontWeight: 400,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: location.pathname === l.to ? 'var(--gold)' : 'var(--cream-muted)',
              transition: 'color 0.3s',
              position: 'relative',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { if (location.pathname !== l.to) (e.target as HTMLElement).style.color = 'var(--cream)' }}
              onMouseLeave={e => { if (location.pathname !== l.to) (e.target as HTMLElement).style.color = 'var(--cream-muted)' }}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.span layoutId="nav-indicator" style={{
                  position: 'absolute', bottom: -4, left: 0, right: 0, height: 1,
                  background: 'var(--gold)',
                }} />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          flexDirection: 'column', gap: '5px', padding: '6px',
          cursor: 'pointer',
        }} aria-label="Menu" className="burger">
          <span style={{ width: 22, height: 1, background: 'var(--cream)', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ width: 22, height: 1, background: 'var(--cream)', display: 'block', opacity: open ? 0 : 1, transition: 'all 0.3s' }} />
          <span style={{ width: 22, height: 1, background: 'var(--cream)', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(13,12,10,0.98)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
            }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300,
                color: location.pathname === l.to ? 'var(--gold)' : 'var(--cream)',
                letterSpacing: '0.05em',
              }}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .burger { display: flex !important; }
          nav > div:not(.burger) { display: none !important; }
        }
        @media (max-width: 480px) {
          nav { padding: 0.75rem 1rem !important; }
        }
      `}</style>
    </>
  )
}
