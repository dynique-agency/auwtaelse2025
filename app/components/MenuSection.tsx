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
            { gerecht: "soupe du jour", prijs: "€ 8,50" },
            { gerecht: "unnesop gegratineerd", prijs: "€ 9,50" },
            { gerecht: "champignons à l'escargot (zonder slakken)", prijs: "€ 9,50" },
            { gerecht: "camembert au four", prijs: "€ 11,50" },
            { gerecht: "carpaccio van rode biet met feta en walnoot*", prijs: "€ 12,50" },
            { gerecht: "garnaaltjes in knoflookboter", prijs: "€ 10,50" },
            { gerecht: "sardinefilets uit de oven", prijs: "€ 11,50" },
            { gerecht: "gambakroketjes met kleine salade", prijs: "€ 11,50" },
            { gerecht: "cuisses de grenouille (indien voorradig)*", prijs: "€ 12,50" },
            { gerecht: "carpaccio van rund*", prijs: "€ 12,50" }
          ]
        },
        {
          id: 'hoofdgerechten',
          name: 'Hoofdgerechten',
          french: 'les plats principaux',
          description: 'De hoofdgerechten worden geserveerd met salade en frietjes. Sauzen: rode wijn / peper / champignonroom',
          icon: 'main',
          items: [
            { gerecht: "ravioli (vega - wisselend assortiment)", prijs: "€ 19,50" },
            { gerecht: "vispannetje met kreeftsaus", prijs: "€ 19,50" },
            { gerecht: "schnitzel (ook vega mogelijk) met saus naar keuze", prijs: "€ 19,50" },
            { gerecht: "spareribs à la Harrie", prijs: "€ 20,75" },
            { gerecht: "biefstuk (180gr.) met saus naar keuze*", prijs: "€ 21,50" },
            { gerecht: "boeuf bourguignon", prijs: "€ 19,50" },
            { gerecht: "terre & mer (biefstuk & garnaaltjes) met saus naar keuze*", prijs: "€ 23,50" }
          ],
          extra: [
            {
              title: 'Menu de Sélection',
              subtitle: '3-gangen (voor-, hoofd- en nagerecht). Kies uit al het lekkers op onze kaart! Voor de gerechten met * rekenen wij € 2,50 supplement.',
              items: [
                { gerecht: "Menu de Sélection per persoon", prijs: "€ 35,50" }
              ]
            },
            {
              title: 'Pour les Petits',
              subtitle: '',
              items: [
                { gerecht: "frietjes met frikandel of kipnuggets", prijs: "€ 10,00" },
                { gerecht: "halve portie van iets lekkers uit de kaart", prijs: "1/2 prijs" },
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
            { gerecht: "affogato (vanille-ijs overgoten met espresso)", prijs: "€ 7,50" },
            { gerecht: "vanille-ijs met advocaat- of chocoladesaus", prijs: "€ 9,50" },
            { gerecht: "crème brûlée", prijs: "€ 9,50" },
            { gerecht: "kaasplankje*", prijs: "€ 12,50" }
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
            { dish: "soupe du jour", price: "€ 8.50" },
            { dish: "french onion soup gratinated", price: "€ 9.50" },
            { dish: "champignons à l'escargot (without snails)", price: "€ 9.50" },
            { dish: "camembert au four", price: "€ 11.50" },
            { dish: "carpaccio of beetroot with feta and walnut*", price: "€ 12.50" },
            { dish: "prawns in garlic butter", price: "€ 10.50" },
            { dish: "baked sardine fillets", price: "€ 11.50" },
            { dish: "prawn croquettes with small salad", price: "€ 11.50" },
            { dish: "cuisses de grenouille (if available)*", price: "€ 12.50" },
            { dish: "beef carpaccio*", price: "€ 12.50" }
          ]
        },
        {
          id: 'mains',
          name: 'Main Courses',
          french: 'les plats principaux',
          description: 'Main courses are served with salad and fries. Sauces: red wine / pepper / mushroom cream',
          icon: 'main',
          items: [
            { dish: "ravioli (vega - rotating assortment)", price: "€ 19.50" },
            { dish: "fish pan with lobster sauce", price: "€ 19.50" },
            { dish: "schnitzel (also vega) with sauce of choice", price: "€ 19.50" },
            { dish: "spareribs à la Harrie", price: "€ 20.75" },
            { dish: "steak (180gr.) with sauce of choice*", price: "€ 21.50" },
            { dish: "boeuf bourguignon", price: "€ 19.50" },
            { dish: "terre & mer (steak & prawns) with sauce of choice*", price: "€ 23.50" }
          ],
          extra: [
            {
              title: 'Menu de Sélection',
              subtitle: '3 courses (starter, main, and dessert). Choose from all the delicious items on our menu! For dishes with * we charge € 2.50 supplement.',
              items: [
                { dish: "Menu de Sélection per person", price: "€ 35.50" }
              ]
            },
            {
              title: 'Pour les Petits',
              subtitle: '',
              items: [
                { dish: "fries with frikandel or chicken nuggets", price: "€ 10.00" },
                { dish: "half portion of something tasty from the menu", price: "1/2 price" },
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
            { dish: "affogato (vanilla ice cream with espresso)", price: "€ 7.50" },
            { dish: "vanilla ice cream with advocaat or chocolate sauce", price: "€ 9.50" },
            { dish: "crème brûlée", price: "€ 9.50" },
            { dish: "cheese board*", price: "€ 12.50" }
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
