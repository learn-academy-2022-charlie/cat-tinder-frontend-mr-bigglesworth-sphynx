import React, { Component } from 'react'
import dinologo from '../assets/dinologo.png'

class Home extends Component {
    render() {
      return (
        <>
        <h1>This is the Home, Welcome to Dino Tinder</h1>
        <img src={dinologo} alt="dinologo" />
        </>
      )
    }
  }
  export default Home
