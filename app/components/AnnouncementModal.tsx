'use client'

import { useEffect, useState } from 'react'
import styles from './AnnouncementModal.module.css'

interface AnnouncementModalProps {
  language: 'nl' | 'en'
}

const DISMISS_KEY = 'announcement-zomertijd-2026-dismissed'
const EXPIRES_AT = new Date('2026-08-31T23:59:59')

const OPEN_DATES = [
  { day: { nl: 'za', en: 'Sat' }, date: '01.08' },
  { day: { nl: 'zo', en: 'Sun' }, date: '02.08' },
  { day: { nl: 'do', en: 'Thu' }, date: '06.08' },
  { day: { nl: 'vr', en: 'Fri' }, date: '07.08' },
  { day: { nl: 'za', en: 'Sat' }, date: '08.08' },
  { day: { nl: 'do', en: 'Thu' }, date: '13.08' },
  { day: { nl: 'vr', en: 'Fri' }, date: '14.08' },
  { day: { nl: 'za', en: 'Sat' }, date: '15.08' },
]

const text = {
  nl: {
    title: 'Augustus zomertijd',
    subtitle: "rythme d'été",
    intro: 'Lieve gasten, ook wij schakelen in augustus terug naar een rustiger tempo.',
    openLabel: 'open in augustus',
    noteTitle: 'let op',
    noteSunday: 'Zondag 9 augustus zijn we uitzonderlijk gesloten.',
    noteBreak: 'Vanaf zondag 16 augustus genieten we 2 weekjes vakantie; dan is de bistro gesloten.',
    outro: 'Tot snel!',
    questions: 'Vragen? Bel',
    close: 'Begrepen',
    dismiss: 'Sluiten',
  },
  en: {
    title: 'August summer hours',
    subtitle: "rythme d'été",
    intro: "Dear guests, in August we're shifting to a quieter pace too.",
    openLabel: 'open in august',
    noteTitle: 'please note',
    noteSunday: "We're exceptionally closed on Sunday, August 9.",
    noteBreak: "From Sunday, August 16 we're taking a 2-week break; the bistro will be closed.",
    outro: 'See you soon!',
    questions: 'Questions? Call',
    close: 'Got it',
    dismiss: 'Close',
  },
}

export default function AnnouncementModal({ language }: AnnouncementModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (new Date() > EXPIRES_AT) return
    if (localStorage.getItem(DISMISS_KEY)) return

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
      localStorage.setItem(DISMISS_KEY, 'true')
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

        <div className={styles.header}>
          <span className={styles.eyebrow}>{t.subtitle}</span>
          <h2 id="announcement-title" className={styles.title}>{t.title}</h2>
        </div>

        <p className={styles.intro}>{t.intro}</p>

        <div className={styles.datesSection}>
          <span className={styles.datesLabel}>{t.openLabel}</span>
          <div className={styles.datesGrid}>
            {OPEN_DATES.map((d, i) => (
              <div key={`${d.date}-${i}`} className={styles.dateChip}>
                <span className={styles.dateDay}>{d.day[language]}</span>
                <span className={styles.dateNum}>{d.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.notes}>
          <span className={styles.notesLabel}>{t.noteTitle}</span>
          <p className={styles.noteLine}>{t.noteSunday}</p>
          <p className={styles.noteLine}>{t.noteBreak}</p>
        </div>

        <p className={styles.outro}>{t.outro}</p>

        <div className={styles.footer}>
          <a href="tel:+31464377442" className={styles.phoneLink}>
            {t.questions} 046 437 7442
          </a>
          <button className={styles.closeButton} onClick={handleClose} aria-label={t.close}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
