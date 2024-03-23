import { createPinia } from 'pinia'
import type { Plugin } from '~/types'

// Setup Pinia
// https://pinia.vuejs.org/
export default <Plugin>{
  apply({ app }) {
    app.use(createPinia())
  },
}
