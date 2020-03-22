<template>
  <div class="bg-gray-100 h-screen max-h-full">
    <!-- NAVBAR -->
    <nav
      class="bg-cover h-12 text-sm font-bold text-teal-100 py-4 pl-8 bg-teal-600"
      style="background-image: url(assets/nav.jpg)"
    >Förderanträge auf Knopfdruck</nav>
    <!-- NAVBAR END -->
    <!-- INTRO -->
    <div class="text-gray-700 px-4 py-2 px-48 bg-gray-200 flex border-t pt-12 pb-8">
      <span
        class="text-gray-800 text-lg"
      >Wir prüfen automatisch für welche Förderanträge sie berechtigt sind und befüllen diese mit allen Basisinformationen, die sie uns zur Verfügung stellen. Nach der Übermittlung der Daten stehen die Anträge als PDF zum Download bereit.</span>
    </div>
    <!-- INTRO END-->
    <!-- BASISINFORMATION -->
    <div class="flex flex-col-reverse">
      <div class="text-gray-700 px-4 py-2 px-48 bg-gray-100 flex border-t pt-12 pb-8">
        <div class="flex-1 description">
          <h3 class="font-extrabold">Basisinformationen</h3>
          <p
            class="text-gray-600 text-sm pr-64"
          >Bitte geben Sie alle Informationen an, damit wir Ihnen die Ergebnisse per Email zusenden können</p>
        </div>
        <div class="flex-1 form-fields">
          <h3 class="pb-8">Bitte füllen Sie folgende Informationen aus:</h3>
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Vorname</label>
          <input
            class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Max"
            v-model="vorname"
          />
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nachname</label>
          <input
            class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Mustermann"
            v-model="nachname"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >E-Mail Adresse</label>
          <input
            class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="max.mustermann@web.de"
            v-model="email"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >Telefonnummer</label>
          <input
            class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="phone"
            placeholder="+49 175 1111111"
            v-model="telefon"
          />
        </div>
      </div>
    </div>
    <!-- BASISINFORMATION END -->

    <!-- FIRMENINFORMATIONEN -->
    <div class="text-gray-700 px-4 py-2 px-48 bg-gray-200 flex border-t pt-12 pb-8">
      <div class="flex-1 description">
        <h3 class="font-extrabold">Firmeninformationen</h3>
        <p
          class="text-gray-600 text-sm pr-64"
        >Bitte geben Sie alle Firmeninformationen an, die zur Beantragung der Fördergelder notwendig sind.</p>
      </div>
      <div class="flex-1 form-fields">
        <h3 class="pb-8">Bitte füllen Sie folgende Informationen aus:</h3>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Firma</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Musterfirma AG"
          v-model="unternehmen_name"
        />
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Rechtsform</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="AG"
          v-model="rechtsform"
        />
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Branche</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Automobilindustrie"
          v-model="branche"
        />
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Sonstiges</label>
        <input
          class="mr-2 leading-tight focus: bg-gray-500 mb-6"
          type="checkbox"
          v-model="strassengueterverkehr_trigger"
        />
        <span class="text-sm">Transport von Straßengütern</span>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Handelsregisternummer</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="HRB 123"
          v-model="handelsregisternummer"
        />
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Straße</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Guter Weg 2"
          v-model="strasse_nr"
        />
        <div class="flex flex-wrap mb-2">
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Stadt</label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Stuttgart"
              v-model="ort"

            />
          </div>
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">PLZ</label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="70199"
              v-model="plz"
            />
          </div>
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >Bundesland</label>
            <div class="relative">
              <select
                class="bg-white block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Baden-Württemberg</option>
                <option>Bayern</option>
                <option>Berlin</option>
                <option>Brandenburg</option>
                <option>Bremen</option>
                <option>Hamburg</option>
                <option>Hessen</option>
                <option>Mecklenburg-Vorpommern</option>
                <option>Niedersachsen</option>
                <option>Nordrhein-Westfalen</option>
                <option>Rheinland-Pfalz</option>
                <option>Saarland</option>
                <option>Sachsen</option>
                <option>Sachsen-Anhalt</option>
                <option>Schleswig-Holstein</option>
                <option>Thüringen</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Anzahl Mitarbeiter</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="10"
          v-model="anz_mitarbeiter"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Umsatzerlöse im letzten Geschäftsjahr</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="100000"
          v-model="umsatz_jahr"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        >Bilanzsumme</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="10000000"
          v-model="bilanzsumme"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        >Gründungsdatum</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="date"
          placeholder="13.12.2008"
          v-model="gruendungsdatum"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        >Ort Registergericht</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Stuttgart"
          v-model="ort_registergericht"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        >Örtlich zuständige Regierung</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Baden-Württemberg"
          v-model="ort_regierung"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        >Postanschrift zuständige Agentur für Arbeit</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Musterstraße 5, 34892 Musterstadt"
          v-model="agentur_fuer_arbeit"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        >Betriebsnummer</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="134872"
          v-model="betriebsnummer"
        />
      </div>
    </div>
    <!-- FIRMENINFORMATIONEN END -->



    <!-- KREDITINSTITUT -->
    <div class="text-gray-700 px-4 py-2 px-48 bg-gray-100 flex border-t pt-12 pb-8">
      <div class="flex-1 description">
        <h3 class="font-extrabold">Kreditinformationen</h3>
        <p
          class="text-gray-600 text-sm pr-64"
        >Bitte geben Sie alle kreditrelevanten Informationen an</p>
      </div>
      <div class="flex-1 form-fields">
        <h3 class="pb-8">Bitte füllen Sie folgende Informationen aus:</h3>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        >Name Kreditinstitut</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Volksbank Stuttgart"
          v-model="kreditinstitut"
        />
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">BIC</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="PBNKDEFF"
          v-model="bic"
        />
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">IBAN</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="DE02100100100006820101"
          v-model="iban"
        />
      </div>
    </div>
    <!-- KREDITINSTITUT END-->

    <!-- FINANZAMT-->
    <div class="text-gray-700 px-4 py-2 px-48 bg-gray-200 flex border-t pt-12 pb-8">
      <div class="flex-1 description">
        <h3 class="font-extrabold">Steuern & Finanzamt</h3>
        <p class="text-gray-600 text-sm pr-64">Bitte geben Sie alle Informationen an</p>
      </div>
      <div class="flex-1 form-fields">
        <h3 class="pb-8">Bitte füllen Sie folgende Informationen aus:</h3>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Name Finanzamt</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Finanzamt Stuttgart"
          v-model="finanzamt_1"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Straße</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Stuttgarter Straße 5"
          v-model="finanzamt_2"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Steuernummer</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="123456"
          v-model="steuer_nr"
        />
      </div>
    </div>
    <!-- FINANZAMT END-->

    <!-- KREDITINSTITUT -->
    <div class="text-gray-700 px-4 py-2 px-48 bg-gray-100 flex border-t pt-12 pb-8">
      <div class="flex-1 description">
        <h3 class="font-extrabold">Kurzzeitarbeitergeld</h3>
        <p
          class="text-gray-600 text-sm pr-64"
        >Bitte geben Sie alle Informationen an</p>
      </div>
      <div class="flex-1 form-fields">
        <h3 class="pb-8">Bitte füllen Sie folgende Informationen aus:</h3>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Stammnummer-KUG (soweit bekannt)</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="123456"
          v-model="stammnummer"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Abteilungsnummer (soweit bekannt)</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="349ZEK"
          v-model="Abteilungsnummer"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Geplante Arbeitszeitreduzierung</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="MM/JJ - MM/JJ"
          v-model="gepl_reduzierung"
        />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Gesamtbetrieb oder Betriebsabteilung</label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Betriebsabteilung"
          v-model="betriebsabteilung"
        />
        
      </div>
    </div>
    <!-- KREDITINSTITUT END-->

    <!-- SUBMIT -->
    <div class="text-gray-700 px-4 py-2 px-48 bg-gray-400 flex border-t pt-12">
      <span class="text-gray-800">Ihre Daten werden nach der Übermittlung gelöscht</span>
    </div>
    <div class="text-gray-700 px-4 py-2 px-48 bg-gray-400 flex pt-4 pb-24">
      <div>
        <button
          @click="sendForm()"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none"
        >Übermitteln</button>
        <a
          v-if="ready_for_download"
          v-bind:href="download_url"
          class="ml-4 border-green-600 hover:bg-green-100 bg-gray-100 text-gray-800 hover:text-green-900 font-semibold py-2 px-4 border rounded shadow hover: cursor-pointer"
        >Download</a>
      </div>
    </div>
    <!-- SUBMIT END-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormFiller",
  data() {
    return {
      ready_for_download: false,
      download_url: null,
      vorname: "",
      nachname: "",
      ort: "",
      plz: "",
      bundesland: "",
      unternehmen_name: "",
      rechtsform: "",
      handelsregisternummer: "",
      strasse_nr: "",
      telefon: "",
      email: "",
      iban: "",
      bic: "",
      kreditinstitut: "",
      branche: "",
      grund_liquiditaetsengpass: "",
      hohe_liquiditaet: 0,
      ursache_corona: true,
      strassengueterverkehr_trigger: false,
      bilanzsumme: 0,
      umsatz_jahr: 0,
      anz_mitarbeiter: 0,
      steuer_nr: "",
      finanzamt_1: "",
      finanzamt_2: "",
      finanzamt_3: ""

    };
  },
  methods: {
    sendForm() {
      let form = new FormData();
      form.append("vorname", this.vorname);
      form.append("nachname", this.nachname);
      form.append("ort", this.ort);
      form.append("plz", this.plz);
      form.append("unternehmen_name", this.unternehmen_name);
      form.append("rechtsform", this.rechtsform);
      form.append("handelsregisternummer", this.handelsregisternummer);
      form.append("strasse_nr", this.strasse_nr);
      form.append("telefon", this.telefon);
      form.append("email", this.email);
      form.append("iban", this.iban);
      form.append("bic", this.bic);
      form.append("kreditinstitut", this.kreditinstitut);
      form.append("branche", this.branche);
      form.append("grund_liquiditaetsengpass", this.grund_liquiditaetsengpass);
      form.append("ursache_corona", this.ursache_corona);
      form.append(
        "strassengueterverkehr_trigger",
        this.strassengueterverkehr_trigger
      );
      form.append("bilanzsumme", this.bilanzsumme);
      form.append("umsatz_jahr", this.umsatz_jahr);
      form.append("anz_mitarbeiter", this.anz_mitarbeiter);
      form.append("steuer_nr", this.steuer_nr);
      form.append(
        "anschrift",
        this.strasse_nr + " " + this.plz + " " + this.ort
      );


      console.log(this.vorname)
      axios({
        url: "http://localhost:5555/fillform",
        method: "POST",
        data: form
      })
        .then(response => {
          this.ready_for_download = true;
          this.download_url = response.data.download_url;
        })
        .catch(e => {
          console.log("Error", e);
        });
    },
    downloadFiles(request_id) {
      console.log(request_id);
      axios({
        url: "http://localhost:5555/download/" + request_id,
        method: "GET"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
