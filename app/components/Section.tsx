'use client'

import styles from './Section.module.css'

interface SectionProps {
  id: string
  title: string
}

export default function Section({ id, title }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <div className={styles.placeholder}>
            <div className={styles.placeholderLine} />
            <div className={styles.placeholderLine} />
            <div className={styles.placeholderLine} />
          </div>
        </div>
      </div>
    </section>
  )
}


