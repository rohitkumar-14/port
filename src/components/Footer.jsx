import React from 'react'
import logo from "../img/logo/po-logo2.1.png"
import footer from "../img/icon/footer-ph-1.1.svg"
import footerMail from "../img/icon/footer-mail-1.2.svg"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="po-footer-section footer-bg-2 pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-32">
            <div className="po-footer widget-1">
              <NavLink to="/">
                <img src={logo} alt="" style={{marginLeft: "-5.3rem"}} />
              </NavLink>
              <p className="pt-20 pb-24 text-white">
                Sanjeev Jaiswal's efforts in rural and urban development, disaster management, and social welfare have left a lasting legacy, demonstrating his commitment to enhancing the livability and sustainability of the regions he served.
              </p>
              <div className="po-social po-social-2">
                <ul>
                  <li>
                    <NavLink to="https://www.facebook.com/share/1XoZhX4UtH/?mibextid=LQQJ4d"><i className="fa-brands fa-facebook-f"></i></NavLink>
                  </li>
                  <li>
                    <NavLink to="https://x.com/sjaiswal_ias?s=21"><i className="fa-brands fa-x-twitter"></i></NavLink>
                  </li>
                  <li>
                    <NavLink to="https://in.linkedin.com/in/sanjeev-jaiswal-i-a-s-426834318"><i className="fa-brands fa-linkedin-in"></i></NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.instagram.com/sanjeevjaiswalias?igsh=ZTkwbTN2NmZteXI3"><i className="fa-brands fa-instagram"></i></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-6 pb-32">
            <div className="po-footer widget-2">
              <h4
                className="po-footer-widget-title text-white text-20 leading-20 font-bold pb-11">
                Quick Links
              </h4>
              <div className="po-footer-menu po-footer-menu-2">
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/journey">Journey</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/achievements">Achievements</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        

          <div className="col-lg-3 col-md-6 pb-32">
            <div className="po-footer widget-4">
              <div
                className="po-footer-ic-box bg-white-10 rounded-7 p-24 d-flex items-center mb-20">
                <div className="po-footer-icon po-footer-icon-2 mr-10">
                  <span
                    ><img src={footer} alt=""
                  /></span>
                </div>
                <div className="po-footer-content">
                  <p className="leading-16 pb-16 text-white">Call Or Message</p>
                  <NavLink
                    className="font-bold text-24 leading-24 text-white"
                    to="tel:1234567890"
                    >123-456-7890</NavLink>
                </div>
              </div>
              <div
                className="po-footer-ic-box bg-white-10 rounded-7 p-24 d-flex items-center mb-20">
                <div className="po-footer-icon po-footer-icon-2 mr-10">
                  <span
                    ><img src={footerMail} alt=""
                  /></span>
                </div>
                <div className="po-footer-content">
                  <p className="leading-16 pb-16 text-white">Email Address:</p>
                  <NavLink
                    className="font-bold text-24 leading-24 text-white"
                    to="mailto:info@gmail.com"
                    >info@gmail.com</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="po-border-top-2"></div>

        <div className="row">
          <div className="col-xl-7">
            <div className="copy-right-2">
              <p className="copyright-1 leading-16 pt-24 pb-32 text-white">
                &COPY;Copyright 2024 Politico
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer