export default function gatherInputValues() {

  const searchQuery = {
    location: null,
    date: null,
    species: null
  }

  let inputLocation = document.querySelector('#location-input').value
  console.log(inputLocation)
  searchQuery.location = inputLocation
  // ^Above defines the Location Input as requestedMushroomLocation
  console.log(searchQuery)

  let inputDate = document.querySelector('#date-input').value
  console.log(inputDate)
  searchQuery.date = inputDate

  console.log(searchQuery)

  return searchQuery
}