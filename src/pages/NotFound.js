import React, { Component } from "react";
import { css } from "aphrodite";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Link from "../components/Link";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Title400 from "../components/Title400";
import Title500 from "../components/Title500";
import Paragraph from "../components/Paragraph";

import { globalStyles } from "../components/GlobalStyles";

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
          title="Nothing here. Page not found."
          descriptions={["This page doesn't exist."]}
        />

        <Section>
          <h1>
            <Title400>Luke James Taylor</Title400>
            <div className={css(globalStyles.paddingBottom5x)}>
              <Paragraph size="small">A designer.</Paragraph>
            </div>
          </h1>
          <div className={css(globalStyles.row)}>
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
          </div>
        </Section>

        <Footer />
      </div>
    );
  }
}
