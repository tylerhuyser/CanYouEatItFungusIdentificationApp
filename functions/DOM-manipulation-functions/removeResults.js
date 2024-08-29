
import toggleResults from '../DOM-manipulation-functions/toggleResults.js'

export default function removeResults(resultsSection) {

  // console.log('inside remove results')


  if (resultsSection.status == "active") {
    
    document.querySelector('.results-container').remove()

  } else {

    toggleResults(resultsSection)
    
  }
}