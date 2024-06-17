import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./CiteStyles";
import { globalStyles } from "./GlobalStyles";

import Title500 from "./Title500";

export default class Cite extends Component {
  render() {
    return (
      <div class={css(styles.cite)}>
        <img className={css(globalStyles.avatar)} src={this.props.img} alt="" />
        <div className={css(styles.citeDetail)}>
          <Title500 spacing="condensed">
            <strong>{this.props.name}</strong>
          </Title500>
          {this.props.description}
        </div>
      </div>
    );
  }
}
