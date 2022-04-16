import React from "react";
import Divider from '@mui/material/Divider';

const BitWarden = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>BitWarden</h1>
        <div className='section-1'>
            <h2>What is BitWarden</h2>
            <Divider />
            <p>
            Bitwarden is a free and open-source password management service that stores sensitive information such as
            website credentials in an encrypted vault. The Bitwarden platform offers a variety of client applications including 
            a web interface, desktop applications, browser extensions, mobile apps, and a command-line interface. In addition, Bitwarden
            also offers a cloud-hosted service.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                    Trusted Security: Private information is protected with end-to-end encryption (AES-256 bit encryption, salted hashing, and PBKDF2 SHA-256) 
                    before it ever leaves the device. 
                </li>
                <li>
                Open Source Transparency: Bitwarden source code, features, and infrastructure security are vetted and improved by our global community.
                </li>
                <li>
                Global Access: Able to access Bitwarden from anywhere, with any platform, in 40 languages.
                </li>
                <li>
                Multiple language support: Available in 37 languages
                </li>
                <li>
                Flexible Integrations: Able to unite your existing systems with Bitwarden using SSO integration, Directory services, or powerful APIs
                </li>
                <li>
                Cloud-Based or Self-Host: Can be run on the cloud or self-hosted for complete data control
                </li>
                <li>
                Security Audit & Compliance: Open source and third-party audited, Bitwarden complies with Privacy Shield, GDPR, CCPA regulations
                </li>
                <li>
                Autofill login information into websites and other applications
                </li>
                <li>
                Password generator
                </li>
                <li>
                Password Strength Testing Tool
                </li>
                <li>
                Two-factor authentication via authenticator apps, email, Duo, YubiKey, and FIDO U2F
                </li>


            </div>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://bitwarden.com/download/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://bitwarden.com/help/")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/bitwarden")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default BitWarden;