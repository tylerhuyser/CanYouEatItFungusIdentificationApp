
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
  // ^Above: Determines if Location Input (specifically Country) is valid.

  if (requestedOberservationDate.length != 10) {
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    document.querySelector('#date-search').focus();
    return false;
  };
  // ^Above Determines if Date Input is valid

  if (country != "" && country != null && requestedOberservationDate.length == 10) {
    getLocationID(city, state, country, month);
  };
  // ^Above: If both Location & Date are valid, activates the getLocationID function.
}

//BELOW Function obtains the location IDs.
async function getLocationID (city, state, country, month) {

  try {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const locationsURL = 'https://mushroomobserver.org/api/locations?format=json&detail=low';
    // const API = `${proxyURL}${locationsURL}`
    // console.log(API)
    // return fetch(API, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     "Access-Control-Origin": "*"
    //   }
    // })
    //   .then((response) => {
    //   return response.json();
    //   })
    //   .then(data => {
    //     console.log(data)
    //   })
    const response = await axios.get(`https://mushroomobserver.org/api/locations?format=json&detail=low`)
    console.log(response)
    // Defines all of the Location Data as "Response"

    // (Tutorial Documentation): https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141

    const responseArray = response.data.results
    console.log(responseArray)
    console.log(responseArray.length)
    // ^Above defines the array of Location Data -- which contains 1,000 objects

    let locationIDs = [];
    // ^Above defines an empty array to be filled with location IDs that match the City, State, and Country

    for (let i = 0; i < responseArray.length; i++) {
      if (responseArray[i].name.includes(city) && responseArray[i].name.includes(state) && responseArray[i].name.includes(country)) {
        locationIDs.push(responseArray[i].id);
      }
    }
    console.log(locationIDs)
    // ^Above prints the array of location IDs

    let locationIDsString = locationIDs.join(',')
    console.log(locationIDs)
    // ^Above converts the array of location IDs to a string of commma-seperated values.

    getMushroomInfo(locationIDsString, month);
    // ^ Above calls upon the getMushroomInfo Function

  } catch (error) {
    console.log(`Error: ${error}`)
  }
  // ^Above: catches & logs any errors that occur with the request.
}

// BELOW: Creates the Season by adding and subtracting months from the date of observation
function seasonString(month) {
  
  let monthInteger = parseInt(month);
  console.log(monthInteger);
  // ^Above: remove leading zeros from month string and converts value into an integer
  
  let beginSeason = parseInt(month);
  let endSeason = parseInt(month);

  console.log(beginSeason);
  console.log(endSeason);
  // ^Above: parses the two-digit number strings "i.e. 06 or 02" down to single-digits (it removes the leading zeros)

  if (monthInteger >= 3 && monthInteger <= 10) {
    beginSeason = monthInteger - 2
    endSeason = monthInteger + 2;
  } else if (monthInteger == 0) {
    beginSeason = 11;
    endSeason = monthInteger + 2;
  } else if (monthInteger == 1) {
    beginSeason = 12;
    endSeason = monthInteger + 2;
  } else if (monthInteger == 11) {
    beginSeason = monthInteger - 2;
    endSeason = 01;
  } else if (monthInteger == 12) {
    beginSeason = monthInteger - 2;
    endSeason = 02;
  };

  console.log(beginSeason);
  console.log(endSeason);
  // ^Above: either adds or subtracts two months from the season begin & end variables. This outputs single-digit variables.

  let beginSeasonString
  if (beginSeason.length == 1) {
    beginSeasonString = beginSeason.toString();
  } else {
    beginSeasonString = beginSeason.toString();
  };
  console.log(beginSeasonString);
  // ^Above: adds the leading zero back to the single-digit integers.

  let endSeasonString 
  if (endSeason.length == 1) {
    endSeasonString = "0" + endSeason.toString()
  } else {
    endSeasonString = endSeason.toString();
  };
  console.log(endSeason);
  // ^Above: adds the leading zero back to the single-digit integers.

  let season = `${beginSeasonString}-${endSeasonString}`;
  console.log(season);
  return season;
  // ^Above: converts the season beginning & endpoints to a string
}

// BELOW function will obtain neccessary Mushroom Info (i.e. species name + image) to later append to DOM
async function getMushroomInfo(locationIDsString, month) {
  
  let dateRange = seasonString(month)
  
  let URL = `https://mushroomobserver.org/api/observations?has_images=true&location=${locationIDsString}&date=${dateRange}&format=json&detail=high`
  console.log(URL)
  // ^Above uses string interpolation to define the URL for the coming axios request.
  
  let response = await axios.get(URL)
  // ^ Above: Second Axios pull request, using string interpolation to include the array of location IDs and Month to narrow results.

  let responseData = response.data.results
  console.log(responseData)
  // ^Above: Defines response results as responseData

  

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

