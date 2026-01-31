import styles from '../privacy/legal.module.css'

export const metadata = {
  title: 'Cookiebeleid - Auwt Aelse',
  description: 'Cookiebeleid van Bistro Auwt Aelse',
}

export default function CookiePolicy() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cookiebeleid</h1>
        <p className={styles.subtitle}>Laatst bijgewerkt: Januari 2026</p>

        <section className={styles.section}>
          <h2 className={styles.heading}>1. Wat zijn cookies?</h2>
          <p className={styles.text}>
            Een cookie is een klein tekstbestand dat bij het bezoeken van een website op uw computer, tablet of 
            smartphone wordt geplaatst. Cookies helpen websites om uw voorkeuren te onthouden en maken een betere 
            gebruikservaring mogelijk.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. Welke cookies gebruiken wij?</h2>
          <p className={styles.text}>
            Auwt Aelse gebruikt alleen <strong>essentiële cookies</strong> die strikt noodzakelijk zijn voor de 
            technische werking van onze website.
          </p>

          <h3 className={styles.subheading}>Functionele/Essentiële Cookies</h3>
          <ul className={styles.list}>
            <li>
              <strong>cookieConsent</strong> - Slaat uw cookie voorkeur op
              <br />
              <span className={styles.cookieDetail}>Bewaartermijn: 1 jaar | Type: Functioneel | Partij: Auwt Aelse</span>
            </li>
            <li>
              <strong>languagePreference</strong> - Onthoudt uw taalkeuze (NL/EN)
              <br />
              <span className={styles.cookieDetail}>Bewaartermijn: 30 dagen | Type: Functioneel | Partij: Auwt Aelse</span>
            </li>
          </ul>

          <p className={styles.text}>
            <em>Wij gebruiken GEEN tracking, analytische of marketing cookies.</em>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. Derde partijen</h2>
          <p className={styles.text}>
            Deze website maakt gebruik van de volgende externe diensten die mogelijk cookies kunnen plaatsen:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Google Fonts</strong> - Voor het laden van lettertypen
              <br />
              <span className={styles.cookieDetail}>Deze dienst kan technische cookies plaatsen. Zie <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>Google Privacy Policy</a></span>
            </li>
          </ul>
          <p className={styles.text}>
            Wij hebben geen controle over cookies van derde partijen. Raadpleeg hun privacybeleid voor meer informatie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. Doel van cookies</h2>
          <p className={styles.text}>
            Onze cookies worden gebruikt voor:
          </p>
          <ul className={styles.list}>
            <li>Het technisch functioneren van de website</li>
            <li>Het onthouden van uw taalkeuze</li>
            <li>Het onthouden van uw cookie voorkeuren</li>
            <li>Het verbeteren van de gebruikservaring</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. Cookies beheren en verwijderen</h2>
          <p className={styles.text}>
            U kunt cookies op elk moment verwijderen via uw browser instellingen. Houd er rekening mee dat het 
            verwijderen van cookies invloed kan hebben op de functionaliteit van onze website.
          </p>

          <h3 className={styles.subheading}>Cookies verwijderen per browser:</h3>
          <ul className={styles.list}>
            <li>
              <strong>Google Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens → Alle sitegegevens en -machtigingen bekijken → Zoek auwtaelse.nl → Verwijderen
            </li>
            <li>
              <strong>Safari:</strong> Voorkeuren → Privacy → Websitegegevens beheren → Zoek auwtaelse.nl → Verwijder
            </li>
            <li>
              <strong>Firefox:</strong> Opties → Privacy & Beveiliging → Cookies en Sitegegevens → Gegevens beheren → Zoek auwtaelse.nl → Verwijder geselecteerde
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Instellingen → Cookies en sitemachtigingen → Cookies en opgeslagen gegevens → Alle cookies en sitegegevens bekijken → Zoek auwtaelse.nl → Verwijderen
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. Cookies blokkeren</h2>
          <p className={styles.text}>
            U kunt uw browser zo instellen dat cookies worden geblokkeerd. Houd er rekening mee dat onze website 
            mogelijk niet goed functioneert zonder cookies.
          </p>
          <p className={styles.text}>
            Meer informatie over het beheren van cookies vindt u op: 
            <a href="https://www.voorlichtingsbureauvoedsel.nl/cookies" target="_blank" rel="noopener noreferrer" className={styles.externalLink}> www.voorlichtingsbureauvoedsel.nl/cookies</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. Uw rechten</h2>
          <p className={styles.text}>
            U heeft te allen tijde het recht om:
          </p>
          <ul className={styles.list}>
            <li>Uw cookie voorkeuren te wijzigen</li>
            <li>Cookies te verwijderen</li>
            <li>Cookies te blokkeren</li>
            <li>Vragen te stellen over ons cookiegebruik</li>
          </ul>
          <p className={styles.text}>
            Voor vragen over cookies kunt u contact opnemen via: <a href="mailto:info@auwtaelse.nl" className={styles.externalLink}>info@auwtaelse.nl</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>8. Wijzigingen in dit cookiebeleid</h2>
          <p className={styles.text}>
            Wij behouden ons het recht voor om wijzigingen aan te brengen in dit cookiebeleid. De meest recente versie 
            is altijd te vinden op deze pagina.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>9. Contact</h2>
          <p className={styles.text}>
            Voor vragen over dit cookiebeleid kunt u contact opnemen met:
          </p>
          <p className={styles.text}>
            <strong>Auwt Aelse</strong><br />
            Dorpstraat 6<br />
            6181 GX Elsloo<br />
            <a href="tel:0464377442" className={styles.externalLink}>046 437 7442</a> / <a href="tel:0612176780" className={styles.externalLink}>06 1217 6780</a><br />
            <a href="mailto:info@auwtaelse.nl" className={styles.externalLink}>info@auwtaelse.nl</a>
          </p>
        </section>

        <div className={styles.backLink}>
          <a href="/">← Terug naar home</a>
        </div>
      </div>
    </main>
  )
}
