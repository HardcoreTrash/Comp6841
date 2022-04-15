import React from "react";
import { HackingCard } from "../../components/Card/HackingCard.js"
import Grid from "../../components/Grid"

const Hacking = () => {
  return (
    <div className="title-style">
      <h1>Ethical Hacking Tools</h1>
      <p className='card-margin'>Hacking tools are computer programs and scripts that help you find and exploit 
      weakness in computer systems, web applications, servers and networks</p>
      <Grid list={HackingCard} />
    </div>
  );
};
  
export default Hacking;
