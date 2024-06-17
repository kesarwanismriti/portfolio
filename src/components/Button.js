import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./ButtonStyles";

export default class Button extends Component {
  render() {
    const buttonStyles = [styles.button];
    this.props.display === "inline-block" &&
      buttonStyles.push(styles.buttonInlineBlock);
    this.props.size === "small" && buttonStyles.push(styles.buttonSmall);
    this.props.white && buttonStyles.push(styles.buttonWhite)

    return (
      <a
        className={css([
          buttonStyles,
          !this.props.link && styles.buttonDisabled,
        ])}
        href={this.props.link}
        target={this.props.target}
        {...this.props}
      >
        {this.props.children}
      </a>
    );
  }
}
