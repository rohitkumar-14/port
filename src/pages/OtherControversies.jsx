import React, { useEffect } from "react";
import shape from "../img/icon/breadcrumb-ovr-shape.svg";
import plus from "../img/icon/po-plus1.1.svg";
import dot from "../img/icon/po-dot-shape.svg";
import vote from "../img/icon/po-vote.svg";
import flag from "../img/icon/flag-sh.svg";
import breadcrumbbg from "../img/shape/shape-breadcrumb-bg.png";
import breadcrumbhero from "../img/banner/po-breadcrumb-hero.png";
import { NavLink } from "react-router-dom";
const OtherControversies = ({ pageTitle }) => {
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
                  OtherControversies
                </h1>
                <div className="po-breadcrumb-list">
                  <span>
                    <NavLink to="index.html">Home</NavLink>
                  </span>
                  <span className="dvir">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <span className="active">
                    <NavLink to="#">OtherControversies</NavLink>
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

      <section className="po-left-sidebar pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="po-sidebar-details mr-50">
                <div className="po-sidebar-text-1">
                  <h2 className="sec-title font-bold text-40 leading-52 pb-20">
                    Anti-Encroachment Drives in Thane:
                  </h2>
                  <p className="leading-26 pb-10">
                    During his tenure as Municipal Commissioner of Thane,
                    Jaiswal faced backlash for his large-scale anti-encroachment
                    and demolition drives, which included tearing down illegal
                    residential and commercial structures.
                  </p>

                  <p className="leading-26 pt-10">
                    Criticism arose due to allegations of insufficient
                    resettlement planning for affected families.
                  </p>
                  <p className="leading-26 pt-10">
                    Some opponents accused him of disproportionately targeting
                    certain communities and businesses.
                  </p>
                </div>
                <div className="po-space-top"></div>

                <div className="po-sidebar-text-1">
                  <h2 className="sec-title font-bold text-32 leading-32 pt-25 pb-20">
                    Clarifications Provided:
                  </h2>
                  <p className="leading-26 pb-10">
                    Jaiswal maintained that all demolitions were conducted
                    legally and in adherence to due process. He also highlighted
                    measures taken to provide temporary relief to displaced
                    individuals, defending the demolitions as necessary for
                    Thane’s urban development and traffic decongestion.
                  </p>
                  <h2 className="sec-title font-bold text-32 leading-32 pt-25 pb-20">
                    Misuse of RTI Act Allegation:
                  </h2>
                  <p className="leading-26 pt-10">
                    A false case was filed against Jaiswal by a social activist
                    during his tenure in Thane.
                  </p>
                  <p className="leading-26 pt-10">
                    The activist had been previously booked for misuse of the
                    RTI Act by Jaiswal in his capacity as Municipal
                    Commissioner.
                  </p>
                  <p className="leading-26 pt-10">
                    The case against Jaiswal was dismissed outright by the
                    Honorable High Court of Mumbai at the admission stage,
                    citing a lack of merit.
                  </p>
                </div>

                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    28 Years of Public Service: A Comprehensive Overview of
                    Achievements and Learnings
                  </h3>
                  <p className="leading-26 pb-20">
                    Over his 28 years of public service, Sanjeev Jaiswal has
                    consistently demonstrated his commitment to the principles
                    of good governance, transparency, and sustainable
                    development. His career trajectory has been marked by
                    impactful decisions that have significantly shaped the urban
                    and rural landscapes he has worked in. Here’s a closer look
                    at the major milestones and the learnings from his vast
                    experience:
                  </p>
                  <h2 className="sec-title font-bold text-32 leading-32 pt-25 pb-20">
                    Disaster Management and Relief
                  </h2>
                  <p className="leading-26">
                    Jaiswal’s career began with a focus on disaster management,
                    particularly during the 2005 floods in Chandrapur. His
                    proactive efforts, despite limited resources, set the tone
                    for his career in public service. He led rescue missions and
                    set up temporary rehabilitation centers, showcasing his
                    commitment to humanity in times of crisis.
                  </p>
                </div>

                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Leadership in Urban Development
                  </h3>
                  <p className="leading-26 pb-20">
                    As Municipal Commissioner of Thane, Jaiswal transformed the
                    city through innovative urban planning initiatives. From
                    road widening projects to the development of smart city
                    initiatives like Digithane, he spearheaded efforts to
                    modernize urban infrastructure while integrating
                    sustainability into every project.
                  </p>
                </div>
                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Focus on Education and Social Welfare
                  </h3>
                  <p className="leading-26 pb-20">
                    Jaiswal was instrumental in implementing Signal Schools and
                    Platform Schools in Thane to educate marginalized children,
                    especially those affected by street life and child labor.
                    His vision of education as a fundamental tool for social
                    empowerment has left an enduring mark on the city.
                  </p>
                </div>

                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Environmental Stewardship
                  </h3>
                  <p className="leading-26 pb-20">
                    Jaiswal’s tenure saw the doubling of green cover in Thane
                    through extensive tree plantation campaigns and the
                    development of parks like Miyawaki Urban Forest. His
                    leadership in environmental restoration, particularly
                    through water body revivals and renewable energy
                    initiatives, is an example of his dedication to
                    sustainability.
                  </p>
                </div>

                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Rural and Water Conservation
                  </h3>
                  <p className="leading-26 pb-20">
                    In Nasik, Jaiswal launched Ganga Sagar Abhiyan, a landmark
                    initiative that addressed water scarcity through
                    participatory governance. His focus on water conservation,
                    soil management, and groundwater recharge helped improve the
                    region’s resilience to droughts.
                  </p>
                </div>

                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Political and Legal Challenges
                  </h3>
                  <p className="leading-26 pb-20">
                    Throughout his career, Jaiswal faced numerous challenges,
                    including false allegations and political pressures. His
                    handling of the fabricated 15-year-old girl case and the ED
                    investigation into COVID contracts reflects his integrity
                    and resilience in the face of adversity. These challenges
                    also taught him the importance of transparency and due
                    process in governance.
                  </p>
                </div>
                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Innovations in Governance
                  </h3>
                  <p className="leading-26 pb-20">
                    Jaiswal’s leadership was marked by innovative governance
                    models, including public-private partnerships and smart city
                    initiatives. His initiatives in Thane and Nasik have
                    influenced urban governance policies at the state level and
                    beyond.
                  </p>
                </div>
                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Key Learnings from 28 Years of Service
                  </h3>
                  <p className="leading-26 pb-20">
                    Resilience in the face of adversity: Handling political
                    pressure and fabricated allegations taught him the
                    importance of resilience and keeping the focus on public
                    welfare.
                  </p>
                  <p className="leading-26 pb-20">
                    Innovation in governance: His commitment to creating
                    sustainable cities and empowering citizens has made him a
                    role model in urban governance.
                  </p>
                  <p className="leading-26 pb-20">
                    The importance of transparency: His legal challenges
                    underscored the necessity of transparency and accountability
                    in governance.
                  </p>
                  <p className="leading-26 pb-20">
                    Empathy in public service: His early work in disaster
                    management and his educational initiatives reflect his core
                    belief that public service should always prioritize the
                    welfare of people.
                  </p>
                </div>
                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Conclusion
                  </h3>
                  <p className="leading-26 pb-20">
                    Through 28 years of service, Jaiswal has not only
                    contributed to urban development and environmental
                    sustainability but has also navigated the complexities of
                    governance with integrity. His career continues to inspire
                    both colleagues and the public, shaping a future that
                    balances growth, sustainability, and social welfare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OtherControversies;
