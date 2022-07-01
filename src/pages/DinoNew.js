import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class DinoNew extends Component {

  constructor(props){
    super(props)
    this.state = {
      newDino: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

  // custom function to help abstract inputs
  handleChange = (e) => {
    // shows DOM event object
    // console.log(e)
    // shows key for the input
    console.log(e.target.name)
    // shows value for the input
    console.log(e.target.value)
    // update state object
    let { newDino } = this.state
    newDino[e.target.name] = e.target.value
    this.setState({newDino: newDino})
  }

  // custom method to abstract the object in the child component
  handleSubmit = () => {
    this.props.createDino(this.state.newDino)
    this.setState({submitted: true})
  }


  render() {
    console.log(this.state.newDino)
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
            // event listener for user input
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
            value={this.state.newDino.value}
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