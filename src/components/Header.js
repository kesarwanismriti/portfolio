import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./HeaderStyles";

import Navigation from "./Navigation";
import Logo from "./Logo";
import Button from "./Button";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className={css(styles.header)}>
          <Logo />
          <Navigation />
        </header>
      </div>
    );
  }
}
