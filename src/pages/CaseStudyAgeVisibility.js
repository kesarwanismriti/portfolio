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
import Link from "../components/Link";
import Callout from "../components/Callout";
import Title500 from "../components/Title500";
import Title600 from "../components/Title600";
import OutcomeCard from "../components/OutcomeCard";
import Button from "../components/Button";
import Well from "../components/Well";

export default class CaseStudyAgeVisibility extends Component {
  componentDidMount() {
    document.title += " — Case Studies — Improving Age Visibility";
  }

  render() {
    return (
      <div>
        <Header />
        <div className={css(globalStyles.paddingBottom5x)}>
          <Hero
            sequence="&mdash;"
            title="Improving age visibility."
            descriptions={[
              "Being a responsible gambling operator.",
              "Behavioural insight and research.",
              "Squad ideation and iterative design.",
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
                  Behavioural insight
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Iterative design
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Remote user testing
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Workshop facilitation
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  User-interface design
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Wireframing
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  Developer collaboration
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
                  A measured improved interface
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  A more responsible design
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  User-interface designs
                </li>
                <li className={css(styles.summaryListItemListItem)}>
                  User testing report
                </li>
              </ul>
            </li>
            <li className={css(globalStyles.columnThird)}>
              <Title400 type="onBlack">&mdash; Outcomes</Title400>
              <Paragraph size="small" type="onBlack">
                Took a registration process with an age restriction step from
                45% of users being able to recall that age restriction to 80%.
                <br />
                <br />
                Using a combination of behavioural insight, remote user testing,
                and group ideation sessions.
              </Paragraph>
            </li>
          </ul>
        </Section>

        <Section>
          <h1>
            <Title sequence={"02/"} title={"Understanding the problem"} />
          </h1>
          <h2>
            <Subtitle>Challenging the brief was the starting point</Subtitle>
          </h2>

          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>The Compliance Team</h3>
              </Title400>
              <Paragraph>
                Initially, I received a brief from the compliance team to make
                the 18+ logo larger, as they were concerned people weren’t
                seeing it. The concerns stemmed from the number of people trying
                to register who were under 18. They wanted to discourage this
                and that was their solution. At the time the 18+ logo only
                existed in the footer of the registration page.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <img
                src="/images/case-studies/age-visibility/registration-control.png"
                alt="The registration design before making any changes"
                style={{ maxWidth: "100%", height: "auto", maxHeight: "404px" }}
              />
            </div>
          </div>

          <div className={css(globalStyles.paddingBottom5x)}>
            <div className={css(globalStyles.row)}>
              <div className={css([globalStyles.columnHalf])}>
                <Title400>
                  <h3>Designing the study</h3>
                </Title400>
                <Paragraph>
                  To be able to measure any improvement I first needed a
                  benchmark. I would need to understand how many users can
                  recall the signup age of the current design. I wanted to avoid
                  the user being biased by any branding so would need a
                  white-labelled registration process. I also wanted to control
                  variables as much as possible so would design the
                  white-labelled registration to be as close to the real version
                  as possible; thinking about spacing, colour, font sizes,
                  etc...
                </Paragraph>
              </div>
              <div className={css(globalStyles.columnHalf)}>
                <Title400>
                  <h3>Avoiding guesses</h3>
                </Title400>
                <Paragraph>
                  As 18 is a common age for age restriction I wanted to avoid
                  using this as the age on any design solutions. I used random
                  ages for each design to control for people guessing “18” when
                  they weren’t sure of the answer.
                </Paragraph>
              </div>
            </div>
          </div>
        </Section>
        <Section background="grey">
          <Callout>
            <Title400>
              <h3>White labelling the prototype</h3>
            </Title400>
            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.columnHalf)}>
                <Paragraph>
                  To avoid users recognising the brand I white-labelled the
                  prototype. All elements were the same size, position and of a
                  similar colour.
                </Paragraph>
              </div>
            </div>
            <div className={css(globalStyles.paddingBottom2x)}>
              <img
                src="/images/case-studies/age-visibility/before-after-white-label.png"
                alt="Two designs side by side. One showing the live product and the other showing a white-labelled version."
                style={{ maxWidth: "100%", height: "auto", maxHeight: "440px" }}
              />
            </div>
            <div>
              <Button
                size="small"
                display="inline-block"
                link={"https://marvelapp.com/2ed7i22"}
                target="_blank"
              >
                View Control Design Prototype
              </Button>
            </div>
          </Callout>
        </Section>

        <Section>
          <h1>
            <Title sequence={"03/"} title={"The solution"} />
          </h1>
          <h2>
            <Subtitle>Iterating the design as a squad</Subtitle>
          </h2>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Ideating as a squad</h3>
              </Title400>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph>
                  After taking time to design the study and agree on the
                  direction with compliance and stakeholders it was time to
                  begin ideating.{" "}
                </Paragraph>
              </div>
              <Paragraph>
                Working with the squad I ran a session to explore potential ways
                to improve age visibility. We theorised about why users weren’t
                seeing it at the moment, and from there began to sketch ways to
                make it more obvious. 4 designs were generated out of the back
                of the group design session.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Title400>
                <h3>Testing with real users</h3>
              </Title400>
              <Paragraph>
                Each one of these designs was tested with at least 20 users. We
                asked them to signup for the product, and only at the end asked
                them what age they think they’d need to be. We didn't prime them
                at the start of the test that we were focussing on age, to try
                and avoid leading them to look for the age restriction.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section background="grey">
          <Callout>
            <Title400>
              <h3>4 different concepts</h3>
            </Title400>
            <div className={css(globalStyles.paddingBottom5x)}>
              <div className={css(globalStyles.columnHalf)}>
                <Paragraph>
                  The designs created all focussed on different elements.
                </Paragraph>
              </div>
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
                        src="/images/case-studies/age-visibility/design-1.png"
                        alt="The first design"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "404px",
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        size="small"
                        display="inline-block"
                        link={"https://marvelapp.com/22a8fai"}
                        target="_blank"
                      >
                        View Prototype
                      </Button>
                    </div>
                  </div>
                  <div className={css([globalStyles.columnHalf])}>
                    <Title600 spacing="condensed">
                      <h4>Theory</h4>
                    </Title600>
                    <div className={css(globalStyles.paddingBottom)}>
                      <Paragraph size="small">
                        By positioning the logo higher up the screen and by
                        making it larger more users will see it. Using a white
                        background will set it out from the other elements. The
                        more information allows users to tap in and expand more
                        detail on why we are asking for this.
                      </Paragraph>
                    </div>

                    <Title600 spacing="condensed">
                      <h4>Results of age recall</h4>
                    </Title600>
                    <Well>
                      <Paragraph>
                        {" "}
                        <span role="img" aria-labelledby="Plus">
                          ➕
                        </span>{" "}
                        22% increase
                      </Paragraph>
                    </Well>
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
                        src="/images/case-studies/age-visibility/design-2.png"
                        alt="The second design"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "404px",
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        size="small"
                        display="inline-block"
                        link={"https://marvelapp.com/33ie72g"}
                        target="_blank"
                      >
                        View Prototype
                      </Button>
                    </div>
                  </div>
                  <div className={css([globalStyles.columnHalf])}>
                    <Title600 spacing="condensed">
                      <h4>Theory</h4>
                    </Title600>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        Pulling out the reason for asking for age would create a
                        larger paragraph, and would, therefore, be more likely
                        to be seen. Similar to Design 1 in terms of using a
                        large icon and the colour red.
                      </Paragraph>
                    </div>
                    <Title600 spacing="condensed">
                      <h4>Results of age recall</h4>
                    </Title600>
                    <Well>
                      <Paragraph>
                        {" "}
                        <span role="img" aria-labelledby="Plus">
                          ➕
                        </span>{" "}
                        22% increase
                      </Paragraph>
                    </Well>
                  </div>
                </div>
              </div>
            </div>
            <div className={css(globalStyles.row)}>
              <div className={css([globalStyles.columnHalf])}>
                <Title500>
                  <h3>Design 3</h3>
                </Title500>
                <div className={css(globalStyles.row)}>
                  <div className={css([globalStyles.columnHalf])}>
                    <div className={css(globalStyles.paddingBottom)}>
                      <img
                        src="/images/case-studies/age-visibility/design-3.png"
                        alt="The third design"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "404px",
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        size="small"
                        display="inline-block"
                        link={"https://marvelapp.com/22c9bhi"}
                        target="_blank"
                      >
                        View Prototype
                      </Button>
                    </div>
                  </div>
                  <div className={css([globalStyles.columnHalf])}>
                    <Title600 spacing="condensed">
                      <h4>Theory</h4>
                    </Title600>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        Using the word "Age" first puts the idea front and
                        centre of the user's mind. The colour red makes this
                        message feel important, and the position of the message
                        being next to the field hopefully makes it hard to miss.
                      </Paragraph>
                    </div>
                    <Title600 spacing="condensed">
                      <h4>Results of age recall</h4>
                    </Title600>
                    <Well>
                      <Paragraph>
                        {" "}
                        <span role="img" aria-labelledby="Plus">
                          ➕
                        </span>{" "}
                        66% increase
                      </Paragraph>
                    </Well>
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
                        src="/images/case-studies/age-visibility/design-4.png"
                        alt="The fourth design"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "404px",
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        size="small"
                        display="inline-block"
                        link={"https://marvelapp.com/22e20i4"}
                        target="_blank"
                      >
                        View Prototype
                      </Button>
                    </div>
                  </div>

                  <div className={css([globalStyles.columnHalf])}>
                    <Title600 spacing="condensed">
                      <h4>Theory</h4>
                    </Title600>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        Having the message next to the field means the user is
                        more likely to see it than being lower down the screen.
                        The message is in blue which may make it feel more
                        informative than an alert.
                      </Paragraph>
                    </div>
                    <Title600 spacing="condensed">
                      <h4>Results of age recall</h4>
                    </Title600>
                    <Well>
                      <Paragraph>
                        {" "}
                        <span role="img" aria-labelledby="Plus">
                          ➕
                        </span>{" "}
                        33% increase
                      </Paragraph>
                    </Well>
                  </div>
                </div>
              </div>
            </div>
          </Callout>
        </Section>

        <Section>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>Successful testing, but room for improvement</h3>
              </Title400>
              <Paragraph>
                The recall rates were, as shown above, an improvement across the
                board, albeit some were minor. I felt we could potentially do
                better than this by taking learnings from the over 100 user
                sessions and create a 5th design to test. We’d learnt that
                having the age restriction notice close to the input field, and
                mentioning the word “age” first increased recall and recognition
                of the age restriction. The colour and size were of secondary
                importance. Many comments also focussed around why we would be
                needing to ask their age, so our 5th design also gave a clear
                reason.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Section background="grey">
          <div className={css(globalStyles.row)}>
            <div className={css([globalStyles.columnHalf])}>
              <Title400>
                <h3>One final iteration</h3>
              </Title400>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph>
                  Taking the learnings from the previous 4 designs, I created a
                  5th design to test.
                </Paragraph>
              </div>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Well type="onGrey">
                  <Paragraph>
                    {" "}
                    <span role="img" aria-labelledby="Tick">
                      ✅
                    </span>{" "}
                    +78% increase on age recall
                  </Paragraph>
                </Well>
              </div>
              <div>
                <Button
                  size="small"
                  display="inline-block"
                  link={"https://marvelapp.com/23865ci"}
                  target="_blank"
                >
                  View Prototype
                </Button>
              </div>
            </div>
            <div className={css([globalStyles.columnHalf])}>
              <img
                src="/images/case-studies/age-visibility/design-5.png"
                alt="The fifth design"
                style={{ maxWidth: "100%", height: "auto", maxHeight: "404px" }}
              />
            </div>
          </div>
        </Section>

        <Section background="brandPrimary">
          <h1>
            <Title type="onBrandPrimary" sequence={"04/"} title={"Outcomes"} />
          </h1>
          <h2>
            <Subtitle type="onBrandPrimary">
              User-centred iterative design
            </Subtitle>
          </h2>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css(globalStyles.columnHalf)}>
              <Paragraph type="onBrandPrimary">
                The testing for the 5th design yielded an 80% recall rate,
                meaning that when asking users at the end of the registration
                how old they needed to be, 4/5 could tell us with confidence.
                Comparing this to the original 45% recall rate of the control
                design meant we’d improved age visibility dramatically, and
                could be happy to say we were on our way to becoming a more
                responsible gambling operator.
              </Paragraph>
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <Paragraph type="onBrandPrimary">
                The design for this case study can still be seen across all of
                the registration journeys for Sky Betting & Gaming’s products,
                such as{" "}
                <Link
                  colour="white"
                  href="https://www.skybet.com"
                  target="_blank"
                >
                  Sky Bet
                </Link>
                ,{" "}
                <Link
                  colour="white"
                  href="https://www.skyvegas.com"
                  target="_blank"
                >
                  Sky Vegas
                </Link>
                ,{" "}
                <Link
                  colour="white"
                  href="https://www.skycasino.com"
                  target="_blank"
                >
                  Sky Casino
                </Link>{" "}
                and{" "}
                <Link
                  colour="white"
                  href="https://super6.skysports.com"
                  target="_blank"
                >
                  Soccer Saturday Super 6
                </Link>
                .
              </Paragraph>
            </div>
          </div>
          <div
            className={css([globalStyles.row, globalStyles.paddingBottom5x])}
          >
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={<Title400 spacing="none">6 Prototypes</Title400>}
                img="/images/case-studies/car-insurance/outcome-prototype.svg"
                subtitle={
                  <Title500>White-labelled to avoid brand bias</Title500>
                }
                description={
                  <div>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        To test the designs with users I created 6
                        white-labelled prototypes showing a registration
                        process.
                      </Paragraph>
                    </div>
                    <ul className={css(styles.summaryListItemList)}>
                      <li className={css(styles.summaryListItemListItem)}>
                        <Link
                          href="https://marvelapp.com/2ed7i22"
                          target="_blank"
                        >
                          Control design prototype
                        </Link>
                      </li>
                      <li className={css(styles.summaryListItemListItem)}>
                        <Link
                          href="https://marvelapp.com/22a8fai"
                          target="_blank"
                        >
                          Design 1 prototype
                        </Link>
                      </li>
                      <li className={css(styles.summaryListItemListItem)}>
                        <Link
                          href="https://marvelapp.com/33ie72g"
                          target="_blank"
                        >
                          Design 2 prototype
                        </Link>
                      </li>
                      <li className={css(styles.summaryListItemListItem)}>
                        <Link
                          href="https://marvelapp.com/22c9bhi"
                          target="_blank"
                        >
                          Design 3 prototype
                        </Link>
                      </li>
                      <li className={css(styles.summaryListItemListItem)}>
                        <Link
                          href="https://marvelapp.com/22e20i4"
                          target="_blank"
                        >
                          Design 4 prototype
                        </Link>
                      </li>
                      <li className={css(styles.summaryListItemListItem)}>
                        <Link
                          href="https://marvelapp.com/23865ci"
                          target="_blank"
                        >
                          Design 5 prototype
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
              />
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={<Title400 spacing="none">User test report</Title400>}
                img="/images/case-studies/age-visibility/outcome-report.svg"
                subtitle={<Title500>Spreading the message wider</Title500>}
                description={
                  <Paragraph size="small">
                    I created a report detailing user comments, percentage
                    increase per design, and also the detail of how each
                    participant performed. This was circulated to the wider team
                    and stakeholders. The squad team were able to read this
                    report for extra detail, and could even watch the user
                    testing session videos back for ultimate context.
                  </Paragraph>
                }
              />
            </div>
          </div>
          <div className={css(globalStyles.row)}>
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={
                  <Title400 spacing="none">Supporting development</Title400>
                }
                img="/images/case-studies/age-visibility/outcome-dev.svg"
                subtitle={<Title500>Don't throw over the fence</Title500>}
                description={
                  <div>
                    <div className={css(globalStyles.paddingBottom2x)}>
                      <Paragraph size="small">
                        It isn't enough to hand-over a static design. I worked
                        closely with the developers to ensure the interaction
                        with this design was perfect. Together we created a
                        subtle animation to show the user they've either typed
                        in an acceptable date of birth or one that was too
                        young.
                      </Paragraph>
                    </div>
                    <Well>
                      <Title600>Confirmation of valid age</Title600>
                      <img
                        width="100%"
                        alt="Animation showing the text going from red to green to indicate a valud entry"
                        src="/images/case-studies/age-visibility/age-valid.gif"
                      />
                    </Well>
                  </div>
                }
              />
            </div>
            <div className={css(globalStyles.columnHalf)}>
              <OutcomeCard
                title={
                  <Title400 spacing="none">Squad ideation sessions</Title400>
                }
                img="/images/case-studies/car-insurance/outcome-workshop.svg"
                subtitle={
                  <Title500>Good ideas can come from anywhere</Title500>
                }
                description={
                  <Paragraph size="small">
                    I'm never under any illusions that the best ideas come from
                    myself. Getting all of our heads together as a squad to
                    understand the problem and create solutions meant we were
                    finding inspired ideas from all areas of our collective
                    experience.
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
              <Title600>Car Insurance Reimagined</Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  How a startup wanted to disrupt the well-established car
                  insurance industry
                </Paragraph>
              </div>
              <Button size="small" link="/case-studies/car-insurance/">
                ← Read Previous Case Study
              </Button>
            </div>
            <div className={css(globalStyles.columnOneThird)}>
              <Title400>Next Case Study</Title400>
              <Title600>GDPR Marketing Consent</Title600>
              <div className={css(globalStyles.paddingBottom2x)}>
                <Paragraph size="small">
                  3 million customers and how to ask them if they’d like to be
                  marketed to, again.
                </Paragraph>
              </div>
              <Button size="small" link="/case-studies/gdpr-marketing-consent">
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
