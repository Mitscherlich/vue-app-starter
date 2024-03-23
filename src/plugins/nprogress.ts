import nprogress from 'nprogress'
import type { Plugin } from '~/types'

export default <Plugin>{
  apply({ router }) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        nprogress.start()
    })
    router.afterEach(() => {
      nprogress.done()
    })
  },
}
