import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./ParagraphStyles";

export default class Paragraph extends Component {
  render() {
    const paragraphStyles = [styles.paragraph];

    this.props.type === "onBlack" &&
      paragraphStyles.push(styles.paragraphOnBlack);
    this.props.type === "onBrandPrimary" &&
      paragraphStyles.push(styles.paragraphOnBrandPrimary);
    this.props.size === "small" && paragraphStyles.push(styles.paragraphSmall);
    this.props.lineHeight === "expanded" &&
      paragraphStyles.push(styles.paragraphExpanded);

    console.log(paragraphStyles);

    return <p className={css(paragraphStyles)}>{this.props.children}</p>;
  }
}
