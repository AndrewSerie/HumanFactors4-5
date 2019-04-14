# HumanFactors4-5
## Due Dates
  - Assignment 4 (Wireframes) - April 10 
  - Assignemnt 5 (Mobile App) - April 24
  > Prototyping and frameworks are open for debate (obviously)

## Project Task Boards
  - [Assingmnet 4 Project KanBan](https://github.com/AndrewSerie/HumanFactors4-5/projects/1)
  - [Assignment 5 Project KanBan](https://github.com/AndrewSerie/HumanFactors4-5/projects/2)
  
## Gamradt's Persona Notes
  - What the app should be similar to: Cottonwood POS APP on iPad
  - App is intended to run on iOS (Gamradt is very apple heavy)
  - App Iterations:
    - App first iteration is to put on the counter and add items that the customer wants (FOCUS ON THIS STAGE)
    - Second interation would be to do a kiosk in the store where customers can serve themselves
    - Third iteration would be to put it on a customers phone and can place orders from there
  - Focus on bagels first and them do coffee
  - Questions from Monday (4/1)
    - Q: Should we have a lot of prompts for each order addition? A: No, in my opinion I would have the final list be the double check. (the order confirmation)
    - Q: Specific color or design. A: Not part of design for functionality. Wait for final preliminary discussion
    - Q: Only bagels, not coffee? A: Just bagels, can put like "Coffee coming Summer 2019", can put item in for plain black coffee. Do get carried away.
    - Q: Just of a POS? A: For now its a POS but later its going to be converted into a kiosk system
    - Q: Tip? A: Yes, the purchasing should follow the tip (right before signature). Like Cottonwood.  Flip it around, add tip, swipe card, sign,  option to have recipt printed or emailed
    - Q: Payment processing? You can add in an api for payment functionality (like square)

## Assignment 4
  - Prototyping tool: [AdobeXD](https://www.adobe.com/products/xd.html)
  - `iOS12-XD/UI Elements/UIElements+DesignTemplates+Guides-iPad.xd` contains the xd file for all ui elements on iPads
  > Note: AdobeXD does not allow for collaborations. After your done editing the XD file, make sure to push it to github so others can work on it.
  
## Assignment 5
  - Mobile app framework: [Ionic (Angular)](https://ionicframework.com/) - Cross-Platform mobile development in the web
  - Andrew has experience creating mobile apps in Ionic. He can help with training.

## Contributing to Angular Application
-   Feel free to work in the app. I do ask that you make a new branch and follow the PR process to prevent destructive changes in the app.
-   I work in [VSCode](https://code.visualstudio.com/)

### Useful Commands

-   You can open a termial in vscode by the shortcut [CTRL + `] or Menu > View > Terminal
-   Start the development server: `ionic serve` This will open the browser automatically.
-   To develop with iPad view, press `F12` to open developer console in Chrome.
-   -   There is a device icon in top left of developer console called `Toggle Device Toolbar`
-   -   You can change the device to `iPad`

-   Generate a new component: `ng generate component my-component --no-spec`
-   -   Run as dry run first to see what the directory is going to look like and make sure it looks correct: `ng generate component my-component --no-spec -d`
-   -   Short command: `ng g c my-component --no-spec`

### Creating a branch

#### In VSCode (Recommended)
-   Open VSCode in the project directory
-   In VSCode, click the branch icon in the lower left hand corner
-   The command pallate opens and there is an option to create a new branch
-   MAKE SURE THE BRANCH NAME in the bottom left says your branch name after you make it

#### On Github
-   From the [project page](https://github.com/AndrewSerie/HumanFactors4-5), click the Branch: master dropdown
-   Type the name of your new branch
-   Open VSCode in the project directory
-   Change branches by clicking on the branch icon in the lower left hand corner
-   MAKE SURE THE BRANCH NAME in the bottom left says your branch name after you make it

#### Committing changes to your branch
-   MAKE SURE THE BRANCH NAME in the bottom left says your branch name
-   VSCode has a GIT symbol in the left toolbar. Click it
-   Your changes are in the list. Type a message and click the checkmark to commit locally
-   In the lower left where your branch name is, hit the sync button to sync your local changes with GitHub

#### Creating a PR (Pull Request)
-   Click the New Pull Request Button on Github Project page. Next to the Branch button
-   Keep Base: master, Change compare: to your branch you want to make a PR for
-   Create a meaningul title of your changes
-   Reveiw the changed files
-   Create the PR by clicking the green button
-   Wait for someone to review it (Post a message on fb to have someone reveiw)