import { setupLayouts } from 'virtual:generated-layouts'

import { createRouter, createWebHistory } from 'vue-router/auto'
import type { Plugin, PluginContext } from './types'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

(async () => {
  const app = createApp(App)
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: routes => setupLayouts(routes),
  })

  const pluginContext: PluginContext = { app, router }
  const plugins = import.meta.glob<Plugin>('./plugins/*.ts', { eager: true, import: 'default' })
  for (const pluginName in plugins) {
    const plugin = plugins[pluginName]
    await plugin.apply?.(pluginContext)
  }

  app.use(router)
  app.mount('#app')
})()
