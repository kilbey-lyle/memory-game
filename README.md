# Click It!

Click it is a memory game designed for all ages. Created and developed by Lyle Kilbey as part of Code Institutes Web App Development Qualification. 

This website has been developed to show case an interactive front end website.

## UX

### Project Goals
The goal of 'Click It!' is to create a simple game for all ages. Pitting friends and family against each other to try reach the highest score without making a single mistake. Click it will contain easy to use share features to allows users to to brag about their superior memory via social media and email. The inbuilt competition CLick It! provides, combines for the perfect blend of fun and frustration. 

### Player Goals
A player will be motivated to visit Click It! to show their short-term memory prowess, wether attempting to best themselves or a peer. To a player their goal is simple, enjoy attempting to get the highest possible sequence in an environment with a ever increasing level of complexity. 

### Developer and Business Goals
Build a simple single-player memory game. Using available social media and email API's to allow users to quickly and easily share their score from each round attempted. 

### User Stories
As the sole developer of this website, my goal is to create an intuitive experience for a user that they will remember. The following points are applicable to the users of the site and have been given a priority using the MoSCoW Method. Classification of ranking used can be found [here](https://sax1johno.medium.com/prioritizing-your-user-stories-with-the-moscow-method-8bf42d427da6).

|ID|User Story|MoSCoW Ranking|Evidence of Implementation|Notes/Ranking justifications|
|-| ------------------------- |:-------:| -----|---|
|1|As a user, I would like to be able to share my result to facebook so that I can brag about my score to my peers|M| N/A| To maximize the family competition side of Click It! facebook average user base is an ideal target marketing audience. More information on social media audiences can be found [here](https://studioaps.in/best-ways-to-use-social-media-to-promote-online-gaming/#promote-gaming-toc-1b).|
|2|As a user, I would like to be able to share my result to 'X' (Previously known as Twitter) so that I can brag about my score to my peers|S|N/A|In comparison to Facebook X average user base does not fit the casual nature of Click It!. However, the conversational style of X's post system does fit well the Click It's desire to create the feeling of competition. More information on social media audiences can be found [here](https://studioaps.in/best-ways-to-use-social-media-to-promote-online-gaming/#promote-gaming-toc-1b) |
|3|As a user, I would like to be able to share my result to Instagram so that I can brag about my score to my peers|W|N/A|In comparison to Facebook's and X's average user base, Instagram's user's does not fit the casual nature of Click It! More information on social media audiences can be found [here](https://studioaps.in/best-ways-to-use-social-media-to-promote-online-gaming/#promote-gaming-toc-1b) |
|4|As a user, I would like instructions on how to play the game when I visit the site so I know how to play the game.|M|N/A|To make the bridge the gap in non-intuitive part of the game. |
|5|As a user, I would like to have access to the instruction at any point in the game so I can have their questions on how to play the game answered at any time.|M|N/A||
|6|As a user, I would like to know my score at any time so I can track my progress.|M|N/A| To aid in the competitive feeling on the game.|
|7|As a user, I would like to track my highest score of all time so I can see my progress a sa player.|W|N/A|This will not be implemented due to technical restrictions.|
|8|As a user, I would like to know my highest score of my current play session so I can see my progress as a player|C|N/A|Not critical to game functionality but has the potential of increase player enjoyment.|
|9|As a user, I would like to be able to change the theme my game is rendered in so I can have characters and imagery which suits my personal atheistic better.|C|N/A|Not critical to game functionality however could increase player interest in addition to creating the possibility of monetized additional themes|
|10|As a user, I would like to know when I have lost the game so I know when and why my score has been reset|M|N/A||
|11|As a user, I would to be able to play multiple games in a play session so I can improve my game play.|M|N/A||
|12|As a user I would like to be able to share my result via email|S|N/A|To make sure their is an easy option of sharing my result with co-workers|
|13|As a user, I would like a character in the game so it feels more interactive.|S|N/A|Will increase interactivity with user but not system critical |
|14|As a user, I would like to know what sequence I need to remember so I can play the game. |M|N/A||
|15|As a user, I would like to be able to increase difficulty so game remains engaging when I become an expert|C|N/A|As the game naturally increasing in complexity It may not be necessary|

### Design choices
PLACE HOLDER TEXT
### Wireframes
PLACE HOLDER TEXT

## Features
Click It!'s feature set is informed by the above users story and where appropriate will be linked back to a user stroy by referencing the stroy's ID. 
### Existing Features
- 
### Features Left to Implement
- Welcome Instructions Screen Pop-up (*User Story ID: 4*)
    - Happens on document loading
    - Introduces game's mascot
    - Contains instructions on how to play the game
    - Is overlaid the main game screen
    - Ask player for their name
- Main Game (*User Story ID: 6, 8, 10, 11, 14*)
    - Starts on new game button press
    - consists of a computer turn and player turn until player makes an incorrect move
        - computer turn: Add's an additional move to sequence and then show current sequence
        - Player turn: user inputs what they believe is current sequence
    - Game ends when player inputs current move
    - Increase score by one each successful player turn
    - If player score is greater that any score from current play session it become great score
- Mascot (*User Story ID: 13*)
    - Is a charming, bold personality character
        - The desired affect would be to follow the branding philosophy set by duolingo's mascot. Further information on this can be found [here](https://www.kimp.io/duolingo-logo/#gba37fe8cb1d9)
    - Is the character the player is 'playing against'
    - Adds text commentary throughout the game
        - Language used in commentary become more confident he is going to win as the game progresses and increases in complexity
- Score sharing (*User Story ID: 1, 2, 3, 12*)
    - opportunity to share given to players at the end of each session
    - will give options of facebook and email sharing
    - shared post will include as much Click It branding as possible
    - Will include score achieved
- Themes (*User Story ID: 9*)
    - default set to farm yard theme
    - will be developed with future additional themes in mind
    - will allow user to select theme form setting
- Instructions/Settings (*User Story ID: 5, 15*)
    - will be a pop-up that overlays over main game screen
    - will show instructions on how to play the game
    - will allow user to change player name 
    - will user to change difficulty

## Technologies used
- HTML - To create a basic site
- CSS - To create a nice, standout front-end and to give a great user experience
- Javescript - To implement game logic, and handle API integrations
- Facebook's sharing on the web - To handle score sharing to facebook
- EmailJs - To handle score sharing via email
- Balsamiq - To create a wireframes

## Testing

A combination of manual, validator testing and automated unit tests will be used to help ensure quality of code over the course development. For full details on testing please see [testing.md](testing.md).

## Deployment
The site was deployed to Git Hub pages using the following steps:

1. In the Github repository, go to the Settings tab
2. Navigate to Code and Automation and select 'Pages'
3. In the Build and Deployment section for Source, select 'Deploy from a branch' from the drop-down list
4. For Branch, select 'main' from the drop-down list and Save
5. On the top of the page, the link to the complete website is provided
7. Link updated to ''
6. The deployed site will update automatically upon new pushes to the main branch

## Credits
