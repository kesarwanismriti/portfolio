import React, { Component } from "react";
import { css } from "aphrodite";
import { globalStyles } from "./GlobalStyles";
import { styles } from "./CaseStudyCardStyles";

import Title400 from "./Title400";
import Paragraph from "./Paragraph";
import Badge from "./Badge";

export default class CaseStudyCard extends Component {
  render() {
    const { title, description, meta, link, isNew } = this.props;
    return (
      <a href={link} className={css(styles.card)} {...this.props.linkProps}>
        {isNew && (
          <>
            <div className={css(globalStyles.paddingBottom2x)}>
              <Badge>New</Badge>
            </div>
          </>
        )}
        <Title400 spacing={"condensed"}>{title}</Title400>
        <div className={css(globalStyles.paddingBottom)}>
          <Paragraph size="small">{description}</Paragraph>
        </div>
        {meta}
      </a>
    );
  }
}
