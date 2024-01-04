import vuetify from './vuetify'
import router from '../router'
import pinia from '../store'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)  
}
