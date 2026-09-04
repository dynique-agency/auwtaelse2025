'use client'

import { useEffect, useState } from 'react'
import styles from './AnnouncementModal.module.css'

interface AnnouncementModalProps {
  language: 'nl' | 'en'
}

const text = {
  nl: {
    eyebrow: 'nouveauté',
    title: 'Nieuwe herfstkaart',
    body: 'Met de herfst in aantocht serveren we een vernieuwde kaart vol seizoensgerechten — denk aan Franse uiensoep, boeuf bourguignon en canard à l\'orange.',
    signature: 'Team Auwt Aelse',
    dismiss: 'Sluiten',
    cta: 'Bekijk de kaart',
  },
  en: {
    eyebrow: 'nouveauté',
    title: 'New autumn menu',
    body: "As autumn arrives, we're serving a refreshed menu full of seasonal dishes — think French onion soup, boeuf bourguignon and canard à l'orange.",
    signature: 'Team Auwt Aelse',
    dismiss: 'Close',
    cta: 'View the menu',
  },
}

export default function AnnouncementModal({ language }: AnnouncementModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
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

  const handleViewMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      document.body.style.overflow = 'unset'
      // force a synchronous reflow so the overflow change is applied
      // before scrolling, or the browser ignores the scroll request
      void document.body.offsetHeight
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
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

        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h2 id="announcement-title" className={styles.title}>{t.title}</h2>
        <p className={styles.body}>{t.body}</p>
        <p className={styles.signature}>{t.signature}</p>

        <button className={styles.ctaButton} onClick={handleViewMenu}>
          {t.cta}
        </button>
      </div>
    </div>
  )
}
