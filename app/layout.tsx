import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auwt Aelse - Bistro in Elsloo | Franse Keuken & Méditerranée',
  description: 'Bistro Auwt Aelse in Elsloo. Geniet van verfijnde Franse gerechten met een mediterrane twist. Reserveer nu! Donderdag t/m zondag vanaf 17.30u.',
  keywords: ['bistro', 'restaurant', 'Elsloo', 'Franse keuken', 'méditerranée', 'fine dining', 'Auwt Aelse'],
  authors: [{ name: 'Auwt Aelse' }],
  openGraph: {
    title: 'Auwt Aelse - Bistro in Elsloo',
    description: 'Bistro Auwt Aelse - Een mix van moeders keuken en de méditerranée',
    url: 'https://auwtaelse.nl',
    siteName: 'Auwt Aelse',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Auwt Aelse",
    "legalName": "V.O.F. Brasserie Auwt Aelse",
    "description": "Bistro Auwt Aelse - Een mix van moeders keuken en de méditerranée. Verfijnde Franse gerechten in een intieme setting.",
    "image": "https://auwtaelse.nl/frontofrestaurant.png",
    "taxID": "NL70182151B01",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dorpstraat 6",
      "addressLocality": "Elsloo",
      "postalCode": "6181 GX",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.9547,
      "longitude": 5.7739
    },
    "telephone": "+31464377442",
    "email": "info@auwtaelse.nl",
    "url": "https://auwtaelse.nl",
    "servesCuisine": ["French", "Mediterranean", "European"],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "17:30",
        "closes": "21:00"
      }
    ],
    "acceptsReservations": "True",
    "menu": "https://auwtaelse.nl#menu",
    "foundingDate": "2025",
    "founder": [
      {
        "@type": "Person",
        "name": "Ron"
      },
      {
        "@type": "Person",
        "name": "Karin"
      }
    ],
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "EUR",
    "smokingAllowed": false,
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Dorpstraat+6,+6181+GX+Elsloo",
    "sameAs": [
      "https://www.instagram.com/auwtaelse",
      "https://www.facebook.com/p/Auwt-Aelse-61572373615918/"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "tel:+31464377442",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Reservering bij Auwt Aelse"
      }
    }
  }

  return (
    <html lang="nl">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" 
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/img1.png" />
        <link rel="preload" as="image" href="/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

