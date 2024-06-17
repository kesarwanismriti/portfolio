import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./LinkStyles";

export default class Link extends Component {
  render() {
    let linkStyles = [styles.link];

    this.props.colour === "white" && linkStyles.push(styles.colourWhite);

    this.props.colour === "new" && linkStyles.push(styles.colorNew)



    return (
      <a {...this.props} className={css(linkStyles)} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}
