'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import MenuSection from './components/MenuSection'
import AtmosphereSection from './components/AtmosphereSection'
import ContactSection from './components/ContactSection'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import FloatingReserveButton from './components/FloatingReserveButton'
import CookieBanner from './components/CookieBanner'
import styles from './page.module.css'

export default function Home() {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl')
  const [activeSection, setActiveSection] = useState<string>('')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'nl' ? 'en' : 'nl')
  }

  useEffect(() => {
    const sections = ['over-ons', 'menu', 'sfeerimpressie', 'reserveren', 'algemene-informatie']
    
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0
        let mostVisible = ''
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisible = entry.target.id
          }
        })
        
        if (mostVisible) {
          setActiveSection(mostVisible)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-120px 0px -40% 0px'
      }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <LoadingScreen />
      <main className={styles.main}>
        <Header language={language} onLanguageToggle={toggleLanguage} activeSection={activeSection} />
        <div className={styles.heroWrapper}>
          <Hero language={language} />
        </div>
        <div className={styles.sectionsWrapper}>
          <AboutSection language={language} />
          <MenuSection language={language} />
          <AtmosphereSection language={language} />
          <ContactSection language={language} />
          <InfoSection language={language} />
          <Footer />
        </div>
        <FloatingReserveButton language={language} />
        <CookieBanner />
      </main>
    </>
  )
}

