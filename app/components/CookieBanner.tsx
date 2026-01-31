'use client'

import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent')
    
    if (!hasAccepted) {
      // Show banner after 1 second for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setIsClosing(true)
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'accepted')
      localStorage.setItem('cookieConsentDate', new Date().toISOString())
      setIsVisible(false)
    }, 400)
  }

  const handleReject = () => {
    setIsClosing(true)
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'rejected')
      localStorage.setItem('cookieConsentDate', new Date().toISOString())
      setIsVisible(false)
    }, 400)
  }

  if (!isVisible) return null

  return (
    <div className={`${styles.banner} ${isClosing ? styles.closing : ''}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>Cookies</h3>
          <p className={styles.description}>
            Wij gebruiken alleen essentiële cookies voor de technische werking van deze website. 
            Deze cookies verzamelen geen persoonlijke gegevens en zijn noodzakelijk voor een goede gebruikservaring.
          </p>
        </div>
        
        <div className={styles.actions}>
          <button 
            onClick={handleAccept}
            className={styles.acceptButton}
            aria-label="Cookies accepteren"
          >
            Accepteren
          </button>
          <button 
            onClick={handleReject}
            className={styles.rejectButton}
            aria-label="Cookies weigeren"
          >
            Weigeren
          </button>
          <a 
            href="/cookies" 
            className={styles.infoLink}
            aria-label="Meer informatie over cookies"
          >
            Meer info
          </a>
        </div>
      </div>
    </div>
  )
}
