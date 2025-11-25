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
      subtitle: 'Réservation',
      intro: 'Voor een reservering kunt u ons bellen of mailen. Wij zorgen ervoor dat uw avond perfect wordt.',
      phone: {
        label: 'Bellen',
        number: '046 437 7442',
        mobile: '06 1217 6780',
        description: 'Bereikbaar tijdens openingstijden'
      },
      email: {
        label: 'E-mailen',
        address: 'info@auwtaelse.nl',
        description: 'We reageren binnen 24 uur'
      },
      visit: {
        label: 'Bezoek Ons',
        address: 'Dorpstraat 6',
        city: '6181 GX Elsloo',
        country: 'Nederland'
      },
      hours: {
        label: 'Openingstijden',
        days: 'Donderdag t/m Zondag',
        time: 'vanaf 17.30u',
        kitchen: 'Laatste bestelling: 21.00u'
      },
      extras: [
        {
          icon: 'terrace',
          title: 'Petite Terrasse',
          description: 'Bij mooi weer serveren we drankjes op ons petite terrasse!'
        },
        {
          icon: 'gift',
          title: 'Cadeaubonnen',
          description: 'We accepteren geen externe cadeaukaarten, maar we vertellen je graag meer over onze eigen cadeaubonnen.'
        },
        {
          icon: 'party',
          title: 'Feesten & Events',
          description: 'Ook verzorgen wij feestjes, borrels en koffietafels voor groepen tot 60 personen.'
        }
      ]
    },
    en: {
      title: 'Reservations',
      subtitle: 'Réservation',
      intro: 'For a reservation, you can call or email us. We will ensure your evening is perfect.',
      phone: {
        label: 'Call',
        number: '046 437 7442',
        mobile: '06 1217 6780',
        description: 'Available during opening hours'
      },
      email: {
        label: 'Email',
        address: 'info@auwtaelse.nl',
        description: 'We respond within 24 hours'
      },
      visit: {
        label: 'Visit Us',
        address: 'Dorpstraat 6',
        city: '6181 GX Elsloo',
        country: 'The Netherlands'
      },
      hours: {
        label: 'Opening Hours',
        days: 'Thursday to Sunday',
        time: 'from 5:30 PM',
        kitchen: 'Last order: 9:00 PM'
      },
      extras: [
        {
          icon: 'terrace',
          title: 'Petite Terrasse',
          description: 'In nice weather we serve drinks on our petite terrasse!'
        },
        {
          icon: 'gift',
          title: 'Gift Vouchers',
          description: 'We do not accept external gift cards, but we are happy to tell you more about our own gift vouchers.'
        },
        {
          icon: 'party',
          title: 'Parties & Events',
          description: 'We also cater parties, drinks and coffee tables for groups up to 60 people.'
        }
      ]
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
        <div className={styles.mainContent}>
          <div className={styles.leftSide}>
            <h2 className={styles.title}>{text.title}</h2>
            <p className={styles.subtitle}>{text.subtitle}</p>
            <p className={styles.intro}>{text.intro}</p>

            <div className={styles.contactMethods}>
              <div className={styles.method}>
                <h3 className={styles.methodLabel}>{text.phone.label}</h3>
                <div className={styles.phoneNumbers}>
                  <a href={`tel:${text.phone.number.replace(/\s/g, '')}`} className={styles.contactLink}>
                    {text.phone.number}
                  </a>
                  <span className={styles.phoneSeparator}>/</span>
                  <a href={`tel:${text.phone.mobile.replace(/\s/g, '')}`} className={styles.contactLink}>
                    {text.phone.mobile}
                  </a>
                </div>
              </div>

              <div className={styles.method}>
                <h3 className={styles.methodLabel}>{text.email.label}</h3>
                <a href={`mailto:${text.email.address}`} className={styles.contactLink}>
                  {text.email.address}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.infoBlock}>
              <h4 className={styles.infoLabel}>{text.visit.label}</h4>
              <p className={styles.infoText}>{text.visit.address}</p>
              <p className={styles.infoText}>{text.visit.city}</p>
            </div>

            <div className={styles.infoBlock}>
              <h4 className={styles.infoLabel}>{text.hours.label}</h4>
              <p className={styles.infoText}>{text.hours.days}</p>
              <p className={styles.infoText}>{text.hours.time}</p>
              <p className={styles.infoTextSmall}>{text.hours.kitchen}</p>
            </div>
          </div>
        </div>

        <div className={styles.extrasSection}>
          <div className={styles.extrasGrid}>
            {text.extras.map((extra, index) => (
              <div key={index} className={styles.extraCard}>
                <div className={styles.extraIcon}>
                  {extra.icon === 'terrace' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5z"/>
                      <polyline points="12 2 12 9"/>
                      <path d="M2 17h20"/>
                    </svg>
                  )}
                  {extra.icon === 'gift' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 12 20 22 4 22 4 12"/>
                      <rect x="2" y="7" width="20" height="5"/>
                      <line x1="12" y1="22" x2="12" y2="7"/>
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                    </svg>
                  )}
                  {extra.icon === 'party' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                </div>
                <h4 className={styles.extraTitle}>{extra.title}</h4>
                <p className={styles.extraDescription}>{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

