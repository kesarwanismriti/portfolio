import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./Title500Styles";

export default class Title500 extends Component {
  render() {
    const title500Styles = [styles.title500];
    this.props.type === "onBlack" &&
      title500Styles.push(styles.title500OnBlack);
    this.props.spacing === "condensed" &&
      title500Styles.push(styles.title500Condensed);

    return <div className={css(title500Styles)}>{this.props.children}</div>;
  }
}
