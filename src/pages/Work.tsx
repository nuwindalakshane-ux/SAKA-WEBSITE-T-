import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const categories = ['All', 'Traditional', 'Engagement', 'Homecoming', 'Events', 'Birthdays' ]

// Album data: 10 images per couple
const coupleAlbums: Record<string, { couple: string; location: string; year: string; images: string[] }> = {

  'Darshana & Sachini': {
    couple: 'Darshana & Sachini',
    location: 'Ibbagamuwa, Sri Lanka',
    year: '2026 Apr',
    images: [
      '/images/works/Darshan&Sachini1.jpg', '/images/works/Darshan&Sachini2.jpg', '/images/works/Darshan&Sachini3.jpg', '/images/works/Darshan&Sachini4.jpg', '/images/works/Darshan&Sachini5.jpg',
      '/images/works/Darshan&Sachini6.jpg', '/images/works/Darshan&Sachini7.jpg', '/images/works/Darshan&Sachini8.jpg', '/images/works/Darshan&Sachini9.jpg', '/images/works/Darshan&Sachini10.jpg',
    ]
  },
  'Vishmi & Migara': {
    couple: 'Vishmi & Migara',
    location: 'Ibbagamuwa, Sri Lanka',
    year: '2026 Mar',
    images: [
      '/images/works/Vishmi&Migara1.jpg', '/images/works/Vishmi&Migara2.jpg', '/images/works/Vishmi&Migara3.jpg', '/images/works/Vishmi&Migara4.jpg', '/images/works/Vishmi&Migara5.jpg',
      '/images/works/Vishmi&Migara6.jpg', '/images/works/Vishmi&Migara7.jpg', '/images/works/Vishmi&Migara8.jpg', '/images/works/Vishmi&Migara9.jpg', '/images/works/Vishmi&Migara10.jpg',
    ]
  },
  'Wikum & Sachini': {
    couple: 'Wikum & Sachini',
    location: 'Mawathagama, Sri Lanka',
    year: '2026 Mar',
    images: [
      '/images/works/Wikum&Sachini1.jpg', '/images/works/Wikum&Sachini2.jpg', '/images/works/Wikum&Sachini3.jpg', '/images/works/Wikum&Sachini4.jpg', '/images/works/Wikum&Sachini5.jpg',
      '/images/works/Wikum&Sachini6.jpg', '/images/works/Wikum&Sachini7.jpg', '/images/works/Wikum&Sachini8.jpg', '/images/works/Wikum&Sachini9.jpg', '/images/works/Wikum&Sachini10.jpg',
    ]
  },
  'Dilshani': {
    couple: 'Dilshani',
    location: 'Ibbagamuwa, Sri Lanka',
    year: '2026 Feb',
    images: [
      '/images/works/DilshaniBS1.jpg', '/images/works/DilshaniBS2.jpg', '/images/works/DilshaniBS3.jpg', '/images/works/DilshaniBS4.jpg', '/images/works/DilshaniBS5.jpg',
      '/images/works/DilshaniBS6.jpg', '/images/works/DilshaniBS7.jpg', '/images/works/DilshaniBS8.jpg', '/images/works/DilshaniBS9.jpg', '/images/works/DilshaniBS10.jpg',
    ]
  },
  'Darshi & Jalitha': {
    couple: 'Darshi & Jalitha',
    location: 'Ibbagamuwa, Sri Lanka',
    year: '2026 Jan',
    images: [
      '/images/works/Darshi&Jalitha1.jpg', '/images/works/Darshi&Jalitha2.jpg', '/images/works/Darshi&Jalitha3.jpg', '/images/works/Darshi&Jalitha4.jpg', '/images/works/Darshi&Jalitha5.jpg',
      '/images/works/Darshi&Jalitha6.jpg', '/images/works/Darshi&Jalitha7.jpg', '/images/works/Darshi&Jalitha8.jpg', '/images/works/Darshi&Jalitha9.jpg', '/images/works/Darshi&Jalitha10.jpg',
    ]
  },
  'LittlePrinces': {
    couple: 'LittlePrinces',
    location: 'Kurunegala, Sri Lanka',
    year: '2025 Dec',
    images: [
      '/images/works/LittlePrinces1.jpg', '/images/works/LittlePrinces2.jpg', '/images/works/LittlePrinces3.jpg', '/images/works/LittlePrinces4.jpg', '/images/works/LittlePrinces5.jpg',
      '/images/works/LittlePrinces6.jpg', '/images/works/LittlePrinces7.jpg', '/images/works/LittlePrinces8.jpg', '/images/works/LittlePrinces9.jpg', '/images/works/LittlePrinces10.jpg',
    ]
  },
  'Himashi': {
    couple: 'Himashi',
    location: 'Ibbagamuwa, Sri Lanka',
    year: '2025 Nov',
    images: [
      '/images/works/HBridal1.jpg', '/images/works/HBridal2.jpg', '/images/works/HBridal3.jpg', '/images/works/HBridal4.jpg', '/images/works/HBridal5.jpg',
      '/images/works/HBridal6.jpg', '/images/works/HBridal7.jpg', '/images/works/HBridal8.jpg', '/images/works/HBridal9.jpg', '/images/works/HBridal10.jpg',
    ]
  },
  'Nimeshi & Tharaka': {
    couple: 'Nimeshi & Tharaka',
    location: 'Ibbagamuwa, Sri Lanka',
    year: '2025 Nov',
    images: [
      '/images/works/NT1.jpg', '/images/works/NT2.jpg', '/images/works/NT3.jpg', '/images/works/NT4.jpg', '/images/works/NT5.jpg',
      '/images/works/NT6.jpg', '/images/works/NT7.jpg', '/images/works/NT8.jpg', '/images/works/NT9.jpg', '/images/works/NT10.jpg',
    ]
  },
  'Visalya & Asanka': {
    couple: 'Visalya & Asanka',
    location: 'Kurunegala, Sri Lanka',
    year: '2025 Oct',
    images: [
      '/images/works/VA1.jpg', '/images/works/VA2.jpg', '/images/works/VA3.jpg', '/images/works/VA4.jpg', '/images/works/VA5.jpg',
      '/images/works/VA6.jpg', '/images/works/VA7.jpg', '/images/works/VA8.jpg', '/images/works/VA9.jpg', '/images/works/VA10.jpg',
    ]
  },
  'Pramodya': {
    couple: 'Pramodya',
    location: 'Kurunegala, Sri Lanka',
    year: '2025 Oct',
    images: [
      '/images/works/PBS1.jpg', '/images/works/PBS2.jpg', '/images/works/PBS3.jpg', '/images/works/PBS4.jpg', '/images/works/PBS5.jpg',
      '/images/works/PBS6.jpg', '/images/works/PBS7.jpg', '/images/works/PBS8.jpg', '/images/works/PBS9.jpg', '/images/works/PBS10.jpg',
    ]
  },
  
  'Shalika & Madushanka': {
    couple: 'Shalika & Madushanka',
    location: 'Kurunegala, Sri Lanka',
    year: '2025 Sep',
    images: [
      '/images/works/SM1.jpg', '/images/works/SM2.jpg', '/images/works/SM3.jpg', '/images/works/SM4.jpg', '/images/works/SM5.jpg',
      '/images/works/SM6.jpg', '/images/works/SM7.jpg', '/images/works/SM8.jpg', '/images/works/SM9.jpg', '/images/works/SM10.jpg',
    ]
  },
  'Prabodhya & Dananjaya': {
    couple: 'Prabodhya & Dananjaya',
    location: 'Negombo, Sri Lanka',
    year: '2025 Sep',
    images: [
      '/images/works/PD1.jpg', '/images/works/PD2.jpg', '/images/works/PD3.jpg', '/images/works/PD4.jpg', '/images/works/PD5.jpg',
      '/images/works/PD6.jpg', '/images/works/PD7.jpg', '/images/works/PD8.jpg', '/images/works/PD9.jpg', '/images/works/PD10.jpg',
    ]
  },
  'Hansini & Mahendra': {
    couple: 'Hansini & Mahendra',
    location: 'Kurunegala, Sri Lanka',
    year: '2025 Jun',
    images: [
      '/images/works/HM1.jpg', '/images/works/HM2.jpg', '/images/works/HM3.jpg', '/images/works/HM4.jpg', '/images/works/HM5.jpg',
      '/images/works/HM6.jpg'
    ]
  },
  'Prasadini & Thimendra': {
    couple: 'Prasadini & Thimendra',
    location: 'Ella, Sri Lanka',
    year: '2025 Jun',
    images: [
      '/images/works/PT1.jpg', '/images/works/PT2.jpg', '/images/works/PT3.jpg', '/images/works/PT4.jpg', '/images/works/PT5.jpg',
      '/images/works/PT6.jpg', '/images/works/PT7.jpg', '/images/works/PT8.jpg', '/images/works/PT9.jpg', '/images/works/PT10.jpg', 
    ]
  },
  'Dewmi & Dinesh': {
    couple: 'Dewmi & Dinesh',
    location: 'Ibbagamuwa, Kurunegala',
    year: '2025 May',
    images: [
      '/images/works/DD1.jpg', '/images/works/DD2.jpg', '/images/works/DD3.jpg', '/images/works/DD4.jpg', '/images/works/DD5.jpg',
      '/images/works/DD6.jpg', '/images/works/DD7.jpg', '/images/works/DD8.jpg', '/images/works/DD9.jpg', '/images/works/DD10.jpg',
    ]
  }
}

const works = [
  { id: 15, cat: 'Traditional', src: '/images/works/Darshan&Sachini1.jpg', couple: 'Darshana & Sachini', location: 'Ibbagamuwa, Sri Lanka', year: '2026 Apr', aspect: '3/4' },
  { id: 14, cat: 'Engagement', src: '/images/works/Vishmi&Migara1.jpg', couple: 'Vishmi & Migara', location: 'Ibbagamuwa, Sri Lanka', year: '2026 Mar', aspect: '3/4' },
  { id: 13, cat: 'Engagement', src: '/images/works/Wikum&Sachini1.jpg', couple: 'Wikum & Sachini', location: 'Mawathagama, Sri Lanka', year: '2026 Mar', aspect: '3/4' },
  { id: 12, cat: 'Birthdays', src: '/images/works/DilshaniBS1.jpg', couple: 'Dilshani', location: 'Ibbagamuwa, Sri Lanka', year: '2026 Feb', aspect: '3/4' },
  { id: 11, cat: 'Engagement', src: '/images/works/Darshi&Jalitha1.jpg', couple: 'Darshi & Jalitha', location: 'Ibbagamuwa, Sri Lanka', year: '2026 Jan', aspect: '3/4' },
  { id: 10, cat: 'Birthdays', src: '/images/works/LittlePrinces1.jpg', couple: 'LittlePrinces', location: 'Kurunegala, Sri Lanka', year: '2025 Dec', aspect: '3/4' },
  { id: 9, cat: 'Event', src: '/images/works/HBridal1.jpg', couple: 'Himashi', location: 'Ibbagamuwa, Sri Lanka', year: '2025 Nov', aspect: '3/4' },
  { id: 8, cat: 'Engagement', src: '/images/works/NT2.jpg', couple: 'Nimeshi & Tharaka', location: 'Ibbagamuwa, Sri Lanka', year: '2025 Nov', aspect: '3/4' },
  { id: 7, cat: 'Homecoming', src: '/images/works/VA1.jpg', couple: 'Visalya & Asanka', location: 'Kurunegala, Sri Lanka', year: '2025 Oct', aspect: '3/4' },
  { id: 6, cat: 'Birthdays', src: '/images/works/PBS1.jpg', couple: 'Pramodya', location: 'Kurunegala, Sri Lanka', year: '2025 Oct', aspect: '3/4' },
  { id: 5, cat: 'Traditional', src: '/images/works/SM1.jpg', couple: 'Shalika & Madushanka', location: 'Kurunegala, Sri Lanka', year: '2025 Sep', aspect: '3/4' },
  { id: 4, cat: 'Homecoming', src: '/images/works/PD1.jpg', couple: 'Prabodhya & Dananjaya', location: 'Negombo, Sri Lanka', year: '2025 Sep', aspect: '3/4' },
  { id: 3, cat: 'Homecoming', src: '/images/works/HM1.jpg', couple: 'Hansini & Mahendra', location: 'Kurunegala, Sri lanka', year: '2025 Jun', aspect: '3/4' },
  { id: 2, cat: 'Traditional', src: '/images/works/PT1.jpg', couple: 'Prasadini & Thimendra', location: 'Kurunegala, Sri Lanka', year: '2025 Jun', aspect: '3/4' },
  { id: 1, cat: 'Traditional', src: '/images/works/DD1.jpg', couple: 'Dewmi & Dinesh', location: 'Ibbagamuwa, Kurunegala', year: '2025 May', aspect: '3/4' },
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
