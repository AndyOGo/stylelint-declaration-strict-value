import {
  reVar,
} from './validation'

const getNode = (node) => {
  const rawValue = node.toString().trim()

  // IMPORTANT detect vars for CSS, SCSS and Less
  if (reVar.test(rawValue)) {
    /* eslint-disable no-param-reassign */
    node.type = 'var'
    // make sure to mark walk through children as skipped
    node.skipChildren = true
  }

  return node
}

export default getNode
