import { StyleSheet } from "aphrodite/no-important";
import { paddingRem, baseTheme } from "../baseTheme";

export const styles = StyleSheet.create({
  button: {
    background: baseTheme.colour.brand.primary,
    padding: `${paddingRem(3)} ${paddingRem(5)}`,
    borderRadius: baseTheme.radius,
    color: "#fff",
    fontSize: baseTheme.fontSize[500],
    lineHeight: baseTheme.lineHeight[500],
    fontWeight: 500,
    textDecoration: "none",
    display: "block",
    textAlign: "center",
    transition: `all ${baseTheme.transition}`,
    ":hover": {
      background: baseTheme.colour.brand.primaryLight
    }
  },
  buttonDisabled: {
    background: baseTheme.colour.grey[400],
    color: baseTheme.colour.grey[300],

    ":hover": {
      background: baseTheme.colour.grey[400],
      cursor: "not-allowed"
    }
  },
  buttonInlineBlock: {
    display: "inline-block"
  },
  buttonSmall: {
    padding: `${paddingRem(1.5)} ${paddingRem(2.5)}`,
    fontSize: baseTheme.fontSize[600],
    lineHeight: baseTheme.lineHeight[600]
  },
  buttonWhite: {
    background:"white",
    color:"#9122E7",
    ":hover": {
      background: "white",
    }
  }
});
