import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./HeroStyles";

import Title from "./Title";
import Section from "./Section";
import Subtitle from "./Subtitle";
import { globalStyles } from "./GlobalStyles";
import Badge from "../components/Badge";

export default class Hero extends Component {
  render() {
    const { sequence, title, descriptions, isNew, Subtitle } = this.props;
    return (
      <div className={css(styles.heroWrapper)}>
        <div className={css(styles.hero)}>
          <div className={css(styles.heroLeading)}
          >
            {isNew && (
              <>
                <div className={css(globalStyles.paddingBottom2x)}>
                  <Badge>New</Badge>
                </div>
              </>
            )}
            <Title sequence={sequence} title={title} Subtitle={Subtitle}/>
            <ul className={css(styles.heroList)}>
              {descriptions.map((description) => {
                return <li class={css(styles.heroListItem)}>{description}</li>;
              })}
            </ul>
          </div>
          <div className={css(styles.heroTrailing)}>
            {this.props.trailingContent}
          </div>
        </div>
      </div>
    );
  }
}
