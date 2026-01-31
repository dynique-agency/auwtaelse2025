'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.backgroundLines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logo.svg"
            alt="Auwt Aelse"
            width={280}
            height={164}
            className={styles.logo}
            priority
          />
        </div>
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  )
}

