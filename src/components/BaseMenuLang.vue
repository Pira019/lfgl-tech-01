<template>
  <v-btn @click="toggleLanguage" :title="laguageTitle">{{ selectedLanguage }} </v-btn>
</template>

<script>
export default {
  created() {
    this.initializeLanguage()
  },
  data() {
    return {
      selectedLanguage: this.$i18n.locale
    }
  },
  methods: {
    initializeLanguage() {
      this.selectedLanguage = this.selectedLanguage === "en" ? "fr" : "en"
    },

    toggleLanguage() {
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem("lang", this.selectedLanguage)
      this.initializeLanguage()
    }
  },

  computed: {
    laguageTitle() {
      return this.selectedLanguage === "en" ? "English" : "Français"
    }
  }

}
</script>