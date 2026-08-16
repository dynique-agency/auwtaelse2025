'use client'

import { useEffect, useState } from 'react'
import styles from './AnnouncementModal.module.css'

interface AnnouncementModalProps {
  language: 'nl' | 'en'
}

const EXPIRES_AT = new Date('2026-08-31T23:59:59')

const text = {
  nl: {
    title: 'En vacances !',
    body: 'Wij zijn er even tussenuit en zien jullie graag weer in september.',
    signature: 'Team Auwt Aelse',
    dismiss: 'Sluiten',
    close: 'Begrepen',
  },
  en: {
    title: 'En vacances !',
    body: "We're away for a little while and can't wait to welcome you back in September.",
    signature: 'Team Auwt Aelse',
    dismiss: 'Close',
    close: 'Got it',
  },
}

export default function AnnouncementModal({ language }: AnnouncementModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (new Date() > EXPIRES_AT) return

    const timer = setTimeout(() => setIsOpen(true), 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 350)
  }

  if (!isOpen) return null

  const t = text[language]

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.closing : ''}`}
      onClick={handleClose}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeIcon} onClick={handleClose} aria-label={t.dismiss}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 id="announcement-title" className={styles.title}>{t.title}</h2>
        <p className={styles.body}>{t.body}</p>
        <p className={styles.signature}>{t.signature}</p>

        <button className={styles.closeButton} onClick={handleClose} aria-label={t.close}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
