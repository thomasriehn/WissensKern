import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von WissensKern, ein Produkt der JULITH GmbH.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

/**
 * Platzhalter unten (in eckigen Klammern) enthalten reale, prüfungspflichtige
 * Angaben (Anschrift, Geschäftsführung, Registerdaten, USt-IdNr.) und müssen vor
 * Veröffentlichung durch die tatsächlichen Angaben der JULITH GmbH ersetzt werden.
 * Ein unvollständiges Impressum kann abgemahnt werden.
 */
export default function ImpressumPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-white">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">
              Angaben gemäß § 5 DDG (vormals § 5 TMG)
            </h2>
            <p className="mt-3">
              {siteConfig.company.legalName}
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ und Ort]
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Vertreten durch</h2>
            <p className="mt-3">Geschäftsführung: [Vor- und Nachname der Geschäftsführung]</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Kontakt</h2>
            <p className="mt-3">
              Telefon: [Telefonnummer]
              <br />
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.company.contactEmail}`} className="text-accent-strong underline underline-offset-2">
                {siteConfig.company.contactEmail}
              </a>
              <br />
              Website:{" "}
              <a
                href={siteConfig.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-strong underline underline-offset-2"
              >
                {siteConfig.company.url}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Registereintrag</h2>
            <p className="mt-3">
              Eintragung im Handelsregister
              <br />
              Registergericht: [Registergericht, z. B. Amtsgericht ...]
              <br />
              Registernummer: [HRB-Nummer]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Umsatzsteuer-ID</h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              [USt-IdNr.]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              [Vor- und Nachname]
              <br />
              [Anschrift wie oben]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Haftung für Inhalte</h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Haftung für Links</h2>
            <p className="mt-3">
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
              auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-white">Hinweis zum Angebot</h2>
            <p className="mt-3">
              WissensKern ({siteConfig.url}) ist ein Produkt der {siteConfig.company.legalName}{" "}
              und richtet sich an Unternehmenskunden (B2B). Es liegt kein Verbraucherangebot im
              Sinne der Verbraucherstreitbeilegung vor.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
