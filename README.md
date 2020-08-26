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

<img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Mobile_results_pt.1.png" width="33%" /><img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Mobile_results_pt.2.png" width="33%" /><img src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Mobile_results_pt.3.png" width="33%" />

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

## Priority Matrix

Priority Matrix can be found ![here](https://app.lucidchart.com/invitations/accept/4a879dc7-b84a-40c9-afa8-f46d3adbfb18)

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

## Challenges

The Mushroom Observer API posed some unique (and educational) challenges and constraints over the course of this project. 

While the API provided a wealth of information to play with, the organization of this information was unique. By viewing the [API schema](https://github.com/MushroomObserver/mushroom-observer/blob/master/db/schema.rb) (pictured below), you can see that pertinent information for each observation is spread across multiple tables.

Another limitation posed by the API was the no more than twenty (20) pulls-per-minute requirement. Otherwise, the API would lock the user out. 

Thus, the axios requests to pull pertinent information for the user (such as location, image, and species), had to be conducted as efficiently as possible.

From the code snippet included below, you can see that two pull requests were necessary. The first, determined the location IDs associated with the user’s inputted location. Whereas the second obtained matching image IDs, species names, and 

```
async function getMushroomInfo(locationIDsString, month) {
  
  removeElements();
  // ^Above: evokes the fucntion remove elements to remove any elements appended to the DOM from a previous search.
  
  let loader = document.querySelector('.loader')
  
  let dateRange = seasonString(month)
  // ^ Above: Call upon the "SeasonString" function to produce a range of months to insert into the API URL. It also defines this string as "dateRange".

  let speciesName = document.querySelector(`#species`).value
  console.log(speciesName)
  // ^Above defines the optional user input of "Species" as "speciesName" to insert into the API Url
  
  let URL = `https://mushroomobserver.org/api/observations?has_images=true&location=${locationIDsString}&date=${dateRange}&format=json&detail=high`;
  
  console.log(URL)
  // ^Above uses string interpolation to define the URL for the coming axios request. If a user inputted a species name, it splices that input into the API URL. If not, it only searches with "dateRange" & "locationIDs".
  
  try {
    let response = await axios.get(URL)
    // ^ Above: Second Axios pull request, using string interpolation to include the array of location IDs and Month to narrow results.

    let responseData = response.data.results
    console.log(responseData)
    // ^Above: Defines response results as responseData

    
    if (speciesName == "" || speciesName == null) {
      console.log(responseData)
    } else {
      for (let i = responseData.length - 1; i >= 0; i--) {
        if (responseData[i].consensus.name.includes(`${speciesName}`) == false) {
          responseData.splice(i, 1);
        };
      };
    };


```

