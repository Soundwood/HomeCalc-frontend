import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <header id="header">
                <h1><a href="index.html">SmartHomeCost</a></h1>
                <nav className="links">
                    <ul>
                        <li><a href="#">Login/Logout</a></li>
                        <li><a href="#">My Scenarios</a></li>
                        <li><a href="#">New Scenario</a></li>
                        <li><a href="#">My Homes</a></li>
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