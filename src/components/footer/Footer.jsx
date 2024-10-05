import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                
                <h1 className="footer__title">Tuna</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>
                    <li>
                        <a href="#resume" className="footer__link">Resume</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href=": https://www.linkedin.com/in/yigittunaozden/" className="footer__social-link" target={"_blank"}>
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href=" https://github.com/Tunao2den" className="footer__social-link" target={"_blank"}>
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