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
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import mockDinos from './mockDinos.js'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      dinos: mockDinos
    }
  }
  render() {
    console.log(this.state.dinos)
    return (
     
      <Router>
        <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dinoindex" render={(props)=><DinoIndex dinos={this.state.dinos}/>}/>
        <Route path="/dinoshow/:id" render= {(props)=>{
            //create two variables to identify and pass a cat into the show route
            let id = props.match.params.id
            let dino = this.state.dinos.find((dinoObject)=> dinoObject.id == id)
            return <DinoShow dino={dino}/>
          }} />
        <Route path="/dinonew" component={DinoNew} />
        <Route path="/dinoedit" component={DinoEdit} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
   
    )
  }
}

export default App