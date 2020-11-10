import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <header id="header">
                <h1><NavLink to="/home">SmartHomeCost</NavLink></h1>
                <nav className="links">
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/scenarios">My Scenarios</NavLink></li>
                        <li><NavLink to="/new_scenario">New Scenario</NavLink></li>
                        <li><NavLink to="/my_homes">My Homes</NavLink></li>
                    </ul>
                </nav>
                <nav className="main">
                    <ul>
                        <li className="menu"/>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Navbar