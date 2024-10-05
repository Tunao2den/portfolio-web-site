import React, {useState} from 'react';
import "./header.css";

function Header() {

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");


    return (
        <header className="header">
            <nav className="nav container">
                <a href="/index.html" className="nav__logo">Tuna</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"
                               onClick={() => setActiveNav('#home')}
                               className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about"
                               onClick={() => setActiveNav('#about')}
                               className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" onClick={() => setActiveNav('#home')}
                               className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-notebooks nav__icon"></i>
                                Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#home')}
                               className={activeNav === "#Contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-notebooks nav__icon"></i>
                                Contact
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="uil uil-suitcase nav__icon"></i>
                                Resume
                            </a>
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