# Football fever

Technical challenge set by DevelopMe.

Can be viewed online [here](http://https://tomhall321.github.io/football-fever/).

## Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

You will need to have npm installed in order to set the application up.

### Installing

Clone the git repository and run npm install.

`git clone git@github.com:tomHall321/football-fever.git`

`npm install`

When all the packages are installed, run the app:

`npm start`

Open http://localhost:3000 to view it in the browser.

# Brief

Create a tool which randomly picks 5-a-side football teams from a list of 10 names.

# Planning

As per the brief, the MVP was to build an app that could take 10 names and randomly assign them to two separate teams of 5.
 
In addition to this I set out a list of features I wanted to achieve:

- Specify number of players (minimum 2, maximum 22)
- Sort the teams based on player skill level
- Set team names
- The team list should include player name and player skill
- Ensure some degree of validation exists (blank player or team names should not be possible)
- An about page to help the user understand the purpose of the application
- The app should persist for the user, and also have a reset function
- Build a back end using Laravel to track teams and players

# Styling

- Bold colour scheme
- App to be reminiscent of Teletext (find teletext style font)
- Information to be displayed on one screen 
- Needs to be responsive

I created simple wireframes for each page of the app: 
<img src="src/styles/images/playerPage.png" width="500px">
<img src="src/styles/images/teamPage.png" width="500px">
<img src="src/styles/images/aboutPage.png" width="500px">

# Technical decisions

- I decided to use React to build the components and Redux to handle state management.
- Conditional rendering instead of specifying routes with React-router.
- If time allows, deploy a backend built using Laravel.
- Git branch naming convention to focus my work (data/, logic/, components/, styling/).

# Testing

- 

# What I've learnt

- 