
import toggleResults from '../DOM-manipulation-functions/toggleResults.js'

export default function removeResults(resultsSection) {

  if (resultsSection.status == "active") {
    
    document.querySelector('.results-container').remove()

  } else {

    toggleResults(resultsSection)
    
  }
}