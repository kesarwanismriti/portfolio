import React, { Component } from "react";
import { css } from "aphrodite";

import { globalStyles } from "../components/GlobalStyles";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Button from "../components/Button";
import Subtitle from "../components/Subtitle";
import Section from "../components/Section";
import Footer from "../components/Footer";

import LogoList from "../components/LogoList";
import MyCompaniesList from "../components/MyCompaniesList";
import ServicesDetail from "../components/ServicesDetail";
import AgilePhilosophyDetail from "../components/AgilePhilosophyDetail";
import PrinciplesDetail from "../components/PrinciplesDetail";
import IndustriesDetail from "../components/IndustriesDetail";
import CommentsDetail from "../components/CommentsDetail";

import self from '../images/self.png'

import CaseStudyCard from "../components/CaseStudyCard";
import Link from "../components/Link";
import { styles } from "../components/HeaderStyles";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={css(globalStyles.paddingBottom10x)}>
          <Hero
            sequence="&mdash;"
            title={` Designer.`}
            Subtitle={"User Researcher."}
            descriptions={[
              "Hello! I’m Smriti Kesarwani.",
              "A Senior UX professional with over 13 years of experience crafting exceptional digital experiences across B2C, B2B, and complex enterprise systems.",
              "Specialising in design strategy, design sprints, user research, design systems, UX coaching & mentoring",
            ]}
            trailingContent={
              <img
                className={css(globalStyles.profileHeadshot)}
                src={self}
                alt="Headshot profile picture of Smriti Kesarwani"
              />
            }
          />
        </div>
{/* 
        <Section background={"grey"}>
          <h1>
            <Title sequence={"01/"} title={"Co-founder"} />
          </h1>
          <h2>
            <Subtitle>Working with talented co-founders</Subtitle>
          </h2>
          <MyCompaniesList />
        </Section> */}

        <Section
        >
          <h1>
            <Title sequence={"/"} title={"Key Projects"} />
          </h1>
          <h2>
            <Subtitle>With some of the biggest brands.</Subtitle>
          </h2>
          <LogoList />
        </Section>

        <Section background={"grey"}>
          <h1>
            <Title sequence={"/"} title={"Skills"} />
          </h1>
          <h2>
            <Subtitle>Design, Research and Coaching</Subtitle>
          </h2>
          <ServicesDetail />
        </Section>

        {/* <Section>
          <h1>
            <Title sequence={"04/"} title={"Agile Team Philosophy"} />
          </h1>
          <h2>
            <Subtitle>
              Involve users early and often. Learn from them and iterate.
            </Subtitle>
          </h2>
          <AgilePhilosophyDetail />
        </Section> */}

        {/* <Section background={"black"}>
          <h1>
            <Title sequence={"05/"} title={"Principles"} type="onBlack" />
          </h1>
          <PrinciplesDetail />
        </Section> */}
{/* 
        <Section>
          <h1>
            <Title sequence={"06/"} title={"Industries"} />
          </h1>
          <h2>
            <Subtitle>Gathering the best solutions from far and wide.</Subtitle>
          </h2>
          <IndustriesDetail />
        </Section> */}

        <Section >
          <h1>
            <Title
              sequence={"/"}
              title={"Recommendations"}
              alignment={"left"}
            />
          </h1>
          <CommentsDetail />
        </Section>

        <Section background={"grey"}>
          <h1>
            <Title sequence={"/"} title={"Case Studies"} alignment={"left"} />
          </h1>
          <h2>
            <Subtitle>
              A selection of recent client projects, focussing on process and
              outcome.
            </Subtitle>
          </h2>
          <Button display="inline-block" size="small" link={"/portfolio/#/case-studies/"}
           onClick={() => window.scrollTo(0, 0)}
          >
            View Case Studies
          </Button>
        </Section>

        <Footer />
      </div>
    );
  }
}
