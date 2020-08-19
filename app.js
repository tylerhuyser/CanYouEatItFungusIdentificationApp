
// Call One: https://mushroomobserver.org/api/locations?format=json&detail=low

// ^ Obtain location ID with parseString MSInputMethodContext.Above


// Call Two: https://mushroomobserver.org/api/observations?has_images=true&location=[location ID]&date[month]&format=json&detail=low

// ^ The Above Master Link w / String Interpolation -- gets Image ID if set to High

// Call Three: 

// Google Maps API Key: AIzaSyD-NgpgTNZ30S5_fkqDX3Vyw7F40fDOkh0


//  BELOW Function validates the form input.
function validateForm(e) {
  e.preventDefault();
  // ^ Above: Prevents the form from refreshing the browser on click.

  let requestedMushroomLocation = document.querySelector('#location-search').value
  console.log(requestedMushroomLocation)
  // ^Above defines the Location Input as requestedMushroomLocation

  let requestedOberservationDate = document.querySelector('#date-search').value
  console.log(requestedOberservationDate)
  // ^Above defines the Date Input as requestedObservationDate

  const [city, state, country] = requestedMushroomLocation.split(', ')
  console.log(city)
  console.log(country)
  // ^Above: Splits the Location String into City, State, and Country

  const [month, date, year] = requestedOberservationDate.split('/');
  console.log(month)
  // ^Above: Splits the Date Input into Month, Date, and Year

  if (country == "" || country == null) {
    alert(`Please enter Location in "City, State, Country" format!`)
    document.querySelector('#location-search').focus();
    return false;
  };
  // Determines if Location Input (specifically Country) is valid.

  if (requestedOberservationDate.length != 10) {
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    document.querySelector('#date-search').focus();
    return false;
  };
  // Determines if Date Input is valid

  if (country != "" && country != null && requestedOberservationDate.length == 10) {
    getLocationID(city, state, country);
  };
  // If both Location & Date are valid, activates the getLocationID function.
}

//Below Function obtains the location IDs.
async function getLocationID (city, state, country) {

  try {
    // const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    // const locationsURL = 'https://mushroomobserver.org/api/locations?format=json&detail=low'
    // fetch(proxyURL + locationsURL)
    //   .then(response => response.text())
    //   .then(contents => console.log(contents))
    const response = await axios.get(`https://mushroomobserver.org/api/locations?format=json&detail=low`)
    consolelog(response)
    // Defines all of the Location Data as "Response"

    // (Tutorial Documentation): https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141

    const locationIDs = response.results.id
    console.log(locationIDs)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
  // ^Above: catches & logs any errors that occur with the request.

}


// getMushrooms Function

// function getLocation(e) {
//   e.preventDefault()
//   // ^ Above: prevents the form from refreshing in the browser.
//   const requestedMushroomLocation = document.querySelector('#location-search').value
//   console.log(requestedMushroomLocation)
//   // ^ Above defines the search location as a string.
//   const [city, state, country] = requestedMushroomLocation.split(', ')
//   console.log(city)
//   console.log(country)
//   // ^Above defines the location into city, state, and country variables

// }




// Search Button Event Listener: (Cues Formula "getMushrooms")

const submitButton = document.querySelector(".submit-button")
submitButton.addEventListener('click', validateForm)

// getMushrooms Function

// function getMushrooms(e) {
//   e.preventDefault
//   // ^ Above: prevents the form from refreshing in the browser.
  
//   const requestedMushroomLocation = document.querySelector('#location-search').value

//   console.log(requestedMushroomLocation)

// }

