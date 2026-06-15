import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(2rem, 8vw, 4rem) clamp(1rem, 6vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'clamp(2rem, 5vw, 3rem)',
      background: 'var(--dark)',
    }}>
      <div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: 400, letterSpacing: '0.1em', marginBottom: '0.25rem', color: 'var(--cream)', lineHeight: 1.4 }}>SAKSHMINA DINUSHAN</p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.5rem, 1.5vw, 0.58rem)', letterSpacing: '0.28em', color: 'var(--gold)', fontWeight: 300, marginBottom: '1rem' }}>PHOTOGRAPHY</p>
        <p style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.8rem)', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.03em', maxWidth: 220 }}>
          Capturing the quiet moments that last a lifetime. Wedding photography with soul.
        </p>
      </div>

      <div>
        <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.65rem)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Navigate</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[['/', 'Home'], ['/work', 'Recent Work'], ['/offerings', 'Offerings'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link key={to} to={to} style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.8rem)', color: 'var(--text-secondary)', letterSpacing: '0.05em', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--cream)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
            >{label}</Link>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.65rem)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Connect</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { name: 'Instagram', url: 'https://www.instagram.com/sakaphoto/' }, 
            { name: 'TikTok', url: 'https://www.tiktok.com/@sakaphoto' },
            { name: 'Facebook', url: 'https://www.facebook.com/sakaphoto' },
            { name: 'Email', url: 'mailto:hello@sakaphoto.com' }
          ].map(item => (
            <a key={item.name} href={item.url} style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.8rem)', color: 'var(--text-secondary)', letterSpacing: '0.05em', transition: 'color 0.3s', wordBreak: 'break-all' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--cream)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
            >{item.name}</a>
          ))}
        </div>
      </div>

      <div style={{ gridColumn: '1 / -1', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.7rem)', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>© 2026 Sakshmina Dinushan Photography. All rights reserved.</p>
        <p style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.7rem)', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>Sri Lanka & Worldwide</p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { grid-template-columns: 1fr; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          footer { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </footer>
  )
}
