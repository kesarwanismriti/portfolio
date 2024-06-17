import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./TitleStyles";

export default class Title extends Component {
  render() {
    const { sequence, title, Subtitle } = this.props;

    const titleStyles = [styles.title];

    this.props.type === "onBlack" && titleStyles.push(styles.titleOnBlack);
    this.props.type === "onBrandPrimary" &&
      titleStyles.push(styles.titleOnBrandPrimary);

    const titleWrapperStyles = [styles.titleWrapper];
    this.props.alignment === "centered" &&
      titleWrapperStyles.push(styles.titleWrapperCentered);

    const sequenceStyles = [styles.sequence];

    this.props.type === "onBrandPrimary" &&
      sequenceStyles.push(styles.sequenceOnBrandPrimary);

    return (
      <div className={css(titleWrapperStyles)}>
        <span className={css(sequenceStyles)}>{sequence}</span>{" "}
        <strong className={css(titleStyles)}>{title}</strong>
        <br/>
        {Subtitle && <strong className={css(titleStyles)}>{Subtitle}</strong>} 
      </div>
    );
  }
}
