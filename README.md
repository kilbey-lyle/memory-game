# Click It!

Click it is a memory game designed for all ages. Created and developed by Lyle Kilbey as part of Code Institutes Web App Development Qualification. 

This website has been developed to show case an interactive front end website.
![Resposive UI image](assests/imgs/readmeimgs/device_look.png)

## UX

### Project Goals
The goal of 'Click It!' is to create a simple game for all ages. Pitting friends and family against each other to try reach the highest score without making a single mistake. Click it will contain easy to use share features to allows users to to brag about their superior memory via social media and email. The inbuilt competition Click It! provides, combines for the perfect blend of fun and frustration. 

### Player Goals
A player will be motivated to visit Click It! to show their short-term memory prowess, whether attempting to best themselves or a peer. To a player their goal is simple, enjoy attempting to get the highest possible sequence in an environment with a ever increasing level of complexity. 

### Developer and Business Goals
Build a simple single-player memory game. Using available social media and email API's to allow users to quickly and easily share their score from each round attempted. 

### User Stories
As the sole developer of this website, my goal is to create an intuitive experience for a user that they will remember. The following points are applicable to the users of the site and have been given a priority using the MoSCoW Method. Classification of ranking used can be found [here](https://sax1johno.medium.com/prioritizing-your-user-stories-with-the-moscow-method-8bf42d427da6). The use of MoDCoW creates Prioritization of task and will dedicate the order of development.  

|ID|User Story|MoSCoW Ranking|Evidence of Implementation|Notes/Ranking justifications|
|-| ------------------------- |:-------:| -----|---|
|1|As a user, I would like to be able to share my result to facebook so that I can brag about my score to my peers|M| ![user story evidence](assests/imgs/readmeimgs/evid-us1.png)| To maximize the family competition side of Click It! facebook average user base is an ideal target marketing audience. More information on social media audiences can be found [here](https://studioaps.in/best-ways-to-use-social-media-to-promote-online-gaming/#promote-gaming-toc-1b).|
|2|As a user, I would like to be able to share my result to 'X' (Previously known as Twitter) so that I can brag about my score to my peers|S|Did not implement|In comparison to Facebook X average user base does not fit the casual nature of Click It!. However, the conversational style of X's post system does fit well the Click It's desire to create the feeling of competition. More information on social media audiences can be found [here](https://studioaps.in/best-ways-to-use-social-media-to-promote-online-gaming/#promote-gaming-toc-1b) |
|3|As a user, I would like to be able to share my result to Instagram so that I can brag about my score to my peers|W|Did not implement|In comparison to Facebook's and X's average user base, Instagram's user's does not fit the casual nature of Click It! More information on social media audiences can be found [here](https://studioaps.in/best-ways-to-use-social-media-to-promote-online-gaming/#promote-gaming-toc-1b) |
|4|As a user, I would like instructions on how to play the game when I visit the site so I know how to play the game.|M|![user story evidence](assests/imgs/readmeimgs/evid-us4.png)|To bridge the gap for the non-intuitive part(s) of the game. |
|5|As a user, I would like to have access to the instruction at any point in the game so I can have their questions on how to play the game answered at any time.|M|![user story evidence](assests/imgs/readmeimgs/evid-us4.png)||
|6|As a user, I would like to know my score at any time so I can track my progress.|M|![user story evidence](assests/imgs/readmeimgs/evid-us6.png)| To aid in the competitive feeling of the game.|
|7|As a user, I would like to track my highest score of all time so I can see my progress a sa player.|W|Did not implement|This will not be implemented due to technical restrictions.|
|8|As a user, I would like to know my highest score of my current play session so I can see my progress as a player|C|Did not implement|Not critical to game functionality but has the potential of increasing player enjoyment.|
|9|As a user, I would like to be able to change the theme my game is rendered in so I can have characters and imagery which suits my personal atheistic better.|C|Did not implement|Not critical to game functionality however could increase player interest in addition to creating the possibility of monetized additional themes|
|10|As a user, I would like to know when I have lost the game so I know when and why my score has been reset|M|![user story evidence](assests/imgs/readmeimgs/evid-us10.png)||
|11|As a user, I would to be able to play multiple games in a play session so I can improve my game play.|M|![user story evidence](assests/imgs/readmeimgs/evid-us11.png)||
|12|As a user I would like to be able to share my result via email|S|![user story evidence](assests/imgs/readmeimgs/evid-us12.png)|To make sure their is an easy option of sharing my result with co-workers|
|13|As a user, I would like a character in the game so it feels more interactive.|S|Did not implement|Will increase interactivity with user but not system critical |
|14|As a user, I would like to know what sequence I need to remember so I can play the game. |M|Otter button mid flash. ![user story evidence](assests/imgs/readmeimgs/evid-us14.png)||
|15|As a user, I would like to be able to increase difficulty so game remains engaging when I become an expert|C|UI added but not implimented|As the game naturally increasing in complexity It may not be necessary|

### Design choices
This section will outline and justify design choices. 

#### Themes
The first theme for Click It! and it's default theme is going to base around the animal kingdom. As an easily recognizable theme to all ages groups it should give players a sense of familiarity. In addition to being a theme with good access to copyright free media and support materials. 

#### Colors
The color scheme for the site will be as follows: 
![Color pallet Image](assests/imgs/readmeimgs/Color-ClickIt-colors.jpeg)

This color pallet gives a good coverage of background and text color combination which pass contrast tests. Also, the greens and other neutral colors support the animal kingdom theme. 

In addition to color pallet above, the main button colors for the user interface with the game mechanics will be as follows:
![Color pallet for buttons image](assests/imgs/readmeimgs/clickit-button-color.jpeg)
this set of colors are bold vibrant and have a good level of contrast to each other. 
#### Iconography
To help support the chosen theme, the button iconography included within the design are: 
1. https://fontawesome.com/icons/hippo?f=classic&s=solid
2. https://fontawesome.com/icons/frog?f=classic&s=solid
3. https://fontawesome.com/icons/otter?f=classic&s=solid
4. https://fontawesome.com/icons/crow?f=classic&s=solid

Also, the logo for Click It! will be a simple computer cursor:
- https://fontawesome.com/icons/arrow-pointer?f=classic&s=solid

For the sharing features Click It! will be using:
- https://fontawesome.com/icons/envelope?f=classic&s=solid
- https://fontawesome.com/icons/facebook?f=brands&s=solid
- https://fontawesome.com/icons/square-x-twitter?f=brands&s=solid


## Wireframes
Click It!'s design is based of a simple main game screen, with 3 pop-up variants. A full copy of this project's wireframes can be found [here](assests/imgs/readmeimgs/clickitWireframes.pdf).

#### Main Game Screen
![Main Game Screen wireframe](assests/imgs/readmeimgs/mainGameScreen.png)
This is a simple page that player will be able to navigate to once they have dismissed the welcome pop up.

It consists of a header, containing Click It! name, logo, and a cog icon which open setting when pressed. Then the main game buttons which are used to illustrate and input the computer and player sequence's. A score counter and a new game button which starts a new game if one is not already in progress. 

#### Welcome Page
![welcome page wireframe](assests/imgs/readmeimgs/welcomePage.png)
This shows once the document is ready and is the first thing the user sees. It give basic instructions on how to play the game. In addition to a form of check boxes, allowing the user increase or decrease difficulty.

#### Setting Page
![Setting page wireframe](assests/imgs/readmeimgs/settingPage.png)
To aid in player ease, the setting page looks very similar to the welcome page. It explains to rules of the game. In addition to a form of check boxes, allowing the users to both increase or decrease game difficulty.

#### Game Over Page
![Game Over Page wireframe](assests/imgs/readmeimgs/gameOverPage.png)
A simple page inversing the colors used in all other pop-ups. It uses the game button colors to draw attention to the share features built into Click it!. In hopes of encouraging the users to share, starting the family competition.  

## Features
Click It!'s feature set is informed by the above users story and where appropriate will be linked back to a user story by referencing the story's ID. 
### Existing Features
- Welcome Instructions Screen Pop-up (*User Story ID: 4*)
    - Happens on document loading
    - Contains instructions on how to play the game
    - Is overlaid the main game screen
![User Story 4 Image](assests/imgs/readmeimgs/evid-us4.png)
- Main Game (*User Story ID: 6, 8, 10, 11, 14*)
    - Starts on new game button press
    - consists of a computer turn and player turn until player makes an incorrect move
        - computer turn: Add's an additional move to sequence and then show current sequence
        - Player turn: user inputs what they believe is current sequence
    - Game ends when player inputs current move
    - Increase score by one each successful player turn
![User Story 6 Image](assests/imgs/readmeimgs/evid-us6.png)
![User Story 10 Image](assests/imgs/readmeimgs/evid-us10.png)
![User Story 11 Image](assests/imgs/readmeimgs/evid-us11.png)
![User Story 14 Image](assests/imgs/readmeimgs/evid-us14.png)
- Score sharing (*User Story ID: 1, 2, 3, 12*)
    - opportunity to share given to players at the end of each session
    - will give options of facebook and email sharing
    - shared post will include as much Click It branding as possible
    - Will include score achieved
![User Story 1 Image](assests/imgs/readmeimgs/evid-us1.png)
![User Story 12 Image](assests/imgs/readmeimgs/evid-us12.png)
- Instructions/Settings (*User Story ID: 5, 15*)
    - will be a pop-up that overlays over main game screen
    - will show instructions on how to play the game
    - will user to change difficulty
![User Story 5 Image](assests/imgs/readmeimgs/evid-us5.png)

### Features Left to Implement
- Welcome Instructions Screen Pop-up (*User Story ID: 4*)
    - Introduces game's mascot
    - Is overlaid the main game screen
- Main Game (*User Story ID: 6, 8, 10, 11, 14*)
    - If player score is greater that any score from current play session it become great score
- Mascot (*User Story ID: 13*)
    - Is a charming, bold personality character
        - The desired affect would be to follow the branding philosophy set by duolingo's mascot. Further information on this can be found [here](https://www.kimp.io/duolingo-logo/#gba37fe8cb1d9)
    - Is the character the player is 'playing against'
    - Adds text commentary throughout the game
        - Language used in commentary becomes more confident he is going to win as the game progresses and increases in complexity
- Themes (*User Story ID: 9*)
    - default set to farm yard theme
    - will be developed with future additional themes in mind
    - will allow user to select theme form setting
- Instructions/Settings (*User Story ID: 5, 15*)
    - will allow user to change player name 

## Technologies used
- HTML - To create a basic site
- CSS - To create a nice, standout front-end and to give a great user experience
- Javescript - To implement game logic, and handle API integrations
- Facebook's SDK - To handle score sharing to facebook
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
6. The deployed site will update automatically upon new pushes to the main branch

## Credits
1. Box shadow for player buttons code sourced from [w3schools](https://www.w3schools.com/css/css3_buttons.asp).
2. Code to fix footer to bottom of screen sourced form [Redu](https://radu.link/make-footer-stay-bottom-page-bootstrap/)
3. Pop-up modal taken from bootstrap components. [Bootstrap Documents](https://getbootstrap.com/docs/4.0/components/modal/)
    - Edits Made
        - Footer Removed
        - Styling Added
        - extra-info div sections added and styled
        - Intergrated with Document load and settings button
4. Facebook share function was provided by facebook sdk documentation [facebook share dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)