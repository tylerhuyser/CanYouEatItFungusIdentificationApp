export default function selectResultsSection() {

  let resultsActive = document.getElementById("results")
  let resultsHidden = document.getElementById("results-hidden")

  return resultsActive ? { status: 'active', element: resultsActive } : { status: 'hidden', element: resultsHidden }

}