import React from "react";
import "./style.css"; // Import the CSS file

const Portfolio = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Velpula Chiranjeevi</h1>
                    <p className="tagline"> DOT NET Developer </p>
                </div>
            </header>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <section id="about" className="container">
                <h2>About Me</h2>
                <p>To achieve a responsible and challenging position to utilize my skills and abilities that offers professional growth while being resourceful, innovative, and flexible.</p>
            </section>
            <section id="experience" className="container">
                <h2>Professional Experience</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <h3>Sr Software Developer</h3>
                        <p>Intrics Solutions Pvt Ltd (Feb 2024 - Present)</p>
                    </div>
                    <div className="timeline-item">
                        <h3>Associate</h3>
                        <p>Cognizant Technologies Pvt Ltd (Feb 2022 - Mar 2023)</p>
                    </div>
                    <div className="timeline-item">
                        <h3>Software Application Developer</h3>
                        <p>BHEL (Dec 2018 - Jun 2021)</p>
                    </div>
                </div>
            </section>
            <section id="skills" className="container">
                <h2>Technical Skills</h2>
                <ul>
                    <li>.NET Framework,ASP .NET Core, ASP.NET MVC, Web API</li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>C#,Vb.Net </li>
                    <li>SQL,MongoDB</li>
                </ul>
            </section>
            <section id="projects" className="container">
                <h2>Projects</h2>
                <div className="project">
                    <h3>Linking Application</h3>
                    <p>Retail domain project comparing product data across various sources.</p>
                </div>
                <div className="project">
                    <h3>Vendor Management Services</h3>
                    <p>Developed solutions for vendor cost management and service excellence at BHEL.</p>
                </div>
            </section>
            <section id="contact" className="container">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:chiranjeevivelpula@myyahoo.com">chiranjeevivelpula@myyahoo.com</a></p>
                <p>Phone: (+91) 9392134012</p>
            </section>
            <footer>
                <p>© 2025 Velpula Chiranjeevi. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;
