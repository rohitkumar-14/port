import React, { useEffect } from "react";
import shape from "../img/icon/breadcrumb-ovr-shape.svg";
import plus from "../img/icon/po-plus1.1.svg";
import dot from "../img/icon/po-dot-shape.svg";
import vote from "../img/icon/po-vote.svg";
import flag from "../img/icon/flag-sh.svg";
import breadcrumbbg from "../img/shape/shape-breadcrumb-bg.png";
import breadcrumbhero from "../img/banner/po-breadcrumb-hero.png";
import { NavLink } from "react-router-dom";

const Controversies = ({ pageTitle }) => {
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
                  Controversies
                </h1>
                <div className="po-breadcrumb-list">
                  <span>
                    <NavLink to="index.html">Home</NavLink>
                  </span>
                  <span className="dvir">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <span className="active">
                    <NavLink to="#">Controversies</NavLink>
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
                    Accusations by a 15-Year-Old Girls
                  </h2>
                  <p className="leading-26 pb-10">
                    In 2015, a video widely circulated on social media featured
                    a 15-year-old girl from Thane, Mumbai, alleging that Sanjeev
                    Jaiswal, then the Municipal Commissioner of Thane, had hired
                    her to work at his bungalow and compelled her to perform
                    "midnight massages." The incident sparked significant public
                    and media attention. However, the video and allegations were
                    later proven to be fabricated.
                  </p>

                  <p className="leading-26 pt-10">
                    An investigation by the Thane Police revealed that the video
                    had been forged, and the girl was coerced into making false
                    statements by the individuals involved. The girl later
                    retracted her claims, admitting that she was forced to act
                    under duress. The police identified the conspirators as
                    individuals who owned and operated illegal establishments,
                    including ladies bars and prostitution dens in Thane. These
                    individuals had been targeted in anti-encroachment and
                    cleanup drives led by Jaiswal during his tenure as Municipal
                    Commissioner.
                  </p>
                  <p className="leading-26 pt-10">
                    The investigation identified key culprits who owned illegal
                    establishments such as the Red Bull Ladies Bar, Aina Ladies
                    Bar, and an illicit prostitution den located in Surya Lodge
                    on Yeoor Hill Road. These structures, housing over 380
                    cubicles, were demolished under Jaiswal’s directive as part
                    of the city's cleanup operations. Retaliating against these
                    actions, the bar owners fabricated the allegations to malign
                    Jaiswal's reputation.
                  </p>
                  <p className="leading-26 pt-10">
                    Following Jaiswal's request, the Thane Police Commissioner
                    initiated a detailed inquiry. The conspirators were
                    subsequently arrested and charged under provisions of the IT
                    Act for fabricating the video and circulating it on social
                    media. The police concluded that the allegations were
                    baseless and motivated by malice.
                  </p>
                  <p className="leading-26 pt-10">
                    Additionally, a false case was filed against Jaiswal by a
                    social activist who had previously been booked for misusing
                    the RTI Act during Jaiswal’s tenure. This case was dismissed
                    by the Honorable High Court of Mumbai at the stage of
                    admission, citing a lack of merit.
                  </p>
                  <p className="leading-26 pt-10">
                    Jaiswal described the incident as a malicious attempt to
                    tarnish his image, orchestrated by individuals impacted by
                    his crackdown on illegal activities. The police
                    investigation and subsequent arrests validated his claims,
                    and the controversy was resolved with no charges against
                    him.
                  </p>
                </div>
                <div className="po-space-top"></div>

                <div className="po-sidebar-text-1">
                  <h2 className="sec-title font-bold text-32 leading-32 pt-25 pb-20">
                    Allegations of Money Laundering and the COVID-19 Jumbo
                    Center Scam
                  </h2>
                  <p className="leading-26 pb-10">
                    In 2023, Sanjeev Jaiswal came under scrutiny by the
                    Enforcement Directorate (ED) as part of an investigation
                    into an alleged money laundering case tied to contracts for
                    COVID-19 field hospitals. During his tenure as Additional
                    Municipal Commissioner of the Brihanmumbai Municipal
                    Corporation (BMC) in 2020, it was alleged that BMC procured
                    medicines for COVID-19 patients at prices 25-30% higher than
                    market rates. The ED accused Jaiswal of being complicit in
                    the scam, claiming that he knowingly signed off on documents
                    for contracts despite serious violations.
                  </p>
                  <h2 className="sec-title font-bold text-32 leading-32 pt-25 pb-20">
                    Jaiswal’s Response
                  </h2>
                  <p className="leading-26 pt-10">
                    Jaiswal categorically denied all allegations. He clarified
                    that the Central Purchase Committee (CPC) and the Tender
                    Committee, responsible for these procurement decisions, were
                    chaired by another IAS officer ,{" "}
                    <strong>Additional Municipal Commissioner</strong>, Shri P.
                    Velrasu, and that he was neither a member of these
                    committees nor involved in their decision-making process. In
                    his statement to the ED, he emphasized that any decisions
                    taken by these committees were outside his purview and
                    unrelated to his administrative responsibilities. Jaiswal
                    submitted a written clarification to the ED, which was
                    officially accepted.
                  </p>
                  <p className="leading-26 pt-10">
                    Further, Jaiswal pointed out that the target of the
                    investigation was another individual and that his name was
                    being used inappropriately to build a case. He stated that
                    apart from attending the ED office once to record his
                    statement, no further summons or notices were issued to him.
                  </p>
                </div>

                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    ED Raid and Property Allegations
                  </h3>
                  <p className="leading-26 pb-20">
                    In June 2023, the ED raided Jaiswal’s Bandra residence and
                    discovered documents revealing ownership of 24 properties
                    worth approximately ₹34 crores and fixed deposits (FDs)
                    valued at over ₹15 crores. The raid also led to the
                    confiscation of ₹13 lakhs in cash. Following these findings,
                    allegations surfaced that Jaiswal had made questionable
                    financial transactions, including a fixed deposit of ₹5
                    crores during the COVID-19 period in 2020.
                  </p>
                  <h2 className="sec-title font-bold text-32 leading-32 pt-25 pb-20">
                    Jaiswal’s Response
                  </h2>
                  <p className="leading-26">
                    Jaiswal asserted that the claims were baseless and explained
                    the origins of the properties and funds:
                  </p>
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li style={{ listStyle: "disc" }} className="mt-1">
                      <p>
                        <strong>Properties</strong>: He clarified that the
                        properties were either <strong>ancestral</strong> or
                        acquired before his entry into public service and
                        marriage. He emphasized that these properties were
                        transparently declared in both his and his wife’s Income
                        Tax Returns (ITRs) and his{" "}
                        <strong>Immovable Property Returns (IPRs)</strong>,
                        which are publicly available../../public
                      </p>
                    </li>
                    <li style={{ listStyle: "disc" }} className="mt-1">
                      <p>
                        <strong>Fixed Deposits</strong>: Jaiswal stated that all
                        FDs were disclosed in their ITRs, and taxes were duly
                        paid on them. These records were provided to the ED
                        during the investigation and were accepted by both the
                        ED and the Income Tax Department.
                      </p>
                    </li>
                    <li style={{ listStyle: "disc" }} className="mt-1">
                      <p>
                        <strong>₹13 Lakhs in Cash</strong>: Regarding the
                        confiscated cash, Jaiswal explained that the amount was
                        accounted for in their balance sheet and officially
                        reported as cash in hand in their ITR. The statement and
                        related documents were also accepted by the ED.
                      </p>
                    </li>
                  </ul>
                  <p className="leading-26">
                    Jaiswal also addressed rumors regarding the properties being
                    gifts from his father-in-law, a retired Income Tax
                    Commissioner. He clarified that his wife,{" "}
                    <strong>Siddhi Jaiswal</strong>, had inherited part of her
                    share of ancestral property from her terminally ill mother,
                    who distributed her estate equally between Siddhi and her
                    brother through an official will in 2016.
                  </p>
                </div>

                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Political Motivation and High Court Dismissal
                  </h3>
                  <p className="leading-26 pb-20">
                    Jaiswal further claimed that the entire case was politically
                    motivated and based on inaccurate information. He
                    highlighted that apart from submitting documents and
                    attending a single ED hearing, no further action had been
                    taken against him. Additionally, he pointed out that the
                    Honorable High Court of Mumbai dismissed a false case filed
                    against him by an activist at the stage of admission for
                    lack of evidence.
                  </p>
                </div>
                <div className="po-sidebar-text-1">
                  <h3 className="sec-title font-bold text-32 leading-32 pt-40 pb-20">
                    Summary
                  </h3>
                  <p className="leading-26 pb-20">
                    Jaiswal has consistently maintained that the allegations
                    were an orchestrated effort to malign his reputation. The ED
                    investigation, while initially linking him to the COVID-19
                    jumbo center scam, failed to produce conclusive evidence
                    implicating him in the case. Both the ED and the Income Tax
                    Department accepted his explanations regarding the
                    properties, fixed deposits, and cash in hand, validating his
                    claims of financial transparency.
                  </p>
                </div>
                <div className="po-about-btn-2 mt-20">
                  <NavLink to="/otherControversies" className="po-btn-sec">
                    <span className="po-btn-wrap">
                      <span
                        className="po-btn-y-1"
                        style={{ padding: "0.1rem 0" }}>
                        Other Controversies
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
      </section>
    </main>
  );
};

export default Controversies;
