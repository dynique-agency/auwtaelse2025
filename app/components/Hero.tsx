'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

interface HeroProps {
  language: 'nl' | 'en'
}

export default function Hero({ language }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/img1.png"
          alt="Restaurant interior"
          fill
          priority
          className={styles.backgroundImage}
          quality={85}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.svg"
            alt="Restaurant logo"
            width={300}
            height={175}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

