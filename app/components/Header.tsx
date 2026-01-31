'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

interface HeaderProps {
  language: 'nl' | 'en'
  onLanguageToggle: () => void
  activeSection?: string
}

export default function Header({ language, onLanguageToggle, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const navItems = {
    nl: [
      { label: 'Over Ons', href: '#over-ons' },
      { label: 'Menu', href: '#menu' },
      { label: 'Sfeerimpressie', href: '#sfeerimpressie' },
      { label: 'Reserveren', href: '#reserveren' },
      { label: 'Algemene Informatie', href: '#algemene-informatie' },
    ],
    en: [
      { label: 'About Us', href: '#over-ons' },
      { label: 'Menu', href: '#menu' },
      { label: 'Atmosphere', href: '#sfeerimpressie' },
      { label: 'Reserve', href: '#reserveren' },
      { label: 'General Info', href: '#algemene-informatie' },
    ],
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContainer}>
          <a href="#" className={styles.logoLink} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image
              src="/logo.svg"
              alt="Auwt Aelse"
              width={150}
              height={89}
              className={styles.headerLogo}
              priority
            />
          </a>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems[language].map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <li key={item.href}>
                    <a 
                      href={item.href} 
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            onClick={onLanguageToggle}
            className={styles.languageSwitch}
            aria-label="Switch language"
          >
            <span className={language === 'nl' ? styles.active : ''}>NL</span>
            <span className={styles.separator}>/</span>
            <span className={language === 'en' ? styles.active : ''}>EN</span>
          </button>

          <button
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navItems[language].map((item, index) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <li 
                    key={item.href}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className={styles.mobileNavItem}
                  >
                    <a 
                      href={item.href} 
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <button
              onClick={() => {
                onLanguageToggle()
                handleNavClick()
              }}
              className={styles.mobileLanguageSwitch}
              aria-label="Switch language"
            >
              <span className={language === 'nl' ? styles.active : ''}>NL</span>
              <span className={styles.separator}>/</span>
              <span className={language === 'en' ? styles.active : ''}>EN</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

