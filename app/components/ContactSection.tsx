'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  language: 'nl' | 'en'
}

export default function ContactSection({ language }: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const content = {
    nl: {
      title: 'Reserveren',
      subtitle: 'réservation',
      intro: 'Voor een reservering of meer informatie kun je ons bellen of mailen. Of loop gezellig een binnen.',
      phone: {
        label: 'Bellen',
        number: '046 437 7442'
      },
      email: {
        label: 'E-mailen',
        address: 'info@auwtaelse.nl'
      }
    },
    en: {
      title: 'Reservations',
      subtitle: 'réservation',
      intro: 'For a reservation or more information, you can call or email us. Or feel free to drop by.',
      phone: {
        label: 'Call',
        number: '046 437 7442'
      },
      email: {
        label: 'Email',
        address: 'info@auwtaelse.nl'
      }
    }
  }

  const text = content[language]

  return (
    <section 
      ref={sectionRef}
      id="reserveren" 
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{text.title}</h2>
        <p className={styles.subtitle}>{text.subtitle}</p>
        <p className={styles.intro}>{text.intro}</p>

        <div className={styles.contactMethods}>
          <a 
            href="tel:+31464377442" 
            className={styles.contactButton}
            aria-label={text.phone.label}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>{text.phone.label}</span>
          </a>

          <a 
            href={`mailto:${text.email.address}`} 
            className={styles.contactButton}
            aria-label={text.email.label}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
            <span>{text.email.label}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

