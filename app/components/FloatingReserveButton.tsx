'use client'

import { useState } from 'react'
import styles from './FloatingReserveButton.module.css'

interface FloatingReserveButtonProps {
  language: 'nl' | 'en'
}

export default function FloatingReserveButton({ language }: FloatingReserveButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const text = {
    nl: {
      main: 'Reserveren',
      call: 'Bellen',
      email: 'E-mailen'
    },
    en: {
      main: 'Reserve',
      call: 'Call',
      email: 'Email'
    }
  }

  const content = text[language]

  return (
    <div className={styles.container}>
      <div className={`${styles.buttonGroup} ${isOpen ? styles.open : ''}`}>
        <a 
          href="tel:0464377442" 
          className={styles.actionButton}
          aria-label={content.call}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>{content.call}</span>
        </a>
        
        <a 
          href="mailto:info@auwtaelse.nl" 
          className={styles.actionButton}
          aria-label={content.email}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m2 7 10 7 10-7"/>
          </svg>
          <span>{content.email}</span>
        </a>
      </div>

      <button
        className={`${styles.mainButton} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={content.main}
        aria-expanded={isOpen}
      >
        <span className={styles.mainButtonText}>{content.main}</span>
        <svg 
          className={styles.mainButtonIcon}
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  )
}

