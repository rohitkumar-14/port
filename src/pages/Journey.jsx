import React, { useEffect } from "react";
import shape from "../img/icon/breadcrumb-ovr-shape.svg";
import plus from "../img/icon/po-plus1.1.svg";
import dot from "../img/icon/po-dot-shape.svg";
import vote from "../img/icon/po-vote.svg";
import flag from "../img/icon/flag-sh.svg";
import breadcrumbbg from "../img/shape/shape-breadcrumb-bg.png";
import breadcrumbhero from "../img/banner/po-breadcrumb-hero.png";
import { NavLink } from "react-router-dom";
const Journey = ({ pageTitle }) => {
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
                  Journey
                </h1>
                <div className="po-breadcrumb-list">
                  <span>
                    <NavLink to="index.html">Home</NavLink>
                  </span>
                  <span className="dvir">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <span className="active">
                    <NavLink to="#">Journey</NavLink>
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

      <section className="po-missinon-2 pt-100">
        <div className="container">
          <div
            className="po-section-title po-section-title-2 text-center mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <h4 className="sec-subtitle subtitle-2">Journey</h4>
            <h2 className="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Journey to Becoming an IAS Officer
            </h2>
            <p>
              Born and raised in Kolkata, Sanjeev Jaiswal’s journey to the
              Indian Administrative Service (IAS) was deeply influenced by his
              father’s aspirations for him to become a magistrate. Growing up in
              a traditional business family, the concept of a government career
              was unfamiliar in his community, where fields like medicine,
              engineering, law, and chartered accountancy were more common.
              Despite this, Jaiswal’s father envisioned a path for his son in
              public service, which would later shape the trajectory of his
              life. Tragically, his father passed away at an early stage in his
              life, leaving his mother—an illiterate yet determined woman—to
              encourage and support him in fulfilling his father’s dream.
            </p>
            <p className="mt-2">
              Initially, Jaiswal struggled to understand the type of magistrate
              his father had envisioned. After consulting various people, he
              realized his father wanted him to pursue the path of an Executive
              Magistrate through the Indian Administrative Service (IAS). This
              marked the beginning of his focused preparation for the
              prestigious Union Public Service Commission (UPSC) examination.
            </p>
            <p className="mt-2">
              Academically gifted, Jaiswal faced a major setback when he failed
              to clear the IAS exam on his first attempt, despite making it to
              the mains. This initial failure proved to be a transformative
              moment, teaching him pragmatism, resilience, and the importance of
              disciplined preparation. With renewed focus and determination, he
              attempted the exam a second time and successfully cleared it,
              earning a spot in the 1996 IAS batch for the Maharashtra cadre.
            </p>
            <p className="mt-2">
              This accomplishment was a significant milestone, fulfilling his
              father’s dream and establishing a career dedicated to public
              service. Jaiswal’s journey reflects his academic brilliance,
              personal resilience, and the unwavering support of his family,
              which collectively enabled him to overcome challenges and achieve
              success.
            </p>
          </div>
        </div>
      </section>

      <div className="roadmap pt-30 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="roadmap-boxs">
                <div className="container">
                  <div
                    className="po-section-title po-section-title-2 text-center mb-60 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="900">
                    <h4 className="sec-subtitle subtitle-2">Career</h4>
                    <h2 className="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
                      Administrative Journey and Key Positions
                    </h2>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="po-timeline-date-1 mb-1">
                      <span>Need to Enter</span>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="roadmap-box roadmap-box-right">
                      <div
                        className="time-line-content"
                        style={{ margin: "2rem 0" }}>
                        <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                          <a href="buy.html">
                            1. Sub-Divisional Magistrate (SDM)
                          </a>
                        </h4>
                        <p>
                          Sanjeev Jaiswal began his administrative career as a
                          Sub-Divisional Magistrate (SDM), where he handled
                          grassroots-level governance in rural areas. These
                          early assignments provided him with firsthand insights
                          into challenges like water scarcity, tribal
                          rehabilitation, and agricultural inefficiencies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row flex-md-row flex-column-reverse align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="roadmap-box roadmap-box-left">
                      <div
                        className="time-line-content"
                        style={{ margin: "4rem 0" }}>
                        <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                          <a href="buy.html">
                            2. Chief Executive Officer (CEO), Nashik Zilla
                            Parishad
                          </a>
                        </h4>
                        <p>
                          As the CEO of the Nashik Zilla Parishad, Jaiswal
                          launched the <strong>Ganga Sagar Abhiyan,</strong> a
                          water conservation program aimed at restoring water
                          bodies, constructing storage tanks, and promoting
                          rainwater harvesting. This initiative showcased his
                          ability to mobilize public participation in addressing
                          environmental issues.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="po-timeline-date-1">
                      <span>Need to Enter</span>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div
                      className="po-timeline-date-1"
                      style={{ marginBottom: "114px" }}>
                      <span>Need to Enter</span>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="roadmap-box roadmap-box-right">
                      <div className="time-line-content">
                        <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                          <a href="blog-single.html">
                            3. District Collector Positions
                          </a>
                        </h4>
                        <p>
                          Jaiswal served as the District Collector in Chandrapur
                          and Aurangabad where he implemented innovative
                          solutions to local challenges.
                        </p>
                        <h4 className="text-20 font-bold leading-40">
                          Chandrapur:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Managed disaster response during the 2005 floods,
                            including delivering aid to remote villages and
                            relocating affected populations.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Handled the Tadoba-Andhari Tiger Reserve
                            Rehabilitation Project, relocating two villages with
                            better infrastructure.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Conducted elections in Naxalite-affected areas,
                            ensuring security and smooth polling.
                          </li>
                        </ul>

                        <h4 className="text-20 font-bold leading-40">
                          Aurangabad:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Focused on rural development and infrastructure
                            improvement through agricultural productivity and
                            employment guarantee schemes like the National Rural
                            Employment Guarantee Act.
                          </li>
                        </ul>

                        <h4 className="text-20 font-bold leading-40">
                          Nashik:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Spearheaded water conservation projects like the
                            Ganga Sagar Abhiyan, restoring water bodies and
                            promoting public participation in irrigation.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Promoted agricultural initiatives, including
                            multiple cropping systems and improving irrigation.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center mt-5">
                  <div className="col-lg-6 col-md-6 mt-5">
                    <div className="roadmap-box roadmap-box-left">
                      <div className="time-line-content">
                        <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                          <a href="blog-single.html">
                            4. Municipal Commissioner of Thane (2015–2020)
                          </a>
                        </h4>
                        <p>
                          Jaiswal’s tenure as Municipal Commissioner of Thane
                          spanned over five years, making him one of India’s
                          longest-serving municipal commissioners. He
                          spearheaded several transformative projects,
                          including.
                        </p>

                        <h4 className="text-20 font-bold leading-40">
                          Urban Development Projects:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Reclaimed 100 hectares of encroached land, widening
                            roads like Pokhran Road and Station Road.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Developed metro connectivity plans and initiated pod
                            transit systems.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Conceptualized and executed Inland Water Transport
                            (IWT) connecting Thane to nearby cities.
                          </li>
                        </ul>

                        <h4 className="text-20 font-bold leading-40">
                          Environmental Initiatives:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Planted 5 lakh trees and created urban forests like
                            the Miyawaki Urban Forest.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Revived historic water bodies, including Jogila
                            Lake.
                          </li>
                        </ul>

                        <h4 className="text-20 font-bold leading-40">
                          Smart City Innovations:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Launched Digithane, a smart city platform, for G2C,
                            B2C, and C2C services.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            This initiative received national and international
                            recognition (Wikipedia doc).
                          </li>
                        </ul>
                        <h4 className="text-20 font-bold leading-40">
                          Social Welfare Programs:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Established Signal Shalas (schools for children
                            living near traffic signals) and Platform Shalas
                            (schools for children on railway platforms).
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Built football stadiums for Muslim women in Mumbra
                            to promote inclusivity
                          </li>
                        </ul>
                        <p className="mt-2">
                          He also introduced notable social programs, such as
                          <strong>
                            Signal Shalas (schools for children living on
                            streets near traffic signals)
                          </strong>
                          and
                          <strong>
                            Platform Shalas (schools for railway platform
                            children),
                          </strong>
                          addressing education access for marginalized groups.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="po-timeline-date-1 mb-50">
                      <span>2015–2020</span>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center mt-5">
                  <div className="col-lg-6 col-md-6">
                    <div className="po-timeline-date-1 mb-30">
                      <span>2020–2021</span>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="roadmap-box roadmap-box-right">
                      <div className="time-line-content">
                        <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                          <a href="blog-single.html">
                            5. Additional Commissioner, Brihanmumbai Municipal
                            Corporation (BMC) (2020–2021)
                          </a>
                        </h4>

                        <h4 className="text-20 font-bold leading-40">
                          COVID-19 Management:
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Set up Jumbo COVID Centers with 20,000+ beds,
                            including ICU facilities.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Managed healthcare challenges in Dharavi, Asia's
                            largest slum, during the pandemic.
                          </li>
                          <li style={{ listStyle: "disc" }} className="mt-1">
                            Coordinated relief for migrant workers, distributing
                            food packets and organizing transportation.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center mt-5">
                  <div className="col-lg-6 col-md-6 mt-5">
                    <div className="roadmap-box roadmap-box-left">
                      <div className="time-line-content">
                        <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                          <a href="blog-single.html">
                            6. Principal Secretary, Water Supply & Sanitation
                            Department (October 2021 – June 2023)
                          </a>
                        </h4>
                        <p>
                          As Principal Secretary, Water Supply & Sanitation
                          Department, Government of Maharashtra, from October
                          2021 to June 2023 (with additional charge until July
                          2023), Sanjeev Jaiswal played a pivotal role in
                          reviving the stalled Jal Jeevan Mission in the state.
                          Under his leadership, work orders for over 38,000
                          rural water supply projects were fast-tracked within a
                          single year, ensuring tap water connections to
                          households across Maharashtra.
                        </p>
                        <p className="mt-2">
                          He prioritized timely execution and monitoring of
                          these projects, addressing long-standing delays in
                          implementation. Jaiswal also emphasized community
                          involvement, promoting local participation in the
                          execution and maintenance of rural water schemes to
                          foster sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="po-timeline-date-1">
                      <span>October 2021 – June 2023</span>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center mt-5">
                  <div className="col-lg-6 col-md-6">
                    <div className="po-timeline-date-1 mb-50">
                      <span>Need to Enter</span>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="roadmap-box roadmap-box-right">
                      <div className="time-line-content">
                        <h4 className="sec-title font-bold text-20 leading-20 pb-16">
                          <a href="blog-single.html">
                            7. Vice President & CEO, Maharashtra Housing and
                            Area Development Authority (MHADA)
                          </a>
                        </h4>
                        <p className="mt-2">
                          Sanjeev Jaiswal currently serves as the{" "}
                          <strong>
                            Vice President and CEO of the Maharashtra Housing
                            and Area Development Authority (MHADA).
                          </strong>{" "}
                          In this role, he has overseen one of the largest
                          affordable housing projects under the{" "}
                          <strong>Pradhan Mantri Awas Yojana (PMAY),</strong>{" "}
                          delivering 30,000 homes, including 15,000 units in
                          Solapur, inaugurated by the Prime Minister. Jaiswal
                          has spearheaded the redevelopment of Mumbai's cess
                          buildings, focusing on transforming aging structures
                          in iconic neighborhoods such as Kamathipura and GTB
                          Nagar, ensuring enhanced living conditions for
                          residents.
                        </p>
                        <p className="mt-2">
                          Under his leadership, MHADA has significantly
                          increased its housing stock, prioritizing transparency
                          and equity in the lottery system for economically
                          weaker sections. Jaiswal has also emphasized the
                          importance of improving administrative efficiency
                          within MHADA, streamlining processes for project
                          approvals and enhancing citizen-centric services. His
                          tenure continues to reflect a strong commitment to
                          delivering affordable housing and fostering urban
                          redevelopment in Maharashtra.
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
    </main>
  );
};

export default Journey;
