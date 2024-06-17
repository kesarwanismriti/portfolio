import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./WellStyles";

export default class Well extends Component {
  render() {
    const wellStyles = [styles.well];
    this.props.type === "onGrey" && wellStyles.push(styles.wellOnGrey);

    return <div className={css(wellStyles)}>{this.props.children}</div>;
  }
}
