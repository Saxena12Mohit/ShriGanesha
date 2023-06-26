import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
           
                <div className="container-fluid navbar-bg">

                    <div className="row nav_bg">
                        <div className="col-10   mx-auto">


                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to="/"><h1><strong>Motechskills</strong></h1></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse me-auto" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " >
                                            <li className="nav-item">
                                                <Link className="nav-link active fw-bold fs-5" aria-current="page" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link fw-bold fs-5" to="/Contact">contact</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link fw-bold fs-5" to="/About">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link fw-bold fs-5" to="/Services">Services</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default Navbar
