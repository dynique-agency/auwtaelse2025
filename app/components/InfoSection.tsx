'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './InfoSection.module.css'

interface InfoSectionProps {
  language: 'nl' | 'en'
}

export default function InfoSection({ language }: InfoSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [openCard, setOpenCard] = useState<string | null>(null)
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
      title: 'Algemene Informatie',
      subtitle: 'Informations Générales',
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
      contact: {
        label: 'Contact',
        phone: '046 437 7442',
        mobile: '06 1217 6780',
        email: 'info@auwtaelse.nl'
      },
      info: [
        {
          icon: 'party',
          title: 'Feesten & Events',
          description: 'Wij verzorgen feesten, borrels, koffietafels etc. tot ca 60 personen. Voor groepen zijn ook andere dagen en tijden mogelijk.',
          contact: 'We informeren je graag:'
        },
        {
          icon: 'gift',
          title: 'Cadeaubonnen',
          description: 'Doe eens een etentje cadeau! Bistro Auwt Aelse heeft eigen cadeaubonnen, voor elk gewenst bedrag en twee jaar geldig.'
        },
        {
          icon: 'parking',
          title: 'Parkeren',
          description: 'Wanneer de parkeervakken in onze straat bezet zijn, is er ruim plek op enkele minuten loopafstand: Terhagen (Rivierparking), Scharberg en Maasberg.'
        }
      ]
    },
    en: {
      title: 'General Information',
      subtitle: 'Informations Générales',
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
      contact: {
        label: 'Contact',
        phone: '046 437 7442',
        mobile: '06 1217 6780',
        email: 'info@auwtaelse.nl'
      },
      info: [
        {
          icon: 'party',
          title: 'Parties & Events',
          description: 'We cater parties, drinks, coffee tables etc. for groups up to approx. 60 people. For groups, other days and times are also possible.',
          contact: 'We are happy to inform you:'
        },
        {
          icon: 'gift',
          title: 'Gift Vouchers',
          description: 'Treat someone to a lovely dinner! Bistro Auwt Aelse has its own gift vouchers, for any desired amount and valid for two years.'
        },
        {
          icon: 'parking',
          title: 'Parking',
          description: 'When parking spaces on our street are occupied, there is ample space within a few minutes walk: Terhagen (River Parking), Scharberg and Maasberg.'
        }
      ]
    }
  }

  const text = content[language]

  return (
    <section 
      ref={sectionRef}
      id="algemene-informatie" 
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{text.title}</h2>
          <p className={styles.subtitle}>{text.subtitle}</p>
        </div>

        <div className={styles.extrasGrid}>
          {text.info.map((item, index) => (
            <button
              key={index}
              className={`${styles.extraCard} ${openCard === item.icon ? styles.open : ''}`}
              onClick={() => setOpenCard(openCard === item.icon ? null : item.icon)}
              aria-expanded={openCard === item.icon}
            >
              <div className={styles.cardHeader}>
                <div className={styles.extraIcon}>
                  {item.icon === 'party' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                  {item.icon === 'gift' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 12 20 22 4 22 4 12"/>
                      <rect x="2" y="7" width="20" height="5"/>
                      <line x1="12" y1="22" x2="12" y2="7"/>
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                    </svg>
                  )}
                  {item.icon === 'parking' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
                    </svg>
                  )}
                </div>
                <h4 className={styles.extraTitle}>{item.title}</h4>
                <div className={styles.expandIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
              <div className={styles.extraContent}>
                <p className={styles.extraDescription}>{item.description}</p>
                {item.contact && (
                  <>
                    <p className={styles.contactPrompt}>{item.contact}</p>
                    <div className={styles.infoContactButtons}>
                      <a 
                        href="tel:0464377442" 
                        className={styles.infoContactButton}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span>{language === 'nl' ? 'Bellen' : 'Call'}</span>
                      </a>
                      <a 
                        href="mailto:info@auwtaelse.nl" 
                        className={styles.infoContactButton}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"/>
                          <path d="m2 7 10 7 10-7"/>
                        </svg>
                        <span>{language === 'nl' ? 'E-mailen' : 'Email'}</span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

