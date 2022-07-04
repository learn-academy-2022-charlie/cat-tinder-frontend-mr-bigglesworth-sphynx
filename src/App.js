import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DinoIndex from './pages/DinoIndex'
import DinoShow from './pages/DinoShow'
import DinoNew from './pages/DinoNew'
import DinoEdit from './pages/DinoEdit'
import NotFound from './pages/NotFound'
// import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
// import mockDinos from './mockDinos.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dinos: []
    }
  }

  // componentDidMount is a built in method in react takes other methods as arguments
    // fires off readDino() whenever someone visits our site, called the trigger, and automatically sends off the readDino fetch request.
  componentDidMount(){
    this.readDino()
  }
  
  // Fetch is a request that returns a promise from the data base. can GET and SEND data
    // a promise is a javascript object
    // 3 different states of a promise 
      // pending -- fulfilled -- rejected
        // fulfilled will give return to us a payload
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
    // set the state with the data from the backend into the empty array
    .then(dinosArray => this.setState({dinos: dinosArray}))

    .catch(errors => console.log("Dino read errors:", errors))
  }

  // the NEW fetch takes 2 arguments. arg 1 is a string as the URL, arg 2 is an object.
    // the object has three keys Body, Headers, and Method
      // Body is the payload of data that we want to send to our database
        // we want to send our data style as JSON.stringify because that is the style our database is expecting.
      // Headers tells the other application to expect JSON
      // Methods tells the other application what to do with this data in this case we want it to POST it to the data base.
  // we .then want are response in JSON
  // .then we want to take that payload and update readDino's data with our newly created dino
  // .catch any errors that we get
  createDino = (newDino) => {
    fetch("http://localhost:3000/dinos", {
      // converting an object to a string
      body: JSON.stringify(newDino),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readDino())
    .catch(errors => console.log("Dino create errors:", errors))
  }

  // update fetch method takes two arguments the dino object and its id
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


  render() {
    console.log(this.state.dinos)
    return (
     
      <Router>
        <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dinoindex" 
        render={(props)=><DinoIndex dinos={this.state.dinos}/>}
        />
        <Route path="/dinoshow/:id" 
        render= {(props)=>{
            //create two variables to identify and pass a dinointo the show route
            let id = props.match.params.id
            let dino = this.state.dinos.find((dinoObject)=> dinoObject.id == id)
            return <DinoShow dino={dino} deleteDino={this.deleteDino}/>
          }} />
        <Route 
        path="/dinonew" 
        render={(props) => <DinoNew createDino={this.createDino}/>} 
        />
        <Route path="/dinoedit/:id"
        render={(props) => {
          let id = props.match.params.id
          let dino = this.state.dinos.find((dinoObject)=> dinoObject.id == id) 
          return <DinoEdit dino={dino} />
          }} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
   
    )
  }
}

export default App