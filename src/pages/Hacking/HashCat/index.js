import React from "react";
import Divider from '@mui/material/Divider';

const HashCat = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    return (
        <div className='home-style'>
        <h1>HashCat</h1>
        <div className='section-1'>
            <h2>What is HashCat</h2>
            <Divider />
            <p>
            Hashcat is a password recovery tool and one of the fastest because it combines both the
            power of the GPU as well as the classic CPU. With hashcat you can do brute-force or dictionary 
            attacks to an encrypted password.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                World's fastest password cracker
                </li>
                <li>
                World's first and only in-kernel rule engine
                </li>
                <li>
                Open-Source (MIT License)
                </li>
                <li>
                Multi-OS (Linux, Windows and macOS)
                </li>
                <li>
                Multi-Platform (CPU, GPU, APU, etc., everything that comes with an OpenCL runtime)
                </li>
                <li>
                Multi-Hash (Cracking multiple hashes at the same time)
                </li>
                <li>
                Multi-Devices (Utilizing multiple devices in same system)
                </li>
                <li>
                Multi-Device-Types (Utilizing mixed device types in same system)
                </li>
                <li>
                Supports password candidate brain functionality
                </li>
                <li>
                Supports distributed cracking networks (using overlay)
                </li>
                <li>
                Supports interactive pause / resume
                </li>
                <li>
                Supports sessions
                </li>
                <li>
                Supports restore
                </li>
                <li>
                Supports reading password candidates from file and stdin
                </li>
                <li>
                Supports hex-salt and hex-charset
                </li>
                <li>
                Supports automatic performance tuning
                </li>
                <li>
                Supports automatic keyspace ordering markov-chains
                </li>
                <li>
                Built-in benchmarking system
                </li>
                <li>
                Integrated thermal watchdog
                </li>
                <li>
                350+ Hash-types implemented with performance in mind 
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Attacks</h2>
            <Divider />
            <p>
                Hashcat offers multiple attack modes to obtain effective and complex coverage over a hash's keyspace. These modes are:
            </p>
            <div className='list-style'>
                <li>
                Brute-force attack: Trying all characters from given charsets, per position
                </li>
                <li>
                Combinator attack: Concatenating words from multiple wordlists
                </li>
                <li>
                Dictionary attack: Trying all words in a list
                </li>
                <li>
                Hybrid attack: Combining wordlists + masks or masks + wordlists
                </li>
                <li>
                Mask attack: Trying all characters from given charsets, per position
                </li>
                <li>
                Association attack: Use an username, a filename, a hint, or any other pieces of 
                information which could have had an influence in the password generation to 
                attack one specific hash
                </li>
                <li>
                Rule-based attack: Applying rules to words from wordlists; combines with wordlist-based attacks
                </li>
                <li>
                Toggle-Case attack: Toggling case of characters; now accomplished with rules
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Hashcat suite</h2>
            <Divider />
            <div className='list-style'>
                <li>
                hashcat: World's fastest and most advanced password recovery utility
                </li>
                <li>
                hashcat-utils: Small utilities that are useful in advanced password cracking
                </li>
                <li>
                maskprocessor: High-performance word generator with a per-position configurable charset
                </li>
                <li>
                statsprocessor: Word generator based on per-position markov-chains
                </li>
                <li>
                princeprocessor: Standalone password candidate generator using the PRINCE algorithm
                </li>
                <li>
                kwprocessor: Advanced keyboard-walk generator with configurable basechars, keymap and routes
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: HashCat</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/hashcat/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://www.majorgeeks.com/files/details/hashcat.html")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://hashcat.net/wiki/")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/hashcat/hashcat")} className="link-hover">
                    GitHub Repository
                </h4>
                <h4 onClick={onClick("https://resources.infosecinstitute.com/topic/hashcat-tutorial-beginners/")} className="link-hover">
                    Tutorial
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default HashCat;