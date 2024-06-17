import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  title600: {
    color: baseTheme.colour.grey[100],
    fontSize: baseTheme.fontSize[600],
    lineHeight: baseTheme.lineHeight[600],
    margin: 0,
    marginBottom: paddingRem(1.5),
    fontWeight: 500
  },
  title600Condensed: {
    marginBottom: paddingRem(0.5)
  },
  title600OnBlack: {
    color: "#fff"
  }
});
