import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./LogoListStyles";
import Button from "./Button";
import Title500 from "./Title500";
import Paragraph from "./Paragraph";
import { globalStyles } from "./GlobalStyles";

export default class Section extends Component {
  render() {
    return (
      <ul className={css(styles.logoList)}>
        <li className={css(styles.logoListWrapper)}>
          <div className={css(styles.logoListItem)}>
            <a href="https://www.designsprintx.com" target="_blank">
              <img
                src="/images/logos/design-sprint-x.svg"
                alt="Design Sprint X logo"
                className={css(styles.logoListItemImage)}
              />
            </a>
          </div>
          <Title500>Design sprint facilitation and training.</Title500>
        </li>
        <li className={css(styles.logoListWrapper)}>
          <div className={css(styles.logoListItem)}>
            <a href="https://www.theotherhand.co.uk" target="_blank">
              <img
                src="/images/logos/the-other-hand.svg"
                alt="The Other Hand logo"
                className={css(styles.logoListItemImage)}
              />
            </a>
          </div>
          <Title500>Branding, identity, packaging, and illustration.</Title500>
        </li>
        <li className={css(styles.logoListWrapper)}>
          <div className={css(styles.logoListItem)}>
            <a href="https://spacesprint.co.uk" target="_blank">
              <img
                src="/images/logos/space-sprint.svg"
                alt="Space Sprint logo"
                className={css(styles.logoListItemImage)}
              />
            </a>
          </div>
          <Title500>Digital product design and development.</Title500>
        </li>
      </ul>
    );
  }
}
