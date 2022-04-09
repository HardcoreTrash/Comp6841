import React from "react";
import Card from '../components/Card';  
import { CardItems } from "../components/Card/CardItem"
import { Link } from "react-router-dom";
import './Defending.css'

const Defending = () => {
  return (
    <div>
      <h1>CyberSecurity Tools</h1>
      <h1>Kali Linux</h1>
      <h1>KeePass</h1>
      <h1>Metasploit Framework</h1>
      <h1>Nikto</h1>
      <h1>Nmap</h1>
      <h1>OpenVAS</h1>
      <h1>OSSEC</h1>
      <h1>Security Onion</h1>
      <h1>VeraCrypt</h1>
      <h1>Wireshark</h1>
      <h1>Bitwarden</h1>
      <h2>Netsparker</h2>
      <h2>CIS</h2>
      <h2>Snort</h2>
      <h2>w3af</h2>

      <div className="display-cards">
          {CardItems.map((item, index) => {
              return (
                  <li key={index}>
                    <Card title={item.title} image={item.image} text={item.text} link={item.url} />
                  </li>
              )
          })}
      </div>


      <p>Source: https://www.datashieldprotect.com/blog/free-open-source-software-cybersecurity</p>
    </div>
  );
};
  
export default Defending;
