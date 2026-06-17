import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const whatsappNumber = '94763200883'
  const message = "Hi Sakshmina Dinushan Photography! I'm interested in learning more about your wedding photography packages."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        position: 'fixed',
        bottom: 'clamp(1.5rem, 4vw, 2.5rem)',
        right: 'clamp(1.5rem, 4vw, 2.5rem)',
        width: 'clamp(50px, 8vw, 70px)',
        height: 'clamp(50px, 8vw, 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#25D366',
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        zIndex: 999,
        border: 'none',
        textDecoration: 'none',
      }}
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp Official Icon (SVG) */}
      <svg
        width="65%"
        height="65%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.52 3.48C18.25 1.23 15.3 0 12.15 0C5.55 0 0.15 5.4 0.15 12c0 2.1 0.54 4.14 1.56 5.94L0 24l6.18-1.62c1.74 0.96 3.72 1.47 5.97 1.47c6.6 0 12-5.4 12-12c0-3.15-1.23-6.12-3.48-8.37zM12.15 21.9c-1.86 0-3.69-0.48-5.28-1.41l-0.39-0.21l-3.96 1.05l1.08-3.93l-0.24-0.39C2.07 15.51 1.5 13.81 1.5 12c0-5.49 4.47-9.96 9.96-9.96c2.64 0 5.13 1.03 6.99 2.91c1.86 1.89 2.88 4.38 2.88 7.05c0 5.49-4.47 9.96-9.96 9.96zm5.43-7.47c-0.3-0.15-1.77-0.87-2.04-0.96c-0.3-0.12-0.51-0.15-0.72 0.15c-0.21 0.3-0.81 0.96-0.99 1.17c-0.18 0.21-0.36 0.24-0.66 0.09c-1.8-0.93-3.06-1.59-4.26-3.63c-0.3-0.51 0.3-0.48 0.9-1.59c0.09-0.18 0.06-0.33-0.03-0.45c-0.09-0.15-0.72-1.74-0.99-2.37c-0.27-0.6-0.54-0.51-0.72-0.51c-0.18-0.03-0.39-0.03-0.6-0.03c-0.21 0-0.54 0.09-0.81 0.45c-0.27 0.36-1.05 1.02-1.05 2.49c0 1.47 1.08 2.88 1.23 3.09c0.15 0.21 2.1 3.27 5.1 4.56c2.1 0.9 3.12 0.87 3.69 0.81c0.51-0.06 1.62-0.66 1.86-1.29c0.24-0.63 0.24-1.17 0.18-1.29c-0.06-0.12-0.27-0.21-0.57-0.36z"
          fill="white"
        />
      </svg>
    </motion.a>
  )
}
