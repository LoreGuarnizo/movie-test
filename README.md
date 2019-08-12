## Run the app locally

In order to run the application in the development mode take the following steps:

1. git clone https://github.com/LoreGuarnizo/eventio.git
2. npm install
3. npm start

## Technical Guide

### Overview

This is a react application with sass as a preprocessor.  It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)


### Project Structure

CRA (Create React App) was used to setup this project. 

This project is modularized with components and services taking care of requests. All components are intended to be totally isolated from each other and rehusable.

### Progress

#### Feature 1:  Discover

* In the discovery view, add a search bar at the top to allow users to query
information about movies.
* If the search field is empty, show the discovery results

#### Feature 2:  Search 

Almost finished. 
Currently, for mobile size, the list filter style is the same as in desktop size.  So CSS mediaquery changes need to be done in the Events/List folder.

#### Feature 3:  Filter by rating

* The rating is a value between 0 and 10.
* Add a rating filter in the form of five stars like.
* When selecting a star, all the stars to the left should be selected as well.

* The range of each star is 2, so, if the first star is selected, only movies
with rating 0-2 should appear. If the second star is selected, only movies
with rating 2-4 should appear, and so on.
* If the star clicked is the currently active, disable the filter.
* Do this filtering on the client side.

#### Feature 4:  Detail view
Not Done :( ... I wanted to spend time on my weekend.


