const isColor = (node) => {
  const { type } = node

  return (type === 'word' && node.isColor)
    || (type === 'func' && node.isColor)
}

export default isColor
