'use client'

import { useEffect, useRef, useState } from 'react'
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
          <svg 
            className={styles.menuIcon} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Elegant soup bowl with steam */}
            <path d="M20 12.5c-.6 0-1-.4-1-1s.4-1 1-1h1v-1c0-1.5-1-3-2.5-3.5"/>
            <path d="M3.5 6C2 6.5 1 8 1 9.5v1h1c.6 0 1 .4 1 1s-.4 1-1 1"/>
            <path d="M5 19h14c1.1 0 2-.9 2-2v-4c0-2.8-2.2-5-5-5H8C5.2 8 3 10.2 3 13v4c0 1.1.9 2 2 2z"/>
            <path d="M8 5c.5-.8.5-1.5.5-2"/>
            <path d="M12 5c.5-.8.5-1.5.5-2"/>
            <path d="M16 5c.5-.8.5-1.5.5-2"/>
          </svg>
        )
      case 'main':
        return (
          <svg 
            className={styles.menuIcon} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Restaurant cloche (dome) */}
            <path d="M5 12h14"/>
            <path d="M12 12V7"/>
            <path d="M8 7.5c0-1.5 1-2.5 2-3"/>
            <path d="M16 7.5c0-1.5-1-2.5-2-3"/>
            <ellipse cx="12" cy="12" rx="9" ry="5"/>
            <path d="M3 12v1c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1"/>
            <rect x="6" y="15" width="12" height="2" rx="1"/>
          </svg>
        )
      case 'dessert':
        return (
          <svg 
            className={styles.menuIcon} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Elegant ice cream/dessert coupe */}
            <path d="M12 3c3.5 0 6 2 6 4.5 0 1.5-1 2.5-2 3.5-1 1-1.5 2-1.5 3.5v1"/>
            <path d="M12 3c-3.5 0-6 2-6 4.5 0 1.5 1 2.5 2 3.5 1 1 1.5 2 1.5 3.5v1"/>
            <path d="M9.5 15.5h5"/>
            <circle cx="12" cy="5.5" r="0.5" fill="currentColor"/>
            <path d="M8 15.5c0 2.2 1.8 4 4 4s4-1.8 4-4"/>
            <path d="M10 19.5c0 1.1.9 2 2 2s2-.9 2-2"/>
            <line x1="12" y1="19.5" x2="12" y2="21"/>
          </svg>
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
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>
        
        <div className={styles.menuContainer}>
          {content.categories.map((category, index) => (
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
      </div>
    </section>
  )
}

