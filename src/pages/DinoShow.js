import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  
} from 'reactstrap'

class DinoShow extends Component {
    render() {
      const { dino } = this.props
    console.log("SHOW", dino);
    return (
      <>
      {dino && 
            <Card >
              <CardImg top width="100%" src={dino.image} />
              <CardBody>
                <CardTitle>Hi, my name is {dino.name}</CardTitle>
                <CardSubtitle>I am {dino.age} years old</CardSubtitle>
                <CardText>I enjoy {dino.enjoys}</CardText>             
              </CardBody>
            </Card>
        }
      </>
    )
  }
}
export default DinoShow