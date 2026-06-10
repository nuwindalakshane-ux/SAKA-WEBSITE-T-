import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const U = 'https://images.unsplash.com'

const categories = ['All', 'Ceremony', 'Reception', 'Portraits', 'Details', 'Destination']

// Album data: 10 images per couple
const coupleAlbums: Record<string, { couple: string; location: string; year: string; images: string[] }> = {
  'Sanka & Dev': {
    couple: 'Sanka & Dev',
    location: 'Colombo, Sri Lanka',
    year: '2026',
    images: [
      '/images/id1.jpg', `${U}/photo-1519741497674-611481863552?w=800&q=80`,
      `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`, `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`,
      `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`, `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`
    ]
  },
  'Priya & Kai': {
    couple: 'Priya & Kai',
    location: 'Galle, Sri Lanka',
    year: '2025',
    images: [
      '/images/id2.jpg', `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`,
      `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`
    ]
  },
  'Nisha & Arjun': {
    couple: 'Nisha & Arjun',
    location: 'Kandy, Sri Lanka',
    year: '2024',
    images: [
      '/images/id3.jpg', `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`
    ]
  },
  'Sophie & Malik': {
    couple: 'Sophie & Malik',
    location: 'Maldives',
    year: '2025',
    images: [
      '/images/id4.jpg', `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`
    ]
  },
  'Zara & Ishan': {
    couple: 'Zara & Ishan',
    location: 'Sigiriya, Sri Lanka',
    year: '2024',
    images: [
      '/images/id5.jpg', `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`,
      `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`
    ]
  },
  'Maya & Rohan': {
    couple: 'Maya & Rohan',
    location: 'Colombo, Sri Lanka',
    year: '2025',
    images: [
      '/images/id6.jpg', `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`
    ]
  },
  'Leila & Soren': {
    couple: 'Leila & Soren',
    location: 'Bali, Indonesia',
    year: '2025',
    images: [
      '/images/id7.jpg', `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`
    ]
  },
  'Ananya & Vikram': {
    couple: 'Ananya & Vikram',
    location: 'Negombo, Sri Lanka',
    year: '2024',
    images: [
      '/images/id8.jpg', `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`,
      `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`
    ]
  },
  'Isla & Theo': {
    couple: 'Isla & Theo',
    location: 'Santorini, Greece',
    year: '2025',
    images: [
      '/images/id9.jpg', `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`
    ]
  },
  'Nira': {
    couple: 'Nira',
    location: 'Ella, Sri Lanka',
    year: '3 years',
    images: [
      '/images/id10.jpg', `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`,
      `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`,
      `${U}/photo-1519741497674-611481863552?w=800&q=80`, `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`
    ]
  },
  'Aria & Kian': {
    couple: 'Aria & Kian',
    location: 'Colombo, Sri Lanka',
    year: '2026',
    images: [
      '/images/id11.jpg', `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`,
      `${U}/photo-1606216794074-735e91aa2c92?w=800&q=80`, `${U}/photo-1544078751-58fee2d8ab1d?w=800&q=80`,
      `${U}/photo-1519075622773-4f65cbb2e1bc?w=800&q=80`, `${U}/photo-1511285560929-80b456fea0bc?w=800&q=80`,
      `${U}/photo-1520854221256-17451cc331bf?w=800&q=80`, `${U}/photo-1519741497674-611481863552?w=800&q=80`
    ]
  }
}

const works = [
  { id: 1, cat: 'Ceremony', src: '/images/id1.jpg', couple: 'Sanka & Dev', location: 'Colombo, Sri Lanka', year: '2026', aspect: '3/4' },
  { id: 2, cat: 'Portraits', src: '/images/id2.jpg', couple: 'Priya & Kai', location: 'Galle, Sri Lanka', year: '2025', aspect: '3/4' },
  { id: 3, cat: 'Reception', src: '/images/id3.jpg', couple: 'Nisha & Arjun', location: 'Kandy, Sri Lanka', year: '2024', aspect: '3/4' },
  { id: 4, cat: 'Destination', src: '/images/id4.jpg', couple: 'Sophie & Malik', location: 'Maldives', year: '2025', aspect: '3/4' },
  { id: 5, cat: 'Details', src: '/images/id5.jpg', couple: 'Zara & Ishan', location: 'Sigiriya, Sri Lanka', year: '2024', aspect: '3/4' },
  { id: 6, cat: 'Portraits', src: '/images/id6.jpg', couple: 'Maya & Rohan', location: 'Colombo, Sri Lanka', year: '2025', aspect: '3/4' },
  { id: 7, cat: 'Ceremony', src: '/images/id7.jpg', couple: 'Leila & Soren', location: 'Bali, Indonesia', year: '2025', aspect: '3/4' },
  { id: 8, cat: 'Reception', src: '/images/id8.jpg', couple: 'Ananya & Vikram', location: 'Negombo, Sri Lanka', year: '2024', aspect: '3/4' },
  { id: 9, cat: 'Destination', src: '/images/id9.jpg', couple: 'Isla & Theo', location: 'Santorini, Greece', year: '2025', aspect: '3/4' },
  { id: 10, cat: 'Details', src: '/images/id10.jpg', couple: 'Nira', location: 'Ella, Sri Lanka', year: '3 years', aspect: '3/4' },
  { id: 11, cat: 'Ceremony', src: '/images/id11.jpg', couple: 'Aria & Kian', location: 'Colombo, Sri Lanka', year: '2026', aspect: '3/4' },
]

export default function Work() {
  const [active, setActive] = useState('All')
  const [albumCouple, setAlbumCouple] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filtered = active === 'All' ? works : works.filter(w => w.cat === active)

  const openAlbum = (couple: string) => {
    setAlbumCouple(couple)
    setCurrentImageIndex(0)
  }

  const closeAlbum = () => {
    setAlbumCouple(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (albumCouple && coupleAlbums[albumCouple]) {
      setCurrentImageIndex((prev) => (prev + 1) % coupleAlbums[albumCouple].images.length)
    }
  }

  const prevImage = () => {
    if (albumCouple && coupleAlbums[albumCouple]) {
      setCurrentImageIndex((prev) => (prev - 1 + coupleAlbums[albumCouple].images.length) % coupleAlbums[albumCouple].images.length)
    }
  }

  const album = albumCouple ? coupleAlbums[albumCouple] : null

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', minHeight: '100vh' }}>
      {/* Header - Luxurious Design */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', padding: '0 clamp(1rem, 4vw, 2rem) clamp(3rem, 10vw, 6rem)' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', fontWeight: 300, fontStyle: 'italic' }}>Portfolio</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Moments <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Eternalized</em>
          </h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
          style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.8rem, 1.9vw, 0.95rem)', color: 'var(--cream-muted)', marginTop: 'clamp(1.25rem, 2vw, 1.75rem)', letterSpacing: '0.05em', maxWidth: '100%', lineHeight: 1.8, padding: '0 1rem' }}>
          Explore our curated collection of love stories, each frame capturing the essence of timeless moments
        </motion.p>
      </motion.div>

      {/* Divider Line */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
        style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', width: 'clamp(100px, 30%, 300px)', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }} />

      {/* Filter Buttons - Luxury Style */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
        style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 1rem)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'clamp(2.5rem, 6vw, 4rem)', padding: '0 clamp(1rem, 3vw, 1.5rem)' }}>
        {categories.map(cat => (
          <motion.button key={cat} onClick={() => setActive(cat)} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
            style={{ padding: 'clamp(0.65rem, 1.2vw, 0.85rem) clamp(1rem, 2.5vw, 1.5rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.7vw, 0.8rem)', textTransform: 'uppercase', letterSpacing: '0.12em', border: `2px solid ${active === cat ? 'var(--gold)' : 'var(--border)'}`, background: active === cat ? 'rgba(201, 169, 110, 0.08)' : 'transparent', color: active === cat ? 'var(--gold)' : 'var(--cream)', cursor: 'pointer', transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)', boxShadow: active === cat ? '0 8px 24px rgba(201, 169, 110, 0.12)' : 'none', borderRadius: '2px', fontWeight: 500 }}>
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <div style={{ padding: '0 clamp(1rem, 4vw, 4rem) clamp(3rem, 8vw, 6rem)' }}>
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(200px, 35vw, 300px), 1fr))', gridAutoRows: 'auto', gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
          <AnimatePresence>
            {filtered.map((work) => (
              <motion.div key={work.id} layout
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                onClick={() => openAlbum(work.couple)}
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', display: 'block' }}
              >
                <div style={{ overflow: 'hidden', position: 'relative', borderRadius: '2px', boxShadow: '0 12px 32px rgba(0, 0, 0, 0.24)' }}>
                  <img src={work.src} alt={work.couple}
                    style={{ width: '100%', aspectRatio: work.aspect, objectFit: 'cover', display: 'block', transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'scale(1.04)' }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'scale(1)' }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                    style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,12,10,0) 0%, rgba(13,12,10,0.92) 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
                  >
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', color: 'var(--cream)', fontWeight: 300, letterSpacing: '-0.01em' }}>{work.couple}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.65rem, 1.4vw, 0.75rem)', color: 'var(--gold)', letterSpacing: '0.15em', marginTop: '0.35rem', fontWeight: 400 }}>{work.location} · {work.year}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 1.2vw, 0.65rem)', color: 'var(--cream-muted)', letterSpacing: '0.1em', marginTop: '0.5rem' }}>VIEW ALBUM</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxury Album Gallery Modal */}
      <AnimatePresence>
        {album && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            onClick={closeAlbum}
            style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(13,12,10,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(1rem, 4vw, 2rem)', backdropFilter: 'blur(8px)' }}>
            
            {/* Main Album Container */}
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ width: '100%', maxWidth: '95vw', maxHeight: '95vh', display: 'flex', flexDirection: 'column', background: 'rgba(13,12,10,0.95)', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 32px 64px rgba(0, 0, 0, 0.48), inset 0 1px 0 rgba(201, 169, 110, 0.12)' }}>
              
              {/* Header */}
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)', borderBottom: '1px solid rgba(201, 169, 110, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--cream)', fontWeight: 300, margin: 0 }}>{album.couple}</h2>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', color: 'var(--gold)', letterSpacing: '0.15em', marginTop: '0.4rem', fontWeight: 400 }}>{album.location} · {album.year}</p>
                </div>
                <motion.button onClick={closeAlbum} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.95 }}
                  style={{ background: 'none', border: 'none', color: 'var(--gold)', fontSize: '1.8rem', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', transition: 'all 0.3s' }}>×</motion.button>
              </motion.div>

              {/* Image Display Area */}
              <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
                {/* Main Image */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                  style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <motion.img key={currentImageIndex} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.5 }}
                    src={album.images[currentImageIndex]} alt={`${album.couple} - ${currentImageIndex + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', maxWidth: '100%' }} />
                  
                  {/* Navigation Buttons */}
                  <motion.button onClick={prevImage} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                    style={{ position: 'absolute', left: 'clamp(0.75rem, 2vw, 1.5rem)', top: '50%', transform: 'translateY(-50%)', background: 'rgba(201, 169, 110, 0.15)', border: '1px solid rgba(201, 169, 110, 0.3)', color: 'var(--gold)', width: '2.5rem', height: '2.5rem', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', transition: 'all 0.3s', backdropFilter: 'blur(8px)', fontWeight: 'bold' }}>‹</motion.button>
                  <motion.button onClick={nextImage} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                    style={{ position: 'absolute', right: 'clamp(0.75rem, 2vw, 1.5rem)', top: '50%', transform: 'translateY(-50%)', background: 'rgba(201, 169, 110, 0.15)', border: '1px solid rgba(201, 169, 110, 0.3)', color: 'var(--gold)', width: '2.5rem', height: '2.5rem', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', transition: 'all 0.3s', backdropFilter: 'blur(8px)', fontWeight: 'bold' }}>›</motion.button>

                  {/* Image Counter */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ position: 'absolute', bottom: 'clamp(1rem, 2vw, 1.5rem)', left: '50%', transform: 'translateX(-50%)', background: 'rgba(13,12,10,0.8)', padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)', borderRadius: '20px', border: '1px solid rgba(201, 169, 110, 0.2)', backdropFilter: 'blur(8px)' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 1.4vw, 0.8rem)', color: 'var(--gold)', letterSpacing: '0.1em', margin: 0, fontWeight: 500 }}>
                      {currentImageIndex + 1} OF {album.images.length}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Thumbnail Strip */}
                <div style={{ width: 'clamp(80px, 15vw, 120px)', background: 'rgba(0,0,0,0.4)', borderLeft: '1px solid rgba(201, 169, 110, 0.1)', overflowY: 'auto', padding: 'clamp(0.5rem, 1vw, 0.75rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.4rem, 0.8vw, 0.6rem)' }}>
                  {album.images.map((img, idx) => (
                    <motion.div key={idx} onClick={() => setCurrentImageIndex(idx)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '2px', border: currentImageIndex === idx ? '2px solid var(--gold)' : '1px solid rgba(201, 169, 110, 0.2)', aspectRatio: '3/4', background: 'rgba(0,0,0,0.5)', transition: 'all 0.3s' }}>
                      <img src={img} alt={`Thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer with Progress Bar */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                style={{ borderTop: '1px solid rgba(201, 169, 110, 0.1)', padding: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                <div style={{ height: '2px', background: 'rgba(201, 169, 110, 0.15)', borderRadius: '1px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${((currentImageIndex + 1) / album.images.length) * 100}%` }} transition={{ duration: 0.4 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--gold), rgba(201, 169, 110, 0.6))', borderRadius: '1px' }} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
