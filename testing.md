# Testing
## Test Environment
Automation testing will be done use the jest frame. The project was enabled to use jest using the following steps:
1. Initialise environment using Node Package Manager (npm)
    - In the project directory, run the command 'npm init'
    - Leave all fields as defaults expect 'test command' which should be set as jest
2. Install jest
    - In the project directory, run the command 'npm --save-dev jest'

To run the automation test suite a developer should:
1. In terminal, go to project directory
2. Run the command 'npm test'

### Automation Testing


### Manual Testing
there will be two stages to manual testing. The first stage will be manual testing during development. The second will be a round of manual testing completed after dev completion.

#### Development Testing
This section of this document will capture all bugs and their fixes found during the development cycle. 

|Bug|Area|Fix|
|---|---|---|
|Settings button would not allign to right hand size of screen [image of bug](assests/imgs/readmeimgs/bug-settings-button.png)|UI|justify-content: space-between; to header row. Id for header road created and css styling added.|
|Adding margin to player buttons cause bootsrapt offset class to be overwirtten.|UI|Spacer div added to replace ofset. Spacer div given display none when on smaller device screens as button do not need to be centered. |
|New game button not centering|UI|New game button was not centering when margin set to '0 auto'. Diplsay property of new game button updated to block.|
|Footer does not stick to bottom of page.|UI|Body element had bootstrap classes added which create a flex coloum equal to the 100% of the veiw port. Foot then has margin-top set to auto which push the footer to the bottom of the page. Credits refernece No. 2|
|When on smaller resolutions logo wraps on a new line|UI|Increased default bootstrap column allowment from 2 to 10|
|When on smaller resoultions buttons retain corner with increased border radious which looks odd|UI|Added media query which set all border radius to player buttons to 15px.|
|Weh on smaller resolutions score and new game button has unnesscary space between player buttons, footer, and themselevs |UI|Added score and number buttons to media query to reduce top margin and increase width when below bootsrapt medimum breakponit|
|When on smaller resoultions player button icons over spill from button|UI|Added font-size to medimum media query to reduce font size to 50px form 70px|
|When on smaller resolutions setting button wraps onto new line|UI|Logo display set to none of xs resoltuion and lower. Decrease bootstrap column assignment, for logo and title, from 10 to 6|
|New Game button need disabinling|||
|All light runign on at same time|||
|Icon within button breaking split|||
|event listen in funciton create multiple clikc for a single user click|||
|score updating only increasing score so gameover never cleared score even tho reset|||
||||
||||
||||
||||
||||
||||
||||