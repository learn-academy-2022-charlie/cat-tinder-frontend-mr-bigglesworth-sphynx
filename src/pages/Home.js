import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import './Home.css'

class Home extends Component {
    render() {
      return (
        <>
        <h1>Welcome to Dino Link, a site where fangs and claws are in style! So, come show off your scales and connect with other Dinosaurs, in hopes to find some prehistoric love!</h1>
        <h2> Login to start linking up </h2>
        <Form>
        <FormGroup>
          <Label>Username</Label>
          <input type="text" placeholder='Username'/> 
        </FormGroup>
        </Form>
        </>
      )
    }
  }
  export default Home
