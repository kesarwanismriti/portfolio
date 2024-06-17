import { StyleSheet } from "aphrodite/no-important";
import { baseTheme } from "../baseTheme";

export const styles = StyleSheet.create({
  link: {
    color: baseTheme.colour.brand.primary,
    transition: `all ${baseTheme.transition}`,
    textDecoration: "none",

    ":hover": {
      textDecoration: "none"
    }
  },
  colourWhite: {
    color: "#fff"
  },
  colorNew : {
    color: "#B28BF5"
  }
});
