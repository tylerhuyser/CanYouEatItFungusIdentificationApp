import toggleLoader from "../DOM-manipulation-functions/toggleLoader.js"
import removeResults from "../DOM-manipulation-functions/removeResults.js"

export default function createResultCards(resultsContainerID, data, resultsSection) {

  console.log(data)
  
  for (let i = 0; i < data.length; i++) {

    // let id = data[i].id
    let id = i
    let name = data[i].consensus.name
    let imageID = data[i].primary_image.id

    const result = document.createElement('div')
    result.classList.add('result-card')
    result.id = `result ${id}`
    document.getElementById(resultsContainerID).appendChild(result)
    // ^Above: Creates a div object to contain each result
  
    const cardTitle = document.createElement('a');
    let linkText = document.createTextNode(`${name}`);
    cardTitle.appendChild(linkText);
    cardTitle.title = `${name}`
    let URL = `https://mushroomobserver.org/${id}`
    cardTitle.href = `${URL}`
    result.appendChild(cardTitle)
    // ^Above: Creates an 'a' hyperlink element containing Mushroom Name and linking to the Observation Page on Mushroom World using the observation ID.
  
    const cardImage = document.createElement('img')
    let imageURL = `https://images.mushroomobserver.org/320/${imageID}.jpg`
    cardImage.src = imageURL
    result.appendChild(cardImage)

  }

  removeResults(resultsSection)
  toggleLoader()
  document.body.style.cursor = 'pointer'

}