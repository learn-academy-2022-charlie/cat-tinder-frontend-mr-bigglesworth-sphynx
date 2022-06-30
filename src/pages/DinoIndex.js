import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class DinoIndex extends Component {
    render() {
      const { dinos } = this.props
      return (
        <>
        <h3>Here's all the Dinos for your viewing pleasure</h3>
        {dinos && dinos.map((dino, index) => {
          return (
          <Card key={index}>
            <CardImg top width="100%" src="" />
            <CardBody>
              <CardTitle>Hi, my name is {dino.name}</CardTitle>
              <CardSubtitle>{dino.age}</CardSubtitle>
               <NavLink to={`/dinoshow/${dino.id}`}>
                <Button>Check me out</Button>
               </NavLink>
            </CardBody>
          </Card>
          )
        })
        }
        </>
      )
    }
  }
  export default DinoIndex
