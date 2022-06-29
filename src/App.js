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
        <h1>Welcome to Dino Tinder</h1>
        <h2>The world's most popular Dinosaur dating App</h2>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dinoindex" component={DinoIndex} />
        <Route path="/dinoshow" component={DinoShow} />
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