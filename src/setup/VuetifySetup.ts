// Vuetify
import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default function vuetifySetup(){
const vuetify = createVuetify({
    components,
    directives,
    ssr: true
  })

return vuetify;
}