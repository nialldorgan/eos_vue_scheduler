import './src/main.scss'
import * as components from './src/components'

const EosVueScheduler = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(EosVueScheduler)
}

// To allow use as module (npm/webpack/etc.) export component
export default EosVueScheduler;