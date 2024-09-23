import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">EXPERIENCE</h3>
                <span className="about__subtitle">Software Developer Intern</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase about__icon'></i>
                <h3 className="about__title">EDUCATION</h3>
                <span className="about__subtitle">Yıldız Technical University Mathematical Engineering</span>
            </div>

            <div className="about__box ">
                <i className='bx bx-task about__icon'></i>
                <h3 className="about__title">PROJECTS & CERTIFICATES</h3>
                <span className="about__subtitle grid">
                    <a href="http://tuna-todo.s3-website.eu-north-1.amazonaws.com/" className="about__link ">Todo App Full Stack</a>
                    <a href="https://www.udemy.com/certificate/UC-07bc0366-130e-4c63-9c0d-e9fb7ae1b100/"
                       className="about__link ">Master Spring Boot Certificate</a>
                    <a href="https://github.com/Tunao2den/http-web-server"
                       className="about__link ">Custom Http Server</a>
                </span>
            </div>
        </div>
    )
}

export default Info;