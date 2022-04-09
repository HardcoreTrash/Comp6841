import React from "react";
import Card from '../components/Card';  
import { CardItems } from "../components/Card/CardItem"
import Grid from "../components/Grid"
import './Defending.css'

const Defending = () => {
  return (
    <div className="title-style">
      <h1>CyberSecurity Tools</h1>
      <p> Cyber Security is a very serious matter so it is critical for you to understand how cyber defense works</p>

      <Grid list={CardItems} />

    </div>
  );
};
  
export default Defending;
