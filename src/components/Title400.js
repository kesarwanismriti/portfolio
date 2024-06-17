import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./Title400Styles";

export default class Title400 extends Component {
  render() {
    const title400Styles = [styles.title400];
    this.props.type === "onBlack" &&
      title400Styles.push(styles.title400OnBlack);

    this.props.spacing === "condensed" &&
      title400Styles.push(styles.title400Condensed);
    this.props.spacing === "none" &&
      title400Styles.push(styles.title400SpacingNone);

    return <div className={css(title400Styles)}>{this.props.children}</div>;
  }
}
