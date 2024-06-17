import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./LogoListStyles";
import Button from "./Button";
import Paragraph from "./Paragraph";
import { globalStyles } from "./GlobalStyles";
import toyota from '../images/toyota.png'
import arnott from '../images/arnott.png'
import scheneider from '../images/scheneider.png'
import sarawak from '../images/sarawak.png'
import wunion from '../images/wunion.png'
import income from '../images/income.png'

export default class Section extends Component {
  render() {
    return (
      <ul className={css(styles.logoList)}>
        <li className={css(styles.logoListItem)}>
          <a href="">
            <img
              src={toyota}
              alt="Toyota"
              className={css(styles.logoListItemImage)}
            />
          </a>
        </li>
        <li className={css(styles.logoListItem)}>
          <a href="">
            <img
              src={arnott}
              alt="Arnott"
              className={css(styles.logoListItemImage)}
            />
          </a>
        </li>
        <li className={css(styles.logoListItem)}>
          <a href="">
            <img
              src={scheneider}
              alt="Scheneider"
              className={css(styles.logoListItemImage)}
            />
          </a>
        </li>
        <li className={css(styles.logoListItem)}>
          <a href="">
            <img
              src={sarawak}
              alt="Sarawak"
              className={css(styles.logoListItemImage)}
            />
          </a>
        </li>
        <li className={css(styles.logoListItem)}>
          <a href="">
            <img
              src={wunion}
              alt="Western Union"
              className={css(styles.logoListItemImage)}
            />
          </a>
        </li>
        <li className={css(styles.logoListItem)}>
          <a href="">
            <img
              src={income}
              alt="Income"
              className={css(styles.logoListItemImage)}
            />
          </a>
        </li>
      </ul>
    );
  }
}
