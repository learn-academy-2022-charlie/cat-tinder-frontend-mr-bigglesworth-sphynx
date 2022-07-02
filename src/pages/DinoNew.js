import React, { Component } from 'react'
// with import include all the tags/components you used in your react strap form 
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class DinoNew extends Component {

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
      // state before newDino is submitted by user
      submitted: false
    }
  }

  // custom function to COLLECT the data being entered into form.
  handleChange = (e) => {
    // shows DOM event object
    // console.log(e)
    // shows key for the input
    console.log(e.target.name)
    // shows value for the input
    console.log(e.target.value)
    // update the state of the object newDino
    let { newDino } = this.state
    // newDino[e.target.name] references newDino's keys (name, age, enjoys, image). e.target.value changes that current empty object value to what the user enters.
    newDino[e.target.name] = e.target.value
    // this.setState changes the data that the user entered into the form as a newDino
    this.setState({newDino: newDino})
  }

  // custom method to take the object create in the child component "newDino" and send it up river to App.js
  handleSubmit = () => {
    // references the method createDino in App.js which is the parent so we use props to access its information. then pass it the argument of this.state.newDino to pass the data entered by the user to App.js the parent.   
    this.props.createDino(this.state.newDino)
    // changes the state of submitted to true
    this.setState({submitted: true})
  }


  render() {
    console.log(this.state.newDino) // shows that the data entered by the user is collected into newDinos key value pairs
    return (
      <>
      <h3>Tell Us About Your Prehistoric Self!</h3>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            placeholder="What is your name?"
            type="text"
            // event listener for user input, triggers custom method "handleChange". sends the event "e" to handleChange
            onChange={this.handleChange}
            value={this.state.newDino.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            name="age"
            placeholder="What is your age?"
            type="text"
            // event listener for user input
            onChange={this.handleChange}
            value={this.state.newDino.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Hobbies
          </Label>
          <Input
            name="enjoys"
            placeholder="What excites you?"
            type="text"
            // event listener for user input
            onChange={this.handleChange}
            value={this.state.newDino.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Photo
          </Label>
          <Input
            name="image"
            placeholder="Please place a link to your photo"
            type="text"
            // event listener for user input
            onChange={this.handleChange}
            value={this.state.newDino.image}
          />
        </FormGroup>
        <Button onClick={this.handleSubmit} name='submit'> 
          Add Your Scales
        </Button>
        {this.state.submitted && <Redirect to="/dinoindex"/>}
      </Form>
      </>
    )
  }
}
export default DinoNew