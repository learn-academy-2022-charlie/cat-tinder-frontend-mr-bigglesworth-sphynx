import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './NavBar.css'
import dinologo from '../assets/dinologo.png'
export default function NavBar() {
    const [fixed, setFix] = useState(false)

    function setFixed () {
        if (window.scrollY >= 390) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    return (
        <header>
            <nav className={fixed ? 'navbar fixed' : 'navbar'}>
                <img src={dinologo} alt="dinologo"/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dinonew" >Create</Link>
                    </li>
                    <li>
                    <Link to="/" >About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}