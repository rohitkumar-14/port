import React, { useEffect } from "react";
import banner from "../img/banner/po-banner2.1.jpg";
import shape1 from "../img/shape/po-shape2.1.png";
import shape2 from "../img/shape/po-shape2.2.png";
import shape3 from "../img/shape/po-shape2.3.png";
import hero2 from "../img/banner/po-hero2.1.png";
import about1 from "../img/about/po-about-2.1.png";
import about2 from "../img/about/po-about-2.2.png";
import shape23 from "../img/shape/po-shape2.3.png";
import faqshape from "../img/shape/po-faq-shape.png";
import faq1 from "../img/faq/po-faq-2.1.png";
import testimonial from "../img/testimonial/po-testimonial-2.1.png"
import testimonialNav from "../img/testimonial/po-testimonial-nav-sm-2.2.png"
import quote from "../img/icon/po-test-quote-2.1.svg"
import gallery from "../img/gallery/po-gallery-lg-2.1.png"
import gallery1 from "../img/gallery/po-gallery-sm-2.1.png"
import gallery2 from "../img/gallery/po-gallery-sm-2.2.png"
import gallery3 from "../img/gallery/po-gallery-sm-2.3.png"
import gallery4 from "../img/gallery/po-gallery-sm-2.4.png"
import gallery5 from "../img/gallery/po-gallery-lg-2.2.png"
import { NavLink } from "react-router-dom";

const Home = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `Politico | ${pageTitle}`;
    window.scrollTo(0, 0);
  }, [pageTitle]);

  return (
    <main>
      <section
        className="po-banner-2 relative pt-100"
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="po-shape1 d-none d-md-block">
          <img className="shape-1 absolute" src={shape1} alt="" />
        </div>
        <div className="po-shape2 d-none d-lg-block">
          <img className="shape-2 absolute" src={shape2} alt="" />
        </div>
        <div className="po-shape3">
          <img className="shape-3 absolute" src={shape3} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30">
              <div className="po-banner-content-2">
                <h4 className="po-subtitle2 text-white text-16 leading-16 bg-white-10 rounded-7">
                  #1 IAS
                </h4>
                <h1 className="po-hero-tilte text-60 text-white leading-70 font-bold pt-20 pb-20">
                  IAS Sanjeev Jaiswal
                </h1>
                <p className="text-18 leading-30 pb-32">
                  Inspired by his father’s dream to see him become a magistrate,
                  Jaiswal pursued civil services and successfully cleared the
                  IAS.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="po-hero-2">
                <div className="po-heroimg-2 mt-60">
                  <img src={hero2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="po-about-area pt-100 pb-70">
        <div className="container">
          <div className="row flex-lg-row flex-column-reverse align-items-center">
            <div className="col-xl-6 mb-30">
              <div
                className="po-sec-about-2 relative z-1 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="800">
                <div className="po-sec-img-2 relative mr-40">
                  <img className="lg-ab-2 w-100 rounded-7" src={about1} alt="" />

                  <div className="po-sm-about-img-2">
                    <img className="sm-ab-2 w-100" src={about2} alt="" />
                  </div>
                  <div className="po-ab-shape-2">
                    <img src={shape23} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6" style={{ height: "40rem" }}>
              <div
                className="po-about-content po-about-content-2 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1000">
                <div className="po-section-title po-section-title-2">
                  <h4 className="sec-subtitle subtitle-2">About Me</h4>

                  <p className="pb-10 pt-16" style={{ fontSize: "18px" }}>
                    Sanjeev Jaiswal (born April 7, 1972) is an Indian
                    Administrative Service (IAS) officer of the 1996 Maharashtra
                    cadre, recognized for his dedication to public service,
                    transparency, and innovative governance.
                    <br />
                    Over his 28-year-long career, Jaiswal has held prominent
                    positions such as Municipal Commissioner of Thane and
                    Nagpur, Additional Commissioner of Brihanmumbai Municipal
                    Corporation (BMC), and Vice President and CEO of the
                    Maharashtra Housing and Area Development Authority (MHADA).
                    He has been instrumental in various projects, ranging from
                    urban redevelopment to water conservation and housing
                    reforms.
                  </p>

                  <div className="po-about-btn-2 mt-20">
                    <NavLink to="/about" className="po-btn-sec">
                      <span className="po-btn-wrap">
                        <span
                          className="po-btn-y-1"
                          style={{ padding: "0.1rem 0" }}>
                          Read more...
                        </span>
                        <span className="po-btn-y-2" style={{ marginTop: "3px" }}>
                          Click Here
                        </span>
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="po-faq-2 overflow-hidden relative z-1 pt-100 pb-70">
        <div className="faq-shape d-none d-lg-block">
          <img src={faqshape} alt="" />
        </div>
        <div className="container">
          <div className="row flex-lg-row flex-column-reverse">
            <div className="col-xl-6 mb-30">
              <div
                className="faq-img-section-2 relative z-1 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="900">
                <div className="po-faq-2-img">
                  <img src={faq1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-30">
              <div
                className="po-faq-content-2 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1100">
                <div className="po-section-title po-section-title-2 mb-40">
                  <h4 className="sec-subtitle subtitle-2">Agenda’s</h4>
                  <h2 className="sec-title sec-title-2 text-40 font-bold leading-40 pt-16 pb-16">
                    Agendas of Sanjeev Jaiswal
                  </h2>
                  <p>
                    Dive into the strategic agendas undertaken by Sanjeev
                    Jaiswal to drive progress and development. <br />
                    This section highlights key priorities, initiatives, and
                    responsibilities shaping governance and public service.
                  </p>
                </div>

                <div className="po-accordion-2">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne">
                          What is the candidate's stance on key issues?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>
                            We understand that you may have questions about our
                            policies,
                            <br />
                            the candidate's background, volunteer opportunities
                            or how.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                          How can I donate to support the campaign?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>
                            We understand that you may have questions about our
                            policies,
                            <br />
                            the candidate's background, volunteer opportunities
                            or how.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          Can I host a campaign event or fundraiser?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>
                            We understand that you may have questions about our
                            policies,
                            <br />
                            the candidate's background, volunteer opportunities
                            or how.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingfour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour">
                          How can I participate virtual events or town halls?
                        </button>
                      </h2>
                      <div
                        id="collapsefour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>
                            We understand that you may have questions about our
                            policies,
                            <br />
                            the candidate's background, volunteer opportunities
                            or how.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="po-missinon-2 pt-100 pb-70">
        <div className="container">
          <div
            className="po-section-title po-section-title-2 text-center mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <h4 className="sec-subtitle subtitle-2">Awards and Honors</h4>
            <h2 className="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Recognition and Legacy
            </h2>
            <p>
              Jaiswal’s urban projects, particularly the Digithane initiative,
              received accolades at both national and international levels for
              their innovation and impact.
            </p>
            <p>
              His efforts in rural and urban development, disaster management,
              and social welfare have left a lasting legacy, demonstrating his
              commitment to enhancing the livability and sustainability of the
              regions he served.
            </p>
          </div>
          <div className="row">
            <nav>
              <div className="mb-60" id="nav-tab" role="tablist">
                <div className="row">
                  <div className="col-xl-4 col-md-6">
                    <div
                      className="po-nav-link"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      style={{ height: "550px", padding: "1rem 1.5rem" }}>
                      <div className="po-nav-ic-box">
                        <div className="po-naviicon pt-32">
                          <span>
                            <i
                              className="fas fa-award fs-3"
                              style={{ marginTop: "18px" }}></i>
                          </span>
                        </div>
                        <div className="po-nav-content">
                          <h5 className="sec-title-2 font-bold text-28 leading-32 pt-32 text-center pb-2">
                            Recognition for Digithane Smart City Initiative
                          </h5>
                          <p className="text-center">
                            Received national and international acclaim for the{" "}
                            <strong>Digithane Project</strong>, which introduced
                            innovative G2C (Government to Citizen), B2C
                            (Business to Citizen), and C2C (Citizen to Citizen)
                            communication platforms. The project was recognized
                            as a pioneering model for smart city development and
                            citizen engagement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div
                      className="po-nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      style={{
                        height: "550px",
                        padding: "1rem 1.5rem",
                        backgroundColor: "#E31112",
                      }}>
                      <div className="po-nav-ic-box">
                        <div className="po-naviicon pt-32">
                          <span>
                            <i
                              className="fas fa-ship fs-3"
                              style={{ marginTop: "18px" }}></i>
                          </span>
                        </div>
                        <div className="po-nav-content">
                          <h5 className="sec-title-2 font-bold text-28 leading-32 pt-32 text-center pb-2 text-white">
                            Government of India Approval for Inland Water
                            Transport (IWT) Project
                          </h5>
                          <p className="text-center text-white">
                            The Detailed Project Report (DPR) conceptualized by
                            Jaiswal for Thane's Inland Water Transport (IWT) was
                            sanctioned by the{" "}
                            <strong>Government of India</strong> under NW-IWR
                            53, highlighting his role in modernizing urban
                            transport.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div
                      className="po-nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      style={{ height: "550px", padding: "1rem 1.5rem" }}>
                      <div className="po-nav-ic-box">
                        <div className="po-naviicon pt-32">
                          <span>
                            <i
                              className="fas fa-paw fs-3"
                              style={{ marginTop: "18px" }}></i>
                          </span>
                        </div>
                        <div className="po-nav-content">
                          <h5 className="sec-title-2 font-bold text-28 leading-32 pt-32 text-center pb-2">
                            Public Recognition for Tadoba-Andhari Tiger Reserve
                            Rehabilitation
                          </h5>
                          <p className="text-center">
                            The successful relocation of Botazari and Kolsa
                            villages earned Jaiswal community recognition, with
                            parts of the new settlement being named{" "}
                            <strong>Sanjeev Wadi</strong> in his honor,
                            reflecting the gratitude of the relocated villagers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 mt-5">
                    <div
                      className="po-nav-link"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      style={{ height: "550px", padding: "1rem 1.5rem" }}>
                      <div className="po-nav-ic-box">
                        <div className="po-naviicon pt-32">
                          <span>
                            <i
                              className="fas fa-water fs-3"
                              style={{ marginTop: "18px" }}></i>
                          </span>
                        </div>
                        <div className="po-nav-content">
                          <h5 className="sec-title-2 font-bold text-28 leading-32 pt-32 text-center pb-2">
                            Appreciation for Ganga Sagar Abhiyan
                          </h5>
                          <p className="text-center">
                            Jaiswal’s participatory water conservation
                            initiative in Nasik was widely appreciated for its
                            impact on water availability and sustainable
                            resource management. Several water tanks constructed
                            during the initiative were named after him,
                            symbolizing public acknowledgment of his
                            contributions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 mt-5">
                    <div
                      className="po-nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      style={{
                        height: "550px",
                        padding: "1rem 1.5rem",
                        backgroundColor: "#E31112",
                      }}>
                      <div className="po-nav-ic-box">
                        <div className="po-naviicon pt-32">
                          <span>
                            <i
                              className="fas fa-leaf fs-3"
                              style={{ marginTop: "18px" }}></i>
                          </span>
                        </div>
                        <div className="po-nav-content">
                          <h5 className="sec-title-2 font-bold text-28 leading-32 pt-32 text-center pb-2 text-white">
                            State Recognition for Environmental Campaigns in
                            Thane
                          </h5>
                          <p className="text-center text-white">
                            His leadership in doubling Thane's green cover,
                            creating urban forests, and restoring historic water
                            bodies earned commendations from state-level
                            authorities for environmental excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 mt-5">
                    <div
                      className="po-nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      style={{ height: "550px", padding: "1rem 1.5rem" }}>
                      <div className="po-nav-ic-box">
                        <div className="po-naviicon pt-32">
                          <span>
                            <i
                              className="fas fa-user-tie fs-3"
                              style={{ marginTop: "18px" }}></i>
                          </span>
                        </div>
                        <div className="po-nav-content">
                          <h5 className="sec-title-2 font-bold text-28 leading-32 pt-32 text-center pb-2">
                            Longest Tenure as Municipal Commissioner of Thane
                          </h5>
                          <p className="text-center">
                            His five-and-a-half-year tenure as Municipal
                            Commissioner of Thane was informally acknowledged as
                            one of the most impactful in India, with numerous
                            transformative urban projects delivered during this
                            period.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="po-testimonial-section-2 relative pt-100 pb-70">
        <div className="po-testimonial-shape">
          <img
            className="w-100"
            src={testimonial}
            alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mb-30">
              <div className="po-testimonial-content-2 relative z-1">
                <div className="po-section-title po-section-title-2 mb-40">
                  <h4 className="sec-subtitle sec-subtitle-3 rounded-7 text-white">
                    Testimonial
                  </h4>
                  <h2
                    className="sec-title text-white text-40 font-bold leading-52 pt-16 pb-16">
                    Why We Trust Our Candidate Supporter Endorsements
                  </h2>
                </div>

                <div className="po-testimonial-2">
                  <div
                    className="po-single-testimonial-2 relative bg-white rounded-7">
                    <div className="po-testimonial-icons">
                      <div className="po-testimonial-reviews-2">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                      </div>
                      <div className="po-testimonial-quote-2">
                        <span
                          ><img
                            src={quote}
                            alt=""
                        /></span>
                      </div>
                    </div>
                    <div className="po-testimonial-content-2">
                      <p>
                        “Supporters across the community have shared heartfelt
                        <br />
                        testimonials, expressing their confidence in our
                        candidate <br />
                        and the vision we share. From long-time residents who
                        <br />appreciate the commitment to improving local
                        services,<br />
                        young voters excited about innovative policies.”
                      </p>
                    </div>
                  </div>

                  <div
                    className="po-single-testimonial-2 relative bg-white rounded-7">
                    <div className="po-testimonial-icons">
                      <div className="po-testimonial-reviews-2">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                      </div>
                      <div className="po-testimonial-quote-2">
                        <span
                          ><img
                            src={quote}
                            alt=""
                        /></span>
                      </div>
                    </div>
                    <div className="po-testimonial-content-2">
                      <p>
                        “Supporters across the community have shared heartfelt
                        <br />
                        testimonials, expressing their confidence in our
                        candidate <br />
                        and the vision we share. From long-time residents who
                        <br />appreciate the commitment to improving local
                        services,<br />
                        young voters excited about innovative policies.”
                      </p>
                    </div>
                  </div>

                  <div
                    className="po-single-testimonial-2 relative bg-white rounded-7">
                    <div className="po-testimonial-icons">
                      <div className="po-testimonial-reviews-2">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                      </div>
                      <div className="po-testimonial-quote-2">
                        <span
                          ><img
                            src={quote}
                            alt=""
                        /></span>
                      </div>
                    </div>
                    <div className="po-testimonial-content-2">
                      <p>
                        “Supporters across the community have shared heartfelt
                        <br />
                        testimonials, expressing their confidence in our
                        candidate <br />
                        and the vision we share. From long-time residents who
                        <br />appreciate the commitment to improving local
                        services,<br />
                        young voters excited about innovative policies.”
                      </p>
                    </div>
                  </div>
                </div>

                <div className="po-testimonial-nav-2">
                  <div className="po-testi-nav-2 bg-white rounded-7 mb-30">
                    <div className="po-testi-item-2">
                      <div className="po-testimonail-item-2">
                        <span
                          ><img
                            src={testimonialNav}
                            alt=""
                        /></span>
                      </div>
                      <div className="po-testi-content-2">
                        <h3
                          className="sec-title-2 font-bold text-18 leading-18 pb-10">
                          Alesha Healy
                        </h3>
                        <span>Party Member</span>
                      </div>
                    </div>
                  </div>

                  <div className="po-testi-nav-2 bg-white rounded-7 mb-30">
                    <div className="po-testi-item-2">
                      <div className="po-testimonail-item-2">
                        <span
                          ><img
                            src={testimonialNav}
                            alt=""
                        /></span>
                      </div>
                      <div className="po-testi-content-2">
                        <h3
                          className="sec-title-2 font-bold text-18 leading-18 pb-10">
                          Alex Sajak
                        </h3>
                        <span>Party Member</span>
                      </div>
                    </div>
                  </div>

                  <div className="po-testi-nav-2 bg-white rounded-7 mb-30">
                    <div className="po-testi-item-2">
                      <div className="po-testimonail-item-2">
                        <span
                          ><img
                            src={testimonialNav}
                            alt=""
                        /></span>
                      </div>
                      <div className="po-testi-content-2">
                        <h3
                          className="sec-title-2 font-bold text-18 leading-18 pb-10">
                          Alex Sajak
                        </h3>
                        <span>Party Member</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-30"></div>
          </div>
        </div>
      </section>

      <section className="section po-gallery-2 pt-100 pb-70">
        <div className="container">
          <div
            className="po-section-title po-section-title-2 text-center mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <h4 className="sec-subtitle subtitle-2">Our Gallery</h4>
            <h2
              className="sec-title sec-title-2 text-40 font-bold leading-40 pt-16 pb-16">
              Journey Moments Captured
            </h2>
            
          </div>

          <div className="row">
            <div className="col-xl-6 col-md-6 mb-30">
              <div className="rounded-7 overflow-hidden relative">
                <img
                  className="po-galery-md w-100"
                  src={gallery}
                  alt="" />
              
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-30">
              <div className="rounded-7 overflow-hidden relative">
                <img
                  className="po-galery-md w-100"
                  src={gallery1}
                  alt="" />
               
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-30">
              <div className="rounded-7 overflow-hidden relative">
                <img
                  className="po-galery-md w-100"
                  src={gallery2}
                  alt="" />
                
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-30">
              <div className="rounded-7 overflow-hidden relative">
                <img
                  className="po-galery-md w-100"
                  src={gallery3}
                  alt="" />
              
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-30">
              <div className="rounded-7 overflow-hidden relative">
                <img
                  className="po-galery-md w-100"
                  src={gallery4}
                  alt="" />
               
              </div>
            </div>
            <div className="col-xl-6 col-md-6 mb-30">
              <div className="rounded-7 overflow-hidden relative">
                <img
                  className="po-galery-md w-100"
                  src={gallery5}
                  alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
