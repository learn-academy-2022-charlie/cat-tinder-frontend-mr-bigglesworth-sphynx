import React, { Component } from 'react'
import './Header.css'
import dinologo from '../assets/dinologo.png'


class Header extends Component {
  render() {
    return (
      <header>
      <img src={dinologo} alt="dinologo" />
      </header>
    )
  }
}
export default Header