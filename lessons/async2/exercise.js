const url = (latitude, longitude) =>
  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`

const getMyCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ latitude: coords.latitude, longitude: coords.longitude })
      },
      (error) => {
        reject(error)
      }
    )
  })
}

const getMyCity = async () => {
  try {
    const { latitude, longitude } = await getMyCoords()
    const response = await fetch(url(latitude, longitude))
    const geo = await response.json()
    console.log(geo.locality)
  } catch (error) {
    console.log(error)
  }
}

getMyCity()
