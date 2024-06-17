import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./Title600Styles";

export default class Title600 extends Component {
  render() {
    const title600Styles = [styles.title600];
    this.props.type === "onBlack" &&
      title600Styles.push(styles.title600OnBlack);
    this.props.spacing === "condensed" &&
      title600Styles.push(styles.title600Condensed);

    return <div className={css(title600Styles)}>{this.props.children}</div>;
  }
}
