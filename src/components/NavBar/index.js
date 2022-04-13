import React, { Component, useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

export default function NavBar() {
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(prev => !prev);
    }

  function onClick(link) {
    return function () {
      window.open(link);
    };
  }

  return (
    <nav className="NavBarItems">
      <a href="/defending" style={{textDecoration:"none"}} className="main-logo">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          className="sec-logo"
        ></img>
        <h1 className="navbar-logo">
          <i>CyberSecurity Tools</i>
        </h1>
      </a>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button
        onClick={onClick(
          "https://github.com/HardcoreTrash/Comp6841/tree/master"
        )}
      >
        <BsGithub /> GitHub
      </Button>
    </nav>
  );
}
