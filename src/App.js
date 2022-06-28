import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DinoIndex from './pages/DinoIndex'
import DinoShow from './pages/DinoShow'
import DinoNew from './pages/DinoNew'
import DinoEdit from './pages/DinoEdit'
import NotFound from './pages/NotFound'



import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <h1>Welcome to Dino Tinder</h1>
      <Home/>
      <DinoIndex/>
      <DinoShow/>
      <DinoNew/>
      <DinoEdit/>
      <NotFound/>
      <Footer/>
      </>
      
    )
  }
}

