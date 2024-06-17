import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./ServicesDetailStyles";
import { globalStyles } from "./GlobalStyles";

import Title400 from "./Title400";
import Paragraph from "./Paragraph";
import Link from "./Link";

import ux from "../images/skills-protactor.png";
import designSystems from "../images/design-systems.png";
import userResearch from "../images/user-research.png";
import mentoring from "../images/mentoring.png";

export default class ServicesDetail extends Component {
  render() {
    return (
      <ul className={css(styles.servicesDetailList)}>
        <li className={css(styles.servicesDetailListItem)}>
          <img
            className={css(styles.servicesDetailIcon)}
            src={ux}
            alt="UX/UI Designs"
          />
          <Title400>
            <h3>UX/UI Designs</h3>
          </Title400>
          <Paragraph>
            Creating intuitive and engaging experience for complex solutions.
            Designing interfaces with the end-user in mind to ensure a seamless
            experience and strategically refining interaction design principles.
            Achieving iterative improvements through the creation of prototypes
            and stakeholder testing.
          </Paragraph>
        </li>
        <li className={css(styles.servicesDetailListItem)}>
          <img
            className={css(styles.servicesDetailIcon)}
            src={designSystems}
            alt="Design Systems"
          />
          <Title400>
            <h3>Design System</h3>
          </Title400>
          <Paragraph>
            Building design systems for scalable and consistent interface.
            Developing and maintaining reusable design components and creating
            clear guidelines and specifications for design components, content
            and UX writing. Setting up a component library in Sketch, Figma, or
            Adobe XD for designers to access predefined design elements easily.
          </Paragraph>
        </li>
        <li className={css(styles.servicesDetailListItem)}>
          <img
            className={css(styles.servicesDetailIcon)}
            src={userResearch}
            alt="User Research"
          />
          <Title400>
            <h3>User Research</h3>
          </Title400>
          <Paragraph>
            I bridge the gap between users and applications! By researching user
            needs and behaviors, I inform design decisions, ensuring the final
            product is intuitive, enjoyable, and truly solves user problems. In
            short, it makes apps people love to use.
          </Paragraph>
        </li>
        <li className={css(styles.servicesDetailListItem)}>
          <img
            className={css(styles.servicesDetailIcon)}
            src={mentoring}
            alt="Mentoring"
          />
          <Title400>
            <h3>Coaching & Mentoring</h3>
          </Title400>
          <Paragraph>
            I guide and mentor UX professionals, fostering a culture of
            user-entered design. This elevates the entire team's UX skills,
            propelling organisation towards greater UX maturity and
            industry-leading user experiences.
          </Paragraph>
        </li>
        {/* <li className={css(styles.servicesDetailListItem)}>
          <img
            className={css(styles.servicesDetailIcon)}
            src={"/images/icons/services-development.svg"}
            alt="Icon depiciting design strategy"
          /> */}
          {/* <Title400>
            <h3>Front-end Development</h3>
          </Title400>
          <Paragraph>
            Being able to build the designs I produce means I can bring your
            idea to life. It also means I don't design anything that can't
            technically be created.
          </Paragraph> */}
          {/* <Title400>
            <h3>Branding, Identity, Packaging, and Illustration.</h3>
          </Title400>
          <Paragraph>
            Working with a talented designer at{" "}
            <Link href="http://theotherhand.co.uk" target="_blank">
              The Other Hand
            </Link>
            .
          </Paragraph> */}
        {/* </li>
        <li className={css(styles.servicesDetailListItem)}>
          <img
            className={css(styles.servicesDetailIcon)}
            src={"/images/icons/services-workshop.svg"}
            alt="Icon depiciting design strategy"
          />
          <Title400>
            <h3>Workshop Facilitation</h3>
          </Title400>
          <Paragraph>
            When a Design Sprint isn’t suitable, sometimes a workshop will
            suffice. I’ve run workshops for many clients from start-ups to
            FTSE100s.
          </Paragraph> */}
        {/* </li> */}
      </ul>
    );
  }
}
