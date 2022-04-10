import React, { Component } from 'react'
import { Button } from '../Button'
import { MenuItems } from "./MenuItems"
import './NavBar.css'
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs"

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
                    {/* <img src={process.env.PUBLIC_URL + "/secLogo.png"} className="sec-logo"></img> */}
                    <img src={process.env.PUBLIC_URL + "/logo.png"} className="sec-logo"></img>
                    <h1 className="navbar-logo"><i>CyberSecurity Tools</i></h1>
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
                <Button onClick={this.onClick("https://github.com/HardcoreTrash/Comp6841/tree/master")}><BsGithub /> GitHub</Button>
            </nav>
        )
    }
}

export default NavBar
