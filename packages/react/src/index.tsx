import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'

export * from '@styli/theming'
export * from '@styli/core'
export * from '@styli/styled'
export * from './Box'
export * from './components'
export { jsx } from './jsx'

styli.configure(() => presetDefault)
