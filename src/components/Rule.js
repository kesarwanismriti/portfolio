import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./RuleStyles";

export default class Rule extends Component {
  render() {
    return <hr className={css(styles.rule)} />;
  }
}
