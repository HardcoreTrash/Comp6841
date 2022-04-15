import React from "react";
import Divider from '@mui/material/Divider';

const Keepass = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>KeePass</h1>
        <div className='section-1'>
            <h2>What is KeePass</h2>
            <Divider />
            <p>
            KeePass Password Safe is a free and open-source password manager primarily designed for Windows. 
            It officially supports macOS and Linux operating systems however it has several unofficial 
            ports for Windows Phone, Android, iOS, and BlackBerry devices. KeePass's main functionality 
            is to store usernames, passwords, and other fields, in an encrypted file. This file is 
            protected by any combination of a master password, a key file, and the current Windows 
            account details. By default, the KeePass database is stored on a local file system 
            and the databases are encrypted using the best and current most secure encryption algorithms 
            currently known, AES and Twofish.

            In addition, KeePass supports a number of plugins. These include a password generator and 
            synchronization function, supports two-factor authentication, and has a Secure Desktop mode. 
            Also, it can provide protection against keyloggers, using a two-channel auto-type obfuscation 
            feature.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
            <li>
                Strong security: Uses and has AES encryption, SHA-256 hash, in-memory protection.
                </li>
                <li>
                Portable: Nno installation required.
                </li>
                <li>
                Multi-platform support: Can be installed on Windows, Linux, Mac OS X, smart devices/phones.
                </li>
                <li>
                Efficient and flexible organization: Has entry groups, tags, time fields, file attachments.
                </li>
                <li>
                Various data transfer methods: Has clipboard, drag and drop, auto-type, plugins that can provide 
                integration with other applications.
                </li>
                <li>
                Powerful password generator: The generation is based on character sets and patterns.
                </li>
                <li>
                Extensible: plugin architecture.
                </li>
                <li>
                Multi-language: More than 40 languages are available.
                </li>
                <li>
                Import and export: The password list is saved by default as a .kdbx file, but it can be exported to TXT, HTML, XML and CSV.
                </li>
                <li>
                Browser support: The auto-type functionality works with all windows and browsers. The KeeForm extension fills in user details 
                into website form fields automatically.
                </li>
                <li>
                Wrapper: Has an opensource wrapper, QuicKeepass, to run more efficiently on Linux.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Protection</h2>
            <Divider />
            <p>Keepass offers protection against</p>
            <div className='list-style'>
                <li>
                Dictionary and guessing attacks
                </li>
                <li>
                Keyloggers
                </li>
                <li>
                Clipboard monitors
                </li>
                <li>
                Password control monitors
                </li>
                <li>
                Non-runtime attacks on the database
                </li>
                <li>
                Memory dump analyzers
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Cryptography</h2>
            <Divider />
            <h3>Runtime security</h3>
            <p>
            KeePass is able to use security-enhanced password edit controls, which is known as CSecureEditEx. Passwords 
            are protected in memory while KeePass is running. On Windows Vista and later versions, passwords are 
            encrypted in process memory using Windows Data Protection API, which stores the key for memory 
            protection in a secure, non-swappable memory area. While on previous Windows systems, KeePass uses the ARC4 
            cipher with a temporary, random session key.
            </p>
            <h3>Offline security</h3>
            <p>
            To access the database, a master password or a key file is required or combination. Both methods may be combined to create a 
            "composite master key". If the combination is used, then both must be present to access the password database. In the latest 
            version, KeePass now has a third option—dependency upon the current Windows user. The database encryption is done through AES
            , Twofish or ChaCha20 symmetric cipher, where the first two are used in CBC/PKCS7 mode. AES is the default option while the 
            rest are only available in specific versions.
            </p>
        </div>
        <div className='section-1'>
            <h2>Derivatives</h2>
            <Divider />
            <p>Other well-known forks of KeePass include:</p>
            <div className='list-style'>
                <li>
                KeePassX: An open source, multi-platform KeePass clone for Linux and macOS.
                </li>
                <li>
                KeePassXC (KeePass Cross-Platform Community Edition): A fork of KeePassX written in C++.
                </li>
                <li>
                KeeWeb: A cross-platform JavaScript web application using the KeePass database format, desktop version built with Electron.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://sourceforge.net/projects/keepass/files/KeePass%202.x/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://keepass.info/help/base/faq_tech.html")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://keepass.info/help/v2/setup.html")} className="link-hover">
                    Installation Guide
                </h4>
                <h4 onClick={onClick("https://github.com/topics/keepass")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default Keepass;