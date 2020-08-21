
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

  let [city, state, country] = requestedMushroomLocation.split(', ')
  console.log(city)
  console.log(state)
  console.log(country)
  // ^Above: Splits the Location String into City, State, and Country

    switch (state) {
          case 'AL':
              state = "ALABAMA";
              break;
          case 'AK':
              state = "ALASKA";
              break;
          case 'AS':
            state = "AMERICAN SAMOA";
              break;
          case 'AZ':
            state = "ARIZONA";
              break;
          case 'AR':
            state = "ARKANSAS";
              break;
           case 'CA':
            state = "CALIFORNIA";
              break;
          case 'CO':
            state = "COLORADO";
              break;
          case 'CT':
            state = "CONNECTICUT";
              break;
          case 'DE':
            state = "DELAWARE";
              break;
          case 'DC':
            state = "DISTRICT OF COLUMBIA";
              break;
          case 'FM':
            state = "FEDERATED STATES OF MICRONESIA";
              break;
          case 'FL':
            state = "FLORIDA";
              break;
          case 'GA':
            state = "GEORGIA";
              break;
          case 'GU':
            state = "GUAM";
              break;
          case 'HI':
            state = "HAWAII";
              break;
          case 'ID':
            state = "IDAHO";
              break;
          case 'IL':
            state = "ILLINOIS";
              break;
          case 'IN':
            state = "INDIANA";
              break;
          case 'IA':
            state = "IOWA";
              break;
          case 'KS':
            state = "KANSAS";
              break;
          case 'KY':
            state = "KENTUCKY";
              break;
          case 'LA':
            state = "LOUISIANA";
              break;
          case 'ME':
            state = "MAINE";
              break;
          case 'MH':
            state = "MARSHALL ISLANDS";
              break;
          case 'MD':
            state = "MARYLAND";
              break;
          case 'MA':
            state = "MASSACHUSETTS";
              break;
          case 'MI':
            state = "MICHIGAN";
              break;
          case 'MN':
            state = "MINNESOTA";
              break;
          case 'MS':
            state = "MISSISSIPPI";
              break;
          case 'MO':
            state = "MISSOURI";
              break;
          case 'MT':
            state = "MONTANA";
              break;
          case 'NE':
            state = "NEBRASKA";
              break;
          case 'NV':
            state = "NEVADA";
              break;
          case 'NH':
            state = "NEW HAMPSHIRE";
              break;
          case 'NJ':
            state = "NEW JERSEY";
              break;
          case 'NM':
            state = "NEW MEXICO";
              break;
          case 'NY':
            state = "NEW YORK";
              break;
          case 'NC':
            state = "NORTH CAROLINA";
              break;
          case 'ND':
            state = "NORTH DAKOTA";
              break;
          case 'MP':
            state = "NORTHERN MARIANA ISLANDS";
              break;
          case 'OH': 
            state = "OHIO";
              break;
          case 'OK':
            state = "OKLAHOMA";
              break;
          case 'OR':
            state = "OREGON";
              break;
          case 'PW':
            state = "PALAU";
              break;
          case 'PA':
            state = "PENNSYLVANIA";
              break;
          case 'PR':
            state = "PUERTO RICO";
              break;
          case 'RI':
            state = "RHODE ISLAND";
              break;
          case 'SC':
            state = "SOUTH CAROLINA";
              break;
          case 'SD':
            state = "SOUTH DAKOTA";
              break;
          case 'TN':
            state = "TENNESSEE";
              break;
          case 'TX':
            state = "TEXAS";
              break;
          case 'UT':
            state = "UTAH";
              break;
          case 'VT':
            state = "VERMONT";
              break;
          case 'VI':
            state = "VIRGIN ISLANDS";
              break;
          case 'VA':
            state = "VIRGINIA";
              break;
          case 'WA':
            state = "WASHINGTON";
              break;
          case 'WV':
            state = "WEST VIRGINIA";
              break;
          case 'WI':
            state = "WISCONSIN";
              break;
          case 'WY':
            state = "WYOMING";
            break;
          default:
            state = `${state}`
    }

  console.log(state)

  // ^Above: Switch statement converts abberviated state names to full-spelling. Borrowed code for State Abbreviations from: https://stackoverflow.com/questions/3925195/making-state-abbreviations-from-state-names

  state = state.toLowerCase();
  console.log(state)
  // ^Above: 


  
  const [month, date, year] = requestedOberservationDate.split('/');
  console.log(month)
  // ^Above: Splits the Date Input into Month, Date, and Year

  if (country == "" || country == null) {
    let locationSearch = document.querySelector('#location-search')
    locationSearch.classList.add('invalid')
    alert(`Please enter Location in "City, State, Country" format!`)
    // document.querySelector('#location-search').focus();
    return false;
  };
  // ^Above: Determines if Location Input (specifically Country) is valid.

  if (requestedOberservationDate.length != 10 && country != "" && country != null) {
    let locationSearch = document.querySelector('#location-search')
    locationSearch.classList.remove('invalid')
    let dateSearch = document.querySelector('#date-search')
    dateSearch.classList.add('invalid')
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    // document.querySelector('#date-search').focus();
    return false;
  };
  
  if (requestedOberservationDate.length != 10) {
    let dateSearch = document.querySelector('#date-search')
    dateSearch.classList.add('invalid')
    alert(`Please enter Date in "MM/DD/YYYY" format!`)
    // document.querySelector('#date-search').focus();
    return false;
  };
  // ^Above Determines if Date Input is valid

  if (country != "" && country != null && requestedOberservationDate.length == 10) {
    let locationSearch = document.querySelector('#location-search')
    locationSearch.classList.remove('invalid')
    let dateSearch = document.querySelector('#date-search')
    dateSearch.classList.remove('invalid')
    getLocationID(city, state, country, month);
  };
  // ^Above: If both Location & Date are valid, activates the getLocationID function.
}



// --------------------------------------------------------------------------------------------------------



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



// --------------------------------------------------------------------------------------------------------



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
  } else if (monthInteger == 1) {
    beginSeason = 11;
    endSeason = monthInteger + 2;
  } else if (monthInteger == 2) {
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
  console.log(endSeasonString);
  // ^Above: adds the leading zero back to the single-digit integers.

  let season = `${beginSeasonString}-${endSeasonString}`;
  console.log(season);
  return season;
  // ^Above: converts the season beginning & endpoints to a string
}



// --------------------------------------------------------------------------------------------------------



// BELOW function will obtain neccessary Mushroom Info (i.e. species name + image) to later append to DOM
async function getMushroomInfo(locationIDsString, month) {
  
  removeElements();
  // ^Above: evokes the fucntion remove elements to remove any elements appended to the DOM from a previous search.
  
  let dateRange = seasonString(month)
  // ^ Above: Call upon the "SeasonString" function to produce a range of months to insert into the API URL. It also defines this string as "dateRange".

  let speciesName = document.querySelector(`#species`).value
  console.log(speciesName)
  // ^Above defines the optional user input of "Species" as "speciesName" to insert into the API Url

  let URL
  if (speciesName == "" || speciesName == null) {
    URL = `https://mushroomobserver.org/api/observations?has_images=true&location=${locationIDsString}&date=${dateRange}&format=json&detail=high`;
    } else {
      URL = `https://mushroomobserver.org/api/observations?has_images=true&location=${locationIDsString}&date=${dateRange}&name=${speciesName}&include_subtaxa=true&include_synonyms=true&format=json&detail=high`;
    }
  
  console.log(URL)
  // ^Above uses string interpolation to define the URL for the coming axios request. If a user inputted a species name, it splices that input into the API URL. If not, it only searches with "dateRange" & "locationIDs".
  
  try {
    let response = await axios.get(URL)
    // ^ Above: Second Axios pull request, using string interpolation to include the array of location IDs and Month to narrow results.

    let responseData = response.data.results
    console.log(responseData)
    // ^Above: Defines response results as responseData

    if (responseData.length == 0) {
        // ^Above: Addresses if there are no results to the input query.

      let resultsHeader = document.createElement('h2')
      resultsHeader.classList.add('results')
      resultsHeader.id = 'results-header'
      resultsHeader.innerHTML = `No Matches :(`
      document.querySelector('#results-container').append(resultsHeader)
      // ^Above Creates an element in the DOM that states that there are no results

    } else if (responseData.length > 0) {
      
      let resultsHeader = document.createElement('h2')
      resultsHeader.classList.add('results')
      resultsHeader.id = 'results-header'
      resultsHeader.innerHTML = `Potential Matches`
      document.querySelector('#results-container').append(resultsHeader)
      // ^Above creates a header for the results and appends it to the "mushroom-list" div within the DOM.

      let mushroomList = document.createElement('div')
      mushroomList.classList.add('results')
      mushroomList.id = 'mushroomContainer'
      document.querySelector('#results-container').append(mushroomList)
      // ^Above creates a div container for the array of results.

      for (let i = 0; i < responseData.length; i++) {
        // ^Above: Initiates a for loop in order to grab data from all the match result indices.
  
        let observationID = responseData[i].id
        let mushroomName = responseData[i].consensus.name
        let mushroomImageID = responseData[i].images[0].id
        // ^Above: Defines the oberservation ID, mushroom name, and mushroom image as variables.
  
        appendInfo(observationID, mushroomName, mushroomImageID);
        // ^Above: Initiates the "appendInfo" function to append the above defined variables onto the page.
      };
    }

  } catch (error) {
    console.log(`Error: ${error}`)
  }
  // ^Above: Catches & Logs any errors that occur during the request.
}


// --------------------------------------------------------------------------------------------------------



// BELOW: Function appends procurded API information to the page.
function appendInfo(observationID, mushroomName, mushroomImageID) {

  const result = document.createElement('div')
  result.classList.add('results')
  result.id = `result`
  console.log(result)
  document.querySelector('#mushroomContainer').appendChild(result)
  // ^Above: Creates a div object to contain each result

  const mushroomHeader = document.createElement('a');
  let linkText = document.createTextNode(`${mushroomName}`);
  mushroomHeader.appendChild(linkText);
  mushroomHeader.title = `${mushroomName}`
  let observationURL = `https://mushroomobserver.org/${observationID}`
  mushroomHeader.href = `${observationURL}`
  result.appendChild(mushroomHeader)
  // ^Above: Creates an 'a' hyperlink element containing Mushroom Name and linking to the Observation Page on Mushroom World using the observation ID.

  const mushroomImage = document.createElement('img')
  let imageURL = `https://images.mushroomobserver.org/320/${mushroomImageID}.jpg`
  mushroomImage.src = imageURL
  result.appendChild(mushroomImage)
  // ^Above: Creates a new image object and directs the image source to a URL composed of the image ID.
}



// --------------------------------------------------------------------------------------------------------



function removeElements() {
  let oldSelection = document.querySelector('#results-container')
  while (oldSelection.lastChild) {
    oldSelection.removeChild(oldSelection.lastChild)
  }
}



// --------------------------------------------------------------------------------------------------------



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

