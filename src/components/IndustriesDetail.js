import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./IndustriesDetailStyles";

import Title400 from "./Title400";

export default class IndustriesDetail extends Component {
  render() {
    return (
      <ul className={css(styles.industriesList)}>
        <li className={css(styles.industriesListItem)}>
          <Title400>Automotive</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Banking</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Energy</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Engineering</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Finance</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Gambling</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Gaming</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Insurance</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Oil &amp; Gas</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Radio</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Smart Home</Title400>
        </li>
        <li className={css(styles.industriesListItem)}>
          <Title400>Venture Capital</Title400>
        </li>
      </ul>
    );
  }
}
