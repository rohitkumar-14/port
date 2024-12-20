import React, { useEffect } from "react";
import shape from "../img/icon/breadcrumb-ovr-shape.svg";
import plus from "../img/icon/po-plus1.1.svg";
import dot from "../img/icon/po-dot-shape.svg";
import vote from "../img/icon/po-vote.svg";
import flag from "../img/icon/flag-sh.svg";
import breadcrumbbg from "../img/shape/shape-breadcrumb-bg.png";
import breadcrumbhero from "../img/banner/po-breadcrumb-hero.png";
import mission from "../img/shape/po-mission-shape2.1.png";
import mission1 from "../img/camp/po-mission-2.1.png";
import { NavLink } from "react-router-dom";

const Achievements = ({ pageTitle }) => {
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
                  Achievements
                </h1>
                <div className="po-breadcrumb-list">
                  <span>
                    <NavLink to="index.html">Home</NavLink>
                  </span>
                  <span className="dvir">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <span className="active">
                    <NavLink to="#">Achievements</NavLink>
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

      <div className="roadmap pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="roadmap-boxs">
                <div className="container">
                  <div
                    className="po-section-title po-section-title-2 text-center mb-60 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="900">
                    <h4 className="sec-subtitle subtitle-2">Achievements</h4>
                    <h2 className="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
                      Achievements and Contributions
                    </h2>
                    <p>
                      Sanjeev Jaiswal’s career is defined by a series of
                      impactful initiatives and programs that showcase his
                      visionary leadership and commitment to sustainable
                      development, public welfare, and urban transformation.
                      Below is a comprehensive overview of his significant
                      achievements and contributions, categorized by key areas
                      of focus.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0">
                  <div className="row align-items-center">
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-img relative">
                        <div className="po-tab-shp absolute">
                          <img className="tab-top-shape" src={mission} alt="" />
                        </div>
                        <img className="tab-img w-100" src={mission1} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-content">
                        <h4 className="sec-subtitle subtitle-2">
                          1. Disaster Management and Relief
                        </h4>
                        <h3 className="sec-title-2 font-bold text-30 leading-40">
                          Flood Relief and Rehabilitation (2005)
                        </h3>
                        <p className="leading-26 pt-16">
                          As the Collector of Chandrapur during the devastating
                          floods of 2005, Jaiswal demonstrated exceptional
                          leadership. Despite limited infrastructure and
                          challenging conditions, he led proactive relief
                          efforts:
                        </p>

                        <div className="po-che-boxes pt-10">
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                            }}>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Personally navigated floodwaters in rubber boats
                                to deliver essential medical aid, food, and
                                relocation support.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Established temporary rehabilitation centers
                                with basic amenities for displaced individuals.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                These efforts underscored his human-centered
                                approach to governance and crisis management.
                              </p>
                            </li>
                          </ul>
                          <h3 className="sec-title-2 font-bold text-30 leading-40 mt-5">
                            Conducting Elections in Naxalite Areas (2004)
                          </h3>
                          <p className="leading-26 pt-16">
                            In the Naxalite-affected regions of Chandrapur and
                            Gadchiroli, Jaiswal successfully conducted elections
                            under high-security risks:
                          </p>

                          <div className="po-che-boxes pt-10">
                            <ul
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "20px",
                              }}>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Ensured safe deployment of polling teams to
                                  inaccessible and high-risk areas.
                                </p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Maintained peace and order during the
                                  electoral process, preserving democratic
                                  integrity in one of the most challenging
                                  environments.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0">
                  <div className="row align-items-center">
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-content">
                        <h4 className="sec-subtitle subtitle-2">
                          2. Urban Infrastructure Development
                        </h4>
                        <h3 className="sec-title-2 font-bold text-30 leading-40">
                          Municipal Commissioner of Thane (2015–2020)
                        </h3>
                        <p className="leading-26 pt-16">
                          Jaiswal’s tenure in Thane is widely regarded as a
                          turning point for the city’s development, marked by
                          transformative infrastructure projects:
                        </p>

                        <div className="po-che-boxes pt-10">
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                            }}>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                <strong>Road Widening Projects:</strong>{" "}
                                Reclaimed 100 hectares of encroached land to
                                expand key roads, including Pokhran Road, Kalwa
                                Road, and Station Road, significantly improving
                                traffic flow and urban connectivity.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                <strong>Metro and Pod Connectivity:</strong>{" "}
                                Spearheaded Thane’s metro master plan and
                                introduced pod transit for last-mile
                                connectivity.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                <strong>Inland Water Transport (IWT):</strong>{" "}
                                Conceptualized and secured approval for IWT
                                projects connecting Thane to nearby cities like
                                Mumbai and Kalyan.
                              </p>
                            </li>
                          </ul>
                          <h3 className="sec-title-2 font-bold text-30 leading-40 mt-5">
                            Waterfront Development
                          </h3>
                          <p className="leading-26 pt-16">
                            Jaiswal transformed neglected urban spaces into
                            vibrant public landmarks through:
                          </p>

                          <div className="po-che-boxes pt-10">
                            <ul
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "20px",
                              }}>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>Gaimukh Waterfront Development Project.</p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>Kalwa Waterfront Development Project.</p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>Kopri Waterfront Development Project.</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-img relative">
                        <div className="po-tab-shp absolute">
                          <img className="tab-top-shape" src={mission} alt="" />
                        </div>
                        <img className="tab-img w-100" src={mission1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0">
                  <div className="row align-items-center">
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-img relative">
                        <div className="po-tab-shp absolute">
                          <img className="tab-top-shape" src={mission} alt="" />
                        </div>
                        <img className="tab-img w-100" src={mission1} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-content">
                        <h4 className="sec-subtitle subtitle-2">
                          3. Environmental Sustainability
                        </h4>
                        <h3 className="sec-title-2 font-bold text-30 leading-40">
                          Doubling Green Cover
                        </h3>
                        <p className="leading-26 pt-16">
                          Under Jaiswal’s leadership, Thane witnessed a
                          significant increase in green spaces:
                        </p>

                        <div className="po-che-boxes pt-10">
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                            }}>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Planted over 5 lakh trees as part of a citywide
                                campaign.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Established large public parks and urban
                                forests, including:
                              </p>
                              <ul
                                style={{
                                  listStyleType: "circle",
                                  paddingLeft: "20px",
                                }}>
                                <li
                                  style={{ listStyle: "circle" }}
                                  className="mt-1">
                                  <p>Miyawaki Urban Forest.</p>
                                </li>
                                <li
                                  style={{ listStyle: "circle" }}
                                  className="mt-1">
                                  <p>
                                    Southern Park, Northern Park, City Park, and
                                    Traffic Park.
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <h3 className="sec-title-2 font-bold text-30 leading-40 mt-5">
                            Water Body Restoration
                          </h3>
                          <p className="leading-26 pt-16">
                            Revived historic water bodies such as Jogila Lake,
                            enhancing their functionality for water storage and
                            improving the ecological balance.
                          </p>
                          <h3 className="sec-title-2 font-bold text-30 leading-40 mt-5">
                            Renewable Energy Initiatives
                          </h3>
                          <p>Promoted sustainable energy practices:</p>
                          <div className="po-che-boxes pt-10">
                            <ul
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "20px",
                              }}>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Installed solar-powered street lights and
                                  electric poles.
                                </p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Transitioned overhead transmission lines to
                                  underground systems for safety and aesthetics.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0">
                  <div className="row align-items-center">
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-content">
                        <h4 className="sec-subtitle subtitle-2">
                          4. Social Welfare and Public Programs
                        </h4>
                        <h3 className="sec-title-2 font-bold text-30 leading-40">
                          Signal and Platform Schools
                        </h3>
                        <p className="leading-26 pt-16">
                          Implemented innovative programs for marginalized
                          children:
                        </p>

                        <div className="po-che-boxes pt-10">
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                            }}>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                <strong>Signal Schools:</strong> Repurposed
                                shipping containers at traffic signals to
                                educate street children.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                <strong>Platform Schools:</strong> Established
                                schools on railway platforms to rehabilitate
                                child laborers and provide access to education.
                              </p>
                            </li>
                          </ul>
                          <h3 className="sec-title-2 font-bold text-30 leading-40 mt-5">
                            Waterfront Development
                          </h3>
                          <p className="leading-26 pt-16">
                            Built dedicated football stadiums for Muslim women
                            in Mumbra, promoting inclusivity and access to
                            recreational activities.
                          </p>

                          <h3 className="sec-title-2 font-bold text-30 leading-40 mt-5">
                            Public Amenities Through PPP
                          </h3>
                          <p className="leading-26 pt-16">
                            Delivered key infrastructure projects under
                            Public-Private Partnerships, including:
                          </p>

                          <div className="po-che-boxes pt-10">
                            <ul
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "20px",
                              }}>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>Gymnasiums and recreation centers.</p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Working women’s hostels and parking plazas.
                                </p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>A state-of-the-art cancer hospital.</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-img relative">
                        <div className="po-tab-shp absolute">
                          <img className="tab-top-shape" src={mission} alt="" />
                        </div>
                        <img className="tab-img w-100" src={mission1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0">
                  <div className="row align-items-center">
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-img relative">
                        <div className="po-tab-shp absolute">
                          <img className="tab-top-shape" src={mission} alt="" />
                        </div>
                        <img className="tab-img w-100" src={mission1} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                      <div className="po-tab-content">
                        <h4 className="sec-subtitle subtitle-2">
                          5. Rural Development and Water Conservation
                        </h4>
                        <h3 className="sec-title-2 font-bold text-30 leading-40">
                          Tadoba-Andhari Tiger Reserve Rehabilitation
                        </h3>
                        <p className="leading-26 pt-16">
                          As the Collector of Chandrapur, Jaiswal oversaw the
                          relocation of villages <strong>Botazari</strong> and{" "}
                          <strong>Kolsa</strong> to a new settlement,{" "}
                          <strong>Holewahi</strong>:
                        </p>

                        <div className="po-che-boxes pt-10">
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                            }}>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Provided modern infrastructure, surpassing
                                neighboring villages in quality.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Earned community recognition, with one wadi
                                named <strong>Sanjeev Wadi</strong> in his
                                honor.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                The new village, <strong>Tolewahi</strong>,
                                became a model for sustainable rehabilitation in
                                conservation areas.
                              </p>
                            </li>
                          </ul>

                          <h3 className="sec-title-2 font-bold text-30 leading-40 mt-5">
                            Ganga Sagar Abhiyan in Nasik
                          </h3>
                          <p>
                            During his tenure as Collector of Nasik, Jaiswal
                            launched the <strong>Ganga Sagar Abhiyan</strong>, a
                            participatory water conservation initiative:
                          </p>
                          <div className="po-che-boxes pt-10">
                            <ul
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "20px",
                              }}>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Desilted village tanks and repaired{" "}
                                  <strong>KT Weirs</strong> to regulate water
                                  flow.
                                </p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Built <strong>percolation tanks</strong> and{" "}
                                  <strong>storage tanks</strong> to enhance
                                  groundwater recharge.
                                </p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  Promoted <strong>soil conservation</strong>{" "}
                                  and runoff control to channel water from hills
                                  to valleys, optimizing water storage and
                                  usage.
                                </p>
                              </li>
                              <li
                                style={{ listStyle: "disc" }}
                                className="mt-1">
                                <p>
                                  The campaign became a benchmark for{" "}
                                  <strong>public-private collaboration</strong>{" "}
                                  in environmental governance, showcasing how
                                  administrative leadership and community
                                  participation can tackle critical resource
                                  challenges effectively.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                      <div className="po-tab-content">
                        <h4 className="sec-subtitle subtitle-2">
                          6. Smart City and Digital Innovations
                        </h4>
                        <h3 className="sec-title-2 font-bold text-30 leading-40">
                          Digithane Smart City Initiative
                        </h3>
                        <p className="leading-26 pt-16">
                          Introduced a cutting-edge
                          <strong>
                            G2C (Government to Citizen), B2C (Business to
                            Citizen), and C2C (Citizen to Citizen)
                          </strong>
                          <br />
                          communication platform:
                        </p>

                        <div className="po-che-boxes pt-10">
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                            }}>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Enabled faceless interactions for services like
                                property tax payments and utility bill
                                submissions.
                              </p>
                            </li>
                            <li style={{ listStyle: "disc" }} className="mt-1">
                              <p>
                                Recognized nationally and internationally for
                                its innovative approach to citizen engagement
                                and transparency.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                      <div className="po-tab-img position-relative">
                        <div className="po-tab-shp position-absolute">
                          <img
                            className="tab-top-shape"
                            src={mission}
                            alt="Shape"
                          />
                        </div>
                        <img
                          className="tab-img w-100"
                          src={mission1}
                          alt="Digithane"
                        />
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

export default Achievements;
