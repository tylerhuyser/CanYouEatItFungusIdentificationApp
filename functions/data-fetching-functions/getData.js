import appendResults from "../DOM-manipulation-functions/appendResults.js"

export default async function (location, date, species) {

  // console.log(location)

  let URL = ''

  if (species) {
    URL = `https://mushroomobserver.org/api2/observations?region=${location}&date=${date}&name=${species}&detail=high`
  } else {
    URL = `https://mushroomobserver.org/api2/observations?region=${location}&date=${date}&detail=high`
  }

  // console.log(URL)

  try {
    let response = await axios.get(URL)
    console.log(response)

    appendResults(response.data)

  } catch (error) {
    console.log(`Error: ${error}`)
    document.body.style.cursor = 'pointer'
  }

}