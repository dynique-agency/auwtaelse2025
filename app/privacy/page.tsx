import styles from './legal.module.css'

export const metadata = {
  title: 'Privacyverklaring - Auwt Aelse',
  description: 'Privacyverklaring van Bistro Auwt Aelse',
}

export default function Privacy() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacyverklaring</h1>
        <p className={styles.subtitle}>Laatst bijgewerkt: November 2025</p>

        <section className={styles.section}>
          <h2 className={styles.heading}>1. Algemeen</h2>
          <p className={styles.text}>
            Auwt Aelse, gevestigd aan Dorpstraat 6, 6181 GX Elsloo, is verantwoordelijk voor de verwerking van 
            persoonsgegevens zoals weergegeven in deze privacyverklaring.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. Contactgegevens</h2>
          <p className={styles.text}>
            Auwt Aelse<br />
            Dorpstraat 6<br />
            6181 GX Elsloo<br />
            Telefoon: 046 437 7442 / 06 1217 6780<br />
            E-mail: info@auwtaelse.nl
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. Persoonsgegevens die wij verwerken</h2>
          <p className={styles.text}>
            Auwt Aelse verwerkt persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf 
            aan ons verstrekt. Dit kunnen de volgende gegevens zijn:
          </p>
          <ul className={styles.list}>
            <li>Voor- en achternaam</li>
            <li>Telefoonnummer</li>
            <li>E-mailadres</li>
            <li>Reserveringsgegevens (datum, tijd, aantal personen)</li>
            <li>Eventuele dieetwensen of allergieinformatie</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. Waarom wij gegevens nodig hebben</h2>
          <p className={styles.text}>
            Auwt Aelse verwerkt uw persoonsgegevens voor de volgende doelen:
          </p>
          <ul className={styles.list}>
            <li>Het afhandelen van uw reservering</li>
            <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
            <li>U te informeren over wijzigingen van onze diensten</li>
            <li>Om u de mogelijkheid te bieden een account aan te maken indien van toepassing</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. Hoe lang we gegevens bewaren</h2>
          <p className={styles.text}>
            Auwt Aelse bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren 
            waarvoor uw gegevens worden verzameld. Reserveringsgegevens worden bewaard voor de duur van de 
            reservering en maximaal 1 jaar daarna voor statistische doeleinden.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. Delen met anderen</h2>
          <p className={styles.text}>
            Auwt Aelse verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is 
            voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. Cookies</h2>
          <p className={styles.text}>
            Auwt Aelse gebruikt alleen technische en functionele cookies die geen inbreuk maken op uw privacy. 
            Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op 
            uw computer, tablet of smartphone. Deze cookies zijn noodzakelijk voor de technische werking van de 
            website en uw gebruiksgemak.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>8. Gegevens inzien, aanpassen of verwijderen</h2>
          <p className={styles.text}>
            U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft 
            u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken 
            tegen de verwerking van uw persoonsgegevens door Auwt Aelse en heeft u het recht op gegevensoverdraagbaarheid.
          </p>
          <p className={styles.text}>
            U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of 
            verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen 
            naar info@auwtaelse.nl.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>9. Beveiliging</h2>
          <p className={styles.text}>
            Auwt Aelse neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, 
            verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
          </p>
        </section>

        <div className={styles.backLink}>
          <a href="/">← Terug naar home</a>
        </div>
      </div>
    </main>
  )
}




