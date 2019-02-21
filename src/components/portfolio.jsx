import React, { Component } from 'react';
import Card from "./card";
import { Link, animateScroll as scroll } from "react-scroll";
import heroImg from '../images/hero-image-transparent.png';
import SPMSImg from '../images/SPMS.png';
import dashboardImg from '../images/MedicalDashboard.png';
import eAuctionImg from '../images/eAuctionDjango.png';
import drawWaveImg from '../images/DrawWaveSynth.png';
import sketchboardImg from '../images/SketchBoardgallery.png';
import portfolioImg from '../images/PortfolioPage.png';
import placeholderProfile from '../images/placeholder-profile.png';
import profileImg from '../images/Jag.jpg';
import downArrow from '../images/172458-128.png';

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            formName: "",
            formEmail: "",
            formMessage: ""
        }
    }
    render() {
        return (
            <div id="portfolio">

                <div id="navbar">

                    <span id="nav1" >
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div>
                                HOME
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
                                ABOUT ME
                            </div>
                        </Link>
                    </span>

                    <span id="nav3" >
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div>
                                MY PROJECTS
                            </div>
                        </Link>
                    </span>

                    <span id="nav" >
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div>
                                CONTACT ME
                            </div>
                        </Link>
                    </span>

                </div>

                <section id="home">
                    <img id="hero-img" src={heroImg} alt="" />
                    <div className="hero-section">
                        <div className="hero-text">
                            <h1>Hi, I'm Viktor,</h1>
                            <h3>web developer</h3>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <button>View Projects</button>
                            </Link>
                        </div>

                        <Link
                            activeClass="active"
                            to="about"
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

                <section id="about">
                    <div className="center-text" id="about-title">
                        <h2>About Me</h2>
                    </div>
                    <div id="profile-img-container">
                        <img src={profileImg} alt="" />
                    </div>
                    <p id="about-text">
                        I’m a student with a passion for programming and web development. My interest in web development began when I took a university course on Web Services. Since then I’ve been constantly learning and developing web pages and -applications on my own. I received my Bachelor’s degree in Computer Science from Åbo Akademi university in Turku, Finland at the beginning of 2019. During my freetime as a student I’ve also developed games using Java and C# in Unity. When I’m not coding or designing web pages/apps I’m usually writing or playing music on my own or in bands.
                        I love learning new technologies and making stuff for the web.
                    </p>
                    <div className="down-arrow">
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
                    <div className="center-text sub-header">
                        <h3>My Projects</h3>
                    </div>

                    <div id="projects-cards-container">
                        <Card
                            title="Stock Portfolio Management System"
                            text="Stock portfolio management that supports multiple portfolios and stocks. Stock data is fetched from Alpha Vantage API. Multiple stocks can be graphed simultaneously inside a user specified time window. Portfolios and stocks are stored in localstorage."
                            tags={["JavaScript", "HTML5", "CSS3", "ReactJS"]}
                            image={SPMSImg}
                            projectLink="https://viktoroster.github.io/spms-app/"
                            codeLink="https://github.com/ViktorOster/spms-app/tree/master"
                        />
                        <Card
                            title="Medical Dashboard"
                            text="A patient dashboard for a medical company made with PHP and Laravel. Users can register and login and view their healthcare-related data as well as fill in questionnaires. Data is stored in SQL database. Use email: mike@mail.com, password: password to login and view data."
                            tags={["PHP", "Laravel", "HTML5", "CSS3", "MySQL"]}
                            image={dashboardImg}
                            projectLink="https://medical-dashboard.herokuapp.com/"
                            codeLink="https://github.com/ViktorOster/csapp"
                        />
                        <Card
                            title="Wave Drawing Synth"
                            text="A synth based on user drawn wave shapes, made with the Web Audio API. Points can be added to a canvas to create custom wave shapes that then can be played using the keyboard or touch controls on mobile. Tested to be working with the Chrome browser on desktop and mobile."
                            tags={["JavaScript", "HTML5", "CSS3"]}
                            image={drawWaveImg}
                            projectLink="https://viktoroster.github.io/draw-waveshape/"
                            codeLink="https://github.com/ViktorOster/draw-waveshape"
                        />
                        <Card
                            title="Sketchboard / Gallery"
                            text="A sketchboard / gallery application using HTML5 canvas that allows users to draw and post drawings to a public gallery. The drawings are stored in JSON-format in a simple NodeJS backend."
                            tags={["JavaScript", "HTML5", "CSS3", "NodeJS"]}
                            image={sketchboardImg}
                            projectLink="https://sketch-gallery.glitch.me/"
                            codeLink="https://github.com/ViktorOster/sketch-gallery"
                        />
                        <Card
                            title="E-Auction Site"
                            text="An E-Auction site built with Python and Django. Has many functionalities. I still have to figure out how to deploy a Django site to heroku, so sadly no live version is available."
                            tags={["Python", "Django", "HTML5", "CSS3", "SQLite3"]}
                            image={eAuctionImg}
                            projectLink="/"
                            codeLink="https://github.com/ViktorOster/auction-django"
                        />
                        <Card
                            title="This Page!"
                            text="This page was made possible with the awesome powers of ReactJS"
                            tags={["JavaScript", "ReactJS", "HTML5", "CSS3"]}
                            image={portfolioImg}
                            projectLink="/"
                            codeLink="https://github.com/ViktorOster/portfolio/tree/master"
                        />
                    </div>

                    <div className="down-arrow">
                        <Link
                            activeClass="active"
                            to="contact"
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

                <section id="contact">
                    <div className="center-text sub-header" id="contact-header">
                        <h3>Contact</h3>
                        <p>If you wanna contact me, send me a mail at <span className="bold">osterholmv@gmail.com</span>,</p>
                        <p>or fill in the form below</p>
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


                            <input id="contact-form-submit" type="submit" value="Send!" />
                        </form>
                    </div>

                </section>
            </div>
        );
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