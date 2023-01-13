
export default function toggleResultsSection(resultsSection) {

  if (resultsSection.status == "active") {

    resultsSection.element.id = 'results-hidden'

  } else {

    resultsSection.element.id = 'results'
    
  }
  
}