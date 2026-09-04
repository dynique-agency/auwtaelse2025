'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './MenuSection.module.css'

interface MenuSectionProps {
  language: 'nl' | 'en'
}

interface MenuItem {
  gerecht?: string
  dish?: string
  prijs?: string
  price?: string
}

export default function MenuSection({ language }: MenuSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
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

  const menuData = {
    nl: {
      title: 'Menu',
      subtitle: 'nos spécialités',
      allergenenDisclaimer: 'Geef voedselallergieën en dieetwensen aub bij reservering aan ons door. In onze kleine keuken is kruisbesmetting niet geheel uit te sluiten.',
      categories: [
        {
          id: 'voorgerechten',
          name: 'Voorgerechten',
          french: 'les entrées',
          description: 'Onze kaart bestaat uit eenvoudige, huisgemaakte gerechten. Dagvers bereid, dus op = op!',
          icon: 'soup',
          items: [
            { gerecht: "Franse uiensoep gegratineerd", prijs: "€ 9,75" },
            { gerecht: "oeuf mayonnaise", prijs: "€ 9,75" },
            { gerecht: "champignons à l'escargot (zonder slakken)", prijs: "€ 9,75" },
            { gerecht: "camembert au four", prijs: "€ 11,50" },
            { gerecht: "carpaccio van rode biet met feta en walnoot*", prijs: "€ 12,75" },
            { gerecht: "garnaaltjes in knoflookboter", prijs: "€ 10,50" },
            { gerecht: "gambakroketjes met kleine salade", prijs: "€ 11,50" },
            { gerecht: "coquilles st-jacques gratinée*", prijs: "€ 12,75" },
            { gerecht: "escargots met kruidenboter (6st.)", prijs: "€ 12,00" },
            { gerecht: "cuisses de grenouille*", prijs: "€ 12,75" },
            { gerecht: "carpaccio van rund*", prijs: "€ 12,75" }
          ]
        },
        {
          id: 'hoofdgerechten',
          name: 'Hoofdgerechten',
          french: 'les plats principaux',
          description: 'De hoofdgerechten worden geserveerd met frietjes en salade. Onze sauzen: rode wijn en peperroom (lactosevrij!)',
          icon: 'main',
          items: [
            { gerecht: "vega van de dag", prijs: "€ 19,75" },
            { gerecht: "vegetarische schnitzel met saus naar keuze", prijs: "€ 19,75" },
            { gerecht: "vispannetje met kreeftsaus", prijs: "€ 19,75" },
            { gerecht: "zalm met kreeftsaus*", prijs: "€ 22,00" },
            { gerecht: "boeuf bourguignon", prijs: "€ 19,75" },
            { gerecht: "spareribs à la Harrie*", prijs: "€ 22,00" },
            { gerecht: "biefstuk (180gr.) - met saus naar keuze*", prijs: "€ 22,50" },
            { gerecht: "canard à l'orange*", prijs: "€ 23,50" }
          ],
          extra: [
            {
              title: 'Menu de Sélection',
              subtitle: '3-gangen (voor-, hoofd- en nagerecht). Kies uit al het lekkers op onze kaart! Voor de gerechten met * rekenen wij € 2,50 supplement.',
              items: [
                { gerecht: "Menu de Sélection per persoon", prijs: "€ 37,00" }
              ]
            },
            {
              title: 'Pour les Petits',
              subtitle: '',
              items: [
                { gerecht: "frietjes met frikandel of kipnuggets", prijs: "€ 10,00" },
                { gerecht: "halve portie boeuf bourguignon of spareribs", prijs: "€ 12,50" },
                { gerecht: "kinderijsje", prijs: "€ 5,00" }
              ]
            }
          ]
        },
        {
          id: 'desserts',
          name: 'Desserts',
          french: 'pour les becs sucrés',
          description: '',
          icon: 'dessert',
          items: [
            { gerecht: "koffie/thee compleet met lekkers en likeurtje", prijs: "€ 8,50" },
            { gerecht: "affogato (vanille-ijs met een shotje espresso)", prijs: "€ 7,75" },
            { gerecht: "vanille-ijs met advocaatsaus óf chocoladesaus", prijs: "€ 9,50" },
            { gerecht: "vanille-ijs met boerenjongens", prijs: "€ 9,50" },
            { gerecht: "crème brûlée", prijs: "€ 9,50" },
            { gerecht: "ijs met warme kersen*", prijs: "€ 11,50" },
            { gerecht: "kaasplankje*", prijs: "€ 12,75" }
          ]
        }
      ]
    },
    en: {
      title: 'Menu',
      subtitle: 'nos spécialités',
      allergenenDisclaimer: 'Please inform us of food allergies and dietary requirements when making your reservation. In our small kitchen, cross-contamination cannot be completely excluded.',
      categories: [
        {
          id: 'starters',
          name: 'Starters',
          french: 'les entrées',
          description: 'Our menu consists of simple, homemade dishes. Freshly prepared daily, so when it\'s gone, it\'s gone!',
          icon: 'soup',
          items: [
            { dish: "French onion soup au gratin", price: "€ 9.75" },
            { dish: "oeuf mayonnaise", price: "€ 9.75" },
            { dish: "champignons à l'escargot (without snails)", price: "€ 9.75" },
            { dish: "camembert au four", price: "€ 11.50" },
            { dish: "carpaccio of beetroot with feta and walnut*", price: "€ 12.75" },
            { dish: "prawns in garlic butter", price: "€ 10.50" },
            { dish: "prawn croquettes with small salad", price: "€ 11.50" },
            { dish: "coquilles st-jacques au gratin*", price: "€ 12.75" },
            { dish: "escargots with herb butter (6 pcs.)", price: "€ 12.00" },
            { dish: "cuisses de grenouille*", price: "€ 12.75" },
            { dish: "beef carpaccio*", price: "€ 12.75" }
          ]
        },
        {
          id: 'mains',
          name: 'Main Courses',
          french: 'les plats principaux',
          description: 'Main courses are served with fries and salad. Our sauces: red wine and pepper cream (lactose-free!)',
          icon: 'main',
          items: [
            { dish: "vegetarian dish of the day", price: "€ 19.75" },
            { dish: "vegetarian schnitzel with sauce of choice", price: "€ 19.75" },
            { dish: "fish pan with lobster sauce", price: "€ 19.75" },
            { dish: "salmon with lobster sauce*", price: "€ 22.00" },
            { dish: "boeuf bourguignon", price: "€ 19.75" },
            { dish: "spareribs à la Harrie*", price: "€ 22.00" },
            { dish: "steak (180gr.) with sauce of choice*", price: "€ 22.50" },
            { dish: "canard à l'orange*", price: "€ 23.50" }
          ],
          extra: [
            {
              title: 'Menu de Sélection',
              subtitle: '3 courses (starter, main, and dessert). Choose from all the delicious items on our menu! For dishes with * we charge € 2.50 supplement.',
              items: [
                { dish: "Menu de Sélection per person", price: "€ 37.00" }
              ]
            },
            {
              title: 'Pour les Petits',
              subtitle: '',
              items: [
                { dish: "fries with frikandel or chicken nuggets", price: "€ 10.00" },
                { dish: "half portion of boeuf bourguignon or spareribs", price: "€ 12.50" },
                { dish: "kids ice cream", price: "€ 5.00" }
              ]
            }
          ]
        },
        {
          id: 'desserts',
          name: 'Desserts',
          french: 'pour les becs sucrés',
          description: '',
          icon: 'dessert',
          items: [
            { dish: "coffee/tea complete with treats and liqueur", price: "€ 8.50" },
            { dish: "affogato (vanilla ice cream with a shot of espresso)", price: "€ 7.75" },
            { dish: "vanilla ice cream with advocaat or chocolate sauce", price: "€ 9.50" },
            { dish: "vanilla ice cream with boerenjongens", price: "€ 9.50" },
            { dish: "crème brûlée", price: "€ 9.50" },
            { dish: "ice cream with warm cherries*", price: "€ 11.50" },
            { dish: "cheese board*", price: "€ 12.75" }
          ]
        }
      ]
    }
  }

  const currentContent = menuData[language]

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'soup':
        return (
          <Image
            src="/menu-voorgerecht.png"
            alt="Voorgerecht"
            width={50}
            height={50}
            className={styles.menuIcon}
            loading="lazy"
          />
        )
      case 'main':
        return (
          <Image
            src="/menu-hoofdgerecht.png"
            alt="Hoofdgerecht"
            width={50}
            height={50}
            className={styles.menuIcon}
            loading="lazy"
          />
        )
      case 'dessert':
        return (
          <Image
            src="/menu-desert.png"
            alt="Dessert"
            width={50}
            height={50}
            className={styles.menuIcon}
            loading="lazy"
          />
        )
      default:
        return null
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{currentContent.title}</h2>
          <p className={styles.subtitle}>{currentContent.subtitle}</p>
        </div>
        
        <div className={styles.menuContainer}>
          {currentContent.categories.map((category, index) => (
            <div key={category.id} className={styles.category}>
              <button
                className={`${styles.categoryHeader} ${openCategory === category.id ? styles.open : ''}`}
                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpenCategory(openCategory === category.id ? null : category.id)
                  }
                }}
                aria-expanded={openCategory === category.id}
                aria-controls={`menu-${category.id}`}
              >
                <div className={styles.categoryTitle}>
                  <div className={styles.icon}>
                    {getIcon(category.icon)}
                  </div>
                  <div className={styles.categoryNames}>
                    <span className={styles.categoryName}>{category.name}</span>
                    {category.french && (
                      <span className={styles.categoryFrench}>{category.french}</span>
                    )}
                  </div>
                </div>
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`${styles.categoryContent} ${openCategory === category.id ? styles.expanded : ''}`}
                id={`menu-${category.id}`}
              >
                <div className={styles.itemsWrapper}>
                  {category.description && (
                    <p className={styles.categoryDescription}>{category.description}</p>
                  )}
                  <div className={styles.menuItems}>
                    {category.items.map((item: MenuItem, itemIndex) => (
                      <div key={itemIndex} className={styles.menuItem}>
                        <span className={styles.dishName}>
                          {language === 'nl' ? item.gerecht : item.dish}
                        </span>
                        <span className={styles.dots}></span>
                        <span className={styles.price}>
                          {language === 'nl' ? item.prijs : item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {category.extra && category.extra.map((extraSection: any, extraIndex: number) => (
                    <div key={extraIndex} className={styles.extraSection}>
                      <h4 className={styles.extraTitle}>{extraSection.title}</h4>
                      {extraSection.subtitle && (
                        <p className={styles.extraSubtitle}>{extraSection.subtitle}</p>
                      )}
                      <div className={styles.menuItems}>
                        {extraSection.items.map((item: MenuItem, itemIndex: number) => (
                          <div key={itemIndex} className={styles.menuItem}>
                            <span className={styles.dishName}>
                              {language === 'nl' ? item.gerecht : item.dish}
                            </span>
                            <span className={styles.dots}></span>
                            <span className={styles.price}>
                              {language === 'nl' ? item.prijs : item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>{currentContent.allergenenDisclaimer}</p>
        </div>
      </div>
    </section>
  )
}
