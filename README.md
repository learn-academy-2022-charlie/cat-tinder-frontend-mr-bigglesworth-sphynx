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

# CREATE FUNCTIONALITY

1) Create DinoNew tests
    #--> make DinoNew.test.js file 
    #--> test render to display heading and form, also input for name, age, enjoys, and image

2) find form you would like to use on https://reactstrap.github.io/.
    #--> click forms tab 
    #--> Once you found the one you like press "show code" on the bottom right corner of example and copy into your New.js component.
    #--> customize to you liking
    #--> ** make sure to import react strap at the top of your New.js component. This will include all off the tags that you used. EX: import { Form, FormGroup, Label, Input, Button } from 'reactstrap'. 
        #-->!! If form test says that FORM is UNDEFINED, this means you forgot to import the react strap

3) Create a CONSTRUCTOR method that allows you to ** STORE ** data entered into your form in your New.js file.
    EX: 
    // Constructor method helps use store the inputs/data
  constructor(props){
    super(props)
    this.state = {
      // create the object that will store your data. include all the keys that you have need in your data base.
      // you can then reference this object by using this.state.newDino
      newDino: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

4) Create a METHOD that will ** COLLECT ** your data being enter into your form and create your object. 
    EX: handleChange() {
    #--> place in between your class and render 
    #--> add event listener into your form in each input section which is the data we want to store such as name, age, enjoys and image. This will trigger your handleChange method, sending the event 'e' to the method.    
        EX: onChange={this.handleChange}
    #--> console.log the "event.target.name" which shows the key: name and then the "event.target.value" showing the value entered into the form under "name" to check and make sure that the data entered is being collected
    #--> use destructuring to create a variable to reference the object that is going to store the values 
    EX: let { newDino } = this.state
    #--> then reference the objects keys and change there values to the ones that the user inputs 
    EX: newDino[e.target.name] = e.target.value
    #--> save the user key value pairs making a new dino using this.setState 
    EX: this.setState({newDino: newDino})
 }

5) create method in the parent component App.js that allows "newDino.js" the child component to ACCESS THE PARENT and tell it to create an object, sending its data upriver.
EX:

  createDino = (newDino) => {
    console.log("Dino has been created", newDino)
  }

#--> in order for the child, NewDino.js, to be able to see that method "createDino" in App.js you must add a RENDER attribute to the DINONEW ROUTE. 
EX: 
        <Route 
        path="/dinonew" 
        render={(props) => <DinoNew createDino={this.createDino}/>} 
        />


6) create a custom method to take the object created in the child component "newDino" and SEND DATA UPRIVER to App.js
EX: handleSubmit = () => {
    // reference the method createDino in App.js which is the parent using props to access its information "this.props.createDino". then pass it the argument of "this.state.newDino" to pass the data entered by the user to App.js the parent.

    this.props.createDino(this.state.newDino)

    this.setState({submitted: true})
  }

7) add an onClick to TRIGGER THE BUTTON allowing it to use the handleSubmit method in DinoNew.js file.
Ex: <Button onClick={this.handleSubmit} name='submit'> 

8) add a REDIRECT ACTION underneath button in DinoNew.js to redirect user to the INDEX page allowing them to see their created dino along with all the others. also add this.state.submitted to change the status of false to true
EX: 
    {this.state.submitted && <Redirect to="/dinoindex"/>}

#--> DONT FORGET: to import the redirect at the top of the new.js component! 
EX: 
    
    import { Redirect } from 'react-router-dom'

IMPORTANT INFO! (this will not show your created dino in the index until you connect your rails app to react using fetch but should redirect you to the index page)!

## create functionality blockers
    could not get new object to show when redirected to index.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# FETCH - is a request that returns a promise from the data base. can GET and SEND data
// a promise is a javascript object
    // 3 different states of a promise 
      // pending -- fulfilled -- rejected
        // fulfilled will give return to us a payload
  
 1) create your readDino method that will be triggered 
  // .Then is another promise, handles our response we get from the fetch
    // we want .Then to give a response
      // we expect a response code back as a payload (hopefully: "200")  
        // we want it to parse the payload into JSON which gives us back an array of all the objects in the database.
  // If we get a 200 "fulfilled" back as our response, the 2nd .Then, will take that payload (dinosArray) and update the state of our empty dinos array. 
  // If we get a "rejected" response, .catch will take the argument of errors, then console.log the errors that are response gave us.
    // if no errors the catch will not log anything

        readDino = () => {
            fetch("http://localhost:3000/dinos")
            .then(response => response.json())
            .then(dinosArray => this.setState({dinos: dinosArray}))
            .catch(errors => console.log("Dino read errors:", errors))
        }

2) componentDidMount is a built in method in react takes other methods as arguments
    // fires off readDino() whenever someone visits our site, called the trigger, and automatically sends off the readDino fetch request.

    componentDidMount(){
        this.readDino()
    }

3) the CREATE fetch takes 2 arguments. arg 1 is a string as the URL, arg 2 is an object.
    // the object has three keys Body, Headers, and Method
      // Body is the payload of data that we want to send to our database
        // we want to send our data style as JSON.stringify because that is the style our database is expecting.
      // Headers specifies that the info is being sent in JSON and the info returning should be JSON
      // Methods tells the other application what to do with this data. in this case we want it to POST it to the data base. So, it specifies the HTTP verb so the correct endpoint is invoked on the server
  // we .then want are response in JSON
  // .then we want to take that payload and update readDino's data with our newly created dino
  // .catch any errors that we get

        createDino = (newDino) => {
            fetch("http://localhost:3000/dinos", {

            body: JSON.stringify(newDino),
            
            headers: {
                "Content-Type": "application/json"
            },
            
            method: "POST"
            })
            .then(response => response.json())
            .then(payload => this.readDino())
            .catch(errors => console.log("Dino create errors:", errors))
        }

// create you route that will render the createDino method
        <Route 
        path="/dinonew" 
        render={(props) => <DinoNew createDino={this.createDino}/>} 
        />

3) update fetch method takes two arguments the dino object and its id
  // fetch will take two arguments, the url that includes the id using string interpulation, and  a object same as create but changing the method to PATCH.
  // .then turn our response into JSON, update our readDino, and catch any errors

    updateDino = (dino, id) => {
        fetch(`http://localhost:3000/dinos/${id}`, {
        // converting an object to a string
        body: JSON.stringify(dino),
        // specify the info being sent in JSON and the info returning should be JSON
        headers: {
            "Content-Type": "application/json"
        },
        // HTTP verb so the correct endpoint is invoked on the server
        method: "PATCH"
        })
        .then(response => response.json())
        .then(payload => this.readDino())
        .catch(errors => console.log("Dino update errors:", errors))
    }

4)      
        
        deleteDino = (id) => {
        fetch(`http://localhost:3000/dinos/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE"
        })
        .then(response => response.json())
        .then(payload => this.readDino())
        .catch(errors => console.log("delete errors:", errors))
    }




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
