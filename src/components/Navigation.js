/* eslint no-useless-escape: off */
import React, { Component } from "react";
import { css } from "aphrodite";
import { styles } from "./NavigationStyles";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    const { pathname } = window.location;

    const navigationItems = [
      { path: "/", name: "Profile" },
      { path: "/case-studies/", name: "Case Studies" },
      { path: "/contact/", name: "Contact" },
    ];

    console.log(pathname)

    return (
      <nav className={css(styles.nav)}>
        <ul className={css(styles.navList)}>
          {navigationItems.map((navigationItem) => {
            let isActiveNavigationItem = false;
            if (
              navigationItem.path !== "/" &&
              navigationItem.path !== pathname
            ) {
              if (pathname.includes(navigationItem.path))
                isActiveNavigationItem = true;
            }

            return (
              <li className={css(styles.navListItem)}>
                <NavLink
                  key={navigationItem.path}
                  to={navigationItem.path}
                  className={css([
                    styles.navListLink,
                    isActiveNavigationItem && styles.navListLinkActiveNested,
                  ])}
                  activeclassname={css(styles.navListLinkActive)}
                  exact="something"
                >
                  {navigationItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
