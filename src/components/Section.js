import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./SectionStyles";

export default class Section extends Component {
  getBackground(background) {
    switch (background) {
      case "grey": {
        return styles.sectionWrapperGrey;
      }
      case "black": {
        return styles.sectionWrapperBlack;
      }
      case "brandPrimary": {
        return styles.sectionWrapperBrandPrimary;
      }
      default: {
        return null;
      }
    }
  }

  render() {
    return (
      <div className={css(this.getBackground(this.props.background))}>
        {/* <Fade effect="fadeInUp"> */}
        <div className={css(styles.section)}>{this.props.children}</div>
        {/* </Fade> */}
      </div>
    );
  }
}
