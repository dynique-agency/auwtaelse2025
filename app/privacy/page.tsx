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
        <p className={styles.subtitle}>Laatst bijgewerkt: Januari 2026</p>

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
          <p className={styles.text}>
            <strong>Grondslag verwerking (Art. 6 AVG):</strong> De verwerking van uw persoonsgegevens is noodzakelijk 
            voor de uitvoering van de overeenkomst (reservering) tussen u en Auwt Aelse.
          </p>
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
          <h2 className={styles.heading}>8. Uw rechten onder de AVG</h2>
          <p className={styles.text}>
            U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
          </p>
          <ul className={styles.list}>
            <li><strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
            <li><strong>Recht op rectificatie:</strong> U kunt vragen om correctie van onjuiste gegevens</li>
            <li><strong>Recht op verwijdering:</strong> U kunt vragen om verwijdering van uw gegevens</li>
            <li><strong>Recht op beperking:</strong> U kunt vragen om beperking van de verwerking</li>
            <li><strong>Recht op bezwaar:</strong> U kunt bezwaar maken tegen de verwerking</li>
            <li><strong>Recht op dataportabiliteit:</strong> U kunt uw gegevens in een gestructureerd formaat opvragen</li>
            <li><strong>Recht om toestemming in te trekken:</strong> Als verwerking op toestemming is gebaseerd</li>
          </ul>
          <p className={styles.text}>
            Om deze rechten uit te oefenen, kunt u contact opnemen via <a href="mailto:info@auwtaelse.nl" className={styles.externalLink}>info@auwtaelse.nl</a>. 
            Wij reageren binnen 1 maand op uw verzoek.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>9. Klacht indienen</h2>
          <p className={styles.text}>
            Als u vindt dat Auwt Aelse niet goed omgaat met uw persoonsgegevens, kunt u contact met ons opnemen. 
            U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP).
          </p>
          <p className={styles.text}>
            <strong>Autoriteit Persoonsgegevens</strong><br />
            Postbus 93374<br />
            2509 AJ Den Haag<br />
            Telefoon: <a href="tel:0882001500" className={styles.externalLink}>088 200 1500</a><br />
            Website: <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>autoriteitpersoonsgegevens.nl</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>10. Beveiliging</h2>
          <p className={styles.text}>
            Auwt Aelse neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, 
            verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
          </p>
          <p className={styles.text}>
            <strong>Beveiligingsmaatregelen:</strong>
          </p>
          <ul className={styles.list}>
            <li>HTTPS versleuteling voor alle communicatie</li>
            <li>Veilige opslag van reserveringsgegevens</li>
            <li>Toegangsbeperking tot persoonsgegevens</li>
            <li>Regelmatige security updates</li>
          </ul>
        </section>

        <div className={styles.backLink}>
          <a href="/">← Terug naar home</a>
        </div>
      </div>
    </main>
  )
}




