import React from "react";
import "./footer.css"
import {Link, useNavigate} from "react-router-dom";

const Footer = () => {

    const Button = (props) => {
        return (
            <button onClick={props.onClick} className={props.className}>
                {props.children}
            </button>
        );
    };

    const navigate = useNavigate();

    const handleNavigation = (path, sectionId) => {
        if (window.location.pathname === path) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(path);
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <footer className="footer">
            <div className="footer__container container">
                
                <h1 className="footer__title">Tuna</h1>

                <ul className="footer__list">
                    <li>
                        {/*<a href="#about" className="footer__link">About</a>*/}

                        <Button onClick={() => handleNavigation('/', 'about')}
                                className="footer__link">
                            About
                        </Button>
                    </li>
                    <li>
                        {/*<a href="#portfolio" className="footer__link">Project</a>*/}

                        <Button onClick={() => handleNavigation('/', 'projects')}
                                className="footer__link">
                            Projects
                        </Button>
                    </li>
                    <li>
                        {/*<a href="#resume" className="footer__link">Resume</a>*/}

                        <Link to="/resume" className="footer__link">
                            Resume
                        </Link>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/yigittunaozden/" className="footer__social-link" target={"_blank"}>
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/Tunao2den" className="footer__social-link" target={"_blank"}>
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span
                    className="footer__copy"> &#169; Tuna. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;