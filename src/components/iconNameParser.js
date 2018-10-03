const url = image => {
  const fileName = image.type

  const imageUrl = require(`../data/png/${fileName}.png`)

  return imageUrl
}

export default url
