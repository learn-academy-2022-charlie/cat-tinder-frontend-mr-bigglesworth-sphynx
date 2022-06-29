# Welcome to Dino Tinder. The world's most popular Dinosaur dating app. Brought to you by Collin and Jorge. We are not on the Founders, we are also clients.

# Pull Requests
@Sarah @Charlean Baxter and @Austin
 We just wrapped up our Cat Tinder Sphynx Card and User Stories. Can you please look over our PR?
Github: https://github.com/learn-academy-2022-charlie/cat-tinder-frontend-mr-bigglesworth-sphynx
Trello: https://trello.com/b/57eYcQWj/cat-tinder-sphynx

# Initial switching of drivers
- $ mkdir <directory to store project on local machine>
- $ cd into <directory to store project on local machine>
- $ git clone <code of the repo that you created with your cat-tinder group>
- $ cd into repo
- Follow steps according to working on the same branch or a new branch
# If working on the same branch
- $ git fetch origin <branch that other driver created>
- $ git checkout <branch that other driver created>
- $ git pull origin <branch that other driver created>
- $ yarn
# If working on a new branch
- $ git checkout main
- $ git pull origin main
- $ git checkout -b <new branch according to trello card>
- $ yarn start

# Steps completed
trello: https://trello.com/b/57eYcQWj/cat-tinder-sphynx
- Created React App cat-tinder-frontend-mr-bigglesworth-sphynx
- Created Directories
    - Components
        - Footer.js
        - Header.js
    - Pages
        - Home.js
        - DinoIndex.js
        - DinoShow.js
        - DinoNew.js
        - DinoEdit.js
        - NotFound.js
    - Assets
        - PENDING
- Installs
    - Reactstrap
    - React router
        $ yarn add bootstrap
        $ yarn add reactstrap
        Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
- Routes
    - Created routes in App.js for all components

- Create Mock Dinos
    - Create f ile in the src directory
    - Add an array of dino objects
    - Import the dino object to App.js

# CONTINUE BELOW
- Add UI Features
    - Style the Header component
    - Style NotFound page
    - Style Footer component 









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
