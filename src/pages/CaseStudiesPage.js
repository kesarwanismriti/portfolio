import React, { Component } from "react";
import { css } from "aphrodite";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Link from "../components/Link";
import Subtitle from "../components/Subtitle";
import Section from "../components/Section";
import Footer from "../components/Footer";

import Badge from "../components/Badge";
import Title400 from "../components/Title400";
import Title500 from "../components/Title500";
import Paragraph from "../components/Paragraph";
import CaseStudyCardWide from "../components/CaseStudyCardWide";
import { globalStyles } from "../components/GlobalStyles";
import { styles as caseStudyStyles } from "../components/CaseStudyStyles";

export default class CaseStudiesPage extends Component {
  componentDidMount() {
    document.title += " — Case Studies";
  }

  render() {
    return (
      <div>
        <Header />
        <Hero
          sequence="&mdash;"
          title="Case Studies. Project outcomes."
          descriptions={[
            "Showcasing some of my recent work.",
            "Focussing on Design process & outcome.",
            "Sharing details without disclosing clients’ business details & respecting the NDAs.",
          ]}
          trailingContent={
            <div>
              <Title500>Case Studies:</Title500>
              <ul
                className={css([
                  caseStudyStyles.summaryListItemList,
                  caseStudyStyles.summaryListItemListNoBullet,
                ])}
              >
                <li className={css(caseStudyStyles.summaryListItemListItem)}>
                  01/{" "}
                  <Link href="/portfolio/#/case-studies/sarawak/"
                   onClick={() => window.scrollTo(0, 0)}
                  >
                  Sarawak energy: Digitising customer operations
                  </Link>
                </li>
                <li className={css(caseStudyStyles.summaryListItemListItem)}>
                  02/{" "}
                  <Link href="/portfolio/#/case-studies/tater-ninjas/"
                   onClick={() => window.scrollTo(0, 0)}
                  >
                  Tater Ninjas: Improving operational efficiency 
                  </Link>
                </li>
                <li className={css(caseStudyStyles.summaryListItemListItem)}>
                  03/{" "}
                  Toyota: Legacy systems transformation
                </li>
                <li className={css(caseStudyStyles.summaryListItemListItem)}>
                  04/{" "}
                    <span className={css(globalStyles.marginRight)}>
                    Arnott’s Group: Supply chain app modernisation 
                    </span>
                    {/* <Badge size="small">New</Badge> */}
                </li>
                <li className={css(caseStudyStyles.summaryListItemListItem)}>
                  05/ Mobile e-commerce supported by bank
                </li>
              </ul>
            </div>
          }
        />

        <Section>
          <h1>
            <Title sequence={"01/"} title={"Sarawak energy: Digitising customer operations"} />
          </h1>
          <h2>
            <Subtitle>
            A primary energy provider in Malaysia with a customers close to 3 million,  needed to digitise paper-based service to the online system.
            </Subtitle>
          </h2>
          <Title400>— Outcome</Title400>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Paragraph>
            A digital application that can be used by the end users to raise new electrical connection requests, manage existing connection, usage and billing and a backend system to manage all the requests.
            </Paragraph>
          </div>
          <CaseStudyCardWide
            role={"Lead UX/UI Designer"}
            services={
              "Design strategy, User Research, Web & mobile app design"
            }
            link="/portfolio/#/case-studies/sarawak/"
          />
        </Section>

        <Section background="grey">
          <h1>
            <Title sequence={"02/"} title={"Tater Ninjas: Improving operational efficiency "} />
          </h1>
          <h2>
            <Subtitle>
            A global leader in potato products, needed a digital solution to improve efficiency, data accuracy and reduce additional workload.
            </Subtitle>
          </h2>
          <Title400>— Outcome</Title400>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Paragraph>
            Mobile app with increased productivity, improved data and enhanced communication and collaboration with real-time data sharing facilitates for better collaboration between agronomists and other stakeholders.
            </Paragraph>
          </div>
          <CaseStudyCardWide
            role={"Lead UX/UI Designer"}
            services={
              "Design strategy, User Research, Web & mobile app design"
            }
            link="/portfolio/#/case-studies/tater-ninjas/"
          />
        </Section>
{/* 
        <Section>
          <h1>
            <Title sequence={"03/"} title={"GDPR Marketing Consent"} />
          </h1>
          <h2>
            <Subtitle>
              3 million customers and how to ask them if they’d like to be
              marketed to, again.
            </Subtitle>
          </h2>
          <Title400>— Outcome</Title400>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Paragraph>
              With the looming GDPR compliance deadline approaching, the client
              needed to ask all of their 3 million customers if they'd like to
              be marketed to, again. Careful research, user testing, HTML
              prototypes, and many iterations later gave me the least risky
              solution resulting in only a 1% net loss of consent.
            </Paragraph>
          </div>
          <CaseStudyCardWide
            role={"Designer"}
            services={"Research, GDPR consultation, user testing, marketing"}
            link="/case-studies/gdpr-marketing-consent"
          />
        </Section>

        <Section background="grey">
          <h1>
            <Title sequence={"04/"} title={"Improving Feature Adoption"} />
          </h1>
          <h2>
            <Subtitle>
              Understanding why a new feature had a slow adoption rate and then
              improving it
            </Subtitle>
          </h2>
          <Title400>— Outcome</Title400>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Paragraph>
              Significant increases in visits and interaction with the new
              feature through multiple rounds of split testing.
            </Paragraph>
          </div>
          <CaseStudyCardWide
            role={"Designer"}
            services={"Optimisation, split-testing, research, analytics"}
            link="/case-studies/improving-feature-adoption"
          />
        </Section>

        <Section>
          <h1>
            <Title sequence={"05/"} title={"Automating Journey Maps"} />
          </h1>
          <h2>
            <Subtitle>
              Taking data from Adobe Analytics and populating a Sketch flow
              diagram.
            </Subtitle>
          </h2>
          <Title400>— Outcome</Title400>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Paragraph>
              Taking a manual task from 1 day to 5 minutes per month.
            </Paragraph>
          </div>
          <CaseStudyCardWide
            role={"Developer"}
            services={"Automation, analytics, user flow"}
            linkType="disabled"
          />
        </Section>

        <Section background="grey">
          <h1>
            <Title
              sequence={"06/"}
              title={"Information Architecture Overhaul"}
            />
          </h1>
          <h2>
            <Subtitle>
              A full research-led overhaul of a large information architecture.
            </Subtitle>
          </h2>
          <Title400>— Outcome</Title400>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Paragraph>
              Huge percentage increases in discoverability, findability and
              understanding of the navigational structure.
            </Paragraph>
          </div>
          <CaseStudyCardWide
            role={"Designer"}
            services={"User research, research-led, information architecture"}
            linkType="disabled"
          />
        </Section> */}

        <Footer />
      </div>
    );
  }
}
