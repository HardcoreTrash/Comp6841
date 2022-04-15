import React from "react";
import Divider from '@mui/material/Divider';

const KaliLinux = () => {
    function onClick(link) {
        return function () {
            window.open(link);
        };
    }

    const firstList = [
        {description: <div>Download VirtualBox at <a href="https://www.virtualbox.org/"> https://www.virtualbox.org/</a></div>, key: 0},
        {description: 'Select your platform package and download it', key: 1},
        {description: 'Install and open the VirtualBox', key: 2},
        {description: 'Enable virtualization in your BIOS/UEFI', key: 3},
    ];

    const secondList = [
        {description: <div>Download Kali Linux at <a href="https://www.kali.org/get-kali/"> https://www.kali.org/get-kali/</a> <ul><li>Select Virtual Machines -> VirtualBox</li></ul></div>, key: 0},
        {description: 'Click New from the options in your opened VirtualBox', key: 1},
        {description: <div>Setup the Virtual Machine<ul><li>Name: Kali Linux (Or anything else)</li><li>Type: Linux</li><li>Version: Debian (64-bit)</li></ul></div>, key: 2},
        {description: 'Chose the RAM size, preferably a minimum of 2048MB', key: 3},
        {description: <div>Create a Virtual hard disk with options <ul><li>Hard disk file type: VDI</li><li>Storage on physical hard disk: Dynamically allocated</li></ul></div>, key: 4},
        {description: 'Chose the File size, preferably at 80GB', key: 5},
        {description: 'Click Create', key: 6},
        {description: <div>Select Settings<ul>
            <li>General -{">"} Advanced -{">"} Shared Clipboard: bidirectional</li>
            <li>General -{">"} Advanced -{">"} Drag'n'drop: bidirectional</li>
            <li>System -{">"} Motherboard -{">"} Boot Order: Have Hard Disk and then Optical from the top and disable everything else</li>
            <li>System -{">"} Processor -{">"} Processor(s): 2</li>
            <li>System -{">"} Processor -{">"} Extended Features: Enable PAE/NX</li>
            <li>Display -{">"} Video Memory: 128MB</li>
            <li>Display -{">"} Acceleration: Disable</li>
            </ul>
        </div>, key: 7},
        {description: 'Click Start', key: 8},
        {description: 'Select start-up disk: Click the folder icon will have a new pop up Optical Disk Selector', key: 9},
        {description: 'Optical Disk Selector: Click Add and browse for the ISO', key: 9},
    ]

    const thirdList = [
        {description: <div>Download Kali Linux at <a href="https://www.kali.org/get-kali/"> https://www.kali.org/get-kali/</a> <ul><li>Select Virtual Machines -> VirtualBox</li></ul></div>, key: 0},
        {description: 'Click Import from the options in your opened VirtualBox', key: 1},
        {description: <div>Go to File<ul><li>Click the browse file icon: Select the Open virtualization Format Archive file download in step 1</li></ul></div>, key: 2},
        {description: 'Click Start', key: 4},
    ]

    const fourthList = [
        {description: <div>Download Kali Linux tools at <a href="https://www.kali.org/tools/">https://www.kali.org/tools/</a></div>, key: 0},
        {description: 'Choose a tool', key: 1},
        {description: <div>Install the tool from the terminal<ul>sudo app install [tool]</ul></div>, key: 2},
        {description: <div>Read the tool's documentation</div>, key: 3},
    ]

    return (
        <div className='home-style'>
        <h1>Kali Linux</h1>
        <div className='section-1'>
            <h2>What is Kali Linux</h2>
            <Divider />
            <p>
                Kali Linux is an open-source, Debian-based platform which is geared towards various information 
                security tasks, such as penetration testing and digital forensics.
                This platform is built to reduce the amount of work in manually setting up the tools and 
                configuring them. It is designed to be on any platform whether you need it on mobile, 
                Amazon web services or even Docker. Kali linux is also customable so you can create your
                own specific version that suits your needs.
            </p>
        </div>
        <div className='section-1'>
            <h2>Requirements</h2>
            <Divider />
            <p>
                The minimum requirements of Kali Linux is:
            </p>
            <div className='list-style'>
                <li>
                    A minimum of 20GB hard disk space for installation.
                </li>
                <li>
                    A minimum of 2GB RAM for i386 and AMD64 architectures.
                </li>
                <li>
                    A bootable CD-DVD drive or a USB stick.
                </li>
                <li>
                    A minimum of an Intel Core i3 or an AMD E1 processor.
                </li>
            </div>
            <p>
                Though, the recommended hardware specification for a smoother experience are:
            </p>
            <div className='list-style'>
                <li>
                    50 GB of hard disk space, SSD preferred
                </li>
                <li>
                    At least 2048 MB of RAM
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Features</h2>
            <Divider />
            <div className='list-style'>
                <li>
                    More than 600 penetration testing tools included: Unique and functional tools from BackTrack
                </li>
                <li>
                    Free: Kali Linux will always be completely free of charge.
                </li>
                <li>
                    Open source Git tree: Kali Linux's development tree is available for all to see and available for anyone who wants to tweak or rebuild packages to suit their specific needs.
                </li>
                <li>
                    FHS compliant: Kali adheres to the Filesystem Hierarchy Standard, allowing Linux users to easily locate binaries, support files, libraries, etc.
                </li>
                <li>
                    Wide-ranging wireless device support: Kali Linux to supports a great number of wireless devices, allowing it to run properly on a wide variety of hardware and making it compatible with numerous USB and other wireless devices.
                </li>
                <li>
                    Custom kernel, patched for injection: The kernel has the latest injection patches.
                </li>
                <li>
                    Developed in a secure environment: The Kali Linux only has commit packages and interactions with the repositories, under multiple secure protocols.
                </li>
                <li>
                    GPG signed packages and repositories: Every package in Kali Linux is signed by each individual developer who built and committed it.
                </li>
                <li>
                    Multi-language support: Kali includes true multilingual support, allowing more users to operate in their native language and locate the tools they need for the job.
                </li>
                <li>
                    Completely customizable: For the more adventurous users, it is easy as possible  o customize Kali Linux to their liking, all the way down to the kernel.
                </li>
                <li>
                    ARMEL and ARMHF support: Since ARM-based single-board systems like the Raspberry Pi and BeagleBone Black, among others, are becoming more and more prevalent and inexpensive, we knew that Kali’s ARM support would need to be as robust as we could manage, with fully working installations for both ARMEL and ARMHF systems. Kali Linux is available on a wide range of ARM devices and has ARM repositories integrated with the mainline distribution so tools for ARM are updated in conjunction with the rest of the distribution.
                </li>
            </div>
        </div>
        <div className='section-1'>
            <h2>Security Tools</h2>
            <Divider />
            <p>These security tools are used mostly for exploiting a victim network or application, performing network discovery, or scanning a target IP address. </p>
            <div className='toolsColumn-style'>
                <div className='listColumn-style'>
                    <li>
                        Aircrack-ng
                    </li>
                    <li>
                        Autopsy
                    </li>
                    <li>
                        Armitage
                    </li>
                    <li>
                        Burp suite
                    </li>
                    <li>
                        BeEf
                    </li>
                    <li>
                        Cisco Global Exploiter
                    </li>
                    <li>
                        Ettercap
                    </li>
                    <li>
                        Hashcat
                    </li>
                    <li>
                        John the Ripper
                    </li>
                </div>
                <div className='listColumn-style'>
                    <li>
                        Kismet
                    </li>
                    <li>
                        Lynis
                    </li>
                    <li>
                        Maltego
                    </li>
                    <li>
                        Metasploit framework
                    </li>
                    <li>
                        Nmap
                    </li>
                    <li>
                        Nikto
                    </li>
                    <li>
                        OWASP ZAP
                    </li>
                    <li>
                        Social engineering tools
                    </li>
                    <li>
                        Sqlmap
                    </li>
                </div>
                <div className='listColumn-style'>
                    <li>
                        Wireshark
                    </li>
                    <li>
                        WPScan
                    </li>
                    <li>
                        Nessus
                    </li>
                    <li>
                        Zenmap
                    </li>
                    <li>
                        Hydra
                    </li>
                    <li>
                        Reverse engineering toolkit
                    </li>
                    <li>
                        Foremost
                    </li>
                    <li>
                        Volatility
                    </li>
                    <li>
                        VulnHub
                    </li>
                </div>
            </div>
        </div>
        <div className='section-1'>
            <h2>Installation Guide</h2>
            <Divider />
            <p>
                The recommended way to install Kali Linux is to use a Virtual Machine.
            </p>
            <h3>VirtualBox Installation</h3>
            <ol>
                {firstList.map(element =>
                <li key={element.key}>{element.description}</li>
                )}
            </ol>
            <h3>Kali Linux Installation</h3>
            <ol>
                {thirdList.map(element =>
                <li key={element.key}>{element.description}</li>
                )}
            </ol>
            <b>OR</b>
            <ol>
                {secondList.map(element =>
                <li key={element.key}>{element.description}</li>
                )}
            </ol>
        </div>
        <div className='section-1'>
            <h2>Using Kali Linux</h2>
            <Divider />
            <h3>Entering Kali Linux</h3>
            <p>
                The default username and password are:
            </p>
            <ul>
                Username: kali
            </ul>
            <ul>
                Password: kali
            </ul>
            <h3>Installing Tools</h3>
            <ol>
                {fourthList.map(element =>
                <li key={element.key}>{element.description}</li>
                )}
            </ol>
        </div>
        <div className='section-1'>
            <h2>Extra Resources</h2>
            <Divider />
            <ul>
                <h4 onClick={onClick("https://www.kali.org/get-kali/")} className="link-hover">
                    Downloads
                </h4>
                <h4 onClick={onClick("https://www.kali.org/docs/installation/")} className="link-hover">
                    Installation Guide
                </h4>
                <h4 onClick={onClick("https://www.kali.org/docs/")} className="link-hover">
                    Documentation
                </h4>
                <h4 onClick={onClick("https://gitlab.com/kalilinux")} className="link-hover">
                    GitHub Repository
                </h4>
            </ul>
        </div>
        </div>
    );
};
  
export default KaliLinux;