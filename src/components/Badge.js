import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./BadgeStyles";

export default class Badge extends Component {
  render() {
    const badgeStyles = [styles.badge];
    this.props.size === "small" && badgeStyles.push(styles.badgeSmall);
    return <div className={css(badgeStyles)}>{this.props.children}</div>;
  }
}
