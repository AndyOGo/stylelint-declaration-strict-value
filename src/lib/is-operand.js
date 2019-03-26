const isOperand = (node) => {
  if (!node) {
    return false
  }

  const { type } = node

  return type === 'numeric'
    || type === 'func'
    || type === 'atword' || (type === 'word' && node.isVariable)
}

export default isOperand
