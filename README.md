# CAN YOU EAT IT? - Fungus Identification App

## Project Overview

**CAN YOU EAT IT?** is a web application that helps users identify local fungi. 

## Project Description

We’ve all been there: while on a hike or a stroll, happening upon a cluster of delectable-looking mushrooms. 

Questions race through your mind. What kind of fungi are these? More importantly, are they safe to eat?

Jokes aside, while *you* may have never ran into this situation before, the above scenario is a common one faced by many foraging hobbyists. 

In fact, amateur foraging has been on the rise in the U.S. for a few years now. And, the trend has only snowballed in the era of COVID-19. [According to Marla Emery](https://www.discovermagazine.com/planet-earth/looking-for-a-new-hobby-urban-foraging-is-making-a-comeback), a research geographer with the USDA Forest Service, “There’s just been an explosion of foraging presence in social media.”

**CAN YOU EAT IT?** is able to help these amateur foraging hobbyists find more information about their discoveries by connecting user-input location, season, and observation information with API data.


## API and Data Sample

**CAN YOU EAT IT?** pulls data from two API sources: *Mushroom Observer* & Google.

[*Mushroom Observer*](https://www.mushroomoberver.org), is a social network in which fungi-enthusiasts can upload and tag fungi by image, location, and season. Through a system of analysis, discussion, and voting, users identify the species (referred to as "the consensus").

Since its inception in 2006, *Mushroom Observer* has amassed over 10,000 contributors and over 350,000 posts.

**CAN YOU EAT IT?** augments *Mushroom Observer*’s trove of user-submitted content with information provided by Google’s sophisticated Maps & Places APIs. 

Specifically, the Google integration helps users more easily interact with the location information provided by *Mushroom Observer*. 

For example, while inputting location information, Google-enabled autofill helps point users towards nearby locations that will be best-recognized by the API.

In future iterations, **CAN YOU EAT IT?**, will enable users to display location information on an interactive map.

### Sample JSON:

Observation Information:

![Observations JSON](https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/JSON_Screenshots/Observations_JSON_Console.png)

JSON Observations Schema:

```

create_table "observations", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.date "when"
    t.integer "user_id"
    t.boolean "specimen", default: false, null: false
    t.text "notes"
    t.integer "thumb_image_id"
    t.integer "name_id"
    t.integer "location_id"
    t.boolean "is_collection_location", default: true, null: false
    t.float "vote_cache", default: 0.0
    t.integer "num_views", default: 0, null: false
    t.datetime "last_view"
    t.integer "rss_log_id"
    t.decimal "lat", precision: 15, scale: 10
    t.decimal "long", precision: 15, scale: 10
    t.string "where", limit: 1024
    t.integer "alt"
    t.string "lifeform", limit: 1024
    t.string "text_name", limit: 100
    t.text "classification"
    t.boolean "gps_hidden", default: false, null: false
  end

```

Location Information:

![Locations JSON](https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/JSON_Screenshots/Locations_JSON_Console.png)

JSON Locations Schema

```JSON Locations Schema

create_table "locations", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "version"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "user_id"
    t.integer "description_id"
    t.integer "rss_log_id"
    t.integer "num_views", default: 0
    t.datetime "last_view"
    t.float "north"
    t.float "south"
    t.float "west"
    t.float "east"
    t.float "high"
    t.float "low"
    t.boolean "ok_for_export", default: true, null: false
    t.text "notes"
    t.string "name", limit: 1024
    t.string "scientific_name", limit: 1024
    t.boolean "locked", default: false, null: false
  end

```

## Wireframes

**Desktop**

![Desktop](https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Videos/GIF_Desktop.gif)

**Mobile**

![Mobile](https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Videos/GIF_Mobile.gif)

<figure align="left">
  <h4><strong>Desktop Landing Page</strong></h4>
  <img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Desktop_Landing_Page.png" width="40%">
</figure>

<figure align="right">
  <h4><strong>Data Validation (Incorrect)</strong></h4>
  <img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Desktop_Data_Validation_Incorrect.png" width="40%">
</figure>

**On Hover Interaction**

<img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Desktop_Hover_Selection.png" width="40%">

**Results Display**

<img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Desktop_Results.png" width="40%">

**Mobile Landing Page**

![Mobile Landing Page](https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Mobile_landing_page.png)

**Mobile Results**

<div>
<img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Mobile_results_pt.1.png" width="30%" /> <br>
<img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Mobile_results_pt.2.png" width="30%" /> <br>
<img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Mobile_results_pt.3.png" width="30%" />
</div>


### MVP/PostMVP

#### MVP

In order for **CAN YOU EAT IT?** to be considered a success, the app needs to contain the following attributes (ranked in order of prority):

* Pull data from the *Mushroom Observer* API successfully
* HTML5 Framework (namely user input form for obsevation location & season)
* Basic CSS Styling
* Javascript Functionality (validate user input, pull requested data, append results to page)

#### PostMVP  

* Advanced CSS Styling (flexbox & interactive input validation)
* Google API functionality (location autofill)
* Toggling "Loading" Element (while requested data pulls from Mushroom Observer)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval | Complete
|August 18| Core Application Structure (HTML, CSS, etc.) | Complete
|August 19| Initial Clickable Model  | Complete
|August 20| MVP | Complete
|August 21| Presentations | Complete

## Timeframes

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Mushroom Observer API Pull | H | 8hrs| 20hr | 
| HTML5 Framework | H | 2hrs| 2hrs |
| Basic CSS Styling | H | 8hrs| 8hrs |
| JS Functions | H | 15hrs| 15hrs |
| Advanced CSS Styling | M | 8hrs| TBD |
| Google API functionality (location autofill) | M | 8hrs| 2 hrs |
| Toggling "Loading" Element | L | 4hrs| 4 hrs |
| Total | N/A | 53hrs| 51hrs |

## Functionality

**Data Input**

The app accepts three inputs in order to help the user identify the fungi in question. These inputs are: location &date (required), and genus (optional).

**Validation**

After hitting submit, the data undergoes a validation process. 

First, the function checks if the location input has been entered in proper "City, State" and Country" format. As the API doesn't include state abbreviations, a Switch/Case statement converts abbreviated strings into their elongated spellings (for example, "CA" would be converted to "California").

Next, the function determines whether the date field contains "MM/DD/YYYY" formatting. 

If either fields are entered incorrectly, the function alerts the user to resubmit the input with proper formatting.

Should the inputs pass both validation tests, a spiffy 'loader' graphic is cued while results are compiled (is there anything spiffier than a mushroom jumping for joy?).

**Gathering Location IDs**

The Mushroom Observer API holds a wealth of information, which can act as a double-edged sword. While the information available is quite comprehensive, it also consumes an extensive amount of data & memory.

By viewing the [API schema](https://github.com/MushroomObserver/mushroom-observer/blob/master/db/schema.rb), you can see that pertinent information for each observation is spread across multiple tables and codified with a corresponding ID. Thus in order to include all of the user's search parameters, multiple pull requests are required-- the first of which being location.

An axios pull request is made to the "Location" table in which a comprehensive list of locations and their corresponding IDs is located. Using a for loop, each ID is checked to see if it matches the user's inputted city, state, and country. If so, the location is stored and passed through as props to the following Get Info function.

**Getting Season**

Running concurrently with the location function is an algorithm that converts the user's obervation date into a "season".

The average mushroom season runs four (4) to six (6) weeks in length, and Mushroom Observer enables users to search by season via integer ranges (for example, January through March would be 01-03).

To create a season from the user's date input, the month is parsed into two variables. A two-month cushion is added to the first variable, representing the season's upper limit, whereas a two-month cuhsion is subtracted from the second variable, representing the season's lower limit. The two variables are then joined into one string, stored in a new variable (known as 'season'), and passed as props into the next function.

**Getting Mushrom Info**

This is where we get our data. A second API call is made to the 'Observations' table, where endpoints containing species name, location ID, and image URL. The Location ID and season properties are incorporated through string interpolation of the API's URL -- reducing the processing time for the request.

If there are no matches, the function terminates the loader graphic and informs the user that no matches were found.

If there are matches, the Observation ID, species name, and image URL are saved in corresponding variables and passed as properties into the appending function (see below).

**Appending Results**

Using a for loop, a div is created for each result. Each div includes the corresponding mushroom's name, a link to its profile on the Mushroom Observer website, and an image.

## Challenges

**API Calls**

The Mushroom Observer API posed some unique (and educational) challenges and constraints over the course of this project. 

While the API provided a wealth of information to play with, the organization of this information was unique. By viewing the [API schema](https://github.com/MushroomObserver/mushroom-observer/blob/master/db/schema.rb) (pictured below), you can see that pertinent information for each observation is spread across multiple tables.

This issue was exacerbated by the API's twenty (20) pulls-per-minute limitation. If this limit was exceeding, the API would lock the user out.

Thus, in order to pull pertinent information for the user (such as location, image, and species), the axios requests had to be conducted as efficiently as possible.

From the code snippet below you can see that axios requests were minimzed to two pulls. The first obtained location IDs, which were then string interpolated into the second request so as to obtain the proper endpoints for the necessary information to append to the page.

```
async function getMushroomInfo(locationIDsString, month) {
  
  removeElements();
  // ^Above: evokes the fucntion remove elements to remove any elements appended to the DOM from a previous search.

  let speciesName = document.querySelector(`#species`).value
  console.log(speciesName)
  // ^Above defines the optional user input of "Species" as "speciesName" to insert into the API Url
  
  let URL = `https://mushroomobserver.org/api/observations?has_images=true&location=${locationIDsString}&date=${dateRange}&format=json&detail=high`;
  
  // ^Above uses string interpolation to define the URL for the coming axios request. If a user inputted a species name, it splices that input into the API URL. If not, it only searches with "dateRange" & "locationIDs".
  
  try {
    let response = await axios.get(URL)
    // ^ Above: Second Axios pull request, using string interpolation to include the array of location IDs and Month to narrow results.

    let responseData = response.data.results
    // ^Above: Defines response results as responseData

    
    if (speciesName == "" || speciesName == null) {
    } else {
      for (let i = responseData.length - 1; i >= 0; i--) {
        if (responseData[i].consensus.name.includes(`${speciesName}`) == false) {
          responseData.splice(i, 1);
        };
      };
    };


```

**Data Validation**

Another challenge posed by the project lay in obtaining "clean" data from the inputs. The Mushroom Observer API could only recognize data in particular formats (for example, "California" could only be recognized in its elongated spelling, not its abbreviation, "CA"). That being said, the below validation test was used to ensure that the user inputs contained information in proper formatting.

```

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
  };

```

**Loader**

As aforementioned, the Mushroom Observer API contains a wealth of information, compiled from over (350,000!) user-submitted posts. While the function to locate corresponding information is constructed as efficiently as possible, it still takes quite some time to sift through this enormous amount of data (sometimes taking over 20 seconds to render).

In order to signify to the user that the app is indeed working (i.e. compiling results), a loading graphic was deployed.

The challenge here lay in determining exactly when to toggle the loader on and off. Through trial and error, I determined that the loader should cue when the data validation tests were passed (just before the first axios request is initiated) and should end when either a.) no results are found or b.) when all matching results have appended to the page. 

You can view the code to toggle the loader on and off below:

```
loader.classList.remove('hidden')

[...]

loader.classList.add('hidden')

```