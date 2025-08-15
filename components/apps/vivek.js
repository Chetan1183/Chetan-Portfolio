import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "experiance":<Experiance />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Chetan" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Chetan' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>

                <div id="experiance" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "experiance" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Chetan' experiance" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experiance</span>

                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="asChetanlam' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Chetan' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Chetan's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is Chetan Chaudhari <span className="font-bold"></span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">CyberSecurity Consultant!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
    <li className="list-pc">
        I'm a <span className="font-medium"></span> Results-driven Security Analyst with 2.5+ years of experience in Web, API, and Payment Gateway Security Testing, specializing in Vulnerability Assessment and Penetration Testing (VAPT)! ( Hit me up <a className='text-underline' href='mailto:chetanchaudhari1183@gmail.com'><u>chetanchaudhari1183@gmail.com</u></a> :) )
    </li>
    <li className="mt-3 list-building">
        Proficient in manual & automated security testing, identifying and mitigating security risks in web applications, APIs, payment gateways, and networks.
    </li>
    <li className="mt-3 list-time">
        Skilled in security tools such as Burp Suite Pro, Nessus, Nmap, OWASP ZAP, Nikto, Dirb, SSLScan, Postman, and JWT.io. Experienced in testing across Web, UPI, Android, and iOS channels.
    </li>
    <li className="mt-3 list-star">
        Strong understanding of OWASP Top 10, OWASP API Top 10, PCI-DSS compliance, 3DS2 authentication, and Payment Gateway transaction flows (authorization, capture, refund, cancellation, chargeback). Passionate about securing applications and continuously learning advanced attack techniques.
    </li>
</ul>

        </>
    )
}
// 
function Education() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">

                <li className="list-disc flex items-center gap-4">
<img
    src="/images/logos/Aj.jpg"
    alt="DR D Y Patil School Of MCA Logo"
    className="w-24 h-auto max-h-20 object-contain bg-white p-1 border border-gray-400 shadow-sm rounded-md"
/>



                    <div>
                        <div className="text-lg md:text-xl text-left font-bold leading-tight">
                            DR D Y Patil School Of MCA
                        </div>
                        <div className="text-sm text-gray-400 mt-0.5">2023 - 2025</div>
                        <div className="text-sm md:text-base">Master of Computer Application</div>
                    </div>
                </li>

                <li className="list-disc flex items-center gap-4 mt-5">
                    <img
    src="/images/logos/Sangamner.png"
    alt="S. N. Arts, D. J. Malpani Commerce and B. N. Sarda Science College Logo"
    className="w-24 h-auto max-h-20 object-contain bg-white p-1 border border-gray-400 shadow-sm rounded-md"
/>
                    <div>
                        <div className="text-lg md:text-xl text-left font-bold leading-tight">
                            S. N. Arts, D. J. Malpani Commerce and B. N. Sarda Science College
                        </div>
                        <div className="text-sm text-gray-400 mt-0.5">2020 - 2023</div>
                        <div className="text-sm md:text-base">Bachelor Of Computer Science</div>
                    </div>
                </li>

            </ul>
        </>
    )
}


function Experiance() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
<ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
    <li className="list-disc flex items-start gap-3">
        <img
            src="/images/logos/Mark.png"
            alt="MarkGenic Software PVT LTD Logo"
            className="w-24 h-auto max-h-20 object-contain bg-white p-1 border border-gray-400 shadow-sm rounded-md"
        />
        <div>
  <div className="text-lg md:text-xl text-left font-bold leading-tight">
    MarkGenic Software PVT LTD, Pune
  </div>
  <div className="text-sm text-gray-400 mt-0.5">January 2023 - May 2025</div>
  <div className="text-sm md:text-base">Security Analyst</div>
  <ul className="list-disc list-inside text-sm md:text-base mt-1 text-gray-700">
    <li>Performed end-to-end Vulnerability Assessment and Penetration Testing (VAPT) for web and API security, identifying and mitigating critical security risks, reducing vulnerabilities by 30%.</li>
    <li>Executed security testing using Burp Suite, OWASP ZAP, Nmap, Metasploit, and SQLmap, uncovering OWASP Top 10 vulnerabilities including Broken Authentication, Access Control, HTTP Smuggling, XXE, and Insecure Deserialization.</li>
    <li>Conducted security audits, generated detailed risk assessment reports, and provided actionable recommendations to strengthen cybersecurity defenses.</li>
    <li>Automated security testing processes, improving efficiency and reducing manual effort by 40%, ensuring faster vulnerability detection and remediation.</li>
  </ul>
</div>
    </li>

    <li className="list-disc flex items-start gap-3 mt-5">
        <img
            src="/images/logos/Cyr.png"
            alt="CyRAACS Logo"
            className="w-24 h-auto max-h-20 object-contain bg-white p-1 border border-gray-400 shadow-sm rounded-md"
        />
        <div>
  
  <div className="text-lg md:text-xl text-left font-bold leading-tight">
    Cyraacs, Mumbai
  </div>
  <div className="text-sm text-gray-400 mt-0.5">May 2025 - Present</div>
  <div className="text-sm md:text-base">Cybersecurity Consultant – Technical Services</div>
  <ul className="list-disc list-inside text-sm md:text-base mt-1 text-gray-700">
    <li>Performed comprehensive security testing for India’s leading banking platforms, covering Web, UPI, Android, and iOS channels.</li>
    <li>Conducted functional, integration, and regression testing to ensure seamless payment flows across multiple merchant types and transaction scenarios.</li>
    <li>Executed 3DS2 authentication, PCI-DSS compliance checks, and encryption validation for secure transaction processing.</li>
    <li>Validated transaction life cycle events including authorization, capture, refund, cancellation, and chargeback flows.</li>
    <li>Tested UPI mandates, collect requests, intent-based payments, and QR code scanning for complete end-to-end reliability.</li>
    <li>Performed positive, negative, and edge-case scenarios to assess system behavior under high load and network disruptions.</li>
    <li>Compiled and submitted detailed VAPT reports to clients, outlining confirmed findings and providing prioritized remediation recommendations.</li>
  </ul>
</div>
    </li>
</ul>



        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                Proficient in cybersecurity tools and techniques, including network security, threat detection, and vulnerability assessment.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> Skilled in ethical hacking methodologies, such as <strong className="text-ubt-gedit-orange">penetration testing, brute force attacks, and privilege escalation.!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center gap-2 items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-burp%20suite-%230D76B8?style=flat&logo=burpsuite&logoColor=FFFFFF&labelColor=%23EF7B42&color=%23EF7B42" alt="Chetan burpsuite" />  
                        <img className="m-1" src="https://img.shields.io/badge/-Metasploit-%230D76B8?style=flat&logo=metasploit&logoColor=000000&labelColor=%2318608C&color=%230D76B8" alt="Chetan metasploit" />  
                        <img className="m-1" src="https://img.shields.io/badge/-Nmap-%230D76B8?style=flat&logo=gnometerminal&logoColor=FFFFFF&labelColor=%23008080&color=%23008080" alt="Chetan Nmap" />
                        <img className="m-1" src="https://img.shields.io/badge/-Dirb-%230D76B8?style=flat&logo=gnu-bash&logoColor=FFFFFF&labelColor=%23008000&color=%23008000" alt="Chetan Dirb" />
                        <img className="m-1" src="https://img.shields.io/badge/-OWASP%20ZAP-%230D76B8?style=flat&logo=owasp&logoColor=FFFFFF&labelColor=%23000080&color=%23000080" alt="Chetan OWASP ZAP" />
                        <img className="m-1" src="https://img.shields.io/badge/-Nikto-%230D76B8?style=flat&logo=linux&logoColor=FFFFFF&labelColor=%23800000&color=%23800000" alt="Chetan Nikto" />
                        <img className="m-1" src="https://img.shields.io/badge/-SQLMap-%230D76B8?style=flat&logo=mysql&logoColor=FFFFFF&labelColor=%23F29111&color=%23F29111" alt="Chetan SQLMap" />
                        <img className="m-1" src="https://img.shields.io/badge/-Kali%20Linux-%230D76B8?style=flat&logo=kalilinux&logoColor=FFFFFF&labelColor=%230D76B8&color=%230D76B8" alt="Chetan Kali Linux" />
                        <img className="m-1" src="https://img.shields.io/badge/-Wireshark-%230D76B8?style=flat&logo=wireshark&logoColor=FFFFFF&labelColor=%23006C99&color=%23006C99" alt="Chetan Wireshark" />
                        <img src="https://img.shields.io/badge/-Github-%23000000?style=flat&logo=github&logoColor=%23ffffff" alt="Chetan github" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start gap-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="Chetan python" />
                        <img className=" m-1" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="Chetan HTML" />
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Chetan Javascript" />
                        
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="Chetan linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        
        {
            name: "Payment Gateway Security Testing",
            date: "Apr 2025 -Present",
            link: "https://github.com/Chetan1183/",
            description: [
                "JPerformed end-to-end security testing for India’s leading banking platforms across Web, UPI, Android, and iOS channels. Conducted functional, integration, and regression testing for various merchant types, validating 3DS2 authentication, PCI-DSS compliance, and encryption standards. Verified full transaction life cycle flows (authorization, capture, refund, cancellation, chargeback) and tested UPI mandates, collect requests, intent payments, and QR scanning. Executed positive, negative, and stress scenarios to evaluate performance under load and disruptions. Delivered detailed VAPT reports with confirmed findings and remediation guidance. ",
            ],
            domains: ["Payment Gateway Security", "UPI Testing", "Mobile Application Security", "PCI-DSS Compliance", "3DS2 Authentication", "Functional Testing", "Regression Testing", "Burp Suite"]

        },

         {
            name: "Web Application VAPT",
            date: "Feb 2023 -Apr 2025",
            link: "https://github.com/Chetan1183/",
            description: [
                "Conducted end-to-end VAPT, including information gathering via client questionnaires, reconnaissance using Kali Linux tools (Nikto, Nmap, SSLScan, Dirb), and active vulnerability assessment with Burp Suite Pro and OWASP ZAP. Verified findings, removed false positives, and performed penetration testing targeting OWASP Top 10 and other critical flaws. Delivered detailed reports with confirmed vulnerabilities and remediation recommendations.",
            ],
           domains: ["Web Application Security", "VAPT", "Kali Linux", "Nikto", "Nmap", "SSLScan", "Dirb", "Burp Suite Pro", "OWASP ZAP"]

        },

         {
            name: "API VAPT",
            date: "Feb 2023 -Apr 2025",
            link: "https://github.com/Chetan1183/",
            description: [
                "Performed comprehensive API security testing, starting with analysis of Swagger, Postman collections, and OpenAPI specifications to map endpoints and functionalities. Utilized Postman, Burp Suite, and JWT.io to assess authentication, authorization, and configuration issues. Conducted vulnerability assessments targeting BOLA, authentication flaws, data exposure, and mass assignment, along with penetration testing for OWASP API Top 10 risks including SQLi, SSRF, IDOR, and broken access control. Delivered detailed reports outlining findings, impact, and remediation recommendations.",
            ],
            domains: ["API Security", "Postman", "Burp Suite", "JWT.io", "OWASP API Top 10"]

        },


         

        {
            name: "Local-Area-Search-Engine-Management-System",
            date: "Jan 2024 -March 2024",
            link: "https://github.com/Chetan1183/Local-Area-Search-Engine-Management-System",
            description: [
                "The Local Area Search Engine Management System is a web-based platform designed to help users discover businesses, services, and points of interest within a specific geographic area. The system enables efficient indexing, categorization, and retrieval of local data, providing accurate and location-relevant search results. Features include business listing management, real-time updates, user reviews, map integration, and advanced filtering options. Ideal for both residents and visitors, the system enhances local discovery and promotes community engagement.",
            ],
            domains: ["PHP","MySQL", "HTML","CSS" ]
        },
        {
            name: "JARVIS-IN-PYTHON",
            date: "Aug 2022 -Mar 2023",
            link: "https://github.com/Chetan1183/JARVIS-IN-PYTHON",
            description: [
                "JARVIS is a Voice-Based AI Assistant which is developed in Python Programming Language. It uses Different Technologies To Add New Unique Features. It can Automate Tasks with just One Voice Command. ",
            ],
            domains: ["Css", "HTML" , "Python"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=vivek9patel&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Chetan-Chaudhari-Resume.pdf" title="Chetan chaudhari Resume" frameBorder="0"></iframe>
    )
}
