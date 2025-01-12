import React, {useState} from "react";
import "./projects.css"

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id = "projects">
            <h2 className="project__title">Projects</h2>
            <span className="section__subtitle">Personal projects developed to enhance my learning</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Social Media App</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(4)}>
                        View more{" "}
                        <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close"
                               onClick={() => (toggleTab(0))}></i>

                            <h3 className="projects__modal-title">Social Media App</h3>
                            <p className="projects__modal-description">Social Media API Development</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Developed using Spring Boot, Spring Cloud, and
                                        Spring Security.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Leveraged both SQL and NoSQL databases.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Built on a microservices architecture.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Utilized Kafka for event-driven communication.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className='bx bx-link-alt projects__modal-icon'></i>
                                    <a href="https://github.com/Tunao2den/distributed-social-media-app"
                                       className="projects__modal-link">Check out the source code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Http Web Server</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View more{" "}
                        <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close"
                               onClick={() => (toggleTab(0))}></i>

                            <h3 className="projects__modal-title">Http Web Server</h3>
                            <p className="projects__modal-description">Building my own http server with sockets</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">GET request handling</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Concurrent Request Handling</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Annotation-based routing</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className='bx bx-link-alt projects__modal-icon'></i>
                                    <a href="https://github.com/Tunao2den/http-web-server"
                                       className="projects__modal-link">Check out the source code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Full-Stack Todo App</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(2)}>
                        View more{" "}
                        <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close"
                               onClick={() => (toggleTab(0))}></i>

                            <h3 className="projects__modal-title">Full-Stack Todo App</h3>
                            <p className="projects__modal-description">Todo App developed with Java, Spring-Boot,
                                Spring-Security, React</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">JWT-based authentication and authorization</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Data stored in H2 database</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">React frontend with Axios for API calls</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Deployed on AWS</p>
                                </li>

                                {/*<li className="projects__modal-project">*/}
                                {/*    <i className='bx bx-link-alt projects__modal-icon'></i>*/}
                                {/*    <a href="http://tuna-todo.s3-website.eu-north-1.amazonaws.com/"*/}
                                {/*       className="projects__modal-link">Check out the live demo</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Tcmb Currency App</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(3)}>
                        View more{" "}
                        <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close"
                               onClick={() => toggleTab(0)}></i>

                            <h3 className="projects__modal-title">Tcmb currency app</h3>
                            <p className="projects__modal-description">RESTful API which fetches currency exchange
                                data</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Developed with Spring Boot</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Fetches data from the official Tcmb website</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Stores data in an H2 database</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className='bx bx-link-alt projects__modal-icon'></i>
                                    <a href="https://github.com/Tunao2den/tcmb-currency"
                                       className="projects__modal-link">Check out the source code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;