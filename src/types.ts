import type { App } from 'vue'
import type { Router } from 'vue-router/auto'

export interface PluginContext {
  app: App
  router: Router
}

export interface Plugin {
  apply(context: PluginContext): void | Promise<void>
}
