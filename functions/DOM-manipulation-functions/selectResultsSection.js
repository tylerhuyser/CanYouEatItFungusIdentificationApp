export default function selectResultsSection() {

  console.log('Selecting Results Section')
  let resultsActive = document.getElementById("results")
  let resultsHidden = document.getElementById("results-hidden")
  console.log(resultsActive)
  console.log(resultsHidden)

  return resultsActive ? { status: 'active', element: resultsActive } : { status: 'hidden', element: resultsHidden }
  // console.log("display Results Section initiate")
  // let results = document.getElementById("results-hidden")
  // if (results) {
  //   results.id = 'results'
  // }
}