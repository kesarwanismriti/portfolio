import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./PrinciplesDetailStyles";

import Subtitle from "./Subtitle";
import Title400 from "./Title400";
import Paragraph from "./Paragraph";

export default class PrinciplesDetail extends Component {
  render() {
    return (
      <div className={css(styles.principlesRow)}>
        <div className={css(styles.principlesColumn)}>
          <h2>
            <Subtitle type="onBlack">
              Create products your users will want to use.
            </Subtitle>
          </h2>
        </div>

        <div className={css(styles.principlesColumn)}>
          <div className={css(styles.principle)}>
            <Title400 type="onBlack">
              <h3>Know your users</h3>
            </Title400>
            <Paragraph type="onBlack">
              Start with user needs. Treat second-hand information about users
              with caution. Focus on user outcomes and design with data.
            </Paragraph>
          </div>

          <div className={css(styles.principle)}>
            <Title400 type="onBlack">
              <h3>Consistency</h3>
            </Title400>
            <Paragraph type="onBlack">
              Avoid uniformity, but be consistent. Re-use well-tested design
              patterns. Use ubiquitous language to create familiarity.
            </Paragraph>
          </div>

          <div className={css(styles.principle)}>
            <Title400 type="onBlack">
              <h3>Aesthetics</h3>
            </Title400>
            <Paragraph type="onBlack">
              Accessibility is not a bolt-on feature. First impressions do
              matter. Take the extra time to delight your users.
            </Paragraph>
          </div>
        </div>

        <div className={css(styles.principlesColumn)}>
          <div className={css(styles.principle)}>
            <Title400 type="onBlack">
              <h3>Clarity</h3>
            </Title400>
            <Paragraph type="onBlack">
              Create structure and hierarchy. Give users responses to the
              actions they take. Make decisions easy by avoiding paradox of
              choice.
            </Paragraph>
          </div>

          <div className={css(styles.principle)}>
            <Title400 type="onBlack">
              <h3>Effectiveness</h3>
            </Title400>
            <Paragraph type="onBlack">
              Your design should work everywhere; responsive is not only screen
              size. Leverage technology to help users.
            </Paragraph>
          </div>

          {/* <CaseStudyCard
            title={"Case Study"}
            description={"Establishing Principles"}
            meta={"Design Strategy"}
            link={"/case-studies/#0"}
          /> */}
        </div>
      </div>
    );
  }
}
