import React, {useState} from 'react';
import "./header.css";
import {Link, useLocation, useNavigate} from "react-router-dom";

function Header() {

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const Button = (props) => {
        return (
            <button onClick={props.onClick} className={props.className}>
                {props.children}
            </button>
        );
    };

    const navigate = useNavigate();

    const handleNavigation = (path, sectionId) => {
        setActiveNav('#' + sectionId)
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
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">Tuna</Link>
                {/*<a href="/index.html" className="nav__logo">Tuna</a>*/}

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Button onClick={() => handleNavigation('/', 'home')}
                                    className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </Button>

                            {/*<a href="#home"*/}
                            {/*   onClick={() => setActiveNav('#home')}*/}
                            {/*   className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>*/}
                            {/*    <i className="uil uil-estate nav__icon"></i>*/}
                            {/*    Home*/}
                            {/*</a>*/}
                        </li>

                        <li className="nav__item">
                            <Button onClick={() => handleNavigation('/', 'about')}
                                    className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </Button>
                            {/*<a href="#about"*/}
                            {/*   onClick={() => setActiveNav('#about')}*/}
                            {/*   className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>*/}
                            {/*    <i className="uil uil-user nav__icon"></i>*/}
                            {/*    About*/}
                            {/*</a>*/}
                        </li>

                        <li className="nav__item">
                            <Button onClick={() => handleNavigation('/', 'projects')}
                                    className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-notebooks nav__icon"></i>
                                Projects
                            </Button>
                            {/*<a href="#projects" onClick={() => setActiveNav('#home')}*/}
                            {/*   className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>*/}
                            {/*    <i className="uil uil-notebooks nav__icon"></i>*/}
                            {/*    Projects*/}
                            {/*</a>*/}
                        </li>

                        <li className="nav__item">
                            <Button onClick={() => handleNavigation('/', 'contact')}
                                    className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-notebooks nav__icon"></i>
                                Contact
                            </Button>

                            {/*<a href="#contact" onClick={() => setActiveNav('#home')}*/}
                            {/*   className={activeNav === "#Contact" ? "nav__link active-link" : "nav__link"}>*/}
                            {/*    <i className="uil uil-notebooks nav__icon"></i>*/}
                            {/*    Contact*/}
                            {/*</a>*/}
                        </li>

                        <li className="nav__item">
                            <Link to="/resume" className="nav__link">
                                <i className="uil uil-suitcase nav__icon"></i>
                                Resume
                            </Link>

                            {/*<a href="#resume">*/}
                            {/*Resume*/}
                            {/*</a>*/}
                        </li>
                    </ul>

                    <i className="uil uil-arrow-left nav__close"
                       onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle"
                     onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-align-center-alt"></i>
                </div>

            </nav>
        </header>
    )
}

export default Header;