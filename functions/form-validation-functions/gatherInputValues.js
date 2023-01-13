export default function gatherInputValues() {

  const searchQuery = {
    location: null,
    date: null,
    species: null
  }

  let inputLocation = document.querySelector('#location-input').value
  searchQuery.location = inputLocation

  let inputDate = document.querySelector('#date-input').value
  searchQuery.date = inputDate

  return searchQuery
}