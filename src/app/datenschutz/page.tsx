import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von WissensKern gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-ink dark:text-white">
          Datenschutzerklärung
        </h1>
        <p className="mt-2 text-sm text-muted">Stand: Juli 2026</p>

        <div className="prose-content mt-10 space-y-10 text-sm leading-relaxed text-muted [&_h2]:mt-0 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink dark:[&_h2]:text-white [&_h3]:font-semibold [&_h3]:text-ink dark:[&_h3]:text-white [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
          <div>
            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              {siteConfig.company.legalName}
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ und Ort]
              <br />
              Deutschland
              <br />
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.company.contactEmail}`} className="text-accent-strong underline underline-offset-2">
                {siteConfig.company.contactEmail}
              </a>
            </p>
            <p>
              Weitere Angaben zum Verantwortlichen finden Sie in unserem{" "}
              <a href="/impressum" className="text-accent-strong underline underline-offset-2">
                Impressum
              </a>
              .
            </p>
          </div>

          <div>
            <h2>2. Grundsätze der Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
              Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
              regelmäßig nur mit Einwilligung der Nutzer oder auf Grundlage einer anderen
              gesetzlichen Erlaubnis nach Art. 6 Abs. 1 DSGVO, insbesondere zur Erfüllung
              vertraglicher oder vorvertraglicher Pflichten (lit. b) sowie auf Grundlage
              berechtigter Interessen (lit. f).
            </p>
          </div>

          <div>
            <h2>3. Hosting und Bereitstellung der Website (Server-Logfiles)</h2>
            <p>
              Beim Aufruf dieser Website erhebt der von uns eingesetzte Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser
              automatisch übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (ggf. gekürzt/anonymisiert)</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser
              Daten mit anderen Datenquellen findet nicht statt. Die Erhebung dieser Daten
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der
              Optimierung seiner Website. Hosting erfolgt ausschließlich auf Servern in
              Deutschland bzw. der Europäischen Union.
            </p>
          </div>

          <div>
            <h2>4. Keine Nutzung von Analyse- oder Tracking-Cookies</h2>
            <p>
              Diese Website verzichtet bewusst auf den Einsatz von Analyse-Tools,
              Werbe-Trackern und nicht technisch notwendigen Cookies Dritter. Es findet keine
              Erstellung von Nutzerprofilen und kein Tracking über mehrere Websites hinweg
              statt. Sollte sich dies zukünftig ändern, werden wir Sie vorab um Ihre
              ausdrückliche Einwilligung bitten und diese Erklärung entsprechend anpassen.
            </p>
          </div>

          <div>
            <h2>5. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Formular – Name, Unternehmen, E-Mail-Adresse, optional Telefonnummer
              und Unternehmensgröße sowie Ihre Nachricht – inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der Bearbeitung
              Ihrer Anfrage (Art. 6 Abs. 1 lit. f DSGVO) sowie, sofern angefragt, auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p>
              Die über das Kontaktformular übermittelten Daten werden per E-Mail an unser
              Postfach zugestellt. Der Versand erfolgt über einen Mailserver, den wir bzw. unser
              Hosting-Auftragsverarbeiter betreibt. Die Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>
            <p>
              Zum Schutz vor missbräuchlicher automatisierter Nutzung des Formulars (Spam) setzen
              wir ein verstecktes Formularfeld (sogenanntes „Honeypot&quot;) sowie eine technische
              Begrenzung der Anzahl an Anfragen pro Absender-IP-Adresse in einem kurzen Zeitraum
              ein. Hierbei werden keine zusätzlichen personenbezogenen Daten dauerhaft
              gespeichert.
            </p>
          </div>

          <div>
            <h2>6. Empfänger und Auftragsverarbeitung</h2>
            <p>
              Für den Betrieb dieser Website und den Versand von E-Mails setzen wir
              gegebenenfalls technische Dienstleister (z. B. Hosting- und
              E-Mail-Infrastrukturanbieter) ein, die in unserem Auftrag und ausschließlich nach
              unserer Weisung tätig werden. Mit diesen Dienstleistern schließen wir, soweit
              erforderlich, Verträge zur Auftragsverarbeitung gemäß Art. 28 DSGVO ab. Eine
              Übermittlung Ihrer Daten in Länder außerhalb der EU/des EWR findet im Rahmen des
              Betriebs dieser Website nicht statt.
            </p>
          </div>

          <div>
            <h2>7. Hinweis zum Produkt WissensKern</h2>
            <p>
              Diese Datenschutzerklärung betrifft ausschließlich den Betrieb dieser Website
              (wissenskern.ai). Setzen Sie das Produkt WissensKern in Ihrem eigenen Unternehmen
              ein, sind Sie als Kunde grundsätzlich selbst datenschutzrechtlich Verantwortlicher
              für die durch Sie in das System eingebrachten Unternehmensdaten. Im Rahmen einer
              Beauftragung schließen wir mit Ihnen einen gesonderten Auftragsverarbeitungsvertrag
              gemäß Art. 28 DSGVO für die Einrichtungs- und ggf. Betriebsleistungen ab, die wir
              als JULITH GmbH für Sie erbringen.
            </p>
          </div>

          <div>
            <h2>8. Ihre Rechte als betroffene Person</h2>
            <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
            <ul>
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben unter Ziffer 1
              genannten Kontaktdaten.
            </p>
          </div>

          <div>
            <h2>9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>
              Sie haben unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
              Rechtsbehelfe das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde,
              insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder
              des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
          </div>

          <div>
            <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung wird bei Bedarf angepasst, um sie an geänderte
              Rechtslagen oder bei Änderungen des Angebots bzw. der Datenverarbeitung anzupassen.
              Es gilt jeweils die zuletzt veröffentlichte Fassung.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
