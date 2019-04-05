import React, { Component } from 'react';
import Card from "./card";
import { Link, animateScroll as scroll } from "react-scroll";
import heroImg from '../images/hero-image-transparent.png';
import heroImg2 from '../images/irvan-smith-563895-unsplash.jpg';
import heroImg3 from '../images/florian-olivo-1169465-unsplash.jpg';
import heroImg4 from '../images/oscar-nord-588057-unsplash.jpg';
import aboutImg from '../images/nhu-nguyen-785023-unsplash.jpg';
import SPMSImg from '../images/SPMS.png';
import dashboardImg from '../images/MedicalDashboard.png';
import eAuctionImg from '../images/eAuctionDjango.png';
import drawWaveImg from '../images/DrawWaveSynth.png';
import sketchboardImg from '../images/SketchBoardgallery.png';
import videoGalleryImg from '../images/videoGalleryScreenshot.png';
import portfolioImg from '../images/portfolio-screenshot.jpg';
import javaMinigolfImg from '../images/JavaMinigolf.png';
import javaBreakoutImg from '../images/JavaBreakout.png';
import javaShootingGalleryImg from '../images/JavaShootingGallery.png';
import javaShootemupImg from '../images/JavaShootemup.png';
import unityMechImg from '../images/mechDemoScreenshot.png';
import unityAlienImg from '../images/alienGameDemoScreenshot.png';
import unityNinjaImg from '../images/ninjaGameDemoScreenshot.png';
import profileImg from '../images/Jag.jpg';
import downArrow from '../images/172458-128.png';

const projects = {
    webApps: [
        <Card
            availability="hosted"
            title="Stock Portfolio Management System"
            text="Stock portfolio management system that supports multiple portfolios and stocks. Stock data is fetched from Alpha Vantage API. Multiple stocks can be graphed simultaneously inside a user specified time window. Portfolios and stocks are stored in localstorage."
            tags={["JavaScript", "HTML5", "CSS3", "ReactJS"]}
            image={SPMSImg}
            projectLink="https://viktoroster.github.io/spms-app/"
            codeLink="https://github.com/ViktorOster/spms-app/tree/master"
        />,
        <Card
            availability="hosted"
            title="Wave Drawing Synth"
            text="A synth based on user drawn wave shapes, made with the Web Audio API. Points can be added to a canvas to create custom wave shapes that can be played using the keyboard or touch controls on mobile. Tested to be working with the Chrome browser on desktop and mobile."
            tags={["JavaScript", "HTML5", "CSS3"]}
            image={drawWaveImg}
            projectLink="https://viktoroster.github.io/draw-waveshape/"
            codeLink="https://github.com/ViktorOster/draw-waveshape"
        />,
        <Card
            availability="hosted"
            title="Video Gallery"
            text="A video gallery made with React.js. Play videos in different categories"
            tags={["JavaScript", "HTML5", "CSS3", "ReactJS"]}
            image={videoGalleryImg}
            projectLink="https://viktoroster.github.io/video-gallery/"
            codeLink="https://github.com/ViktorOster/video-gallery/tree/master"
        />,
        <Card
            availability="hosted"
            title="Medical Dashboard"
            text="A patient dashboard for a medical company made with PHP and Laravel. Users can register or login to view their healthcare related data and fill in questionnaires. Data is stored in an SQL database. Use email: mike@mail.com, password: password to login and view data."
            tags={["PHP", "Laravel", "HTML5", "CSS3", "MySQL"]}
            image={dashboardImg}
            projectLink="https://medical-dashboard.herokuapp.com/"
            codeLink="https://github.com/ViktorOster/csapp"
        />,
        <Card
            availability="hosted"
            title="Sketchboard / Gallery"
            text="A sketchboard / gallery application using HTML5 canvas that allows users to draw and post drawings to a public gallery. The drawings are stored in JSON-format in a simple NodeJS backend."
            tags={["JavaScript", "HTML5", "CSS3", "NodeJS"]}
            image={sketchboardImg}
            projectLink="https://sketch-gallery.glitch.me/"
            codeLink="https://github.com/ViktorOster/sketch-gallery"
        />,
        <Card
            availability="hosted"
            title="E-Auction Site"
            text="An E-Auction site built with Python and Django. Has many functionalities, like translation, bidding, and updating a user."
            tags={["Python", "Django", "HTML5", "CSS3", "SQLite3"]}
            image={eAuctionImg}
            projectLink="http://osterholmv.pythonanywhere.com/"
            codeLink="https://github.com/ViktorOster/auction-django"
        />
    ],
    unityGames: [
        <Card
            availability="noCode"
            title="Mech Game (Demo)"
            text="Mech-type game demo done with Unity. Used Blender for models and textures."
            tags={["Unity", "C#", "Blender"]}
            image={unityMechImg}
            projectLink="https://viktoroster.github.io/mech-demo-build/"
            codeLink="https://github.com/ViktorOster/java-shootemup"
        />,
        <Card
            availability="noCode"
            title="Third Person Shooter (Demo)"
            text="Demo of a third person shooter type game with Unity. Used Blender for models and textures."
            tags={["Unity", "C#", "Blender"]}
            image={unityAlienImg}
            projectLink="https://viktoroster.github.io/alien-demo-build/"
            codeLink="https://github.com/ViktorOster/java-breakout"
        />,
        <Card
            availability="noCode"
            title="Hack and Slash Game (Demo)"
            text="Top down hack and slash game made during an introduction to Game Dev Tools course. Contains one playable level."
            tags={["Unity", "C#"]}
            image={unityNinjaImg}
            projectLink="https://viktoroster.github.io/ninja-game-build/"
            codeLink="https://github.com/ViktorOster/java-shooting-gallery"
        />
    ],
    javaGames: [
        <Card
            availability="downloadable"
            title="Minigolf Game"
            text="Minigolf game written in Java with one playable level. Use the mouse to hit the ball."
            tags={["Java"]}
            image={javaMinigolfImg}
            projectLink="https://drive.google.com/uc?export=download&id=15BdEKl-a2ZwsRBE0REn2nuZgtfClmRe4"
            codeLink="https://github.com/ViktorOster/java-minigolf"
        />,
        <Card
            availability="downloadable"
            title="Shoot 'Em Up Game"
            text="Shoot 'em up game written in Java with one half finished level. Hold Ctrl to shoot, arrow keys to move around."
            tags={["Java"]}
            image={javaShootemupImg}
            projectLink="https://drive.google.com/uc?export=download&id=1OYFVl8REM1VJFZyiQfc6hMPje56QNEPL"
            codeLink="https://github.com/ViktorOster/java-shootemup"
        />,
        <Card
            availability="downloadable"
            title="Breakout Game"
            text="Breakout clone written in Java with multiple levels. Use mouse to move batter, left mouse button to use special abilities."
            tags={["Java"]}
            image={javaBreakoutImg}
            projectLink="https://drive.google.com/uc?export=download&id=1nbufGcDAPDq4hIv5NWRRbi29fXEYbjUh"
            codeLink="https://github.com/ViktorOster/java-breakout"
        />,
        <Card
            availability="downloadable"
            title="Shooting Gallery Game"
            text="Shooting gallery game written in Java with one playable stage. Use the mouse to aim and left mouse button to shoot."
            tags={["Java"]}
            image={javaShootingGalleryImg}
            projectLink="https://drive.google.com/uc?export=download&id=1vFrKALH05hB7ZvS9p-_shLYO0O4YKvTR"
            codeLink="https://github.com/ViktorOster/java-shooting-gallery"
        />
    ]
}

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            formName: "",
            formEmail: "",
            formMessage: "",
            projectsFilter: "webApps"
        }
        window.onload = function () {
            const myNav = document.getElementById("navbar");

            window.onscroll = function () {
                "use strict";
                if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
                    myNav.classList.add("scroll");
                } else {
                    myNav.classList.remove("scroll");
                }
            };
        }
    }

    render() {
        return (
            <div id="portfolio">

                <div id="navbar">
                    <span id="nav1" >
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div>
                                PROJECTS
                            </div>
                        </Link>
                    </span>

                    <span id="nav2" >
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div>
                                ABOUT
                            </div>
                        </Link>
                    </span>

                    <span id="nav3" >
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div>
                                CONTACT
                            </div>
                        </Link>
                    </span>

                </div>

                <section id="home">
                    <img id="hero-img-cover" src={heroImg4} alt="" />
                    <div className="hero-section">
                        <div className="hero-text">
                            <h1>Viktor Österholm</h1>
                            <h3>Web developer</h3>
                            <p id="hero-sub-text" >
                                I love making things for the web.
                                <br />
                                Check out some of my projects below.
                            </p>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <button >View Projects</button>
                            </Link>
                        </div>

                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div className="down-arrow">
                                <img src={downArrow} alt="" />
                            </div>

                        </Link>
                    </div>
                </section>

                <section id="projects">
                    <div className="sub-header header-stylish">
                        <h3>My Projects</h3>
                    </div>
                    <div id="contact-header-text">
                        Filter by:
                    </div>
                    <div id="project-filter-buttons">
                        <button className="filter-button" value="all" onClick={this.handleProjectsFilterChange.bind(this)}>All</button>
                        <button className="filter-button selected" value="webApps" onClick={this.handleProjectsFilterChange.bind(this)}>Web Apps</button>
                        <button className="filter-button" value="unityGames" onClick={this.handleProjectsFilterChange.bind(this)}>Unity Games</button>
                        <button className="filter-button" value="javaGames" onClick={this.handleProjectsFilterChange.bind(this)}>Java Games</button>
                    </div>
                    <div id="projects-cards-container">
                        {this.renderProjectsFiltered()}

                    </div>

                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <div className="down-arrow" id="projects-arrow">
                            <img src={downArrow} alt="" />
                        </div>

                    </Link>

                </section>

                <section id="about">
                    <img className="background-img" id="about-img" src={aboutImg} alt="" />
                    <div className="header-stylish" id="about-title">
                        <h2>About Me</h2>
                    </div>
                    <div id="profile-img-container">
                        <img src={profileImg} alt="" />
                    </div>
                    <p id="about-text">
                        I have a passion for programming and web development in particular.
                        I love problem solving and turning ideas into reality using code.
                        <br />
                        Apart from programming, I enjoy creating great user experiences and functional designs – I just love making stuff.
                        <br />
                        I’m always learning and striving to be the best that I can be.
                    </p>
                    <div className="down-arrow">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div className="down-arrow" id="about-arrow">
                                <img src={downArrow} alt="" />
                            </div>

                        </Link>
                    </div>
                </section>

                <section id="contact">
                    <div className="sub-header header-stylish" id="contact-header">
                        <h3>Contact</h3>
                    </div>
                    <div id="contact-header-text">
                        <p>If you want to contact me, send me an email at <span className="bold">osterholmv@gmail.com</span>,</p>
                        <p>or fill in the form below.</p>
                    </div>
                    <div id="contact-form">
                        {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
                        <form action="https://formspree.io/osterholmv@gmail.com" method="POST">
                            <label id="contact-form-name">
                                Name:
                                <input type="text" name="name" value={this.state.value} onChange={this.handleNameChange.bind(this)} />
                            </label>

                            <label id="contact-form-email">
                                Email:
                                <input type="text" name="email" value={this.state.value} onChange={this.handleEmailChange.bind(this)} />
                            </label>

                            <label id="contact-form-message">
                                Message:
                                <textarea type="text" name="message" value={this.state.value} onChange={this.handleMessageChange.bind(this)} />
                            </label>


                            <input id="contact-form-submit" type="submit" value="Send" />
                        </form>
                    </div>

                </section>
            </div>
        );
    }
    renderProjectsFiltered() {
        switch (this.state.projectsFilter) {
            case ("webApps"):
                return (projects.webApps.map(card => card));
            case ("javaGames"):
                return (projects.javaGames.map(card => card));
            case ("unityGames"):
                return (projects.unityGames.map(card => card));
            default:
                return (projects.webApps.map(card => card)).concat(projects.javaGames.map(card => card)).concat(projects.unityGames.map(card => card));
        }
    }
    handleProjectsFilterChange(e) {
        this.setState({ "projectsFilter": e.target.value });
        let filterButtons = Array.from(document.getElementsByClassName("filter-button"));
        //remove select style on all filter buttons
        for (let i in filterButtons) {
            filterButtons[i].classList.remove("selected");
        }
        //add select style to clicked button
        e.target.classList.contains("selected") ? e.target.classList.remove("selected") : e.target.className += " selected";

    }
    handleNameChange(e) {
        this.setState({ "formName": e.target.value });
    }
    handleEmailChange(e) {
        this.setState({ "formEmail": e.target.value });
    }
    handleMessageChange(e) {
        this.setState({ "formMessage": e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.formName, this.state.formEmail, this.state.formMessage);

        console.log("submit");
    }

}

export default Portfolio;