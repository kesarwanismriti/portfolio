import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./OutcomeCardStyles";
import { globalStyles } from "./GlobalStyles";

export default class OutcomeCard extends Component {
  render() {
    const { title, img, subtitle, description, button, meta, small } =
      this.props;
    return (
      <div className={css(styles.outcomeCard)}>
        <div
          className={css([
            styles.outcomeContent,
            img.length === 0 && globalStyles.paddingBottom0,
          ])}
        >
          {title}
        </div>
        {img.length > 0 && !small && (
          <img
            className={css([styles.outcomeImg, globalStyles.imageFullWidth])}
            src={img}
            alt=""
          />
        )}
        {small && (
          <div style={{ width:'100%' , display:'flex', alignItems:"center", justifyContent:'center'}}>
            <img style={{
              height: '300px',
              width:'100%',
              objectFit:'contain'
            }} src={img} alt="" />
          </div>
        )}
        <div className={css(styles.outcomeContent)}>
          {subtitle}
          <div className={css(button && globalStyles.paddingBottom2x)}>
            {description}
          </div>
          {button && (
            <div className={css(globalStyles.paddingBottom2x)}>{button}</div>
          )}
          {meta}
        </div>
      </div>
    );
  }
}
