/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

//lang
 
import fr from './locale/fr.json'
import en from './locale/en.json'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'    
import { createI18n } from 'vue-i18n'

const app = createApp(App)

// Retrieve stored language or default to 'en'
const storedLang = localStorage.getItem('lang') || 'fr'

const i18n = createI18n({
    lagacy : false,
    locale : storedLang, 
    messages : {
      en : en,
      fr : fr
    }
})

registerPlugins(app)

app.use(i18n).mount('#app')
