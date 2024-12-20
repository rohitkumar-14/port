import React, { useEffect } from "react";
import shape from "../img/icon/breadcrumb-ovr-shape.svg";
import plus from "../img/icon/po-plus1.1.svg";
import dot from "../img/icon/po-dot-shape.svg";
import vote from "../img/icon/po-vote.svg";
import flag from "../img/icon/flag-sh.svg";
import breadcrumbbg from "../img/shape/shape-breadcrumb-bg.png";
import breadcrumbhero from "../img/banner/po-breadcrumb-hero.png";
import map1 from "../img/icon/po-con-from-map1.1.svg";
import map2 from "../img/icon/po-con-from-map1.2.svg";
import map3 from "../img/icon/po-con-from-map1.3.svg";
import { NavLink } from "react-router-dom";
const Contact = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `Politico | ${pageTitle}`;
    window.scrollTo(0, 0);
  }, [pageTitle]);
  return (
    <main>
      <section className="breadcrumb-bg">
        <div className="po-breadcrumb-over-shape">
          <img src={shape} alt="" />
        </div>
        <div className="po-plus-shape absolute">
          <img src={plus} alt="" />
        </div>
        <div className="po-dot-shape absolute">
          <img src={dot} alt="" />
        </div>
        <div className="po-vt-shape absolute d-none d-md-block">
          <img src={vote} alt="" />
        </div>
        <div className="po-fl-shape absolute d-none d-lg-block">
          <img src={flag} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="po-breadcrumb">
                <h1 className="font-bold text-64 leading-64 text-white">
                  Contact
                </h1>
                <div className="po-breadcrumb-list">
                  <span>
                    <NavLink to="index.html">Home</NavLink>
                  </span>
                  <span className="dvir">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <span className="active">
                    <NavLink to="#">Contact</NavLink>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="breacrumb-images">
                <div className="breadcrumb-back">
                  <img src={breadcrumbbg} alt="" />
                </div>
                <div className="breadcrumb-fronts-img">
                  <img src={breadcrumbhero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="po-maps pt-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135197.949286641!2d5.1764345124327305!3d51.063780363604025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sbd!4v1728459348836!5m2!1sen!2sbd"
          className="contact-page__google-map"
          allowfullscreen=""></iframe>
      </div>
      <section className="po-conatact-iner pb-100">
        <div className="container">
          <div className="row">
            <div className="po-con-main-bg gray-bg-4">
              <div className="row align-items-center">
                <div className="col-xl-7 mb-30">
                  <div className="con-content mr-40">
                    <h2 className="font-bold text-24 leading-24 pb-16">
                      Send Us A Message
                    </h2>
                    <p className="leading-26 pb-24">
                      Our response time is within 30 minutes during business
                      hours
                    </p>

                    <div className="po-con-from">
                      <form action="#">
                        <div className="cmnt-from">
                          <div className="row">
                            <div className="col-xl-6 mb-20">
                              <input type="text" placeholder="First Name" />
                            </div>
                            <div className="col-xl-6 mb-20">
                              <input type="text" placeholder="Last Name" />
                            </div>
                            <div className="col-xl-6 mb-20">
                              <input type="email" placeholder="Email" />
                            </div>
                            <div className="col-xl-6 mb-20">
                              <input type="tel" placeholder="Mobile Number" />
                            </div>
                            <div className="col-xl-12 mb-20">
                              <input type="text" placeholder="Subject" />
                            </div>

                            <div className="col-xl-12 mb-20">
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Message"></textarea>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="po-btn-sec po-btn-sec-1">
                            <span className="po-btn-wrap">
                              <span className="po-btn-y-1">Send Now</span>
                              <span className="po-btn-y-2">Send Now</span>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 mb-10">
                  <div className="po-cmt-ic-box mb-20">
                    <div className="po-cmt-icon">
                      <span>
                        <img src={map1} alt="" />
                      </span>
                    </div>
                    <div className="po-cmt-content">
                      <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                        Our Address
                      </h4>
                      <NavLink to="#">
                        8708 Technology Forest Pl Suite 125 -G,
                        <br /> The Woodlands, TX 77381
                      </NavLink>
                    </div>
                  </div>

                  <div className="po-cmt-ic-box mb-20">
                    <div className="po-cmt-icon">
                      <span>
                        <img src={map2} alt="" />
                      </span>
                    </div>
                    <div className="po-cmt-content">
                      <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                        Call or text
                      </h4>
                      <NavLink to="tel:1234567890">123-456-7890</NavLink>
                    </div>
                  </div>

                  <div className="po-cmt-ic-box mb-20">
                    <div className="po-cmt-icon">
                      <span>
                        <img src={map3} alt="" />
                      </span>
                    </div>
                    <div className="po-cmt-content">
                      <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                        Email us today
                      </h4>
                      <NavLink to="mailto:Political@hotmail.com">
                        Political@hotmail.com
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
