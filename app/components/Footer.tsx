'use client'

import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
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
            <h3 className={styles.columnTitle}>Navigatie</h3>
            <ul className={styles.linkList}>
              <li><a href="#over-ons" className={styles.link}>Over Ons</a></li>
              <li><a href="#menu" className={styles.link}>Menu</a></li>
              <li><a href="#sfeerimpressie" className={styles.link}>Sfeerimpressie</a></li>
              <li><a href="#reserveren" className={styles.link}>Reserveren</a></li>
              <li><a href="#algemene-informatie" className={styles.link}>Algemene Informatie</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Volg Ons</h3>
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
            <a href="/privacy" className={styles.legalLink}>Privacyverklaring</a>
            <span className={styles.legalSeparator}>•</span>
            <a href="/cookies" className={styles.legalLink}>Cookiebeleid</a>
            <span className={styles.legalSeparator}>•</span>
            <a href="/algemene-voorwaarden" className={styles.legalLink}>Algemene Voorwaarden</a>
          </div>
          
          <div className={styles.business}>
            <p className={styles.businessInfo}>KVK: 95700854 • BTW: NL005169554B40</p>
          </div>

          <p className={styles.copyright}>© {new Date().getFullYear()} Auwt Aelse Bistro. Tous droits réservés.</p>
          
          <div className={styles.credit}>
            <span className={styles.creditText}>Webdesign by</span>
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

