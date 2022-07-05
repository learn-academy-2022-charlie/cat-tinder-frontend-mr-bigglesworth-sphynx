import React, { Component } from 'react'

import './Home.css'



class Home extends Component {


    render() {
      return (
        <>
        <div id='home-container'>
          <div>
        <h1>Welcome to Dino Link, a site where fangs and claws are in style! So, come show off your scales and connect with other Dinosaurs, in hopes to find some prehistoric love!</h1>
        </div>
        
          <div className='button-container'>
        <button name='create button'>
          Create a Dino
        </button>
        </div>
        <div className='button-container'>
        <button name='index button'>
          See the Dino's
        </button>
        </div>
        
        </div>
        </>
      )
    }
  }


  export default Home
