'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './AboutSection.module.css'

interface AboutSectionProps {
  language: 'nl' | 'en'
}

export default function AboutSection({ language }: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const content = {
    nl: {
      title: 'Over Ons',
      intro: 'Bij Auwt Aelse kun je terecht voor een smakelijk diner; een mix van moeders keuken en de méditerranée.',
      opening: 'De bistro is geopend van donderdag t/m zondag vanaf 17.30u. Onze keuken neemt om 21.00u de laatste bestellingen aan.',
      events: 'Ook verzorgen wij feestjes, borrels, koffietafels enz. voor groepen tot 60 personen. Bij mooi weer serveren we drankjes op ons petite terrasse!',
      info: 'Voor groepen zijn ook andere dagen en tijden mogelijk. We informeren je graag.',
      closing: 'Bon appétit!',
      signature: 'Ron & Karin'
    },
    en: {
      title: 'About Us',
      intro: 'At Auwt Aelse you can enjoy a delicious dinner; a mix of mother\'s kitchen and the Mediterranean.',
      opening: 'The bistro is open from Thursday to Sunday from 5:30 PM. Our kitchen accepts last orders at 9:00 PM.',
      events: 'We also cater parties, drinks, coffee tables etc. for groups up to 60 people. In nice weather we serve drinks on our petite terrasse!',
      info: 'For groups, other days and times are also possible. We are happy to inform you.',
      closing: 'Bon appétit!',
      signature: 'Ron & Karin'
    }
  }

  const text = content[language]

  return (
    <section 
      ref={sectionRef}
      id="over-ons" 
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/frontofrestaurant.png"
                alt="Auwt Aelse Restaurant"
                fill
                className={styles.image}
                quality={95}
              />
            </div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>{text.title}</h2>
            
            <p className={styles.intro}>{text.intro}</p>
            
            <div className={styles.divider}></div>

            <p className={styles.text}>{text.opening}</p>
            <p className={styles.text}>{text.events}</p>
            <p className={styles.textItalic}>{text.info}</p>

            <div className={styles.closing}>
              <p className={styles.bonAppetit}>{text.closing}</p>
              <p className={styles.signature}>{text.signature}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

