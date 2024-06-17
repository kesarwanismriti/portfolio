import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./CommentsDetailStyles";
import Paragraph from "./Paragraph";
import Cite from "./Cite";
import menno from "../images/menno.png";
import Link from "./Link";

export default class IndustriesDetail extends Component {
  render() {
    return (
      <div className={css(styles.quoteWrapper)}>
        <q className={css(styles.quote)}>
          Smriti is one of the best UXers I know. She is extremely dedicated to
          happy customers, and solving complex problems is what she thrives on.
          I hired Smriti in 2017 and didn't regret that choice ever. From
          complex customers to quick fast pace POCs and Expert support Smriti is
          the one you need.
          <br />
          <br />
          Thank you so much for everything you have given to the team, thank you
          for always the team player and mentor that you were for me and the
          entire team. Smriti is a wonderful addition to any UX UI team! I cant
          recommend her enough.
        </q>
        <Cite
          img={menno}
          name="Menno Cramer"
          description={
            <Paragraph size="small">Director of UX | Outsystems</Paragraph>
          }
        />
        <div style={{marginTop: '30px', fontWeight:'500'}}>
          read more on my{" "}
          <Link
            href="https://www.linkedin.com/in/smritikesarwani/"
            target="_blank"
          >Linkedin Profile</Link>
        </div>
      </div>
    );
  }
}
