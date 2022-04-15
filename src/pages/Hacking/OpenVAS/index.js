import React from "react";
import Divider from '@mui/material/Divider';

const OpenVAS = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>OpenVAS</h1>
        <div className='section-1'>
            <h2>What is OpenVAS</h2>
            <Divider />
            <p>
            OpenVAS is a full-featured vulnerability scanner that executes vulnerability tests 
            (VTs) against target systems. This includes unauthenticated and  authenticated testing, various high-level and 
            low-level internet and industrial protocols, performance tuning for large-scale scans and a 
            powerful internal programming language to implement any type of vulnerability test.
            </p>
            <p>
            The scanner consists of the components ospd-openvas and openvas-scanner. The OpenVAS Scanner is 
            controlled via OSP. The OSP Daemon for the OpenVAS Scanner (ospd-openvas) communicates with gvmd via 
            OSP: VT data is collected, scans are started and stopped, and scan results are transferred to gvmd via ospd.
            </p>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: OpenVAS</h3>
            <p>Install the code from <a href="https://www.systranbox.com/how-to-download-openvas-kali-linux/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://sourceforge.net/projects/openvas/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://greenbone.github.io/docs/")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/greenbone/")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default OpenVAS;