import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-dark" to="/">NewsToday</Link>
                    <button className="navbar-toggler" style={{ borderColor: "black" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ backgroundColor: "#212529" }}></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link text-dark" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item "><Link className="nav-link text-dark " to="/business">Business</Link></li>
                            <li className="nav-item "><Link className="nav-link text-dark" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item "><Link className="nav-link text-dark" to="/general">General</Link></li>
                            <li className="nav-item "><Link className="nav-link text-dark" to="/health">Health</Link></li>
                            <li className="nav-item "><Link className="nav-link text-dark" to="/science">Science</Link></li>
                            <li className="nav-item "><Link className="nav-link text-dark" to="/sports">Sports</Link></li>
                            <li className="nav-item "><Link className="nav-link text-dark" to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
