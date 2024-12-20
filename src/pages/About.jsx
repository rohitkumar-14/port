import React, { useEffect } from "react";
import shape from "../img/icon/breadcrumb-ovr-shape.svg";
import plus from "../img/icon/po-plus1.1.svg";
import dot from "../img/icon/po-dot-shape.svg";
import vote from "../img/icon/po-vote.svg";
import flag from "../img/icon/flag-sh.svg";
import breadcrumbbg from "../img/shape/shape-breadcrumb-bg.png";
import breadcrumbhero from "../img/banner/po-breadcrumb-hero.png";
import { NavLink } from "react-router-dom";

const About = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `Politico | ${pageTitle}`;
    window.scrollTo(0, 0);
  }, [pageTitle]);
  return (
    <main>
      <section class="breadcrumb-bg">
        <div class="po-breadcrumb-over-shape">
          <img src={shape} alt="" />
        </div>
        <div class="po-plus-shape absolute">
          <img src={plus} alt="" />
        </div>
        <div class="po-dot-shape absolute">
          <img src={dot} alt="" />
        </div>
        <div class="po-vt-shape absolute d-none d-md-block">
          <img src={vote} alt="" />
        </div>
        <div class="po-fl-shape absolute d-none d-lg-block">
          <img src={flag} alt="" />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6">
              <div class="po-breadcrumb">
                <h1 class="font-bold text-64 leading-64 text-white">About</h1>
                <div class="po-breadcrumb-list">
                  <span>
                    <NavLink to="index.html">Home</NavLink>
                  </span>
                  <span class="dvir">
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <span class="active">
                    <NavLink to="#">About</NavLink>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="breacrumb-images">
                <div class="breadcrumb-back">
                  <img src={breadcrumbbg} alt="" />
                </div>
                <div class="breadcrumb-fronts-img">
                  <img src={breadcrumbhero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="po-about-area pt-50">
        <div class="container">
          <div class="row flex-lg-row flex-column-reverse align-items-center">
            <div class="col-xl-12 mb-30">
              <div class="po-about-iner relative">
                <div
                  class="po-about-iner-shape"
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "end",
                  }}></div>
              </div>
              <div class="col-xl-12 mb-30">
                <div class="po-about-content">
                  <div class="po-section-title">
                    <div class="iner-sub-heading">
                      <h4 class="sec-subtitle iner-subtitle">About Us</h4>
                    </div>

                    <p class="pb-8 pt-2">
                      Sanjeev Jaiswal (born April 7, 1972) is an Indian
                      Administrative Service (IAS) officer of the 1996
                      Maharashtra cadre, recognized for his dedication to public
                      service, transparency, and innovative governance. Over his
                      28-year-long career, Jaiswal has held prominent positions
                      such as Municipal Commissioner of Thane and Nagpur,
                      Additional Commissioner of Brihanmumbai Municipal
                      Corporation (BMC), and Vice President and CEO of the
                      Maharashtra Housing and Area Development Authority
                      (MHADA). He has been instrumental in various projects,
                      ranging from urban redevelopment to water conservation and
                      housing reforms.
                    </p>
                    <p class="pb-8">
                      Born and raised in Kolkata, Jaiswal’s career is defined by
                      his people-first approach to governance, focusing on
                      citizen accessibility, grievance redressal, and
                      transparency. Some of his most notable initiatives include
                      the creation of participatory platforms like Janta Durbar
                      and Lokshahi Din, the revival of water bodies under
                      programs like the Ganga Sagar Abhiyan, and the
                      implementation of Maharashtra's Jal Jeevan Mission, which
                      ensured tap water supply to rural households. He has also
                      contributed significantly to disaster management,
                      particularly during the 2005 floods and COVID-19 pandemic,
                      where his leadership in establishing Jumbo COVID Centers
                      and healthcare measures in slums like Dharavi saved
                      thousands of lives.
                    </p>
                    <p class="pb-8">
                      His tenure as Municipal Commissioner of Thane is
                      particularly remembered for the Digithane Smart City
                      initiative, urban infrastructure development, and
                      environmental conservation efforts, including doubling the
                      city's green cover and restoring historic water bodies.
                      Beyond governance, Jaiswal is deeply committed to ethical
                      standards, maintaining financial transparency by declaring
                      his assets and adhering to legal obligations for both
                      personal and professional property records.
                    </p>
                    <p class="pb-8">
                      Inspired by his father’s dream to see him become a
                      magistrate, Jaiswal pursued civil services and
                      successfully cleared the IAS on his second attempt. His
                      personal interests include singing, painting, photography,
                      and traveling, reflecting a multifaceted personality
                      beyond his administrative work.
                    </p>
                    <p class="pb-8">
                      Throughout his career, Jaiswal has been at the forefront
                      of addressing systemic challenges with innovative
                      solutions, leaving an enduring legacy in public
                      administration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="po-missinon-2 pt-20">
        <div class="container">
          <div
            class="po-section-title po-section-title-2 text-start mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <h4 class="sec-subtitle subtitle-2">Personal Life</h4>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Early Life and Family Background
            </h2>
            <p>
              Sanjeev Jaiswal was born on April 7, 1972, in Kolkata, West
              Bengal, and was raised in a traditional business family.
            </p>
            <p class="mt-2">
              He is the youngest of five siblings. His eldest brother is an
              engineer from IIT BHU, his second brother is a Chartered
              Accountant managing the family timber business, and his third
              brother is a doctor who completed his MBBS and MD at the Armed
              Forces Medical College (AFMC), Pune. His sister, a graduate, is an
              entrepreneur based in Calcutta .
            </p>
            <p class="mt-2">
              Jaiswal’s father, a businessman, aspired for him to join the civil
              services, specifically to become a magistrate. Tragically, his
              father passed away when Jaiswal was young. Despite being
              illiterate, his mother encouraged him to pursue his father’s
              dream.
            </p>
          </div>
        </div>
      </section>

      <section class="po-missinon-2 pt-20">
        <div class="container">
          <div
            class="po-section-title po-section-title-2 text-start mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <h4 class="sec-subtitle subtitle-2">Education</h4>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Educational Background
            </h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li style={{ listStyle: "disc" }} class="mt-1">
                <p>
                  <strong>Schooling</strong>: Completed high school education at
                  <strong>St. Paul's Boarding School</strong>, Kolkata, West
                  Bengal.
                </p>
              </li>
              <li style={{ listStyle: "disc" }} class="mt-1">
                <p>
                  <strong>Higher Secondary</strong>: Pursued 12th grade at{" "}
                  <strong>St. Xavier's College</strong>, Kolkata.
                </p>
              </li>
              <li style={{ listStyle: "disc" }} class="mt-1">
                <p>
                  <strong>Graduation</strong>: Earned a degree in
                  <strong>Political Science (Honors)</strong> from
                  <strong>St. Xavier's College</strong>, Kolkata.
                </p>
              </li>
              <li style={{ listStyle: "disc" }} class="mt-1">
                <p>
                  <strong>Post-Graduation</strong>: Enrolled in the
                  <strong>Political Science and International Relations</strong>
                  program at <strong>Calcutta University</strong>, completing
                  the first year before focusing on UPSC preparation.
                </p>
              </li>
            </ul>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Academic Achievements
            </h2>
            <p>
              Sanjeev Jaiswal has consistently excelled academically, earning
              recognition as a topper throughout his educational journey. During
              his time in Kolkata, he stood out as <br /> one of the brightest
              students, topping his class and achieving notable academic
              distinctions. His wife, Siddhi Jaiswal, also shares a legacy of
              excellence, having <br /> topped{" "}
              <strong>Mumbai University</strong> in her field of study.
            </p>

            <p class="mt-2">
              Driven by his father’s dream, he began preparing for the highly
              competitive UPSC Civil Services Examination. Despite initial
              setbacks, he successfully cleared the examination in his second
              attempt, earning a place in the prestigious 1996 IAS batch for the
              Maharashtra cadre.
            </p>
          </div>
        </div>
      </section>
      <section class="po-missinon-2 pt-20">
        <div class="container">
          <div
            class="po-section-title po-section-title-2 text-start mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <h4 class="sec-subtitle subtitle-2">Family Life</h4>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Marriage and immediate family
            </h2>
            <p>
              Sanjeev Jaiswal was born on April 7, 1972, in Kolkata, West
              Bengal, and was raised in a traditional business family.
            </p>
            <p class="mt-2">
              He is the youngest of five siblings. His eldest brother is an
              engineer from IIT BHU, his second brother is a Chartered
              Accountant managing the family timber business, and his third
              brother is a doctor who completed his MBBS and MD at the Armed
              Forces Medical College (AFMC), Pune. His sister, a graduate, is an
              entrepreneur based in Calcutta .
            </p>
            <p class="mt-2">
              Jaiswal’s father, a businessman, aspired for him to join the civil
              services, specifically to become a magistrate. Tragically, his
              father passed away when Jaiswal was young. Despite being
              illiterate, his mother encouraged him to pursue his father’s
              dream.
            </p>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              In-Laws:
            </h2>
            <p>His father-in-law was a retired Income Tax Commissioner.</p>
            <p class="mt-2">
              His mother-in-law, who suffers from advanced Parkinson’s disease,
              distributed her ancestral property between her two children,
              Siddhi and her brother, through an official will in 2016.
            </p>
          </div>
        </div>
      </section>
      <section class="po-missinon-2 pt-20">
        <div class="container">
          <div
            class="po-section-title po-section-title-2 text-start mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="900">
            <h4 class="sec-subtitle subtitle-2">Personal Profile</h4>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Health
            </h2>
            <p>
              Jaiswal’s mother-in-law suffers from advanced Parkinson’s disease
              and is bedridden due to her condition. This health issue was
              referenced in connection with the family's financial matters and
              property inheritance.
            </p>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Physical Characteristics
            </h2>
            <p>Height: 174 cm (5’9”)</p>
            <p class="mt-2">Eye Color: Black</p>
            <p class="mt-2">Hair Color: Black</p>

            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Hobbies and Personal Interests
            </h2>
            <p>
              Outside of his professional life, Jaiswal enjoys singing,
              painting, photography, traveling, and cooking, reflecting a
              multifaceted personality.
            </p>
            <h2 class="sec-title sec-title-2 text-40 font-bold leading-52 pt-16 pb-16">
              Financial Transparency
            </h2>
            <p>
              Jaiswal and his wife are both independent income tax assessees.
              They have declared all movable and immovable properties in their
              respective Income Tax Returns (ITRs) and Jaiswal’s official
              Immovable Property Returns (IPRs), which are publicly available.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
