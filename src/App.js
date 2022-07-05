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

  
  componentDidMount(){
    this.readDino()
  }
  
  readDino = () => {
    fetch("http://localhost:3000/dinos")
    .then(response => response.json())
    // set the state with the data from the backend into the empty array
    .then(dinosArray => this.setState({dinos: dinosArray}))

    .catch(errors => console.log("Dino read errors:", errors))
  }

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

  render() {
    console.log(this.state.dinos)
    return (
     <>
     
      <Router>
      <Header />
      <div className='wholepage'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dinoindex" 
        render={(props)=><DinoIndex dinos={this.state.dinos}/>}
        />
        <Route path="/dinoshow/:id" 
        render= {(props)=>{
            let id = props.match.params.id
            let dino = this.state.dinos.find((dinoObject)=> dinoObject.id == id)
            return <DinoShow dino={dino} />
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
      </div>
      <Footer/>
    </Router>
   </>
    )
  }
}

export default App