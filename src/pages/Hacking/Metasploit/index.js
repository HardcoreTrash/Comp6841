import React from "react";
import Divider from '@mui/material/Divider';

const Metasploit = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    const firstList = [
        {description: 'Check the intended target system is vulnerable to an exploit for optimal attack.', key: 0},
        {description: 'Choosing and configuring an exploit (code that enters a target system by taking advantage of one of its bugs).', key: 1},
        {description: 'Choosing and configuring a payload (code that will be executed on the target system upon successful entry).', key: 2},
        {description: 'Choosing the encoding technique so that hexadecimal opcodes known as bad characters are removed from the payload, these characters will cause the exploit to fail.', key: 3},
        {description: 'Executing the exploit.', key: 3},
    ];

    return (
        <div className='home-style'>
        <h1>Metasploit Framework</h1>
        <div className='section-1'>
            <h2>What is Metasploit Framework</h2>
            <Divider />
            <p>
            The Metasploit Framework is a Ruby-based, modular penetration testing platform that enables 
            you to write, test, and execute exploit code. Using a suite of tools , you can use test security 
            vulnerabilities, enumerate networks, execute attacks, and evade detection. So the 
            Metasploit Framework is a collection of commonly used tools that provide 
            a complete environment for penetration testing and exploit development.
            </p>
            <p>
            The foundational steps of the Framework are:
            </p>
            <ol>
                {firstList.map(element =>
                <li key={element.key}>{element.description}</li>
                )}
            </ol>
            <p>
            This modular approach which is allowing the combination of any exploit with any payload is a core feature 
            of the Framework as it facilitates the tasks of attackers, exploit writers and payload writers.
            Metasploit is able to run on Unix (including Linux and macOS) and on Windows. Note that to choose an exploit and payload, some 
            information about the target system is needed, such as operating system version and installed network services. 
            This can be achieved with port scanning and TCP/IP stack fingerprinting tools such as Nmap while vulnerability 
            scanners such as Nessus, and OpenVAS can detect target system vulnerabilities. Metasploit can import vulnerability 
            scanner data and compare the identified vulnerabilities to existing exploit modules for accurate exploitation.
            </p>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                Multi-platform support: Can be installed on Unix (including Linux and macOS) and on Windows.
                </li>
                <li>
                Auxiliary Modules: Includes hundreds of auxiliary modules that can perform scanning, fuzzing, and sniffing. There are three types of auxiliary modules namely scanners, admin and server modules. 
                </li>
                <li>
                Exploits: Tools used to take advantage of system weaknesses. Currently over 2074.
                </li>
                <li>
                Payloads: Sets of malicious code. Currently over 592.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Exploits</h2>
            <Divider />
            <p>The platforms that can be exploited are</p>
            <div className='toolsColumn-style'>
                <div className='listColumn-style'>
                    <li>
                    AIX
                    </li>
                    <li>
                    Android
                    </li>
                    <li>
                    BSD
                    </li>
                    <li>
                    BSDi
                    </li>
                    <li>
                    Cisco
                    </li>
                    <li>
                    Firefox
                    </li>
                    <li>
                    FreeBSD
                    </li>
                    <li>
                    HP-UX
                    </li>
                    <li>
                    Irix
                    </li>
                </div>
                <div className='listColumn-style'>
                <li>
                    Java
                    </li>
                    <li>
                    JavaScript
                    </li>
                    <li>
                    Linux
                    </li>
                    <li>
                    mainframe
                    </li>
                    <li>
                    NetBSD
                    </li>
                    <li>
                    NetWare
                    </li>
                    <li>
                    nodejs
                    </li>
                    <li>
                    OpenBSD
                    </li>
                    <li>
                    macOS
                    </li>
                </div>
                <div className='listColumn-style'>
                    <li>
                    PHP
                    </li>
                    <li>
                    Python
                    </li>
                    <li>
                    R
                    </li>
                    <li>
                    Ruby
                    </li>
                    <li>
                    Solaris
                    </li>
                    <li>
                    Unix
                    </li>
                    <li>
                    Windows
                    </li>
                </div>
            </div>
            <p>The exploits Metasploit Framework currently has are:</p>
            <div className='list-style'>
                <li>
                Dry Run: Prints a transcript of the exploits in the attack plan without running them.
                </li>
                <li>
                Collect Evidence: Collects screenshots, system files, passwords, and configuration settings from open sessions.
                </li>
                <li>
                Clean Up Sessions: Closes all sessions after all tasks have run.
                </li>
                <li>
                Payload Type: Specifies the type of payload that the exploit will deliver to the target.
                <ul>
                    <li>
                        Command: A command execution payload that enables the execution of commands on the remote machine.
                    </li>
                    <li>
                        Meterpreter: An advanced payload that provides a command line that enables the delivery of commands and inject extensions on the fly.
                    </li>
                    <li>
                        PowerShell (Windows only): A payload type that can be used to open a PowerShell session and run a PowerShell script.
                    </li>
                </ul>
                </li>
                <li>
                Connection Type: Specifies how the Metasploit instance is connected to the target.:
                <ul>
                    <li>
                    Auto: Automatically uses a bind connection when NAT is detected; otherwise, a reverse connection is used.
                    </li>
                    <li>
                    Bind: Uses a bind connection, which is useful when the targets are behind a firewall or a NAT gateway.
                    </li>
                    <li>
                    Reverse: Uses a reverse connection, which is useful if your system is unable to initiate connections to the targets.
                    </li>
                </ul>
                </li>
                <li>
                Listener Ports: Defines the ports to be used for reverse connections.
                </li>
                <li>
                Listener Host: Defines the IP address to connect back to.
                </li>
                <li>
                Auto Launch Macro: Specifies the macro that runs during post-exploitation.
                </li>
                <li>
                Concurrent Exploits: Specifies the number of exploit attempts launched at one time.
                </li>
                <li>
                Timeout in Minutes: Defines the number of minutes an exploit waits before it times out.
                </li>
                <li>
                Transport Evasion: Choose from the following transport evasion levels:
                <ul>
                    <li>
                    Low: Inserts delays between TCP packets.
                    </li>
                    <li>
                    Medium: Sends small TCP packets.
                    </li>
                    <li>
                    High: Sends small TCP packets and inserts delays between them.
                    </li>
                </ul>
                </li>
                <li>
                Application Evasion: Adjusts application-specific evasion options for exploits involving DCERPC, SMB and HTTP.
                </li>
                <li>
                Included Ports: Defines the specific ports to be targeted for exploitation.
                </li>
                <li>
                Excluded Ports: Defines the specific ports to be excluded from exploitation.
                </li>
                <li>
                Targeting:
                    <ul>
                    <li>
                    Excluded Addresses: A list of IP addresses to be excluded from targeting.
                    </li>
                    <li>
                    Ignore known-fragile devices: Ignore devices that are known to have issues with automated exploitation, such as printers, industrial controllers, or other embedded devices.
                    </li>
                </ul>
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Payloads</h2>
            <Divider />
            <div className='list-style'>
                <li>
                Command shell: Enables users to run collection scripts or run arbitrary commands against the host.
                </li>
                <li>
                Meterpreter (the Metasploit Interpreter): Enables users to control the screen of a device using VNC and to browse, upload and download files.
                </li>
                <li>
                Dynamic payloads: Enable users to evade anti-virus defense by generating unique payloads.
                </li>
                <li>
                Static payloads: Enable static IP address/port forwarding for communication between the host and the client system.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation guide</h2>
            <Divider />
            <h3>Kali Linux</h3>
            <p>This is a tool that can be used in Kali Linux. See Kali Linux installation <a href="/defending/kali-linux">here</a></p>
            <h3>Kali Linux Tool: Metasploit</h3>
            <p>Install the code from <a href="https://www.kali.org/tools/metasploit-framework/">here</a></p>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://github.com/rapid7/metasploit-framework/wiki/Nightly-Installers")} className="link-hover">
                    Downloads/Installation Guide
                </h4>
                <h4 onClick={onClick("https://metasploit.help.rapid7.com")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://github.com/rapid7/metasploit-framework")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default Metasploit;