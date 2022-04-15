import React from "react";
import Divider from '@mui/material/Divider';

const SecurityOnion = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>Security Onion</h1>
        <div className='section-1'>
            <h2>What is Security Onion</h2>
            <Divider />
            <p>
            Security Onion is a free and open platform for Network Security Monitoring (NSM) and Enterprise 
            Security Monitoring (ESM). This means it monitors your network for security related events. 
            Security Onion is used for log management, enterprise security monitoring, and intrusion detection.
            Its capabilities include identifying vulnerabilities or expiring SSL certificates, incident response and network forensics. 
            </p>
            <p>
            NSM allows you to track an adversary or keep malware at bay, by providing context, intelligence, and situational 
            awareness of your network. ESM takes NSM to the next level and includes endpoint visibility and 
            other telemetry from your enterprise.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                Intrusion Detection: Security Onion generates NIDS (Network Intrusion Detection System) alerts by monitoring your 
                network traffic and uses signature-based detection by looking for specific fingerprints and identifiers that match 
                known malicious, anomalous, or otherwise suspicious traffic. 
                </li>
                <li>
                Network Metadata:
                Network metadata provides you with logs of connections and standard protocols like DNS, HTTP, FTP, SMTP, SSH, and SSL. 
                This provides a real depth and visibility into the context of data and events on your network.
                </li>
                <li>
                Full Packet Capture:
                Full packet capture is like a video camera for your network, but better because not only can it tell us who came and 
                went, but also exactly where they went and what they brought or took with them (exploit payloads, phishing emails, 
                file exfiltration). It’s a crime scene recorder that can tell us a lot about the victim and the white chalk outline of 
                a compromised host on the ground. There is certainly valuable evidence to be found on the victim’s body, but evidence 
                at the host can be destroyed or manipulated; the camera doesn’t lie, is hard to deceive, and can capture a bullet in 
                transit. Full packet capture is recorded by Stenographer.
                </li>
                <li>
                File Analysis:
                As Zeek and Suricata are monitoring your network traffic, they can extract files transferred across the network. Strelka 
                can then analyze those files and provide additional metadata.
                </li>
                <li>
                Intrusion Detection Honeypot (IDH):
                This allows you to build a node that mimics services. Connections to these services automatically generate alerts.
                </li>
                <li>
                Enterprise Security Monitoring:
                In addition to network visibility, Security Onion provides endpoint visibility via agents like Beats, osquery, and Wazuh.
                For devices like firewalls and routers that don’t support the installation of agents, Security Onion can consume standard 
                Syslog.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Tools</h2>
            <Divider />
            <p>Security Onion also uses a variety of tools:</p>
            <div className='list-style'>
                <li>
                NetworkMiner
                </li>
                <li>    
                CyberChef
                </li>
                <li>
                Squert
                </li>
                <li>
                Sguil
                </li>
                <li>
                Wazuh
                </li>
                <li>
                Bro
                </li>
                <li>
                Suricata
                </li>
                <li>
                Snort
                </li>
                <li>
                Kibana
                </li>
                <li>
                Logstash
                </li>
                <li>
                Elasticsearch
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://github.com/Security-Onion-Solutions/securityonion")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://docs.securityonion.net/en/2.3/index.html")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/sullo/SecurityOnion")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default SecurityOnion;