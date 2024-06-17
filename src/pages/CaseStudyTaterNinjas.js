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
import tater from "../images/tater.png";
import taterBrainstorming from "../images/tater-brainstorming.png";
import taterOne from "../images/tater-one.png";
import taterTwo from "../images/tater-two.png";
import taterThree from "../images/tater-three.png";
import designSystem from "../images/design-system.png";
import userStory from "../images/user-story.png";

export default class CaseStudyTaterNinjas extends Component {
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
            title="Tater Ninjas. Improving operational efficiency."
            descriptions={[
              "Offline functionality in the PWC mobile application",
              "Data visualisation tools: Allow agronomists to view trends and patterns in real time",
              "Case study detailing Problem Statement, UX process, Outcomes & Wins",
            ]}
            trailingContent={
              <Button
                link="https://www.dropbox.com/scl/fo/fzig2v6umdzweq7u06kau/ADSTbPrnP4z4j2MBi2bp1qY?rlkey=485lbw0re219gkzl8gg304cqu&dl=0"
                target="_blank"
              >
                View Mockups on Figma
              </Button>
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
                  Competitor Analysis
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
                Fully integrated mobile application for Agronomists
                <br />
                <br />
                Quick User Adoption: The app's intuitive interface led to a 95%
                user adoption rate within the first three months
                <br />
                <br />
                Improved Data Quality: Real-time data capture and validation
                minimized errors, leading to more reliable data for informed
                decision-making.{" "}
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
                A global leader in potato products, relied on paper-based forms
                for agronomists to collect vital field and harvest data. This
                manual process was time-consuming, prone to errors, and hindered
                data analysis. The need for a digital solution to improve
                efficiency and data accuracy became crucial.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>Solution</h3>
              </Title400>
              <Paragraph>
                Mobile app for Agronomists to:
                <br />
                Digitise data collection
                <br />
                Improve data accuracy
                <br />
                Enhance accessibility
                <br />
                Increase user efficiency.
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
                  Agronomists needed Potatoes Gower information such as farm
                  details (size, location), storage facility detail and seasonal
                  yield data to be able to generate quality report for the
                  harvest. They needed this info while on filed visit which
                  usually happened multiple times a year and were often remote
                  location with limited connectivity.
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Client Goals</h3>
                </Title400>
                <Paragraph>
                  Eliminate paper forms and streamline data entry. Reduce errors
                  through real-time data capture and validation. Allow data
                  collection from any field location. Save time and simplify
                  workflows for Agronomists.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className={css([globalStyles.row, globalStyles.alignCenter])}>
            <div>
              <img src={tater} alt="Tater Ninjas" />
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>Current Pain Points</h3>
              </Title400>
              <Paragraph>
                The client already had a previous version of the application
                that was slow, buggy and didn’t meet the user needs. Due to poor
                adoption of previous version users were skeptical. They relied
                on downloading relevant info from Salesforce database prior to
                their field visit. This increased their workload. During the
                field visit they were not able to access additional information
                for the farm, grower, yield or common diseases for potatoes and
                related remedy. This made it challenging to create quality
                assessment report.
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
                Since the application had 2 distinct user groups (Agronomists &
                Farmer) separate sessions were conducted.
                <br />
                <br /> I discovered the business process and identified ways to
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
                  Better communication between agronomist & farmer.
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Better communication between agronomist & farmer.
                </li>
              </ul>
            </div>
          </div>

          <Title400>
            <h3>Brainstorming with Stakeholders & BA</h3>
          </Title400>
          <Paragraph>
            Collaborative session to identify use case, scope for improvements
          </Paragraph>
          <div
            style={{
              height: "fit-content",
              marginBottom: "50px",
            }}
          >
            <img
              src={taterBrainstorming}
              alt="Brain storming"
              style={{
                width: "1000px",
                marginTop: "50px",
              }}
            />
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
                <h3>Collaborative Work</h3>
              </Title400>
              <Paragraph>
                Together with the client, I spent a good proportion of time
                iterating over the journey map. I used this map throughout the
                whole project to aid conversation, support the developers and
                act as a springboard to quickly produce the final wireframes. To
                produce the map I utilised a mixture of workshop sessions and
                remote calls.
              </Paragraph>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Wireframes</h3>
              </Title400>
              <Paragraph>
                Outlining all of the information required at each step allowed
                me to be UI design agnostic. I didn’t have to make strongly
                opinionated design decisions and could move quickly to build up
                the page templates. Working in this way also allowed me to be
                lean. I could create a wireframe and share the layout idea with
                the client quite rapidly; thus avoiding timely work associated
                with well-finessed UI design.
              </Paragraph>
            </div>
          </div>
          <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>Remote Usability Test</h3>
              </Title400>
              <Paragraph>
                I was able to validate almost all the main user flows through
                remote usability testing hosted on zoom. BAs from clients were
                quite helpful to set up the sessions. It helped me to uncover
                some usability issues in time and i was able to address it in
                the next iterations. This gave confidence to the stakeholders
                and business sponsor for better user adoption of the new
                application
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>A Unique challenge for this project</h3>
              </Title400>
              <Paragraph>
                Since this was second attempt to create something that users
                would embrace, i had to tread carefully of not making the
                mistake that jolted the users earlier. The previous version of
                the app had bad usability that led to loss of credibility of any
                such future apps. It was a huge relief to get positive feedback
                during usability testing sessions and further a 95% adoption of
                the app within first 3 months of launch.
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
              One of the critical success factor was regaining users’ trust with
              new application. A better user adoption led to increase in
              efficiency, reduced workload and effective communication.
            </Subtitle>
          </h2>
          <Button
            size="small"
            link="https://www.dropbox.com/scl/fo/fzig2v6umdzweq7u06kau/ADSTbPrnP4z4j2MBi2bp1qY?rlkey=485lbw0re219gkzl8gg304cqu&dl=0"
            target="_blank"
            style={{
              width: "300px",
              marginBottom: "50px",
            }}
            white={true}
          >
            View Mockups in Figma
          </Button>

          <div className={css(globalStyles.paddingBottom5xUntilSmall)}>
            <div className={css(globalStyles.row)}>
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={
                    <Title400 spacing="none">Information Architecture</Title400>
                  }
                  img={taterOne}
                  description={
                    <Paragraph size="small">IA for visit mobile app</Paragraph>
                  }
                  small={true}
                />
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={<Title400 spacing="none">Persona</Title400>}
                  img={taterThree}
                  small={true}
                  description={
                    <Paragraph size="small">
                      Proto Persona for the Agronomist
                    </Paragraph>
                  }
                />
              </div>
            </div>
            <div
              className={css(globalStyles.row)}
              style={{ marginTop: "50px" }}
            >
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={
                    <Title400 spacing="none">
                      Design System (Style Guide)
                    </Title400>
                  }
                  img={designSystem}
                  description={
                    <Paragraph size="small">
                      I created Design system for the mobile app with Figma UI
                      Toolkit for consistent UI
                    </Paragraph>
                  }
                  small={true}
                />
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={<Title400 spacing="none">User Story Map</Title400>}
                  img={userStory}
                  small={true}
                  description={
                    <Paragraph size="small">
                      I created a detailed user story map was created to support
                      the agile development of the map
                    </Paragraph>
                  }
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
              <Title600>
                Tater Ninjas: Improving operational efficiency
              </Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  <br />
                </Paragraph>
              </div>
              <Button size="small" link="#">
                Back to Top ↑
              </Button>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title400>Next Case Study</Title400>
              <Title600>Toyota: Legacy systems transformation </Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  <br />
                </Paragraph>
              </div>
              <Button size="small" link="https://www.dropbox.com/scl/fi/pb7ckhsoxzvs8iw0gid8x/Toyota-WIPS-case-study-2.pdf?rlkey=ehdl1uldm8f090yhioxvu5nrr&dl=0"
                target="_blank"
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
