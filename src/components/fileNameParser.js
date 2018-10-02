const url = image => {
  const fileName = image.type
    .toLowerCase()
    .replace(/\s/g, '_')

  const imageUrl = require(`../data/templates/${fileName}.png`)

  return imageUrl
}

export default url
