import React, { Component } from "react";
import { css } from "aphrodite";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Section from "../components/Section";
import Footer from "../components/Footer";

import Title400 from "../components/Title400";
import Paragraph from "../components/Paragraph";

import { globalStyles } from "../components/GlobalStyles";
import { styles } from "../components/CaseStudyStyles";
import Callout from "../components/Callout";
import Title500 from "../components/Title500";
import Title600 from "../components/Title600";
import OutcomeCard from "../components/OutcomeCard";
import Button from "../components/Button";
import Well from "../components/Well";

export default class CaseStudyImprovingFeatureAdoption extends Component {
  componentDidMount() {
    document.title += " — Case Studies — Improving Feature Adoption";
  }

  render() {
    return (
      <div>
        <Header />
        <div className={css(globalStyles.paddingBottom5x)}>
          <Hero
            isNew
            sequence="&mdash;"
            title="Improving Feature Adoption."
            descriptions={[
              "Optimisation of an existing feature.",
              "Successful split test over multiple rounds.",
              "160% increase in bet slip adds.",
            ]}
            trailingContent={
              <div>
                <Title500>Designed for</Title500>
                <img
                  src="/images/case-studies/age-visibility/skybettingandgaming.png"
                  alt="Sky Betting &amp; Gaming logo"
                  height="80"
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
          </div>
          <ul className={css([styles.summaryList, globalStyles.row])}>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Services</Title400>
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  Split testing
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Conversion optimisation
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  User-interface design
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Iterative design
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Improving design maturity
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  User research
                </li>
              </ul>
            </li>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Deliverables</Title400>
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  Multiple designs
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Pushed the implementation of Google Optimise for split testing
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  The first split test at Sky Bet Italia
                </li>
              </ul>
            </li>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Outcomes</Title400>
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  <strong
                    className={css(styles.summaryListItemListItemEmphasise)}
                  >
                    118% increase
                  </strong>{" "}
                  in traffic on the previous busiest day
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  <strong
                    className={css(styles.summaryListItemListItemEmphasise)}
                  >
                    145% increase
                  </strong>{" "}
                  in overall traffic to subject pages
                </li>{" "}
                <li className={css(styles.summaryListItemListItem)}>
                  <strong
                    className={css(styles.summaryListItemListItemEmphasise)}
                  >
                    160% increase
                  </strong>{" "}
                  in users adding bets to their bet split from the subject pages
                </li>{" "}
                <li className={css(styles.summaryListItemListItem)}>
                  <strong
                    className={css(styles.summaryListItemListItemEmphasise)}
                  >
                    137% increase
                  </strong>{" "}
                  in users placing bets from the subject pages
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  A noticeable improvement in design maturity
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section>
          <h1>
            <Title sequence={"02/"} title={"Understanding the problem"} />
          </h1>
          <h2>
            <Subtitle>
              The slow adoption of a new feature got us asking why
            </Subtitle>
          </h2>

          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <Title400>
              <h3>What is a Coupon?</h3>
            </Title400>
            <div className={css([globalStyles.row])}>
              <div className={css([globalStyles.columnHalf])}>
                <Paragraph>
                  In{" "}
                  <span role="img" aria-labelledby="Italy Flag">
                    🇮🇹
                  </span>{" "}
                  Italy, Coupon is what we call Accumulators in the U.K. and are
                  sometimes referred to as "Accas". It is one of the most
                  popular types of football bets.{" "}
                </Paragraph>
              </div>
              <div className={css([globalStyles.columnHalf])}>
                <Paragraph>
                  An Accumulator bet combines bets from multiple games into one
                  larger bet to create more significant potential winnings.
                  Examples of markets are "Both Teams to Score" or "First
                  Goalscorer".
                </Paragraph>
              </div>
            </div>
          </div>

          <div className={css(globalStyles.paddingBottom5x)}>
            <img
              src="/images/case-studies/feature-adoption/original-design-large.png"
              alt="A screenshot of the Sky Bet Italia website highlighting the Coupon design in the bottom of the left column"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "1000px" }}
            />
          </div>

          <div className={css(globalStyles.paddingBottom5x)}>
            <div className={css([globalStyles.row])}>
              <div className={css([globalStyles.columnHalf])}>
                <Title400>
                  <h3>Low adoption rates</h3>
                </Title400>
                <Paragraph>
                  After designing and launching the Coupon feature for our
                  users, the team realised we were experiencing low amounts of
                  traffic.
                  <br />
                  <br />
                  The adoption rate was extremely low compared to other newly
                  launched features. The expectation was much higher. higher.
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Benchmarking low adoption</h3>
                </Title400>
                <Paragraph>
                  I wanted to benchmark what it meant to have a low adoption
                  rate compared to other product features. <br />
                  <br />
                  Of course, our expectation was a much higher adoption rate,
                  but I also needed to know what a high adoption rate would be.
                </Paragraph>
              </div>
            </div>
          </div>
        </Section>

        <Section background="grey">
          <h1>
            <Title sequence={"03/"} title={"The solution"} />
          </h1>
          <h2>
            <Subtitle>Data-driven design</Subtitle>
          </h2>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Adding more tracking</h3>
              </Title400>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph>
                  To know whether I'd improved adoption, I needed to add more
                  tracking to the product. For example, I wanted to understand
                  information such as:
                  <ul>
                    <li> From which pages do users add bets?</li>
                    <li>What is the standard rate of adoption for features?</li>
                    <li>From which pages do users place bets?</li>
                  </ul>
                </Paragraph>
              </div>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>Looking for trends</h3>
              </Title400>
              <Paragraph>
                Using Google Analytics, I began to identify trends in usage and
                saw a massive spike at weekends. Next, I wanted to understand
                Coupon's everyday use cases, when users were likely to use them,
                and how.
              </Paragraph>
            </div>
            <Callout>
              <div className={css([globalStyles.row])}>
                <div className={css([globalStyles.columnHalf])}>
                  <Title400>
                    <h3>Surveying users</h3>
                  </Title400>
                  <div className={css(globalStyles.paddingBottom2x)}>
                    <Paragraph>
                      By surveying our users, we gained a deeper understanding
                      of their thoughts about the new Coupon feature. From the
                      survey, I found out:
                      <ul className={css(globalStyles.marginBottom0)}>
                        <li>
                          What do users call the Coupon feature in their own
                          words?
                        </li>
                        <li>How would they describe it to their friend?</li>
                        <li>
                          How often do they use Coupon on other betting
                          websites?
                        </li>
                        <li>
                          Does our offer differ from what they're used to
                          seeing?
                        </li>
                        <li>What would they change or improve?</li>
                      </ul>
                    </Paragraph>
                  </div>
                </div>
                <div className={css(globalStyles.columnHalf)}>
                  <Title400>
                    <h3>Survey results</h3>
                  </Title400>
                  <Paragraph>
                    From the survey, a few things were obvious. First, users did
                    not understand the offering we were displaying or couldn't
                    find it on the website.
                  </Paragraph>
                  <br />
                  <Paragraph>
                    So we began to focus on improving two areas: increasing the
                    feature's prominence and adding detail to the page to
                    explain what a Coupon is.
                  </Paragraph>
                </div>
              </div>
            </Callout>
          </div>
        </Section>

        <Section>
          <div className={css(globalStyles.row)}>
            <Title400>
              <h3>Split testing</h3>
            </Title400>

            <div className={css([globalStyles.row])}>
              <div className={css([globalStyles.columnHalf])}>
                <Paragraph>
                  No part of Sky Bet Italia had ever been split tested. So this
                  adoption problem felt like a fantastic opportunity to
                  implement a split-testing tool.
                  <br />
                  <br /> We decided on Google Optimise as it was easy to use and
                  fit nicely with our tech stack.
                </Paragraph>
              </div>

              <div className={css([globalStyles.columnHalf])}>
                <img
                  src="/images/case-studies/feature-adoption/google-optimise.webp"
                  alt="The logo for Google Optimise"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "80px",
                    textAlign: "right",
                  }}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section background="grey">
          <Callout>
            <Title400>
              <h3>Three challenger designs, one original</h3>
            </Title400>
            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.columnHalf)}>
                <Paragraph>
                  The focus of the designs was prominence and explanation.
                </Paragraph>
              </div>
            </div>
            <div
              className={css([globalStyles.row, globalStyles.paddingBottom5x])}
            >
              <div className={css([globalStyles.columnHalf])}>
                <Well>
                  <Title500>
                    <h3>
                      {" "}
                      <span role="img" aria-labelledby="Blue Dot">
                        🔵
                      </span>{" "}
                      Original Design
                    </h3>
                  </Title500>
                  <div className={css(globalStyles.row)}>
                    <div className={css([globalStyles.columnHalf])}>
                      <div className={css(globalStyles.paddingBottom)}>
                        <img
                          src="/images/case-studies/feature-adoption/design-original.png"
                          alt="The original Coupon design"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            maxHeight: "600px",
                          }}
                        />
                      </div>
                    </div>
                    <div className={css([globalStyles.columnHalf])}>
                      <Title600 spacing="condensed">
                        <h4>Theory</h4>
                      </Title600>
                      <div className={css(globalStyles.paddingBottom)}>
                        <Paragraph size="small">
                          Having the familiar name of Coupon would attract
                          users. <br />
                          <br />
                          In addition, only showing a few markets would mean
                          that those interested in seeing more would use the
                          expansion button.
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Well>
              </div>
              <div className={css([globalStyles.columnHalf])}>
                <Title500>
                  <h3>
                    {" "}
                    <span role="img" aria-labelledby="Orange Dot">
                      🟠
                    </span>{" "}
                    Design 1
                  </h3>
                </Title500>
                <div className={css(globalStyles.row)}>
                  <div className={css([globalStyles.columnHalf])}>
                    <div className={css(globalStyles.paddingBottom)}>
                      <img
                        src="/images/case-studies/feature-adoption/design-1.png"
                        alt="The first alternative design"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "600px",
                        }}
                      />
                    </div>
                  </div>
                  <div className={css([globalStyles.columnHalf])}>
                    <Title600 spacing="condensed">
                      <h4>Theory</h4>
                    </Title600>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        Some of the surveyed users referred to this feature as
                        "Filtri Rapidi", which translates to "Quick Filters".
                        <br />
                        <br /> By using language that was familiar to the user,
                        it would improve adoption due to recognition.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={css(globalStyles.row)}>
              <div className={css([globalStyles.columnHalf])}>
                <Title500>
                  <h3>
                    {" "}
                    <span role="img" aria-labelledby="Green Dot">
                      🟢
                    </span>{" "}
                    Design 2
                  </h3>
                </Title500>
                <div className={css(globalStyles.row)}>
                  <div className={css([globalStyles.columnHalf])}>
                    <div className={css(globalStyles.paddingBottom)}>
                      <img
                        src="/images/case-studies/feature-adoption/design-2.png"
                        alt="The second alternative design"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "600px",
                        }}
                      />
                    </div>
                  </div>
                  <div className={css([globalStyles.columnHalf])}>
                    <Title600 spacing="condensed">
                      <h4>Theory</h4>
                    </Title600>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        By having a grey box around the component, I felt it
                        would draw more attention due to the <br />
                        <strong
                          className={css(
                            styles.summaryListItemListItemEmphasise
                          )}
                        >
                          Von Restorff Effect
                        </strong>{" "}
                        (making one item stand out).
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css([globalStyles.columnHalf])}>
                <Title500>
                  <h3>
                    {" "}
                    <span role="img" aria-labelledby="Purple Dot">
                      🟣
                    </span>{" "}
                    Design 3
                  </h3>
                </Title500>
                <div className={css(globalStyles.row)}>
                  <div className={css([globalStyles.columnHalf])}>
                    <div className={css(globalStyles.paddingBottom)}>
                      <img
                        src="/images/case-studies/feature-adoption/design-3.png"
                        alt="The third alternative design"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "600px",
                        }}
                      />
                    </div>
                  </div>

                  <div className={css([globalStyles.columnHalf])}>
                    <Title600 spacing="condensed">
                      <h4>Theory</h4>
                    </Title600>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        Similar to design 2, I used language drawn from the
                        survey with users. For example, "Multipla Rapida"
                        translates to "Quick Multiple". <br />
                        <br />A few other key differences in this design are the
                        use of the yellow icon, the bold header, and the
                        descriptive text underneath the feature.
                        <br />
                        <br /> The descriptive text translates to: "Events and
                        bets selected for you, the fastest way to build your
                        multiples".
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Callout>
          <br />
          <Callout>
            <div className={css(globalStyles.row)}>
              {" "}
              <Title400>
                <h3>Pushing to 40% of users</h3>
              </Title400>
              <div
                className={css([
                  globalStyles.row,
                  globalStyles.paddingBottom5x,
                ])}
              >
                <div className={css([globalStyles.columnHalf])}>
                  <Paragraph>
                    I pushed the challenger designs to 40% of the user base,
                    which was 10% of the user base per design, including the
                    original. <br />
                    <br />
                    To reach statistical significance, we ran the test for three
                    weeks, which allowed us to smooth for weekend spikes as
                    previously identified.
                  </Paragraph>
                </div>
                <div className={css([globalStyles.columnHalf])}>
                  <Paragraph lineHeight="expanded">
                    <ul className={css(globalStyles.noList)}>
                      <li>
                        {" "}
                        <span role="img" aria-labelledby="Blue Dot">
                          🔵
                        </span>{" "}
                        Original Design
                      </li>
                      <li>
                        {" "}
                        <span role="img" aria-labelledby="Orange Dot">
                          🟠
                        </span>{" "}
                        Design 1
                      </li>
                      <li>
                        {" "}
                        <span role="img" aria-labelledby="Green Dot">
                          🟢
                        </span>{" "}
                        Design 2
                      </li>
                      <li>
                        {" "}
                        <span role="img" aria-labelledby="Purple Dot">
                          🟣
                        </span>{" "}
                        Design 3
                      </li>
                    </ul>
                  </Paragraph>
                </div>
              </div>
              <img
                src="/images/case-studies/feature-adoption/challenger-results.png"
                alt="The results of the split test showing Design 2 and 3 performing the best"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "600px",
                }}
              />
            </div>
          </Callout>
        </Section>

        <Section>
          <Title400>
            <h3>Merging the high performing-designs</h3>
          </Title400>
          <div className={css([globalStyles.row])}>
            <div className={css([globalStyles.columnHalf])}>
              <Paragraph>
                Design 2 and Design 3 performed the best. I merged the best
                parts of these to create Design 4.
              </Paragraph>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <img
                src="/images/case-studies/feature-adoption/design-4.png"
                alt="The fourth alternative design, combining the best features of design 2 and 3"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "600px",
                }}
              />
            </div>
          </div>
        </Section>

        <Section background="grey">
          <Title400>
            <h3>The results</h3>
          </Title400>
          <div
            className={css([
              globalStyles.columnHalf,
              globalStyles.paddingBottom2x,
            ])}
          >
            <Paragraph>
              The test was concluded after three weeks as Design 4 had reached
              significance. <br />
              <br />
              It was shown as overwhelmingly successful and was thus released to
              100% of the user base. We kept monitoring its performance through
              Google Optimiser.
            </Paragraph>
            <br />
            <br />
          </div>
          <div className={css(globalStyles.paddingBottom5x)}>
            <img
              src="/images/case-studies/feature-adoption/design-4-results.png"
              alt="A chart showing a huge spike in traffic after launching the fourth design to all users"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "600px",
              }}
            />
          </div>
        </Section>

        <Section background="brandPrimary">
          <h1>
            <Title type="onBrandPrimary" sequence={"04/"} title={"Outcomes"} />
          </h1>
          <h2>
            <Subtitle type="onBrandPrimary">
              Data-driven iterative split testing
            </Subtitle>
          </h2>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Callout>
              <Title400>
                <h3>The impact over three weeks</h3>
              </Title400>
              <Paragraph lineHeight="expanded">
                <ul className={css(globalStyles.noList)}>
                  <li>
                    <strong
                      className={css(styles.summaryListItemListItemEmphasise)}
                    >
                      {" "}
                      <span role="img" aria-labelledby="Tick">
                        ✅
                      </span>{" "}
                      118% increase
                    </strong>{" "}
                    in traffic for the previous busiest day
                  </li>
                  <li>
                    <strong
                      className={css(styles.summaryListItemListItemEmphasise)}
                    >
                      {" "}
                      <span role="img" aria-labelledby="Tick">
                        ✅
                      </span>{" "}
                      145% increase
                    </strong>{" "}
                    in overall traffic to all coupon pages
                  </li>
                  <li>
                    <strong
                      className={css(styles.summaryListItemListItemEmphasise)}
                    >
                      {" "}
                      <span role="img" aria-labelledby="Tick">
                        ✅
                      </span>{" "}
                      160% increase
                    </strong>{" "}
                    in users adding to their bet slip from coupon pages
                  </li>
                  <li>
                    <strong
                      className={css(styles.summaryListItemListItemEmphasise)}
                    >
                      {" "}
                      <span role="img" aria-labelledby="Tick">
                        ✅
                      </span>{" "}
                      137% increase
                    </strong>{" "}
                    in users placing bets from coupon pages
                  </li>
                  <li>
                    <strong
                      className={css(styles.summaryListItemListItemEmphasise)}
                    >
                      {" "}
                      <span role="img" aria-labelledby="Tick">
                        ✅
                      </span>{" "}
                      Significant increases
                    </strong>{" "}
                    in the margin as accumulators are typically high-margin bets{" "}
                  </li>
                </ul>
              </Paragraph>
            </Callout>
          </div>

          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={<Title400 spacing="none">Four Designs</Title400>}
                img="/images/case-studies/feature-adoption/4-designs.svg"
                subtitle={
                  <Title500>
                    Three initial challenger designs, one merged
                  </Title500>
                }
                description={
                  <div>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        After understanding potential reasons why the feature
                        wasn't gaining a high adoption rate through user
                        research, I created three designs to challenge the
                        original.
                        <br />
                        <br /> Finally, I took the two highest-performing
                        designs and merged their best features to create Design
                        4.
                      </Paragraph>
                    </div>
                  </div>
                }
              />
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={<Title400 spacing="none">User survey</Title400>}
                img="/images/case-studies/age-visibility/outcome-report.svg"
                subtitle={<Title500>Data and user-driven</Title500>}
                description={
                  <Paragraph size="small">
                    To better understand the shortcomings of the newly launched
                    feature, I surveyed our users.
                    <br />
                    <br /> As a result, we gained valuable information about how
                    users currently use this feature, what they call it, when
                    it's used, and on which other services the users use it.
                  </Paragraph>
                }
              />
            </div>
          </div>
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
              <Title400>Previous Case Study</Title400>
              <Title600>GDPR Marketing Consent</Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  3 million customers and how to ask them if they’d like to be
                  marketed to, again.
                </Paragraph>
              </div>
              <Button size="small" link="/case-studies/gdpr-marketing-consent">
                ← Read Previous Case Study
              </Button>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title400>Next Case Study</Title400>
              <Title600>Automating Journey Maps</Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  Taking data from Adobe Analytics and populating a Sketch flow
                  diagram.
                </Paragraph>
              </div>
              <Button size="small">Coming Soon</Button>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    );
  }
}
