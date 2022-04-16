import React from "react";
import './Home.css'
import Divider from '@mui/material/Divider';

const Home = () => {
  return (
    <div className='home-style'>
      <h1>Welcome to my Something Awesome Project</h1>
        <div className="box">
          <div className='section-1'>
            <h2>Ethical Hacking</h2>
            <Divider />
            <p className='paragraph-font'>
              Ethical hacking is a process of detecting vulnerabilities in an application, system, or 
              organization’s infrastructure so that an attacker can use it to exploit an individual or 
              organization. This process was developed to prevent cyber attacks and security breaches by 
              lawfully hacking into the systems and looking for weak points to test the organization’s 
              strategies and network.
            </p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/hack.png`} style={{height: "200px"}}/>
      </div>
      <div className="box">
        <img src={`${process.env.PUBLIC_URL}/shield.png`} style={{height: "200px"}}/>
        <div className='section-1'>
          <h2 className='title-2'>Defending</h2>
          <Divider />
          <p>
            Cybersecurity is the practice of protecting critical systems and sensitive information from 
            digital attacks. Cybersecurity measures are designed to combat threats against networked 
            systems and applications, whether those threats originate from inside or outside of an 
            organization.
          </p>
        </div>
      </div>
      <div className="box">
        <div className='section-1'>
          <h2>What is Open source</h2>
          <Divider />
          <p>
            Open source is source code that is made freely available for possible modification and 
            redistribution which include the permission to use the source code, design documents,
            or content of the product. This model was design to be a decentralized software development 
            model that encourages open collaboration. The main principle of open-source software 
            development is peer production and universal access, which means products' source code, 
            blueprints, and documentation are freely available to the public. Therefore, others may then 
            download, modify, and publish their version back to the community. 
          </p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/open.png`} style={{height: "200px"}}/>
      </div>
    </div>
  );
};
  
export default Home;