'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

interface FooterProps {
  language: 'nl' | 'en'
}

export default function Footer({ language }: FooterProps) {
  const content = {
    nl: {
      navTitle: 'navigatie',
      nav: [
        { label: 'over ons', href: '#over-ons' },
        { label: 'menu', href: '#menu' },
        { label: 'sfeerimpressie', href: '#sfeerimpressie' },
        { label: 'reserveren', href: '#reserveren' },
        { label: 'algemene informatie', href: '#algemene-informatie' },
      ],
      visitTitle: 'bezoek ons',
      address: ['Dorpstraat 6', '6181 GX Elsloo', 'Nederland'],
      hoursTitle: 'openingstijden',
      hoursDays: 'donderdag t/m zondag',
      hoursTime: 'vanaf 17.30u',
      hoursNote: 'laatste bestelling: 21.00u',
      contactTitle: 'contact',
      followTitle: 'volg ons',
      legal: [
        { label: 'Privacyverklaring', href: '/privacy' },
        { label: 'Cookiebeleid', href: '/cookies' },
        { label: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
      ],
      copyright: (year: number) => `© ${year} Auwt Aelse Bistro. tous droits réservés.`,
      creditText: 'Webdesign by',
    },
    en: {
      navTitle: 'navigation',
      nav: [
        { label: 'about us', href: '#over-ons' },
        { label: 'menu', href: '#menu' },
        { label: 'atmosphere', href: '#sfeerimpressie' },
        { label: 'reservations', href: '#reserveren' },
        { label: 'general info', href: '#algemene-informatie' },
      ],
      visitTitle: 'visit us',
      address: ['Dorpstraat 6', '6181 GX Elsloo', 'The Netherlands'],
      hoursTitle: 'opening hours',
      hoursDays: 'Thursday to Sunday',
      hoursTime: 'from 5:30 PM',
      hoursNote: 'last order: 9:00 PM',
      contactTitle: 'contact',
      followTitle: 'follow us',
      legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Terms & Conditions', href: '/algemene-voorwaarden' },
      ],
      copyright: (year: number) => `© ${year} Auwt Aelse Bistro. tous droits réservés.`,
      creditText: 'Webdesign by',
    },
  }

  const text = content[language]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Image
              src="/logo.svg"
              alt="Auwt Aelse"
              width={120}
              height={70}
              className={styles.logo}
              loading="lazy"
            />
            <p className={styles.tagline}>Bistro depuis 2025</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{text.navTitle}</h3>
            <ul className={styles.linkList}>
              {text.nav.map((item) => (
                <li key={item.href}><a href={item.href} className={styles.link}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{text.visitTitle}</h3>
            {text.address.map((line) => (
              <p key={line} className={styles.infoText}>{line}</p>
            ))}
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{text.hoursTitle}</h3>
            <p className={styles.infoText}>{text.hoursDays}</p>
            <p className={styles.infoText}>{text.hoursTime}</p>
            <p className={styles.infoTextSmall}>{text.hoursNote}</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{text.contactTitle}</h3>
            <p className={styles.infoText}><a href="tel:+31464377442" className={styles.link}>046 437 7442</a></p>
            <p className={styles.infoText}><a href="tel:+31612176780" className={styles.link}>06 1217 6780</a></p>
            <p className={styles.infoText}><a href="mailto:info@auwtaelse.nl" className={styles.link}>info@auwtaelse.nl</a></p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{text.followTitle}</h3>
            <div className={styles.social}>
              <a 
                href="https://www.instagram.com/auwtaelse" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/p/Auwt-Aelse-61572373615918/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            {text.legal.map((item, index) => (
              <Fragment key={item.href}>
                {index > 0 && <span className={styles.legalSeparator}>•</span>}
                <a href={item.href} className={styles.legalLink}>{item.label}</a>
              </Fragment>
            ))}
          </div>

          <div className={styles.business}>
            <p className={styles.businessInfo}>KVK: 95700854 • BTW: NL005169554B40</p>
          </div>

          <p className={styles.copyright}>{text.copyright(new Date().getFullYear())}</p>

          <div className={styles.credit}>
            <span className={styles.creditText}>{text.creditText}</span>
            <a
              href="https://dynique.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              Dynique
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

