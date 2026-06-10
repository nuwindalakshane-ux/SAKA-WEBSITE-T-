import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const UNSPLASH = 'https://images.unsplash.com'

const heroImg = '/images/hero.jpg' // Local hero image for better control over composition and loading
const couple1 = '/images/couple1.jpg' // Local image to ensure optimal cropping and aspect ratio
const couple2 = 'images/couple2.jpg' // Local image for better quality and consistency
const couple3 = '/images/hero.jpg' // Reusing hero image for visual consistency; ideally should be a different image but kept for demo
const portrait1 = '/images/couple3.jpg' // Local portrait for better control over composition; ideally should be a different image but kept for demo
const portrait2 = '/images/couple4.jpg' // Local portrait for better control; ideally should be a different image but kept for demo

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

function GoldLine() {
  return <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '0 auto 2rem' }} />
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div>
      {/* ─── HERO ─── */}
      <section ref={heroRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: heroY }}>
          <img src={heroImg} alt="Wedding" style={{ width: '100%', height: '110%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,12,10,0.45) 0%, rgba(13,12,10,0.3) 50%, rgba(13,12,10,0.7) 100%)' }} />
        </motion.div>

        <div style={{ position: 'relative', textAlign: 'center', padding: '0 clamp(1rem, 5vw, 2rem)' }}>
          <motion.p initial={{ opacity: 0, letterSpacing: '0.3em' }} animate={{ opacity: 1, letterSpacing: '0.22em' }} transition={{ duration: 1.2, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', textTransform: 'uppercase', color: 'var(--gold)', letterSpacing: '0.22em', marginBottom: '1.5rem' }}>
            Wedding Photography
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem, 9vw, 8rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.01em', color: 'var(--cream)', marginBottom: '0.25em' }}>
            Stories told
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.65 }}
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem, 9vw, 8rem)', fontWeight: 300, lineHeight: 1, fontStyle: 'italic', color: 'var(--gold)', letterSpacing: '-0.01em', marginBottom: '2.5rem' }}>
            in light
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <Link to="/work" style={{
              display: 'inline-block', padding: '0.9rem 2.5rem',
              border: '1px solid rgba(201,169,110,0.5)',
              fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cream)',
              transition: 'all 0.4s',
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--gold)'; el.style.color = 'var(--black)'; el.style.borderColor = 'var(--gold)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = 'var(--cream)'; el.style.borderColor = 'rgba(201,169,110,0.5)' }}
            >View Portfolio</Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--gold))' }} />
        </motion.div>
      </section>

      {/* ─── INTRO ─── */}
      <section style={{ padding: 'clamp(3rem, 10vw, 9rem) clamp(1.25rem, 6vw, 6rem)', textAlign: 'center', maxWidth: '100%', margin: '0 auto' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }} style={{ maxWidth: 780, margin: '0 auto' }}>
          <GoldLine />
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 3vw, 2rem)', fontWeight: 300, lineHeight: 1.7, color: 'var(--cream-muted)', fontStyle: 'italic', padding: '0 1rem' }}>
            "Every love story deserves to be preserved with intention, artistry, and an eye for the moments that pass in a breath."
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '2rem' }}>— Sakshmina Dinushan -</p>
        </motion.div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <section style={{ padding: '0 clamp(1rem, 5vw, 5rem) clamp(3rem, 10vw, 9rem)' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Portfolio</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)' }}>Recent Work</h2>
        </motion.div>

        {/* Asymmetric grid - responsive */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridAutoRows: 'auto', gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
          {[
            { src: couple1, style: { gridColumn: 'auto', gridRow: 'auto', aspectRatio: '3/4' }, delay: 0 },
            { src: couple2, style: { gridColumn: 'auto', gridRow: 'auto', aspectRatio: '4/5' }, delay: 0.1 },
            { src: couple3, style: { gridColumn: 'auto', gridRow: 'auto', aspectRatio: '3/4' }, delay: 0.2 },
            { src: portrait1, style: { gridColumn: 'auto', gridRow: 'auto', aspectRatio: '4/3', display: 'none' }, delay: 0.15 },
            { src: portrait2, style: { gridColumn: 'auto', gridRow: 'auto', aspectRatio: '4/3', display: 'none' }, delay: 0.25 },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: item.delay }}
              style={{ ...item.style, overflow: 'hidden', position: 'relative' }}
              whileHover={{ scale: 1.01 }}>
              <img src={item.src} alt={`Wedding ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease', display: 'block' }}
                onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.04)'}
                onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginTop: 'clamp(2rem, 5vw, 3rem)' }}>
          <Link to="/work" style={{
            fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', transition: 'opacity 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >View All Work</Link>
        </motion.div>
      </section>

      {/* ─── OFFERINGS PREVIEW ─── */}
      <section style={{ background: 'var(--surface)', padding: 'clamp(3rem, 10vw, 9rem) clamp(1rem, 5vw, 5rem)' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>What We Offer</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)' }}>Crafted Experiences</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
          {[
            { num: '01', title: 'Full Day Coverage', desc: 'From getting ready to the last dance. Every chapter, every tear, every laugh.' },
            { num: '02', title: 'Intimate Ceremony', desc: 'For the quiet, beautiful weddings that feel like poetry.' },
            { num: '03', title: 'Destination Wedding', desc: 'We travel wherever love takes you. Worldwide, with passion.' },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.12 }}
              style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', border: '1px solid var(--border)', transition: 'border-color 0.4s, background 0.4s', cursor: 'default' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border-hover)'; el.style.background = 'rgba(201,169,110,0.03)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.background = 'transparent' }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, color: 'var(--border-hover)', lineHeight: 1, marginBottom: '1.5rem' }}>{item.num}</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 400, color: 'var(--cream)', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.82rem)', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.02em' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginTop: 'clamp(2rem, 5vw, 3rem)' }}>
          <Link to="/offerings" style={{
            display: 'inline-block', padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(1.5rem, 4vw, 2.5rem)', border: '1px solid var(--border)',
            fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cream-muted)',
            transition: 'all 0.4s',
          }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--gold)'; el.style.color = 'var(--gold)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--cream-muted)' }}
          >See All Offerings</Link>
        </motion.div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section style={{ padding: 'clamp(3rem, 10vw, 9rem) clamp(1rem, 6vw, 6rem)', textAlign: 'center', maxWidth: '100%', margin: '0 auto' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }} style={{ maxWidth: 860, margin: '0 auto', padding: '0 1rem' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--gold)', lineHeight: 1, marginBottom: '1.5rem', opacity: 0.4 }}>❝</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 2.5vw, 1.65rem)', fontWeight: 300, lineHeight: 1.75, color: 'var(--cream-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>
            We didn't just get photographs — we got back our entire wedding day, every emotion frozen perfectly in time. Saka has an extraordinary gift.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>Ananya & Rohan</p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.65rem)', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Colombo, Sri Lanka</p>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ position: 'relative', padding: 'clamp(4rem, 12vw, 10rem) clamp(1rem, 4vw, 2rem)', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={couple3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
        </div>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }} style={{ position: 'relative' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Begin Your Story</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Let's create something<br /><em style={{ color: 'var(--gold)' }}>timeless</em> together
          </h2>
          <Link to="/contact" style={{
            display: 'inline-block', padding: 'clamp(0.8rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem)',
            background: 'var(--gold)', color: 'var(--black)',
            fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.72rem)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 400,
            transition: 'all 0.4s',
          }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--gold-light)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'var(--gold)' }}
          >Get in Touch</Link>
        </motion.div>
      </section>
    </div>
  )
}
