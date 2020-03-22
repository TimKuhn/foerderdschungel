<template>
  <div class="bg-gray-100 h-screen max-h-full">
    <!-- NAVBAR -->
    <nav
      class="h-12 text-sm font-bold text-teal-100 py-4 pl-8 bg-teal-600"
      style="background-image: url(assets/nav.jpg)"
    >Förderanträge auf Knopfdruck</nav>
    <div
      class="absolute top-0 right-0 pt-4 pr-4 text-white"
    >Fortschritt: {{this.$store.state.activeLevel}} von {{Object.keys(this.$store.state.questionTopics).length}}</div>
    <!-- NAVBAR END -->

    <div v-if="!this.$store.state.allQuestionsAnswered" class="pt-12 px-64">
      <div class="h-32">
        <div class="h-12">
          <button
            v-if="this.$store.state.activeLevel > 0"
            @click="prevTopic"
            class="focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mr-4 text-sm"
          >&larr;</button>
          <span class="text-gray-800 py-2 text-lg">{{getTopic}}</span>
        </div>
        <div class="text-gray-600 mb-8 text-sm pb-8 pt-4">{{getDescription}}</div>
      </div>
      <ul>
        <li
          @click="nextTopic"
          class="py-4 px-8 my-1 hover: cursor-pointer hover:bg-teal-600 hover:text-teal-100 hover:border-gray-100 border-gray-600 border rounded-md text-gray-700"
          v-for="question in getQuestions"
          :key="question"
        >{{ question }}</li>
      </ul>
    </div>

    <div v-if="this.$store.state.allQuestionsAnswered">
      <div
        class="pt-24 text-2xl px-64 uppercase"
      >Ihnen stehen - vorbehaltlich der Bonitätsprüfung - folgende Förderanträge zur Auswahl</div>
      <div class="pt-12 px-64">
        <div
          @click="downloadBlankForm(antrag)"
          class="hover: cursor-pointer hover:text-gray-900 tracking-wide text-gray-600 flex flex-row my-4 antialiased"
          v-for="antrag in antraege"
          :key="antrag"
        >
          <a>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              width="48"
            />
          </a>

          <span class="pl-8 pt-4">{{antrag}}</span>
        </div>
      </div>
      <div
        class="text-gray-600 text-sm px-64 pt-12 tracking-wider antialiased"
      >Um die Förderanträge gleichzeitig und automatisch zu befüllen, folgen Sie bitte dem untenstehenden Link, um die notwendigen Antragsdaten einmalig einzugeben.</div>
      <button @click="goToFormFiller" class="focus:outline-none ml-64 mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Antrag automatisch befüllen</button>
      <div class="text-red-700 font-bold text-sm px-64 pt-64 tracking-wider antialiased">
        Bitte beachten Sie:
        Förderungen über die KfW Bankengruppe sind über die jeweilige Hausbank zu stellen. Weitere Informationen finden Sie auf den Seiten der KfW. Die neben dem Antrag zusätzlich erforderlichen Dokumente, wie Information über bereits bezogene Beihilfen und Angaben zur Unternehmensgröße können Sie über den untenstehenden Link ebenfalls vorausfüllen lassen.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DecisionTree",
  components: {

  },
  data() {
    return {
      antraege: []
    };
  },
  computed: {
    getQuestions() {
      return this.$store.state.questionnaire[
        this.$store.state.questionTopics[this.$store.state.activeLevel]
      ];
    },
    getTopic() {
      return this.$store.state.questionTopics[this.$store.state.activeLevel];
    },
    getDescription() {
      return this.$store.state.questionDescription[
        this.$store.state.activeLevel
      ];
    }
  },
  methods: {
    goToFormFiller() {
          this.$router.push("/formfiller");
    },
    downloadBlankForm(antrag) {
      axios({
        url: "http://localhost:5555/downloadblankform/" + antrag,
        method: "GET",
        responseType: "blob" // important
      })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", antrag);
          document.body.appendChild(link);
          link.click();
        })
        .catch(e => console.log(e));
    },
    nextTopic(e) {
      setTimeout(() => {
        this.$store.state.activeLevel++;
        let selectionText = e.target.innerText;
        this.$store.dispatch("addSelection", selectionText);

        if (
          this.$store.state.activeLevel ==
          Object.keys(this.$store.state.questionTopics).length
        ) {
          this.$store.state.allQuestionsAnswered = true;

          let form = new FormData();

          axios({
            url: "http://localhost:5555/foerderantrage",
            method: "POST",
            data: form
          })
            .then(response => {
              this.antraege = response.data.availableForms;
            })
            .catch(e => {
              console.log("Error", e);
            });
        }
      }, 300);
    },
    prevTopic(e) {
      console.log(e);
      if (this.$store.state.activeLevel > 0) {
        this.$store.state.activeLevel--;
        this.$store.dispatch("removeLastSelection");
      }
    }
  }
};
</script>

<style>
</style>