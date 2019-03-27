const reVar = /^--[^\s]+$/;

const isVar = (node) => {
  const { type } = node

  return type === 'atword'
  || (type === 'word' && node.isVariable)
  || (type === 'func' && node.value === 'var' && node.nodes.length && reVar.test(node.first.value))
}

export default isVar
