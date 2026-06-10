import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const U = 'https://images.unsplash.com'

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

const faqs = [
  { q: 'How far in advance should I book?', a: 'We recommend reaching out 6–18 months before your wedding date. Popular months (November–April in Sri Lanka) fill up quickly.' },
  { q: 'Do you travel internationally?', a: 'Absolutely. We\'ve photographed weddings across Sri Lanka, the Maldives, Bali, Greece, and beyond. Travel costs are included in our Destination package or quoted separately.' },
  { q: 'When will we receive our photos?', a: 'Your full gallery is delivered within 6–8 weeks. Rush delivery (2 weeks) is available as an add-on.' },
  { q: 'What is your editing style?', a: 'Our aesthetic is cinematic and timeless — film-inspired tones, natural skin, and images that feel as beautiful in 30 years as they do today.' },
  { q: 'Do you require a retainer?', a: 'Yes, a 30% retainer is required to secure your date. The balance is due 30 days before the wedding.' },
]

type FormData = {
  name: string
  email: string
  partner: string
  date: string
  venue: string
  package: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', partner: '', date: '', venue: '', package: '', message: '' })
  const [sent, setSent] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  const update = (key: keyof FormData, val: string) => setForm(f => ({ ...f, [key]: val }))

  const handleSubmit = () => {
    if (!form.name || !form.email) return
    setSent(true)
  }

  const inputStyle = {
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: '1px solid var(--border)',
    color: 'var(--cream)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 300,
    padding: '0.75rem 0', outline: 'none', letterSpacing: '0.03em',
    transition: 'border-color 0.3s',
  }

  const labelStyle = {
    fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.18em',
    textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'block', marginBottom: '0.5rem',
  }

  return (
    <div style={{ paddingTop: '7rem', minHeight: '100vh' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', padding: '0 2rem 5rem' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Say Hello</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1 }}>
          Let's <em>Connect</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '1.25rem', letterSpacing: '0.04em', maxWidth: 460, margin: '1.25rem auto 0', lineHeight: 1.9 }}>
          We'd love to hear about your day. Tell us your story and we'll be in touch within 24 hours.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 5rem) 6rem' }}>

        {/* LEFT: Form */}
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ paddingRight: 'clamp(2rem, 3vw, 4rem)', borderRight: '1px solid var(--border)' }}>

          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'var(--cream-muted)', fontStyle: 'italic', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.7 }}>
                  Fill in the form below and we'll craft a personalised response just for you.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 clamp(1rem, 2vw, 2rem)' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>Your Name</label>
                    <input style={inputStyle as React.CSSProperties} value={form.name} onChange={e => update('name', e.target.value)}
                      placeholder="First & last name"
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--gold)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}  
                    />
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>Partner's Name</label>
                    <input style={inputStyle as React.CSSProperties} value={form.partner} onChange={e => update('partner', e.target.value)}
                      placeholder="Their first name"
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--gold)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" style={inputStyle as React.CSSProperties} value={form.email} onChange={e => update('email', e.target.value)}
                    placeholder="hello@youremail.com"
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--gold)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>Wedding Date</label>
                    <input type="date" style={{ ...inputStyle, colorScheme: 'dark' } as React.CSSProperties} value={form.date} onChange={e => update('date', e.target.value)}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--gold)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>Package Interest</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' } as React.CSSProperties} value={form.package} onChange={e => update('package', e.target.value)}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--gold)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                    >
                      <option value="" style={{ background: 'var(--dark)' }}>Select a package</option>
                      <option value="intimate" style={{ background: 'var(--dark)' }}>Intimate</option>
                      <option value="full" style={{ background: 'var(--dark)' }}>Full Day</option>
                      <option value="destination" style={{ background: 'var(--dark)' }}>Destination</option>
                      <option value="unsure" style={{ background: 'var(--dark)' }}>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={labelStyle}>Venue / Location</label>
                  <input style={inputStyle as React.CSSProperties} value={form.venue} onChange={e => update('venue', e.target.value)}
                    placeholder="Where is your wedding taking place?"
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--gold)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <label style={labelStyle}>Tell Us Your Story</label>
                  <textarea style={{ ...inputStyle, resize: 'none', paddingTop: '0.75rem', borderBottom: '1px solid var(--border)' } as React.CSSProperties}
                    value={form.message} onChange={e => update('message', e.target.value)}
                    rows={5} placeholder="Share as much as you'd like — your vision, your venue, how you met..."
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--gold)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <button onClick={handleSubmit} style={{
                  width: '100%', padding: 'clamp(0.85rem, 2vw, 1.1rem)',
                  background: 'var(--gold)', border: 'none', color: 'var(--black)',
                  fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.65rem, 1.5vw, 0.72rem)', letterSpacing: '0.2em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'background 0.4s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
                >Send Enquiry</button>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                style={{ textAlign: 'center', padding: 'clamp(2rem, 5vw, 4rem) 1rem' }}>
                <div style={{ width: 64, height: 64, border: '1px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.5rem', color: 'var(--gold)' }}>✓</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1rem' }}>Message Sent</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.75rem, 1.5vw, 0.82rem)', color: 'var(--text-muted)', lineHeight: 1.9, letterSpacing: '0.03em' }}>
                  Thank you, {form.name}. We'll be in touch within 24 hours. We can't wait to hear more about your day.
                </p>
              </motion.div>
            )}  
          </AnimatePresence>
        </motion.div>

        {/* RIGHT: Info */}
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ paddingLeft: 'clamp(2rem, 3vw, 4rem)' }}>

          {/* Image */}
          <div style={{ overflow: 'hidden', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <img src={`${U}/photo-1519741497674-611481863552?w=700&q=80`} alt="Couple" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
          </div>

          {/* Contact info */}
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.5vw, 0.62rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Direct Contact</p>
            {[
              { label: 'Email', val: 'hello@sakaphoto.com' },
              { label: 'Phone', val: '+94 77 316 3807' },
              { label: 'Studio', val: 'Colombo 03, Sri Lanka' },
              { label: 'Hours', val: 'Mon–Sat, 9am – 6pm' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: 'clamp(0.7rem, 1.5vw, 0.9rem) 0', borderBottom: '1px solid var(--border)', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.65rem, 1.5vw, 0.72rem)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{item.label}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.75rem, 1.5vw, 0.82rem)', color: 'var(--cream-muted)' }}>{item.val}</span>
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Instagram', 'Pinterest', 'Facebook'].map(s => (
              <a key={s} href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.5vw, 0.65rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >{s}</a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FAQ */}
      <section style={{ background: 'var(--surface)', padding: 'clamp(3rem, 9vw, 8rem) clamp(1rem, 5vw, 5rem)' }}>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Common Questions</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--cream)' }}>FAQ</h2>
        </motion.div>

        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: i * 0.07 }}
              style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'clamp(1.25rem, 2vw, 1.5rem) 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'var(--cream)', fontWeight: 400, lineHeight: 1.4 }}>{faq.q}</span>
                <motion.span animate={{ rotate: faqOpen === i ? 45 : 0 }} transition={{ duration: 0.25 }}
                  style={{ color: 'var(--gold)', fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', marginLeft: '1rem', flexShrink: 0, lineHeight: 1 }}>+</motion.span>
              </button>
              <AnimatePresence>
                {faqOpen === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }}
                    style={{ overflow: 'hidden' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.75rem, 1.5vw, 0.82rem)', color: 'var(--text-muted)', lineHeight: 1.9, letterSpacing: '0.03em', paddingBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-grid > div:first-child { padding-right: 0 !important; border-right: none !important; padding-bottom: clamp(2rem, 5vw, 3rem); border-bottom: 1px solid var(--border); }
          .contact-grid > div:last-child { padding-left: 0 !important; padding-top: clamp(2rem, 5vw, 3rem); }
        }
        @media (max-width: 480px) {
          .contact-grid > div:first-child { display: grid; gridTemplateColumns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
