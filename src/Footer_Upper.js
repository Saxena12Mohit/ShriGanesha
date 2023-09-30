import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGoogle, FaGithub } from "react-icons/fa";
function Footer_Upper() {
  return (
    <>
      <div className="container-fluid">
        
          {/* <!-- Grid container --> */}
          <div class="container pt-4 ">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
              {/* <!-- Facebook --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-facebook-f"><FaFacebookF /></i
              ></a>

              {/* <!-- Twitter --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-twitter"><FaTwitter /></i
              ></a>

              {/* <!-- Google --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-google"><FaGoogle /></i
              ></a>

              {/* <!-- Instagram --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-instagram"><FaInstagram /></i
              ></a>

              {/* <!-- Linkedin --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-linkedin"><FaLinkedinIn /></i
              ></a>
              {/* <!-- Github --> */}
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i class="fab fa-github"><FaGithub /></i
              ></a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center text-dark p-3 xyz">
            © 2020 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          {/* <!-- Copyright --> */}
    
      </div>
    </>
  )
}

export default Footer_Upper
