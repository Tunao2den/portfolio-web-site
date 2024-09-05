import React, {useState} from 'react';
import "./header.css";

function Header() {

    const [Toggle, showMenu]= useState(false);

    return(
        <header className="header">
            <nav className="nav container">
                <a href="/index.html" className="nav__logo">Tuna</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#hom" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#ho" className="nav__link">
                                <i className="uil uil-notebooks nav__icon"></i>
                                Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#h" className="nav__link">
                                <i className="uil uil-suitcase nav__icon"></i>
                                Resume
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-arrow-left nav__close"
                       onClick={()=>showMenu(!Toggle)}></i>
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