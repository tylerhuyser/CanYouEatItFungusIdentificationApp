# CAN YOU EAT IT? - Fungus Identification App

## Project Overview

**CAN YOU EAT IT?** is a tool that helps identify fungi through images & location. 

## Project Description

This app allows users to determine categorical information for various fungi, including toxicity. Users will be able to input their location and retrieve images and names of fungi that 

## API and Data Sample

The API I will be using relies on data compiled from MushroomObserver.org. *Mushroom Observer* is a social network of sorts, in which fungi-enthusiasts can upload and tag fungi by image, location, genus, and season. Since its inception in 2006, the site has amassed over 10,000 contributors and over 350,000 posts.

The API can be accesssed [here](https://github.com/bechtle/mushroomobser-dataset).

Furthermore, the following fungi-focused APIs will be used to supplement the *Mushroom Observer* information:

In addition, the following APIs contain further images and information on toxicity:

* [The Audubon Society Field Guide to North American Mushrooms](https://archive.ics.uci.edu/ml/datasets/Mushroom)
* [Mushrooms classification - Common genus's images (via Kaggle)](https://www.kaggle.com/maysee/mushrooms-classification-common-genuss-images)

Lastly, in order to display user requested information on a map, the [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) will be used.

### Sample JSON:

From the GitHub [repository](https://github.com/bechtle/mushroomobser-dataset):

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
## Wireframes

Desktop & Mobile wireframes can be accessed [here](https://drive.google.com/drive/folders/1YU20tyk7ZQzrnGT69s-Lwx3lxkWDv5LX?usp=sharing).


### MVP/PostMVP

#### MVP 

* Find & use one (1) API
* Create Input Forms for Users to Request Information (location, date/season, and genus)
* Build Functionality to Output Requested Information as a **LIST**
* Craft an Aesthetically-Pleasing & Responsive UI

#### PostMVP  

* Incorporate Google Maps Functionality
* Creating a toggling "Loading" Element

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 17| Project Approval | Complete
|August 18| Core Application Structure (HTML, CSS, etc.) | Complete
|August 19| Initial Clickable Model  | Complete
|August 20| MVP | Complete
|August 21| Presentations | Complete

## Priority Matrix

Priority Matrix can be found [here](https://app.lucidchart.com/invitations/accept/4a879dc7-b84a-40c9-afa8-f46d3adbfb18)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Form | H | 2hrs| 1hr | 1hr |
| Working with First API (List) | H | 8hrs| 24hrs | 24hrs |
| JS Functions | H | 8hrs| 10hrs | 10hrs |
| CSS Styling | H | 8hrs| 8hrs | 8hrs |
| Working with Second API (Map) | M | 12hrs| 2hrs | 2hrs |
| Working with Third API (Random Hero Image) | L | 4hrs| TBD | TBD |
| Total | H | 34hrs| TBD | TBD |

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
