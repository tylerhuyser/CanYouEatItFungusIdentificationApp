import selectResultsSection from "../DOM-manipulation-functions/selectResultsSection.js"
import createResultCards from "../DOM-manipulation-functions/createResultCards.js"

export default function appendResults(data) {

  console.log('AppendResults Function Begin')
  let resultsSection = selectResultsSection()
  console.log('Results Selection Complete')
  console.log(resultsSection)

  let resultsContainer = document.createElement('div')
  resultsContainer.classList.add("results-container")
  resultsContainer.id = data.run_date
  resultsSection.element.append(resultsContainer)

  if (data.length == 0) {
    console.log("No Records Found :(")
    let noResults = document.createElement('div')
    resultsHeader.classList.add('results-copy')
    resultsHeader.id = 'results-title'
    resultsHeader.innerHTML = `No Matches :(`
    document.getElementById(data.run_date).append(noResults)

    removeResults(resultsSection)
    toggleLoader()
    document.body.style.cursor = 'pointer'
  } else {
    createResultCards(data.run_date, data.results, resultsSection);
  }
}