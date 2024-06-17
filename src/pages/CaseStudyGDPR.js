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

import LargeQuote from "../components/LargeQuote";
import Callout from "../components/Callout";
import Title500 from "../components/Title500";
import Title600 from "../components/Title600";
import OutcomeCard from "../components/OutcomeCard";
import Button from "../components/Button";
import Well from "../components/Well";
import Rule from "../components/Rule";
import SensitiveContentPanel from "../components/SensitiveContentPanel";

export default class CaseStudyGDPR extends Component {
  componentDidMount() {
    document.title += " — Case Studies — GDPR Marketing Consent";
  }

  render() {
    return (
      <div>
        <Header />
        <div className={css(globalStyles.paddingBottom5x)}>
          <Hero
            sequence="&mdash;"
            title="GDPR Marketing Consent."
            descriptions={[
              "3 million customers. £millions at risk.",
              "3-month deadline.",
              "Yeilded £millions in extra yearly profit.",
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
            <div className={css(globalStyles.sectionHeaderTrailing)}>
              <div className={css(globalStyles.paddingBottom5x)}>
                <SensitiveContentPanel />
              </div>
            </div>
          </div>
          <ul className={css([styles.summaryList, globalStyles.row])}>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Services</Title400>
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  Behavioural insight
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Remote user testing
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Large scale user testing
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Development
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Google Analytics integration
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  GDPR consultation
                </li>
              </ul>
            </li>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Deliverables</Title400>
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  5 design iterations
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  5 HTML prototypes
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  User-testing report
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Marketing consent resport
                </li>
              </ul>
            </li>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Outcomes</Title400>
              <Paragraph size="small" type="onBlack">
                5 HTML prototypes and multiple rounds of user testing gave us a
                confident design to lead with. In live the design performed well
                and gave millions of pounds in extra yearly profit.
              </Paragraph>
            </li>
          </ul>
        </Section>

        <Section>
          <h1>
            <Title sequence={"02/"} title={"Understanding the problem"} />
          </h1>
          <h2>
            <Subtitle>3 months and millions of pounds at risk</Subtitle>
          </h2>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>GDPR storm approaching</h3>
              </Title400>
              <Paragraph>
                It'll have been hard for you to have missed the word "GDPR". It
                was extremely prevalent in 2017 and 2018 as the May deadline
                approached, and then surpassed. GDPR or General Data Protection
                Regulation was a change in European law affecting the United
                Kingdom and thus Sky Betting &amp; Gaming. It meant the way that
                data was stored and transferred was going to change. Consent and
                awareness of how your data was being used was also a huge focus
                of the new law change.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>What did it mean for Sky Betting &amp; Gaming?</h3>
              </Title400>
              <Paragraph>
                It was the end of 2017 and the GDPR law change was looming. I
                had around 3 months to help with mitigating risk, which would
                give us enough time to feed changes into the development team.
                We needed to essentially ask all customers whether they’d like
                to be marketed to or not. They'd already been asked this once
                before, and we had to ask them again. We also needed them to
                read, understand and accept a new privacy policy; because of the
                new changes around profiling consent.
              </Paragraph>
            </div>
          </div>
          <div className={css(globalStyles.paddingBottom5x)}>
            <LargeQuote
              quote="How can we limit net loss during GDPR consent of marketing?"
              name="GDPR Brief"
              role="Sky Betting &amp; Gaming"
            />
          </div>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>The brief</h3>
              </Title400>
              <Paragraph>
                We challenged ourselves with “How can we limit net loss during
                GDPR consent of marketing?” This sparked 2 basic questions. What
                are our current opt-in/opt-out rates? How can we maintain these
                rates? The first question was easy to answer. At the time across
                the whole suite of Sky Betting &amp; Gaming products, 65% of
                users wanted to receive marketing information, and 35% did not.
                We could break this down further per product too, to measure our
                design change’s impact.
              </Paragraph>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Pre-GDPR Marketing Consent</h3>
              </Title400>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph>
                  Before the GDPR law change collectively across all of the
                  brands, both free and pay-to-play products, the marketing
                  consent rates were as follows:
                </Paragraph>
              </div>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Well>
                  <Paragraph>
                    {" "}
                    <span role="img" aria-labelledby="Cross">
                      ❌
                    </span>{" "}
                    35% opted-out
                  </Paragraph>
                </Well>
              </div>
              <Well>
                <Paragraph>
                  {" "}
                  <span role="img" aria-labelledby="Tick">
                    ✅
                  </span>{" "}
                  65% opted-in
                </Paragraph>
              </Well>
            </div>
          </div>
        </Section>
        <Section background="grey">
          <Callout>
            <div className={css(globalStyles.row)}>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Over 3 million customers</h3>
                </Title400>
                <Paragraph>
                  With around 2 million active customers per week and 3 million
                  customers in total, any design changes we implemented carried
                  a huge risk and presented a range of challenges. I needed to
                  be sure that our research approach made sense, and that I
                  could be confident in the sample size of participants and
                  statistical significance of any research findings.
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Quantifying value</h3>
                </Title400>
                <Paragraph>
                  Looking at the yearly value of a customer who received
                  marketing, they were worth around twice as much in profit.
                  This was because they were more engaged with the products,
                  were receptive to the marketing, and logged in more. This
                  meant we were able to put a monitory value on the project and
                  quantify what every percentage gain or loss was worth.
                </Paragraph>
              </div>
            </div>
          </Callout>
        </Section>
        <Section>
          <LargeQuote
            quote="Every percentage change was worth
              millions of pounds per year to the business. Either way."
            name="Quantifying the project"
            role="Marketed-to customer's value"
          />
        </Section>
        <Section background="grey">
          <h1>
            <Title sequence={"03/"} title={"The solution"} />
          </h1>
          <h2>
            <Subtitle>A careful research-led approach</Subtitle>
          </h2>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>At a high level</h3>
              </Title400>
              <Paragraph>
                We knew a few details from the start but weren't sure how to
                display them to the user. We would have to:
                <Paragraph size="small">
                  <ul>
                    <li>Interrupt them before they could play or bet</li>
                    <li>Explain the process and why we were doing it</li>
                    <li>The whole process would be mandatory, no skipping</li>
                    <li>Ask them to accept new terms and conditions</li>
                    <li>Have them agree to the new privacy policy</li>
                    <li>
                      Importantly, have them opt-in or opt-out of marketing
                    </li>
                  </ul>
                </Paragraph>
              </Paragraph>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>How to represent 3 million people</h3>
              </Title400>
              <Paragraph>
                Given the risk at stake, it was of utmost importance to make
                sure the approach to researching the best solution was solid. We
                would need to run our testing with enough users to allow our
                results to represent 3 million customers. Well in advance I
                began conversations with many participant recruitment companies
                to ensure we could get the numbers we needed in such a short
                timeframe.
              </Paragraph>
            </div>
          </div>
          <Callout>
            <div className={css(globalStyles.row)}>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Getting the flow right</h3>
                </Title400>
                <div className={css(globalStyles.paddingBottom2x)}>
                  <Paragraph>
                    Working with the Developers, Business Analysts and Technical
                    Architects we broke the flow down into three areas: decision
                    criteria, screen flow, and flags &amp; statuses.
                  </Paragraph>
                </div>
              </div>
              <Well>
                <img
                  src="/images/case-studies/gdpr/flow.png"
                  alt="Diagram showing journey flow from login to accepting new terms, privacy and marketing preferences"
                />
              </Well>
            </div>
          </Callout>
          <Callout>
            <div className={css(globalStyles.row)}>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Experimenting with designs</h3>
                </Title400>
                <div className={css(globalStyles.paddingBottom2x)}>
                  <Paragraph>
                    After spending considerable time researching best practice
                    for accepting agreements I began to develop ideas closely
                    with the squad.
                  </Paragraph>
                </div>
              </div>
              <Well>
                <img
                  src="/images/case-studies/gdpr/artboards.png"
                  alt="Diagram showing around 50 artboards, to represent the amount of experimentation in design that happened"
                />
              </Well>
            </div>
          </Callout>
        </Section>

        <Section>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Title400>
              <h3>A 5 step process</h3>
            </Title400>
          </div>
          <div className={css(globalStyles.maxWidth750)}>
            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.row)}>
                <div className={css(globalStyles.columnHalf)}>
                  <Title500>Step 1 &mdash; Intro</Title500>
                  <Paragraph>
                    When logging in the user would be presented with this
                    screen. We needed to set them up for what was to come next
                    and why.
                  </Paragraph>
                </div>
                <div
                  className={css([
                    globalStyles.columnHalf,
                    globalStyles.isAlignedRight,
                  ])}
                >
                  <img
                    src="/images/case-studies/gdpr/step-1.png"
                    alt="Step 1 of the consent process"
                    height="404"
                  />
                </div>
              </div>
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <Rule />
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.row)}>
                <div className={css(globalStyles.columnHalf)}>
                  <img
                    src="/images/case-studies/gdpr/step-2.png"
                    alt="Step 2 of the consent process"
                    height="404"
                  />
                </div>
                <div className={css(globalStyles.columnHalf)}>
                  <Title500>Step 2 &mdash; Terms</Title500>
                  <Paragraph>
                    This page was pretty basic. A long list of terms and
                    conditions. The user was able to accept the terms without
                    needing to scroll through all of the paragraphs.
                  </Paragraph>
                </div>
              </div>
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <Rule />
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.row)}>
                <div className={css(globalStyles.columnHalf)}>
                  <Title500>Step 3 &mdash; Privacy</Title500>
                  <Paragraph>
                    For legal reasons, the user must scroll through the entirety
                    of the privacy policy before accepting it. We had to be as
                    sure as we could be that they'd have read it. This brought a
                    whole new set of design challenges. The acceptance box was
                    at the end of the privacy policy on our initial design. More
                    on iterations later.
                  </Paragraph>
                </div>
                <div
                  className={css([
                    globalStyles.columnHalf,
                    globalStyles.isAlignedRight,
                  ])}
                >
                  <img
                    src="/images/case-studies/gdpr/step-3.png"
                    alt="Step 3 of the consent process"
                    height="404"
                  />
                </div>
              </div>
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <Rule />
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.row)}>
                <div className={css(globalStyles.columnHalf)}>
                  <img
                    src="/images/case-studies/gdpr/step-4.png"
                    alt="Step 4 of the consent process"
                    height="404"
                  />
                </div>
                <div className={css(globalStyles.columnHalf)}>
                  <Title500>Step 4 &mdash; Marketing Consent</Title500>
                  <Paragraph>
                    This is where most of my experimentation and design
                    iterations happened. More detail on the variations below.
                  </Paragraph>
                </div>
              </div>
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <Rule />
            </div>

            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.row)}>
                <div className={css(globalStyles.columnHalf)}>
                  <Title500>Step 5 &mdash; Thanks</Title500>
                  <Paragraph>
                    A chance for us to give the user a next best action, and to
                    thank them for their time.
                  </Paragraph>
                </div>
                <div
                  className={css([
                    globalStyles.columnHalf,
                    globalStyles.isAlignedRight,
                  ])}
                >
                  <img
                    src="/images/case-studies/gdpr/step-5.png"
                    alt="Step 5 of the consent process"
                    height="404"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section background="grey">
          <div className={css(globalStyles.paddingBottom5x)}>
            <Title400>Step 4 &mdash; Marketing Consent Designs</Title400>
          </div>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title500>
                <h3>Design 1</h3>
              </Title500>
              <div className={css(globalStyles.row)}>
                <div className={css([globalStyles.columnHalf])}>
                  <div className={css(globalStyles.paddingBottom)}>
                    <img
                      src="/images/case-studies/gdpr/design-1.png"
                      alt="The first design"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "404px",
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
                      By giving the user reasons to receive marketing and by
                      showing them the mixture of brands, they would be more
                      likely to want to receive marketing content.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <Title500>
                <h3>Design 2</h3>
              </Title500>
              <div className={css(globalStyles.row)}>
                <div className={css([globalStyles.columnHalf])}>
                  <div className={css(globalStyles.paddingBottom)}>
                    <img
                      src="/images/case-studies/gdpr/design-2.png"
                      alt="The second design"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "404px",
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
                      Users may only be interested in marketing from one kind of
                      product. Either bet or gaming. This design gave them the
                      granular option to select what they were interested in:
                      bet, gaming, or both.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title500>
                <h3>Design 3</h3>
              </Title500>
              <div className={css(globalStyles.row)}>
                <div className={css([globalStyles.columnHalf])}>
                  <div className={css(globalStyles.paddingBottom)}>
                    <img
                      src="/images/case-studies/gdpr/design-3.png"
                      alt="The third design"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "404px",
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
                      Users would be aware of their current marketing
                      preference, and would prefer to just continue as they
                      were.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <Title500>
                <h3>Design 4</h3>
              </Title500>
              <div className={css(globalStyles.row)}>
                <div className={css([globalStyles.columnHalf])}>
                  <div className={css(globalStyles.paddingBottom)}>
                    <img
                      src="/images/case-studies/gdpr/design-4.png"
                      alt="The fourth design"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "404px",
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
                      Giving the users a granular overview of their marketing
                      preferences gave them total control. The assumption was
                      that users given this amount of control would opt-in, but
                      only to the products and channels that were of interest to
                      them.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>HTML Prototype</Title400>
              <Paragraph>
                Having a click-through prototype for the data I needed wouldn't
                suffice. For this project, I needed to create an HTML prototype.
                I'd need to capture statistical data from 100s of users per
                design. I built the HTML prototype and embedded Google Analytics
                for the tracking. This prototype matched the exact look and feel
                of the real app, to be as close to a live experience as
                possible.
              </Paragraph>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <Title400>Google Analytics</Title400>
              <Paragraph>
                Each design had custom tagging. I was tracking which marketing
                preference each user-selected, how much as a percentage of the
                terms and privacy pages did users view, and any errors that
                users encountered. I set the randomisation of the user's current
                preference to match the current opt-in and out split; 65/35. I
                was also tracking whether users tapped on certain areas that I'd
                identified as potentially confusing. For example the list on
                step 1 showing each step. I wanted to know if users tried to tap
                on this.
              </Paragraph>
            </div>
          </div>
        </Section>
        <Section background="grey">
          <Callout>
            <div
              className={css([globalStyles.row, globalStyles.paddingBottom5x])}
            >
              <div className={css(globalStyles.columnHalf)}>
                <Title400>Results of first-round testing</Title400>
                <Paragraph>
                  The designs were finalised, the theories were laid out, the
                  prototypes were built and we were ready to test. To ensure the
                  tracking was working we ran a usability test with 6 users.
                  This gave us valuable insight into the usability of the
                  designs, but also allowed us to test to see if everything was
                  working. These results represent testing with at least a 100
                  users per design.
                </Paragraph>
              </div>
            </div>
            <div
              className={css([globalStyles.row, globalStyles.paddingBottom5x])}
            >
              <div className={css(globalStyles.columnHalf)}>
                <Title500>Design 1</Title500>
                <Paragraph>
                  <Well>
                    {" "}
                    <span role="img" aria-labelledby="Cross">
                      ❌
                    </span>{" "}
                    Opt-ins decreased by 17%
                  </Well>
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title500>Design 2</Title500>
                <Paragraph>
                  <Well>
                    {" "}
                    <span role="img" aria-labelledby="Tick">
                      ✅
                    </span>{" "}
                    Opt-ins increased by 3%
                  </Well>
                </Paragraph>
              </div>
            </div>
            <div className={css(globalStyles.row)}>
              <div className={css(globalStyles.columnHalf)}>
                <Title500>Design 3</Title500>
                <Paragraph>
                  <Well>
                    {" "}
                    <span role="img" aria-labelledby="Tick">
                      ✅
                    </span>{" "}
                    Opt-ins increased by 2%
                  </Well>
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title500>Design 4</Title500>
                <Paragraph>
                  <Well>Opt-out accordion viewed by 3% of users</Well>
                </Paragraph>
              </div>
            </div>
          </Callout>
        </Section>
        <Section>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css(globalStyles.columnHalf)}>
              <Title400>The next round of design iteration</Title400>
              <Paragraph>
                Taking learnings from the usability tests and the 100s of user
                tests performed on each design, I created the 5th iteration to
                test.
              </Paragraph>
            </div>
          </div>
          <div className={css([globalStyles.row, globalStyles.paddingBottom])}>
            <div
              className={css([
                globalStyles.columnOneThird,
                globalStyles.paddingBottom0,
              ])}
            >
              <Title500>When the user is opted-in to marketing</Title500>
            </div>
            <div
              className={css([
                globalStyles.columnOneThird,
                globalStyles.paddingBottom0,
              ])}
            ></div>
            <div
              className={css([
                globalStyles.columnOneThird,
                globalStyles.paddingBottom0,
              ])}
            ></div>
          </div>
          <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnOneThird)}>
              <img
                src="/images/case-studies/gdpr/design-5a.png"
                alt="Design 5. Shown when the user is opted-in to marketing."
                height="404"
              />
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title500>Theory for opt-in design</Title500>
              <Paragraph>
                If the user is receiving marketing currently then they probably
                already know they are. This design made it easy for the user to
                carry on with that preference, or they could change it if they
                liked. There was very little reason to give them reasons to stay
                opted-in.{" "}
              </Paragraph>
            </div>{" "}
            <div className={css(globalStyles.columnOneThird)}></div>
          </div>

          <div className={css([globalStyles.row, globalStyles.paddingBottom])}>
            <div
              className={css([
                globalStyles.columnOneThird,
                globalStyles.paddingBottom0,
              ])}
            >
              <Title500>When the user is opted-out of marketing</Title500>
            </div>
            <div
              className={css([
                globalStyles.columnOneThird,
                globalStyles.paddingBottom0,
              ])}
            ></div>
            <div
              className={css([
                globalStyles.columnOneThird,
                globalStyles.paddingBottom0,
              ])}
            ></div>
          </div>
          <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnOneThird)}>
              <img
                src="/images/case-studies/gdpr/design-5b.png"
                alt="Design 5. Shown when the user is opted-out of marketing."
                height="404"
              />
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title500>Theory for opt-out design</Title500>
              <Paragraph>
                When the user was opted-out of marketing I wanted to give them
                reasons to opt-in. I listed 3 main reasons why you would want to
                do so and gave them the option to receive marketing or not.
              </Paragraph>
            </div>

            <div className={css(globalStyles.columnOneThird)}></div>
          </div>
        </Section>

        <Section background="brandPrimary">
          <h1>
            <Title type="onBrandPrimary" sequence={"04/"} title={"Outcomes"} />
          </h1>
          <h2>
            <Subtitle type="onBrandPrimary">
              Completely research and data-led
            </Subtitle>
          </h2>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css(globalStyles.columnHalf)}>
              <Title400 type="onBlack">Full-autonomy and a budget</Title400>
              <Paragraph type="onBrandPrimary">
                This success of this project was helped by the autonomy I had
                and the pre-allocated budget. I was able to hire participants,
                spend time on research and design, run multiple iterations and
                user tests and have my final design built. All of this with very
                little sign-off or intervention. I worked very closely with the
                legal and compliance teams to ensure what I was designing was
                inline with GDPR.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400 type="onBlack">A few stats...</Title400>{" "}
              <ul className={css(styles.summaryListItemList)}>
                <li className={css(styles.summaryListItemListItem)}>
                  <Paragraph type="onBrandPrimary">
                    ~ 3 million people completed overall
                  </Paragraph>
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  <Paragraph type="onBrandPrimary">
                    1.73 million people completed in the first week
                  </Paragraph>
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  <Paragraph type="onBrandPrimary">
                    600k people completed in 1 day alone
                  </Paragraph>
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  <Paragraph type="onBrandPrimary">
                    98% completed in the first session
                  </Paragraph>
                </li>
              </ul>
            </div>
          </div>
          <div className={css(globalStyles.paddingBottom5x)}>
            <Callout>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Title400>How the final design performed</Title400>
              </div>
              <div className={css(globalStyles.row)}>
                <div className={css(globalStyles.columnHalf)}>
                  <Title500>Segmenting by product type</Title500>
                  <Paragraph>
                    When looking at all of the products combined the marketing
                    preferences opt-in rate had a 1% point decrease. But this
                    doesn't tell the whole story. Most of the people who
                    opted-out of marketing were from the free-to-play products
                    group, which had a much lower customer value. When looking
                    purely at the pay-to-play products, the percentage of those
                    opting-in to marketing increased.
                  </Paragraph>
                </div>
                <div className={css(globalStyles.columnHalf)}>
                  <Title500>
                    {" "}
                    <span role="img" aria-labelledby="Tick">
                      ✅
                    </span>{" "}
                    Millions of pounds in profit
                  </Title500>
                  <Paragraph>
                    The increase in the pay-to-play customer base was worth
                    millions of pounds for every percentage increase, per year.
                    Taking averages of the marketed-to customer group's value
                    and multiplying this by the percentage increase yielded
                    millions of pounds in profit per year.
                  </Paragraph>
                </div>
              </div>
            </Callout>
          </div>
          <div className={css(globalStyles.paddingBottom5xUntilSmall)}>
            <div className={css(globalStyles.row)}>
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={<Title400 spacing="none">5 HTML Prototypes</Title400>}
                  img="/images/case-studies/car-insurance/outcome-prototype.svg"
                  subtitle={
                    <Title500>Almost indistinguishable from real</Title500>
                  }
                  description={
                    <Paragraph size="small">
                      The prototypes needed to capture data from 100s of users
                      to be statistically significant. The best solution was to
                      build the prototypes in HTML rather than as click-through
                      images.
                    </Paragraph>
                  }
                />
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <OutcomeCard
                  title={
                    <Title400 spacing="none">User test statistics</Title400>
                  }
                  img="/images/case-studies/age-visibility/outcome-report.svg"
                  subtitle={<Title500>A range of information</Title500>}
                  description={
                    <Paragraph size="small">
                      The testing gave us more than just figures on opt-in and
                      out rates. I found areas that had usability issues, how
                      many users encountered errors and scroll percentage on the
                      legal steps.
                    </Paragraph>
                  }
                />
              </div>
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
              <Title600>Gambling Age Visibility</Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  Being responsible, by improving age restriction visibility on
                  a gambling product.
                </Paragraph>
              </div>
              <Button size="small" link="/case-studies/age-visibility/">
                ← Read Previous Case Study
              </Button>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title400>Next Case Study</Title400>
              <Title600>Improving Feature Adoption</Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  Significant increases in visits and interaction with the new
                  feature through 4 rounds of split testing.
                </Paragraph>
              </div>
              <Button
                size="small"
                link="/case-studies/improving-feature-adoption"
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
