import React, { Component } from 'react'
import './Header.css'
import dinologo from '../assets/dinologo.png'


class Header extends Component {
  render() {
    return (
      <header>
      <h3>This is the Header, The world's most popular Dinosaur dating App</h3>
      <img src={dinologo} alt="dinologo" />
      </header>
    )
  }
}
export default Header