import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGoogle, FaGithub } from "react-icons/fa";
function Footer_img() {
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    Dream big achieve big
                </div>
                <div className="card-body">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.facebook.com/mohit.saxena.77377!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target='_blank'
                    ><i className="fab fa-facebook-f"><FaFacebookF /></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"><FaTwitter /></i
                    ></a>

                    {/* <!-- Google --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"><FaGoogle /></i
                    ></a>

                    {/* <!-- Instagram --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/!"
                        role="button"
                        target='_blank'
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"><FaInstagram /></i
                    ></a>

                    {/* <!-- Linkedin --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.linkedin.com/feed/"
                        role="button"
                        target='_blank'
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"><FaLinkedinIn /></i
                    ></a>
                    {/* <!-- Github --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"><FaGithub /></i
                    ></a>
                </div>
                <div className="card-footer text-body-secondary">
                    Designed by Mohit Saxena
                </div>
            </div>
        </>
    )
}

export default Footer_img
