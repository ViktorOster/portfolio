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
import portfolioImg from '../images/portfolio-screenshot.jpg';
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
                    <img id="hero-img-cover" src={heroImg4} alt="" />
                    <div className="hero-section">
                        <div className="hero-text">
                            <h1>Viktor Österholm</h1>
                            <h3>Developer, Web developer</h3>
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
                    <img className="background-img" id="about-img" src={aboutImg} alt="" />
                    <div className="header-stylish" id="about-title">
                        <h2>About Me</h2>
                    </div>
                    <div id="profile-img-container">
                        <img src={profileImg} alt="" />
                    </div>
                    <p id="about-text">
                        I have a passion for development and web development in particular.
                        I love creating applications in a variety of programming languages.
                        Apart from programming i also enjoy creating great user experiences and good looking designs – I just love making stuff.
                        <br />
                        I’m always learning and striving to be the best that I can be.
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
                            <div className="down-arrow" id="about-arrow">
                                <img src={downArrow} alt="" />
                            </div>

                        </Link>
                    </div>


                </section>


                <section id="projects">
                    <div className="sub-header header-stylish">
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
                            text="A patient dashboard for a medical company made with PHP and Laravel. Users can register or login to view their healthcare related data and fill in questionnaires. Data is stored in an SQL database. Use email: mike@mail.com, password: password to login and view data."
                            tags={["PHP", "Laravel", "HTML5", "CSS3", "MySQL"]}
                            image={dashboardImg}
                            projectLink="https://medical-dashboard.herokuapp.com/"
                            codeLink="https://github.com/ViktorOster/csapp"
                        />
                        <Card
                            title="Wave Drawing Synth"
                            text="A synth based on user drawn wave shapes, made with the Web Audio API. Points can be added to a canvas to create custom wave shapes that can be played using the keyboard or touch controls on mobile. Tested to be working with the Chrome browser on desktop and mobile."
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
                            text="An E-Auction site built with Python and Django. Has many functionalities. Not deployed yet, so no live version is available."
                            tags={["Python", "Django", "HTML5", "CSS3", "SQLite3"]}
                            image={eAuctionImg}
                            projectLink="/"
                            codeLink="https://github.com/ViktorOster/auction-django"
                        />
                        <Card
                            title="This Site!"
                            text="This site was built using ReactJS."
                            tags={["JavaScript", "ReactJS", "HTML5", "CSS3"]}
                            image={portfolioImg}
                            projectLink="/"
                            codeLink="https://github.com/ViktorOster/portfolio/tree/master"
                        />
                    </div>

                    <Link
                        activeClass="active"
                        to="contact"
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