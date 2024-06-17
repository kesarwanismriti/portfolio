import React, { Component } from "react";
import { css } from "aphrodite";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Section from "../components/Section";
import Footer from "../components/Footer";

import Cite from "../components/Cite";
import Title400 from "../components/Title400";
import Paragraph from "../components/Paragraph";
import CaseStudyCard from "../components/CaseStudyCard";
import { globalStyles } from "../components/GlobalStyles";
import { styles } from "../components/CaseStudyStyles";
import Link from "../components/Link";
import NDAPanel from "../components/NDAPanel";
import LargeQuote from "../components/LargeQuote";
import Callout from "../components/Callout";
import Title500 from "../components/Title500";
import Title600 from "../components/Title600";
import OutcomeCard from "../components/OutcomeCard";
import Button from "../components/Button";

import sarawak from "../images/sarawar-case-study.png";
import stack from "../images/sarawak-case-study-stack.png";
import brainstorming from "../images/brainstorming.png";
import mappingOne from "../images/mapping-one.png";
import mappingTwo from "../images/mapping-two.png";
import informationArc from "../images/information-architecture.png";
import mockups from "../images/mockups.png";

export default class CaseStudyCarInsurance extends Component {
  componentDidMount() {
    document.title += " — Case Studies — Car Insurance Startup";
  }

  render() {
    return (
      <div>
        <Header />
        <div className={css(globalStyles.paddingBottom5x)}>
          <Hero
            sequence="&mdash;"
            title="Sarawak energy. Digitising customer operations."
            descriptions={[
              "From Paper to Power: Energising Efficiency in 5 Months",
              "2.5 Million customers empowered with digital transformation.",
              "Case study detailing Problem Statement, UX process, Outcomes & Wins.",
            ]}
            trailingContent={
              <div>
                <img
                  className={css(globalStyles.profileHeadshot)}
                  src={sarawak}
                  alt="Sarawak"
                  style={{
                    height: "300px",
                    width: "300px",
                  }}
                />
              </div>
            }
          />
        </div>

        <Section background="black">
          <div className={css(globalStyles.sectionHeader)}>
            <div className={css(globalStyles.sectionHeaderLeading)}>
              <h1>
                <Title type="onBlack" sequence={"01/"} title={"Summary"} />
              </h1>
              <h2>
                <Subtitle type="onBlack">What was delivered and how</Subtitle>
              </h2>
            </div>
            <div className={css(globalStyles.sectionHeaderTrailing)}>
              <NDAPanel />
            </div>
          </div>
          <ul className={css([styles.summaryList, globalStyles.row])}>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; UX Activities</Title400>
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  Stakeholder interviews
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Formative User Research
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Persona creation
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  User Flow
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Iterative design
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Lo & Hi fidelity mockups
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Remote usability testing
                </li>
              </ul>
            </li>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Deliverables</Title400>
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  Information Architecture
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Low fidelity mockups
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  High fidelity mockups
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Design Systems (Style Guide)
                </li>
              </ul>
            </li>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Outcomes</Title400>
              <Paragraph size="small" type="onBlack">
                Fully integrated mobile application for 2.5 million user to
                manage their power usage & billing.
                <br />
                <br />
                Back-office web portal for 400 Sarawak employees to manage the
                operations
                <br />
                <br />
                Go live in 5 months
              </Paragraph>
            </li>
          </ul>
        </Section>

        <Section>
          <h1>
            <Title sequence={"02/"} title={"Understanding the problem"} />
          </h1>
          <h2>
            <Subtitle>
              A deep understanding of the problem was the first step
            </Subtitle>
          </h2>

          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Challenge</h3>
              </Title400>
              <Paragraph>
                Sarawak was struggling to maintain and scale up their paper
                based operation. The process of opening new customer account,
                billing & complaints, maintaining energy plans for turnkey
                projects was mostly paper-based that caused inefficiency,
                increased SLA, redundant works and need to manage archives.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>Solution</h3>
              </Title400>
              <Paragraph>
                A digital application (eCX) that can be used by the end user to
                raise new electrical connection requests, manage existing
                connection, usage and billing and a back-office system to
                support eCX used by SEB employees to manage all the requests.
              </Paragraph>
            </div>
          </div>

          {/* <div className={css(globalStyles.paddingBottom5x)}>
            <LargeQuote
              quote="The customer journey and graphical design processes were very
          straightforward for us."
              name="Paul Ridgway"
              role="Technology Leader &amp; Strategist"
            />
          </div> */}

          <div className={css(globalStyles.paddingBottom5x)}>
            <div className={css(globalStyles.row)}>
              <div className={css([globalStyles.columnHalf])}>
                <Title400>
                  <h3>Background</h3>
                </Title400>
                <Paragraph>
                  Sarawak Energy Berhad (SEB) is the primary energy provider for
                  the state of Sarawak, Malaysia with a population close to 3
                  million. Their aim is to meet the region's needs for reliable
                  renewable energy and digitise their operations. They have an
                  expanding user base of over 680,000 account holders and a
                  multidisciplinary workforce of 5,000. The image below shows 1
                  of the many archives folder for a single application.
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Client Goals</h3>
                </Title400>
                <Paragraph>
                  SEB had a paper based operation to receive requests for new
                  electricity connections and manage existing connections from
                  both domestic and commercial users. Their goal was to
                  translate a paper-based process that required a lot of manual
                  work, to become fully digital.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className={css([globalStyles.row, globalStyles.alignCenter])}>
            <div className={css(globalStyles.columnTwoThirds)}>
              <img
                src={stack}
                alt="A stack of notes."
                className={css(globalStyles.imageFullWidth)}
              />
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title400>
                <h3>Current Pain Points</h3>
              </Title400>
              <Paragraph>
                The user journey usually starts with a new application for
                electricity connection when the real estate construction begins
                by submitting all the electricity load requirements,
                architecture planning maps, engineering drawings etc. There are
                various milestones throughout the journey where end users (the
                Consultants/Engineers/Contractor) work closely with different
                departments of SEB to complete the project and have to submit
                loads of documents. <br />
                All these interactions and paperworks were managed with minimum
                digital support, which meant a high management cost, high
                dependency on archival systems, high response times and a huge
                workforce to manage this process.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section background="grey">
          <h1>
            <Title sequence={"03/"} title={"UX Concept Journey"} />
          </h1>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Writing problem statement</h3>
              </Title400>
              <Paragraph>
                I started with a discovery session with business and users.
                Since the application had 2 distinct user groups (internal
                business users and external energy consumers) separate sessions
                were conducted.
                <br />
                <br />I discovered the business process and identified ways to
                improve it by cutting down redundant steps and making it
                digital-ready.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>High Level Goals </h3>
              </Title400>
              <ul
                className={css([
                  styles.summaryListItemList,
                  styles.summaryListItemListVisible,
                ])}
              >
                <li className={css(styles.summaryListItemListItem)}>
                Creating a scalable portal 
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                Replacing the manual and paper based application 
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                Make the status visible for all.
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                Better communication between different user roles
                </li>
              </ul>
            </div>
          </div>

          <Title400>
            <h3>Brainstorming with Stakeholders & BA</h3>
          </Title400>
          <Paragraph>
            Collaborative whiteboarding session to identify use case, scope for
            improvements
          </Paragraph>
          <div
            style={{
              height: "fit-content",
              marginBottom: "50px",
            }}
          >
            <img
              src={brainstorming}
              alt="Brain storming"
              style={{
                width: "1000px",
                marginTop: "50px",
              }}
            />
          </div>

          <div className={css(globalStyles.paddingBottom5x)}>
            <Callout>
              <Title400>
                <h3>Priority Mapping & Metrics with Business</h3>
              </Title400>
              <div className={css(globalStyles.paddingBottom5x)}>
                <div className={css(globalStyles.columnHalf)}>
                  <Paragraph>
                    It was followed by a workshop with the project team to
                    define list downs the success metrics, potential failure
                    reasons and, feature prioritisation
                  </Paragraph>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img
                  src={mappingOne}
                  alt="Goals"
                  className={css(globalStyles.imageHalfWidth)}
                />
                <img
                  src={mappingTwo}
                  alt="Success"
                  className={css(globalStyles.imageHalfWidth)}
                />
              </div>
            </Callout>
          </div>
          {/* <div className={css(globalStyles.paddingBottom5xUntilSmall)}>
            <div className={css(globalStyles.row)}>
              <div className={css([globalStyles.columnHalf])}>
                <Title400>
                  <h3>Map, simplify, and repeat</h3>
                </Title400>
                <Paragraph>
                  Together with the client, we spent a good proportion of time
                  iterating over the journey map. It’s super important to build
                  a strong journey foundation before even thinking about layout.
                  We would go on to use this map throughout the whole project to
                  aid conversation, support the developers and act as a
                  springboard to quickly produce the final wireframes. To
                  produce the map we utilised a mixture of workshop sessions and
                  remote calls.
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Working with branding</h3>
                </Title400>
                <Paragraph>
                  Given the accelerated timescales of this project, we didn’t
                  have the luxury of waiting for a fully-designed brand. We had
                  to make some branding decisions during the UI design phase
                  knowing full well we would have to change it once the brand
                  work became ready. This is why creating solid wireframes was
                  crucial to the success of this project.
                </Paragraph>
              </div>
            </div>
          </div> */}
          <div className={css(globalStyles.row)}>
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Wireframes</h3>
              </Title400>
              <Paragraph>
                Outlining all of the information required at each step allowed
                us to be UI design agnostic. We didn’t have to make strongly
                opinionated design decisions and could move quickly to build up
                the page templates. Working in this way also allowed us to be
                lean. We could create a wireframe and share the layout idea with
                the client quite rapidly; thus avoiding timely work associated
                with well-finessed UI design.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>Remote Usability Test</h3>
              </Title400>
              <Paragraph>
                I was able to validate almost all the main user flows through
                remote usability testing hosted on zoom. BAs from clients were
                quite helpful to set up the sessions. It helped me to uncover
                some usability issues in time and i was able to address it in
                the next iterations. This gave confidence to entire project team
                for the user adoption to the application
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section background="brandPrimary">
          <h1>
            <Title type="onBrandPrimary" sequence={"04/"} title={"Outcomes"} />
          </h1>
          <h2>
            <Subtitle type="onBrandPrimary">
              One of the critical success factor was effective involvement of
              business stakeholders and end users. Project team was well enabled
              on UX methodology.
            </Subtitle>
          </h2>

          <div className={css(globalStyles.paddingBottom5xUntilSmall)}>
            <div className={css(globalStyles.row)}>
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={
                    <Title400 spacing="none">Information Architecture</Title400>
                  }
                  img={informationArc}
                  subtitle={<Title500>Conversation piece</Title500>}
                  description={
                    <Paragraph size="small">
                      This is a sample of IA created for the web application
                      used by SEB employees. Here it shows the process of making
                      a decision for new application
                    </Paragraph>
                  }
                  small={true}
                />
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={<Title400 spacing="none">Mockups</Title400>}
                  img={mockups}
                  button={<Button>View Mockups</Button>}
                  meta={<NDAPanel type="small" />}
                  small={true}
                />
              </div>
            </div>
          </div>
          {/* <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={<Title400 spacing="none">Prototype</Title400>}
                img="/images/case-studies/car-insurance/outcome-prototype.svg"
                subtitle={
                  <Title500>Tap-through designs, as close to real</Title500>
                }
                description={
                  <Paragraph size="small">
                    The prototype was delivered under time pressure to be able
                    to pitch the product to investors. It was also used for the
                    developers to base their proof-of-concept iOS app from.
                  </Paragraph>
                }
                button={<Button>View Prototype</Button>}
                meta={<NDAPanel type="small" />}
              />
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={<Title400 spacing="none">iOS App</Title400>}
                img="/images/case-studies/car-insurance/outcome-ios.svg"
                subtitle={
                  <Title500>Leveraging the latest iOS technology</Title500>
                }
                description={
                  <Paragraph size="small">
                    Their developers used the prototype we’d designed to create
                    a proof-of-concept iOS app. They are currently seeking
                    investment for the product.
                  </Paragraph>
                }
                button={<Button>View App</Button>}
                meta={<NDAPanel type="small" />}
              />
            </div>
          </div> */}
        </Section>

        <Section>
          <h1>
            <Title sequence={"05/"} title={"More Case Studies"} />
          </h1>
          <h2>
            <Subtitle>Recent client projects</Subtitle>
          </h2>
          <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnOneThird)}>
              <Title400>This Case Study</Title400>
              <Title600>Sarawak energy: Digitising customer ops</Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  <br/>
                </Paragraph>
              </div>
              <Button size="small" link="/portfolio/#/case-studies/sarawak"
                onClick={() => window.scrollTo(0, 0)}
              >
                Back to Top ↑
              </Button>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title400>Next Case Study</Title400>
              <Title600>Tater Ninjas: Improving operational efficiency </Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                 <br/>
                </Paragraph>
              </div>
              <Button size="small" link="/portfolio/#/case-studies/tater-ninjas/"
               onClick={() => window.scrollTo(0, 0)}
              >
                Read Next Case Study →
              </Button>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    );
  }
}
