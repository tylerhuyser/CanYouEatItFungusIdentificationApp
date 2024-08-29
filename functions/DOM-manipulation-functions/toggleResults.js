
export default function toggleResultsSection(resultsSection) {

  // console.log('inside toggle results')

  if (resultsSection.status == "active") {

    resultsSection.element.id = 'results-hidden'

  } else {

    resultsSection.element.id = 'results'
    
  }
  
}