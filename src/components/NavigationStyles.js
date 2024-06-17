import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

const navListLinkActiveStyles = {
  position: "relative",
  color: baseTheme.colour.brand.primary,
  ":hover": {
    textDecoration: "none",
    cursor: "default",
  },
  "::after": {
    content: "''",
    display: "block",
    width: paddingRem(0.75),
    height: paddingRem(0.75),
    position: "absolute",
    bottom: paddingRem(1.5),
    left: "50%",
    transform: "translateX(-50%)",
    background: baseTheme.colour.brand.primary,
    borderRadius: 500,
  },
};

export const styles = StyleSheet.create({
  nav: {
    margin: `0`,
    display: "flex",
    justifyContent: "center",
    [baseTheme.screenSize.small]: {
      margin: `0 0 0 ${paddingRem(4.5)}`,
    },
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    margin: 0,
  },
  navListItem: {},
  navListLink: {
    color: baseTheme.colour.grey[200],
    textDecoration: "none",
    padding: `${paddingRem(3)} ${paddingRem(1.5)}`,
    display: "block",
    ":hover": {
      textDecoration: "underline",
      color: baseTheme.colour.brand.primary,
    },
  },
  navListLinkActive: {
    ...navListLinkActiveStyles,
  },
  navListLinkActiveNested: {
    ...navListLinkActiveStyles,
    ":hover": {
      cursor: "pointer",
    },
  },
});
