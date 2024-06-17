import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./SubtitleStyles";

export default class Subtitle extends Component {
  render() {
    const subtitleStyles = [styles.subtitle];
    this.props.type === "onBlack" &&
      subtitleStyles.push(styles.subtitleOnBlack);
    this.props.type === "onBrandPrimary" &&
      subtitleStyles.push(styles.subtitleOnBrandPrimary);

    return <div className={css(subtitleStyles)}>{this.props.children}</div>;
  }
}
