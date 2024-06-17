import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./PanelStyles";

export default class SensitiveContentPanel extends Component {
  render() {
    return (
      <div className={css(styles.panel)}>
        <img src="/images/icons/information.svg" alt="Information icon" />
        <div className={css(styles.panelContent)}>
          <strong className={css(styles.panelTitle)}>Sensitive Content</strong>
          <p className={css(styles.panelDescription)}>
            Some of the details in this case study may be vague to protect the client's sensitive
            information, such as financial details or customer numbers.
          </p>
        </div>
      </div>
    );
  }
}
