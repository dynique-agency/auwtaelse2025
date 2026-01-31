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
      subtitle: 'Nos Spécialités',
      allergenenDisclaimer: 'Voor allergenen en dieetwensen kunt u contact met ons opnemen. Wij doen ons best rekening te houden met uw wensen, maar kunnen kruisbesmetting in de keuken niet volledig uitsluiten.',
      categories: [
        {
          id: 'voorgerechten',
          name: 'Voorgerechten',
          french: 'Les Entrées',
          description: '',
          icon: 'soup',
          items: [
            { gerecht: "Champignonsoep met een vleugje truffel", prijs: "€9,50" },
            { gerecht: "Unnesop gegratineerd", prijs: "€9,50" },
            { gerecht: "Champignons à l'escargot", prijs: "€9,50" },
            { gerecht: "Camembert au four", prijs: "€11,50" },
            { gerecht: "Truffeltraktatie", prijs: "€12,50" },
            { gerecht: "Combi van Caprese", prijs: "€12,50" },
            { gerecht: "Garnaaltjes in knoflookboter", prijs: "€10,50" },
            { gerecht: "Sardinefilets uit de oven", prijs: "€11,50" },
            { gerecht: "Gambakroketjes met kleine salade", prijs: "€11,50" },
            { gerecht: "Cuisses de grenouille", prijs: "€12,50" },
            { gerecht: "Carpaccio van rund", prijs: "€12,50" },
            { gerecht: "Trio van wild", prijs: "€15,50" }
          ]
        },
        {
          id: 'hoofdgerechten',
          name: 'Hoofdgerechten',
          french: 'Les Plats Principaux',
          description: 'Gerechten worden geserveerd met verse groenten van het seizoen en aardappelen naar keuze',
          icon: 'main',
          items: [
            { gerecht: "Ravioli (wisselend assortiment)", prijs: "€19,50" },
            { gerecht: "Vispannetje met kreeftsaus", prijs: "€19,50" },
            { gerecht: "Schnitzel met champignonroomsaus (ook vega mogelijk)", prijs: "€19,50" },
            { gerecht: "Spareribs à la Harrie", prijs: "€20,75" },
            { gerecht: "Biefstuk (180gr) met rode wijn- of pepersaus", prijs: "€21,50" },
            { gerecht: "Wildstoof van ree", prijs: "€21,50" },
            { gerecht: "Terre & Mer (biefstuk & garnaaltjes)", prijs: "€23,50" },
            { gerecht: "Hertenbief (180gr) met rode wijnsaus", prijs: "€26,50" }
          ]
        },
        {
          id: 'desserts',
          name: 'Desserts',
          french: 'Pour les becs sucrés',
          description: '',
          icon: 'dessert',
          items: [
            { gerecht: "Koffie/thee compleet met lekkers en likeurtje", prijs: "€8,00" },
            { gerecht: "Vanille-ijs met advocaat of chocolade-saus", prijs: "€9,50" },
            { gerecht: "Crème brûlée", prijs: "€9,50" },
            { gerecht: "Coupe Werm Keesje", prijs: "€11,50" },
            { gerecht: "Kaasplankje", prijs: "€12,50" }
          ]
        }
      ]
    },
    en: {
      title: 'Menu',
      subtitle: 'Nos Spécialités',
      allergenenDisclaimer: 'For allergens and dietary requirements, please contact us. We do our best to accommodate your needs, but cannot completely exclude cross-contamination in the kitchen.',
      categories: [
        {
          id: 'starters',
          name: 'Starters',
          french: 'Les Entrées',
          description: '',
          icon: 'soup',
          items: [
            { dish: "Mushroom soup with a touch of truffle", price: "€9,50" },
            { dish: "Onion soup au gratin", price: "€9,50" },
            { dish: "Mushrooms prepared escargot-style", price: "€9,50" },
            { dish: "Baked Camembert", price: "€11,50" },
            { dish: "Truffle treat", price: "€12,50" },
            { dish: "Caprese combination", price: "€12,50" },
            { dish: "Small shrimps in garlic butter", price: "€10,50" },
            { dish: "Oven-baked sardine fillets", price: "€11,50" },
            { dish: "Prawn croquettes with a small salad", price: "€11,50" },
            { dish: "Frog legs (Cuisses de grenouille)", price: "€12,50" },
            { dish: "Beef carpaccio", price: "€12,50" },
            { dish: "Trio of game", price: "€15,50" }
          ]
        },
        {
          id: 'main_courses',
          name: 'Main Courses',
          french: 'Les Plats Principaux',
          description: 'Served with fresh seasonal vegetables and potatoes of your choice',
          icon: 'main',
          items: [
            { dish: "Ravioli (varying assortment)", price: "€19,50" },
            { dish: "Fish casserole with lobster sauce", price: "€19,50" },
            { dish: "Schnitzel with mushroom cream sauce (vegetarian option available)", price: "€19,50" },
            { dish: "Spareribs à la Harrie", price: "€20,75" },
            { dish: "Steak (180g) with red wine or pepper sauce", price: "€21,50" },
            { dish: "Venison stew (Roe deer)", price: "€21,50" },
            { dish: "Surf & Turf (steak & small shrimps)", price: "€23,50" },
            { dish: "Venison steak (180g) with red wine sauce", price: "€26,50" }
          ]
        },
        {
          id: 'desserts',
          name: 'Desserts',
          french: 'Pour les becs sucrés',
          description: '',
          icon: 'dessert',
          items: [
            { dish: "Coffee/tea complete with sweets and a liqueur", price: "€8,00" },
            { dish: "Vanilla ice cream with eggnog (advocaat) or chocolate sauce", price: "€9,50" },
            { dish: "Crème brûlée", price: "€9,50" },
            { dish: "Coupe 'Werm Keesje' (Hot Cherries)", price: "€11,50" },
            { dish: "Cheese platter", price: "€12,50" }
          ]
        }
      ]
    }
  }

  const content = menuData[language]

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
          />
        )
      default:
        return null
    }
  }

  const currentContent = menuData[language]

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
                  <span className={styles.icon}>{getIcon(category.icon)}</span>
                  <div className={styles.categoryNames}>
                    <span className={styles.categoryName}>{category.name}</span>
                    <span className={styles.categoryFrench}>{category.french}</span>
                  </div>
                </div>
                <span className={styles.arrow}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 7.5l5 5 5-5"/>
                  </svg>
                </span>
              </button>
              
              <div 
                id={`menu-${category.id}`}
                className={`${styles.categoryContent} ${openCategory === category.id ? styles.expanded : ''}`}
                role="region"
                aria-labelledby={`header-${category.id}`}
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

