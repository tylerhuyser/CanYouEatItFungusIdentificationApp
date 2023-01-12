import gatherInputValues from "../form-validation-functions/gatherInputValues.js"
import convertStateName from "../form-validation-functions/convertStateName.js"
import convertDateToSeason from "../form-validation-functions/convertDateToSeason.js"
import toggleLoader from "../DOM-manipulation-functions/toggleLoader.js"
import getData from "../data-fetching-functions/getData.js"

export default function validateForm() {

  let searchQuery = gatherInputValues()

  let [city, state, country] = searchQuery.location.split(', ')
  console.log(city)
  console.log(state)
  console.log(country)
  
  state = convertStateName(state)
  console.log(state)

  searchQuery.location = `${city}, ${state}, ${country}`
  console.log(searchQuery)
  
  const [month, date, year] = searchQuery.date.split('/');
  console.log(month)
  // ^Above: Splits the Date Input into Month, Date, and Year

  if (country == "" || country == null) {
    let locationInput = document.querySelector('#location-input')
    locationInput.classList.add('invalid')
    alert(`Please enter Location in "City, State, Country" format!`)
    // document.querySelector('#location-search').focus();
    return false;
  };
  // ^Above: Determines if Location Input (specifically Country) is valid.

  if (searchQuery.date.length != 10 && country != "" && country != null) {
    let locationInput = document.querySelector('#location-input')
    locationInput.classList.remove('invalid')
    let dateInput = document.querySelector('#date-input')
    dateInput.classList.add('invalid')
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    // document.querySelector('#date-search').focus();
    return false;
  };
  
  if (searchQuery.date.length != 10) {
    let dateInput = document.querySelector('#date-input')
    dateInput.classList.add('invalid')
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    // document.querySelector('#date-search').focus();
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

    searchQuery.date = month
    getData(searchQuery.location, searchQuery.date, searchQuery.species)
    
  };
}