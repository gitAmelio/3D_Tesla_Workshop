import { proxy } from 'valtio'

const state = proxy({
  active: 0
})

export { state }
