import React, { Component } from 'react'
import { Button } from '../Button'
import { MenuItems } from "./MenuItems"
import './NavBar.css'
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    onClick = (link) => {
        return function() {
            window.open(link);
        }
    }

    render() {
        return(
            <nav className="NavBarItems">
                <div className="main-logo">
                    <img src={process.env.PUBLIC_URL + "/secLogo.png"} className="sec-logo"></img>
                    <h1 className="navbar-logo">Something-Awesome</h1>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName} >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.onClick("https://github.com/HardcoreTrash/Comp6841/tree/master")}>GitHub</Button>
            </nav>
        )
    }
}

export default NavBar
