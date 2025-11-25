'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './AtmosphereSection.module.css'

interface AtmosphereSectionProps {
  language: 'nl' | 'en'
}

export default function AtmosphereSection({ language }: AtmosphereSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const content = {
    nl: {
      title: 'Sfeerimpressie',
      subtitle: 'L\'Ambiance',
      description: 'Ervaar de warme en intieme sfeer van onze bistro. Van gezellige avonden met kaarslicht tot het bruisende terras bij zonnig weer.',
      follow: 'Volg ons',
      instagram: 'Instagram',
      facebook: 'Facebook'
    },
    en: {
      title: 'Atmosphere',
      subtitle: 'L\'Ambiance',
      description: 'Experience the warm and intimate atmosphere of our bistro. From cozy candlelit evenings to the vibrant terrace on sunny days.',
      follow: 'Follow us',
      instagram: 'Instagram',
      facebook: 'Facebook'
    }
  }

  const text = content[language]

  const photos = [
    { id: 1, src: '/img1.png', alt: 'Restaurant interior' },
    { id: 2, src: '/img2.png', alt: 'Dining atmosphere' },
    { id: 3, src: '/img3.png', alt: 'Restaurant ambiance' },
    { id: 4, src: '/img6.png', alt: 'Evening atmosphere' },
    { id: 5, src: '/img7.png', alt: 'Restaurant experience' },
    { id: 6, src: '/img8.png', alt: 'Bistro details' },
  ]

  return (
    <section 
      ref={sectionRef}
      id="sfeerimpressie" 
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{text.title}</h2>
          <p className={styles.subtitle}>{text.subtitle}</p>
          <p className={styles.description}>{text.description}</p>
        </div>

        <div className={styles.photoGrid}>
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={styles.photoItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.photoWrapper}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={styles.photo}
                  quality={90}
                />
                <div className={styles.photoOverlay}>
                  <div className={styles.overlayIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.socialSection}>
          <p className={styles.followText}>{text.follow}</p>
          <div className={styles.socialButtons}>
            <a 
              href="https://www.instagram.com/auwtaelse" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialButton}
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>{text.instagram}</span>
            </a>
            <a 
              href="https://www.facebook.com/p/Auwt-Aelse-61572373615918/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialButton}
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              <span>{text.facebook}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

