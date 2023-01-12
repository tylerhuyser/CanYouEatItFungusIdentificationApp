
import toggleResults from '../DOM-manipulation-functions/toggleResults.js'

export default function removeResults(resultsSection) {
  console.log("inside remove results function")
  if (resultsSection.status == "active") {
    console.log("removing previous results")
    document.querySelector('.results-container').remove()
  } else {
    toggleResults(resultsSection)
  }
}