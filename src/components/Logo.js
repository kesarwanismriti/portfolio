import React, { Component } from "react";
import Link from "./Link";

export default class Logo extends Component {
  render() {
    let logoFilename = "logo.svg";

    if (this.props.type === "white") {
      logoFilename = "logo-white.svg";
    }

    return (
      <Link href="/portfolio">
            <h4>SK</h4>

      </Link>
      
    );
  }
}
