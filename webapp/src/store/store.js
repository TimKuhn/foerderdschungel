import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activePage: "",
        selections: [],
        activeLevel: 0,
        allQuestionsAnswered: false,
        formFillerIsActive: false,
        questionTopics: {
            0: "Fördergrund",
            1: "Tätigkeitsgebiet",
            2: "Einkunftsart",
            3: "Rechtsform",
            4: "Rechtsform 2",
            5: "Branche",
            6: "Unternehmensgröße",
            7: "Mitarbeiter",
            8: "Kurzarbeitergeld - arbeitsausfall",
            9: "Kurzarbeitergeld - unvermeidbarer Arbeitsausfall",
            10: "Umsatz",
            11: "Bestehensdauer",
            12: "Förderart",
            13: "Förderzweck",
            14: "Darlehenshöhe",
            15: "Risikominderung",
            16: "Vertragslaufzeit",
            17: "Herabsetzung der Vorauszahlungen",
            18: "Ausschlussgrund 1",
            19: "Ausschlussgrund 2",
            20: "Ausschlussgrund 3",
            21: "Ausschlussgrund 4",
            22: "Ausschlussgrund 5",
            23: "Ausschlussgrund 6",
            24: "Ausschlussgrund 7",
        },
        questionDescription: {
            0:"Warum benötigen Sie eine Förderung?",
            1:"In welchem Bundesland liegt ihre Betriebs- bzw. Arbeitsstätte?",
            2:"Wie erzielen Sie Ihre Einkünfte",
            3:"In welcher Rechtsform üben Sie die gewerbliche Tätigkeit aus?",
            4:"In welcher Rechtsform wird Ihr Unternehmen geführt?",
            5:"In welcher Branche sind Sie überwiegend tätig?",
            6:"In welche Kategorie bezüglich der Unternehmensgröße fällt ihr Unternehmen?",
            7:"Wieviele Mitarbeiter beschäftigen Sie (ohne Auszubildende) in versicherungspflichtigen (ungekündigten) Beschäftigungen?",
            8:"Haben mindestens 10% Ihrer Beschäftigten einen Arbeitsgeldausfall von mehr als 10% im Betrieb oder in der betreffenden Betriebsabteilung im jeweiligen Kalendermonat?",
            9:"Sind Überstunden- und Arbeitszeitkonten bereits abgebaut, der Einsatz der Arbeitnehmer in einem anderen Bereich nicht möglich und alle wirtschaftlich zumutbaren Gegenleistungen (z.B. Arbeiten auf Lager, Aufräum- oder Instandsetzungsarbeiten) bereits erfolgt?",
            10:"Wie hoch war ihr Umsatz im letzten Geschäftsjahr?",
            11:"Wie lange besteht ihr Betrieb?",
            12:"Welche Art von Förderung möchten Sie in Anspruch nehmen?",
            13:"Zu welchem Zweck bzw. für welches Vorhaben beabsichtigen Sie die Förderung zu verwenden?",
            14:"Welchen maximalen Darlehensbetrag möchten Sie in Anspruch nehmen?",
            15:"Möchten Sie zusätzlich eine Risikoentlastung oder Haftungsfreistellung in Anspruch nehmen?",
            16:"Wie lange soll die Laufzeit der Förderung sein?",
            17:"Sind Sie von der Corona-Krise unmittelbar und nicht unerheblich betroffen und leisten Körperschaftsteuer- und Gewerbesteuervorauszahlungen?",
            18:"Ist an Ihrem Unternehmen die öffentliche Hand beteiligt?",
            19:"Befindet sich Ihr Unternehmen im Insolvenzverfahren oder sind die Kriterien hierfür erfüllt?",
            20:"Ist Ihr Vorhaben bereits durch Eigenmittel oder langfristige Fremdmittel finanziert?",
            21:"Beläuft sich Ihre Bonitätseinstufung (Einjahres-Ausfallwahrscheinlichkeit) auf über 10 %?",
            22:"Besteht ein Liquiditätsengpass?",
            23:"Trifft einer der folgenden Umstände auf sie zu?",
            24:"Sind an Ihrem Unternehmen Gesellschafter mit jeweiligen Umsatz von mehr als 50.000.000 € direkt oder indirekt zu mehr als 50% beteiligt?"
        },
        questionnaire: {
            "Fördergrund": [
                "Corona Krise",
                "Existenzgründung & -festigung",
                "Forschung & Initiative",
                "Unternehmenserweiterung",
                "Sonstiges"
            ],
            "Tätigkeitsgebiet": [
                "Baden-Württemberg",
                "Bayern",
                "Berlin",
                "Brandenburg",
                "Bremen",
                "Hamburg",
                "Hessen",
                "Mecklenburg-Vorpommern",
                "Niedersachsen",
                "Nordrhein-Westfalen",
                "Rheinland-Pfalz",
                "Saarland",
                "Sachsen",
                "Sachsen-Anhalt",
                "Schleswig-Holstein",
                "Thüringen"
            ],
            "Einkunftsart": [
                "Gewerbliche Tätigkeit",
                "Freiberuflich",
                "Sonstiges"
            ],
            "Rechtsform": [
                "Kapitalgesellschaft",
                "Personengesellschaft",
                "Einzelunternehmer"
            ],
            "Rechtsform 2":[
                "GmbH",
                "AG",
                "e.V.",
                "UG"
            ],
            "Branche": [
                "Bau",
                "Dienstleistung",
                "Gastgewerbe",
                "Handel",
                "Handwerk",
                "Industrie",
                "Sonstiges"
            ],
            "Unternehmensgröße": [
                "Kleinst",
                "Klein",
                "Mittel",
                "Groß"
            ],

            "Mitarbeiter": [
                "< 10",
                "< 50",
                "< 250",
                "> 250"
            ],

            "Kurzarbeitergeld - arbeitsausfall": [
                "Ja",
                "Nein"
            ],
            "Kurzarbeitergeld - unvermeidbarer Arbeitsausfall": [
                "Ja",
                "Nein"
            ],

            "Umsatz": [
                "< 700.000 €",
                "< 12.000.000 €",
                "< 40.000.000 €",
                "> 40.000.000 €"
            ],

            "Bestehensdauer": [
                "< 1 Jahr",
                "< 3 Jahre",
                "< 5 Jahre",
                "> 5 Jahre"
            ],

            "Förderart": [
                "Bürgschaft (noch nicht hinterlegt)",
                "Darlehen (noch nicht hinterlegt)",
                "Zuschuss (noch nicht hinterlegt)",
                "Beiteiligung (noch nicht hinterlegt)",
                "Garantie (noch nicht hinterlegt)",
                "Steuererleichterungen (noch nicht hinterlegt)",
                "Kurzzeitarbeitergeld (noch nicht hinterlegt)",
                "Darlehen, Steuererleichterungen und Kurzzeitarbeitergeld"
            ],

            "Förderzweck": [
                "Produkt- und Prozessinnovationen zur Erschließung neuer Märkte oder neuer Kundengruppen und",
                "Digitalisierungsvorhaben, die zur Intensivierung der Digitalisierung ihres Unternehmens beitragen",
                "Investitionen",
                "Waren",
                "allgemeiner Bedarf an Betriebsmittel",
                "Umschuldung von Verbindlichkeiten"

            ],

            "Darlehenshöhe": [
                "< 2.000.000 €",
                "< 10.000.000 €",
                "> 25.000.000 €"

            ],

            "Risikominderung": [
                "Ja",
                "Nein"
            ],
            "Vertragslaufzeit": [
                "< 3 Jahre",
                "> 3 Jahre",
                "> 10 Jahre"
            ],

            "Herabsetzung der Vorauszahlungen": [
                "Ja",
                "Nein"
            ],

            "Ausschlussgrund 1": [
                "Ja",
                "Nein"
            ],

            "Ausschlussgrund 2": [
                "Ja",
                "Nein"
            ],

            "Ausschlussgrund 3": [
                "Ja",
                "Nein"
            ],

            "Ausschlussgrund 4": [
                "Ja",
                "Nein",
                "weiß nicht"
            ],

            "Ausschlussgrund 5": [
                "Ja",
                "Nein"
            ],

            "Ausschlussgrund 6": [
                "Verluste aufgrund unverhältnismäßig hoher Privatentnahmen bzw. zu hoher Geschäftsführergehälter",
                "Überschuldung ohne Überlebens- oder Fortbestehensprognose",
                "Notwendigkeit der Umschuldung langfristiger Darlehen",
                "Nein"
            ],
            "Ausschlussgrund 7": [
                "Ja",
                "Nein"
            ]

        }

    },
    mutations: {
        addSelection(state, selection) {
            state.selections.push(selection)
        },
        removeLastSelection(state) {
            state.selections.pop()
        }
    },
    actions: {
        addSelection(context, selection) {
            context.commit("addSelection", selection)
        },
        removeLastSelection(context) {
            context.commit("removeLastSelection")
        }
    }

})