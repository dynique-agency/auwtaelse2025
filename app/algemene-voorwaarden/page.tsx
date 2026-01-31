import styles from '../privacy/legal.module.css'

export const metadata = {
  title: 'Algemene Voorwaarden - Auwt Aelse',
  description: 'Algemene voorwaarden van Bistro Auwt Aelse',
}

export default function Terms() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Algemene Voorwaarden</h1>
        <p className={styles.subtitle}>Laatst bijgewerkt: Januari 2026</p>

        <section className={styles.section}>
          <h2 className={styles.heading}>1. Algemeen</h2>
          <p className={styles.text}>
            Deze algemene voorwaarden zijn van toepassing op alle reserveringen en bestellingen bij Auwt Aelse, 
            gevestigd aan Dorpstraat 6, 6181 GX Elsloo.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. Reserveringen</h2>
          <p className={styles.text}>
            Reserveringen kunnen telefonisch of per e-mail worden gemaakt. Een reservering is definitief na 
            bevestiging door Auwt Aelse.
          </p>
          <p className={styles.text}>
            Bij annulering van een reservering verzoeken wij u dit minimaal 24 uur van tevoren door te geven. 
            Bij annulering op de dag zelf of bij niet verschijnen (no-show) behouden wij ons het recht voor om 
            kosten in rekening te brengen.
          </p>
          <p className={styles.text}>
            <strong>No-show beleid:</strong> Bij niet verschijnen zonder afmelding kunnen wij kosten in rekening brengen 
            tot maximaal €25,- per persoon voor groepsreserveringen (8+ personen). Voor reguliere reserveringen behouden 
            wij ons het recht voor om u uit te sluiten van toekomstige reserveringen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. Openingstijden</h2>
          <p className={styles.text}>
            Auwt Aelse is geopend van donderdag tot en met zondag vanaf 17.30 uur. De keuken sluit om 21.00 uur 
            voor laatste bestellingen. Voor groepen kunnen andere tijden worden afgesproken.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. Prijzen en betaling</h2>
          <p className={styles.text}>
            Alle prijzen op de menukaart zijn in euro's en inclusief BTW. Betaling kan contant of per pin. 
            Creditcards worden geaccepteerd.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. Groepen en feesten</h2>
          <p className={styles.text}>
            Voor groepen vanaf 8 personen vragen wij u contact met ons op te nemen voor een aangepast 
            arrangement. Voor groepen tot 60 personen verzorgen wij feestjes, borrels en koffietafels.
          </p>
          <p className={styles.text}>
            Bij groepsreserveringen kan een aanbetaling worden gevraagd. Wijzigingen in het aantal personen 
            dienen minimaal 48 uur van tevoren te worden doorgegeven.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. Allergenen en dieetwensen</h2>
          <p className={styles.text}>
            Wij doen ons uiterste best om rekening te houden met allergieën en dieetwensen. Geef dit bij uw 
            reservering door. Hoewel wij zorgvuldig te werk gaan, kunnen wij niet garanderen dat onze gerechten 
            volledig vrij zijn van allergenen door mogelijke kruisbesmetting in de keuken.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. Cadeaubonnen</h2>
          <p className={styles.text}>
            Auwt Aelse verkoopt eigen cadeaubonnen. Deze zijn geldig voor 1 jaar na aankoopdatum. Externe 
            cadeaukaarten worden niet geaccepteerd. Cadeaubonnen zijn niet inwisselbaar voor contant geld.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>8. Aansprakelijkheid</h2>
          <p className={styles.text}>
            Auwt Aelse is niet aansprakelijk voor schade aan of verlies van eigendommen van gasten, behalve in 
            geval van opzet of grove schuld van Auwt Aelse.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>9. Gedragsregels</h2>
          <p className={styles.text}>
            Wij behouden ons het recht voor om gasten de toegang te weigeren of te verwijderen bij ongepast 
            gedrag, zonder restitutie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>10. Klachten</h2>
          <p className={styles.text}>
            Mocht u onverhoopt niet tevreden zijn over onze dienstverlening, dan horen wij dit graag zo spoedig mogelijk. 
            U kunt uw klacht kenbaar maken bij ons personeel of per e-mail naar <a href="mailto:info@auwtaelse.nl" className={styles.externalLink}>info@auwtaelse.nl</a>.
          </p>
          <p className={styles.text}>
            Wij streven ernaar om klachten binnen 14 dagen af te handelen. Mocht u niet tevreden zijn met onze afhandeling, 
            dan kunt u zich wenden tot de Geschillencommissie Horeca, onderdeel van de Stichting Geschillencommissies 
            voor Consumentenzaken (SGC).
          </p>
          <p className={styles.text}>
            <strong>Geschillencommissie Horeca</strong><br />
            Postbus 90600<br />
            2509 LP Den Haag<br />
            Website: <a href="https://www.degeschillencommissie.nl" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>www.degeschillencommissie.nl</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>11. Wijzigingen</h2>
          <p className={styles.text}>
            Auwt Aelse behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. De meest recente 
            versie is altijd te vinden op onze website. Wijzigingen worden van kracht op het moment van publicatie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>12. Toepasselijk recht</h2>
          <p className={styles.text}>
            Op deze algemene voorwaarden is Nederlands recht van toepassing. Geschillen zullen in eerste instantie 
            worden voorgelegd aan de Geschillencommissie Horeca. Indien dit niet tot een oplossing leidt, zijn de 
            geschillen onderworpen aan de bevoegde rechter in het arrondissement Limburg.
          </p>
        </section>

        <div className={styles.backLink}>
          <a href="/">← Terug naar home</a>
        </div>
      </div>
    </main>
  )
}




