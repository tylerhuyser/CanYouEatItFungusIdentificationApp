import gatherInputValues from "../form-validation-functions/gatherInputValues.js"
import convertStateName from "../form-validation-functions/convertStateName.js"
import convertDateToSeason from "../form-validation-functions/convertDateToSeason.js"
import toggleLoader from "../DOM-manipulation-functions/toggleLoader.js"
import getData from "../data-fetching-functions/getData.js"

export default function validateForm() {

  let searchQuery = gatherInputValues()

  let [city, state, country] = searchQuery.location.split(', ')
  state = convertStateName(state)
  searchQuery.location = `${city}, ${state}, ${country}`
  
  searchQuery.date = searchQuery.date.split('/')[0];

  if (country == "" || country == null) {
    let locationInput = document.querySelector('#location-input')
    locationInput.classList.add('invalid')
    alert(`Please enter Location in "City, State, Country" format!`)
    return false;
  };
  // ^Above: Determines if Location Input (specifically Country) is valid.

  if (searchQuery.date.length != 10 && country != "" && country != null) {
    let locationInput = document.querySelector('#location-input')
    locationInput.classList.remove('invalid')
    let dateInput = document.querySelector('#date-input')
    dateInput.classList.add('invalid')
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    return false;
  };
  
  if (searchQuery.date.length != 10) {
    let dateInput = document.querySelector('#date-input')
    dateInput.classList.add('invalid')
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    return false;
  };
  // ^Above Determines if Date Input is valid

  if (country != "" && country != null && searchQuery.date.length == 10) {
    let locationInput = document.querySelector('#location-input')
    locationInput.classList.remove('invalid')
    let dateInput = document.querySelector('#date-input')
    dateInput.classList.remove('invalid')

    toggleLoader()
    document.body.style.cursor = 'wait';
    getData(searchQuery.location, searchQuery.date, searchQuery.species)
    
  };
}