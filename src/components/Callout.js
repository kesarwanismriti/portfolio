import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./CalloutStyles";

export default class Callout extends Component {
  render() {
    return <div className={css(styles.callout)}>{this.props.children}</div>;
  }
}
