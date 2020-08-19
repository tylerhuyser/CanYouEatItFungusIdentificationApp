
// Call One: https://mushroomobserver.org/api/locations?format=json&detail=low

// ^ Obtain location ID with parseString MSInputMethodContext.Above


// Call Two: https://mushroomobserver.org/api/observations?has_images=true&location=[location ID]&date[month]&format=json&detail=low

// ^ The Above Master Link w / String Interpolation -- gets Image ID if set to High

// Call Three: 

// Google Maps API Key: AIzaSyD-NgpgTNZ30S5_fkqDX3Vyw7F40fDOkh0


function validateForm(e) {
  e.preventDefault();
  // ^ Above: Prevents the form from refreshing the browser on click.

  let requestedMushroomLocation = document.querySelector('#location-search').value
  // ^Above defines

  let requestedOberservationDate = document.querySelector('#date-search').value
  console.log(requestedOberservationDate)
  const [city, state, country] = requestedMushroomLocation.split(', ')
  console.log(city)
  console.log(country)
  const [month, date, year] = requestedOberservationDate.split(/);
  if (country == "" || country == null) {
    alert(`Please enter Location in "City, State, Country" format!`)
    document.querySelector('#location-search').focus();
    return false;
  }
  if (requestedOberservationDate.length != 10) {
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    document.querySelector('#date-search').focus();
    return false;
  }
  if (country != "" && country != null && equestedOberservationDate.length= 10) {
    
  }
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

