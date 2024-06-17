import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./AgilePhilosophyDetailStyles";
import Title400 from "./Title400";
import Paragraph from "./Paragraph";

export default class AgilePhilosophyDetail extends Component {
  render() {
    return (
      <ul className={css(styles.agilePhilosophyList)}>
        <li className={css(styles.agilePhilosophyListItem)}>
          <div className={css(styles.agilePhilosophyListDetail)}>
            <Title400>
              <h2>Establish empathy together as a team</h2>
            </Title400>
            <Paragraph>
              It’s important to understand your users together as a team. Doing
              so eventually weaves benefit into the product at every level. By
              increasing your team’s exposure to users, you will increase the
              user’s satisfaction of the product.
            </Paragraph>
          </div>
          <strong className={css(styles.agilePhilosophyNumber)}>1</strong>
        </li>
        <li className={css(styles.agilePhilosophyListItem)}>
          <div className={css(styles.agilePhilosophyListDetail)}>
            <Title400>
              <h2>Collectively define and agree on problems</h2>
            </Title400>
            <Paragraph>
              Take time to understand and clearly define your user’s problems.
              Feeding the team solutions will only lead to demoralisation;
              people like being empowered and to have a chance to be creative.
              Let the team stretch their skills, and give them time to truly
              understand the problem.
            </Paragraph>
          </div>
          <strong className={css(styles.agilePhilosophyNumber)}>2</strong>
        </li>
        <li className={css(styles.agilePhilosophyListItem)}>
          <div className={css(styles.agilePhilosophyListDetail)}>
            <Title400>
              <h2>Group ideation</h2>
            </Title400>
            <Paragraph>
              Good ideas can come from anyone. Waiting for one member of the
              team to create the best idea will take time, and will be biassed
              towards their experience. It doesn’t have to take long, there are
              exercises designed to generate lots of ideas quickly.
            </Paragraph>
          </div>
          <strong className={css(styles.agilePhilosophyNumber)}>3</strong>
        </li>
        <li className={css(styles.agilePhilosophyListItem)}>
          <div className={css(styles.agilePhilosophyListDetail)}>
            <Title400>
              <h2>Prototype and test with real users</h2>
            </Title400>
            <Paragraph>
              Fake it until you can make it. Spend the minimum amount of time to
              create the closest to the real thing. You’re looking for feedback
              on the idea, not whether your design looks finished. Test with
              real representative users.
            </Paragraph>
          </div>
          <strong className={css(styles.agilePhilosophyNumber)}>4</strong>
        </li>
        <li className={css(styles.agilePhilosophyListItem)}>
          <div className={css(styles.agilePhilosophyListDetail)}>
            <Title400>
              <h2>Iterate, iterate, iterate</h2>
            </Title400>
            <Paragraph>
              It isn’t enough to run through a design process once. Learn from
              your users, learn from your team, and iterate. Your process will
              mature and you’ll be able to run through it easier and faster on
              each pass. Being agile is to be set up to react to new information
              fast.
            </Paragraph>
          </div>
          <strong className={css(styles.agilePhilosophyNumber)}>5</strong>
        </li>
      </ul>
    );
  }
}
