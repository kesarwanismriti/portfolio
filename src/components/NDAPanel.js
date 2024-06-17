import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./PanelStyles";
import information from '../images/information.png'

export default class NDAPanel extends Component {
  renderLarge() {
    return (
      <div className={css(styles.panel)}>
        <img src={information} alt="Information icon" />
        <div className={css(styles.panelContent)}>
          <strong className={css(styles.panelTitle)}>
            Under A Non-disclosure Agreement
          </strong>
          <p className={css(styles.panelDescription)}>
            Some of the details in this case study may be vague to protect the
            client's intellectual property.
          </p>
        </div>
      </div>
    );
  }
  renderSmall() {
    return (
      <div className={css(styles.panelSmall)}>
        <img
          className={css(styles.panelSmallIcon)}
          src={information}
          alt="Information icon"
        />
        <div className={css(styles.panelSmallContent)}>
          <strong className={css(styles.panelSmallTitle)}>
            Under A Non-disclosure Agreement
          </strong>
          <p className={css(styles.panelSmallDescription)}>
            This link will become active once I’m able to share it.
          </p>
        </div>
      </div>
    );
  }
  render() {
    const { type } = this.props;
    return type === "small" ? this.renderSmall() : this.renderLarge();
  }
}
