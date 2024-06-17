import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./FooterStyles";

import Logo from "./Logo";
import Link from "./Link";
import certification from "../images/certification.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className={css(styles.footerWrapper)}>
        <div className={css(styles.footer)}>
          <div className={css(styles.footerLeading)}>
            <div>
              <img src={certification} />
            </div>
            <ul className={css([styles.footerList, styles.footerLeadingItem])}>
              <li
                className={css([
                  styles.footerListItem,
                  styles.logoWrapper,
                  styles.footerName,
                ])}
              >
                Smriti Kesarwani
              </li>
              <li className={css(styles.footerListItem)}>
                <strong className={css(styles.name)}>
                  Sr. UX/UI Designer & Researcher
                </strong>
              </li>
              <li className={css(styles.footerListItem)}>
                <p className={css(styles.jobTitle)}>
                  smriti.kesarwani@gmail.com
                </p>
              </li>
            </ul>
            <ul className={css([styles.footerList, styles.footerLeadingItem])}>
              <li className={css(styles.footerListItem)}>
                <Link colour="new" href="/portfolio"
                 onClick={() => window.scrollTo(0, 0)}
                >Profile</Link>
              </li>
              <li className={css(styles.footerListItem)}>
                <Link colour="new" href="/portfolio/#/case-studies/"
                 onClick={() => window.scrollTo(0, 0)}
                >Case Studies</Link>
              </li>
              <li className={css(styles.footerListItem)}>
                <Link colour="new" href="/portfolio/#/contact/"
                 onClick={() => window.scrollTo(0, 0)}
                >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
