import React, { Component } from "react";
import { css } from "aphrodite";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Title400 from "../components/Title400";
import Title500 from "../components/Title500";
import Paragraph from "../components/Paragraph";
import Link from "../components/Link";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { globalStyles } from "../components/GlobalStyles";

export default class ContactPage extends Component {
  componentDidMount() {
    document.title += " — Contact";
  }
  render() {
    return (
      <div>
        <Header />
        <Hero
          sequence="&mdash;"
          title="Contact."
          descriptions={["Have a question or just want a chat?"]}
        />

        <Section>
          <h1>
            <Title400>How to get in touch</Title400>
            <div className={css(globalStyles.paddingBottom5x)}>
              <Paragraph size="small">
                Send over an email or message me on social media.
              </Paragraph>
            </div>
          </h1>
          <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnOneThird)}>
              <Title500>Email</Title500>
              <Link href="mailto:smriti.kesarwani@gmail.com">
              smriti.kesarwani@gmail.com
              </Link>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title500>LinkedIn</Title500>
              <Link
                href="https://www.linkedin.com/in/smritikesarwani/"
                target="_blank"
              >
                Go to LinkedIn profile
              </Link>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              {/* <Title500>Twitter</Title500>
              <Link href="https://twitter.com/lukejamestaylor" target="_blank">
                Go to Twitter profile
              </Link> */}
            </div>
          </div>
        </Section>

        {/* <Section background="grey">
          <h1>
            <Title400>Smriti Kesarwani</Title400>
            <div className={css(globalStyles.paddingBottom5x)}>
              <Paragraph size="small">A designer. Problem solver.</Paragraph>
            </div>
          </h1> */}
          {/* <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnOneThird)}>
              <Title500>
                My services, philosophies and design principles
              </Title500>
              <Link href="/">View profile</Link>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title500>My processes, outcomes and clients</Title500>
              <Link href="/case-studies/">View case studies</Link>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title500>Design Sprint facilitation and training</Title500>
              <Link href="https://designsprintx.com" target="_blank">
                Go to Design Sprint X
              </Link>
            </div>
          </div> */}
        {/* </Section> */}

        <Footer />
      </div>
    );
  }
}
