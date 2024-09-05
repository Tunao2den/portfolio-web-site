function HeaderComponent(){
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg w-100">
                        {/* Navbar Brand */}
                        <a
                            className="navbar-brand ms-1 fs-2 fw-bold text-black"
                            href="https://github.com/Tunao2den"
                        >
                            Yigit Tuna Ozden
                        </a>

                        {/* Navbar Toggler for small screens */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Collapsible Menu Items */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mt-3">
                                <li className="nav-item fs-5 p-lg-3">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item fs-5 p-lg-3">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item fs-5 p-lg-3">
                                    <a className="nav-link" href="#projects">Project</a>
                                </li>
                                <li className="nav-item fs-5 p-lg-3">
                                    <a className="nav-link" href="#projects">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>


    )
}

export default HeaderComponent