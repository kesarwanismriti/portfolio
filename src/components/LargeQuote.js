import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./LargeQuoteStyles";
import Paragraph from "./Paragraph";
import Title500 from "./Title500";
import Fade from "react-reveal/Fade";

export default class Subtitle extends Component {
  render() {
    const { quote, name, role } = this.props;
    return (
      <Fade cascade up>
        <div className={css(styles.largeQuoteWrapper)}>
          <span className={css(styles.largeQuoteLeftQuote)}>&ldquo;</span>
          <div className={css(styles.largeQuoteContent)}>
            <q className={css(styles.largeQuote)}>{quote}</q>
            <div className={css(styles.largeQuoteCite)}>
              <span className={css(styles.largeQuoteDash)}>&mdash;</span>
              <Title500 spacing="condensed">{name}</Title500>
              <Paragraph size="small">{role}</Paragraph>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
