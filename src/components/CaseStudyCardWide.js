import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./CaseStudyCardWideStyles";

import Title500 from "./Title500";
import Paragraph from "./Paragraph";
import Button from "./Button";

export default class CaseStudyCardWide extends Component {
  render() {
    const { role, services, link } = this.props;
    return (
      <div href={link} className={css(styles.cardWide)}>
        <div className={css(styles.cardWideItemWrapper)}>
          <div className={css(styles.cardWideItem)}>
            <Title500 spacing={"condensed"}>Role</Title500>
            <Paragraph>{role}</Paragraph>
          </div>
          <div className={css(styles.cardWideItem)}>
            <Title500 spacing={"condensed"}>UX Activities</Title500>
            <Paragraph>{services}</Paragraph>
          </div>
          <div
            className={css([
              styles.cardWideItem,
              styles.cardWideItemWrapperNoFlex,
            ])}
          >
            <Button link={link}
             onClick={() => window.scrollTo(0, 0)}>
              {!this.props.link ? "Coming Soon" : "Read Case Study"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
