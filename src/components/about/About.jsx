import React from "react";
import "./about.css"
import "./qualification.css"

const About = () => {


    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="section__subtitle">
                <div className="about__text">
                    Mathematical Engineering graduate focused on software development. Highly motivated self learner with personal
                    projects and professional experience in Java and Databases.
                </div>

                <div className="tech__stack">
                    <div className="tech__stack-title">
                        Tech Stack:
                    </div>
                    <div className="tech__stack-text">
                        <i className='bx bxl-java tech__stack-icon'></i> Java,
                        <i className='bx bxl-spring-boot tech__stack-icon'></i>Spring Framework,
                        <i className='bx bxl-react tech__stack-icon'></i>React,
                        <i className='bx bx-data tech__stack-icon'></i>SQL
                    </div>
                </div>


            </div>

            <div className="about__container container">
                <div className="qualification__container">
                    <div className="qualification__sections">
                        {/* Education Section */}
                        <div className="qualification__content qualification__content-active">
                            <div className="qualification__button qualification__active button--flex">
                                <i className="uil uil-graduation-cap qualification__icon"></i>
                                Education
                            </div>


                            <div className="qualification__data">
                                <div className="qualification__data-text">
                                    <h3 className="qualification__title">Computer Systems Engineering (Erasmus+)</h3>
                                    <span className="qualification__subtitle">Fernando Pessoa University</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2024 FEB - 2024 JUL
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Mathematical Engineering</h3>
                                    <span className="qualification__subtitle">Yıldız Technical University</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2020 SEP - 2025 JUN
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="qualification__content qualification__content-active">
                            <div className="qualification__button qualification__active button--flex">
                                <i className="uil uil-briefcase-alt qualification__icon"></i>
                                Experience
                            </div>


                            <div className="qualification__data">
                                <div className="qualification__data-text">
                                    <h3 className="qualification__title">Software Developer Intern</h3>
                                    <span className="qualification__subtitle">Garanti BBVA Technology</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 AUG - 2023 DEC
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Backend Developer Intern</h3>
                                    <span className="qualification__subtitle">IyziShip</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 JUL - 2023 AUG
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;