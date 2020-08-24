# CAN YOU EAT IT? - Fungus Identification App

## Project Overview

**CAN YOU EAT IT?** is a web application that helps users identify local fungi. 

## Project Description

We’ve all been there: while on a hike or a stroll, happening upon a cluster of delectable-looking mushrooms. 

Questions race through your mind. What kind of fungi are these? More importantly, are they safe to eat?

Jokes aside, while you may have never ran into this situation before, the above scenario is a common one faced by many foraging hobbyists. 

In fact, amateur foraging has been on the rise in the U.S. for a few years now. And, the trend has only snowballed in the era of COVID-19. [According to Marla Emery](https://www.discovermagazine.com/planet-earth/looking-for-a-new-hobby-urban-foraging-is-making-a-comeback), a research geographer with the USDA Forest Service, “There’s just been an explosion of foraging presence in social media.”

**CAN YOU EAT IT?** is able to help these amateur foraging hobbyists find more information about their discoveries by connecting user-input location, season, and observation information with API data.


## API and Data Sample

**CAN YOU EAT IT?** pulls data from two API sources: *Mushroom Observer* & Google.

[*Mushroom Observer*](mushroomoberver.org), is a social network in which fungi-enthusiasts can upload and tag fungi by image, location, and season. Through a system of analysis, discussion, and voting, users are able to reach a consensus determination of species.

Since its inception in 2006, *Mushroom Observer* has amassed over 10,000 contributors and over 350,000 posts.

**CAN YOU EAT IT?** augments *Mushroom Observer*’s trove of user-submitted content with information provided by Google’s sophisticated Maps & Places APIs. Specifically, the Google integration helps users more easily interact with the location information provided by Mushroom Observer. 

For example, while inputting location information regarding a current observation, Google-enabled autofill helps point users towards entering information that will be recognized by the API.

In future iterations, **CAN YOU EAT IT?**, will enable users to display location information on an interactive map.

### Sample JSON:

Observation Information:

![Observations JSON](/CanYouEatItFungusIdentificationApp/ReadME_Images/Mushroom_Observer-JSON-Observations.pdf)

```json

  {'date': '2006-05-21 07:17:22',
  'gbif_info': {'canonicalName': 'Xerocomells dryophils',
    'class': 'Agaricomycetes',
    'classKey': 186,
    'confidence': 98,
    'family': 'Boletaceae',
    'familyKey': 8789,
    'gens': 'Xerocomells',
    'gensKey': 8184844,
    'kingdom': 'Fngi',
    'kingdomKey': 5,
    'matchType': 'EXACT',
    'order': 'Boletales',
    'orderKey': 1063,
    'phylm': 'Basidiomycota',
    'phylmKey': 34,
    'rank': 'SPECIES',
    'scientificName': 'Xerocomells dryophils (Thiers) N. Siegel, C.F. Schwarz & J.L. Frank, 2014',
    'species': 'Xerocomells dryophils',
    'speciesKey': 7574003,
    'stats': 'ACCEPTED',
    'synonym': False,
    'sageKey': 7574003},
  'image_id': 11,
  'image_rl': 'http://mshroomobserver.org/images/320/11',
  'label': 'Xerocomells dryophils',
  'location': 38,
  'observation': 10,
  'thmbnail': 1,
  'user': 1}

```

Location Information:

![Locations JSON](/CanYouEatItFungusIdentificationApp/ReadME_Images/Mushroom_Observer-JSON-Locations.pdf)

```json






```


## Wireframes

Desktop & Mobile wireframes can be accessed [here](https://drive.google.com/drive/folders/1YU20tyk7ZQzrnGT69s-Lwx3lxkWDv5LX?usp=sharing).


### MVP/PostMVP

#### MVP 

In order for **CAN YOU EAT IT?** to be considered a success, I needed to complete the following (rank in order of prority):

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

Priority Matrix can be found [here](https://app.lucidchart.com/invitations/accept/4a879dc7-b84a-40c9-afa8-f46d3adbfb18)

## Timeframes

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | :---: |
| Mushroom Observer API Pull | H | 8hrs| 20hr | 
| HTML5 Framework | H | 2hrs| 2hrs |
| Basic CSS Styling | H | 8hrs| 8hrs |
| JS Functions | H | 15hrs| 15hrs |
| Advanced CSS Styling | M | 8hrs| TBD |
| Google API functionality (location autofill) | M | 8hrs| 2 hrs |
| Toggling "Loading" Element | L | 4hrs| 4 hrs |
| Total | H | 53hrs| 51hrs |

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


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  



Previous Ideas:

======

Dialect-Origin - An interactive map outlining the dialectical differences within language -- however, it was difficult to locate an API for this.

Billboard Hot 100 - I found a good API for this, however, other than listing the Top Singles for the requested date, I did not feel like the idea provided much original value. (API: https://data.world/kcmillersean/billboard-hot-100-1958-2017)

COVID At-Home-Workout Generator - Users could input their requirements (such as no equipment, or a specific part of their body). I found a very informational API, however, it didn't contain any images or graphical component. (API: https://wger.de/en/exercise/overview/)

Neopets - An engine that would output the requested Neopet. There were no good APIs for this. (API: https://neopets.herokuapp.com/api/)

HitchHiker's Guide To the Galaxy Quote Generator (API: https://h2g2.com/)

Tarantino Curse Words & Violence Counter - (API: https://datahub.io/five-thirty-eight/tarantino)

RuPaul's Drag Race Contestants - Not sure how to make this information useful (API: https://drag-race-api.readme.io/docs)

Tennis Scores = Found a few good APIs, but not sure that can be done with this that hasn't already been done. (APUs: https://drag-race-api.readme.io/docs/ http://apidocs.tennisjack.com/methods / https://github.com/n63li/Tennis-API)

---------------------------------------------

> DiVRse Sense - Implicit Aptitude Test

> An App that administers an Implicit Aptitude Test (IAT) to measure a user's level of implicit bias (commonly referred to as unconscious bias).

> In short, the IAT measures the strengths between identities (i.e. African-Americans, LGBT+ people, etc.) with concepts (such as good or bad or stereotypes like intelligence or athletic prowess). 

> The idea is that the faster that people are able to associate an identity with an idea reflects their unconscious biases concerning that identity. For example, if a user is able to more quickly associate the word "good" with images of lighter skinned people, then that would indicate bias.


> While doing an IAT, users are asked to quickly sort words into categories that are on the left and right hand side of the computer screen. The test is broken into five parts:

    >1. Sorting words relating to concepts (i.e. identifying good vs. bad words). This step primes the participant for the exercise.
    >2. Distinguishing between our two identiy categories (i.e. light-skinned vs. dark-skinned). Again, this step primes the participant for the exercise.
    >3. This section combines exercises 1 & 2. On the left-hand side would be the "good" and "light-skinned" categories, whereas on the right would be the "bad" and "dark-skinned" categories.
    >4. This section flips the placement of identity concepts. Now, "dark-skinned" would be on the left and "light-skinned" would be on the right. The "good" and "bad" categories remain in their respective positions.
    >5. This section flips the placement of "good" vs. "bad" concepts.

  >In the backgroudn, the test uses a timer in order to record the user's reaction times for third and fifth sections of the test. These times are averaged, subtracted, and then the result is computed into a score informing a user of their bias. The user is presented this score.

  Faces broken down by Ethnicity: 
>  Generated Photos: https://generated.photos/datasets

>  UTK Face: https://susanqq.github.io/UTKFace/
>  U Texas Face: http://live.ece.utexas.edu/research/texas3dfr/

Words broken down by postive or negative connotation:
> https://www.datamuse.com/api/
> https://www.wordsapi.com/
> https://dictionaryapi.com/products/api-collegiate-thesaurus#:~:text=The%20Collegiate%C2%AE%20Thesaurus%20API,choices%2C%20examples%2C%20and%20explanations.
> https://words.bighugelabs.com/site/api
