import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  title400: {
    color: baseTheme.colour.grey[100],
    fontSize: baseTheme.fontSize[400],
    lineHeight: baseTheme.lineHeight[400],
    margin: 0,
    marginBottom: paddingRem(1.5),
    fontWeight: 500
  },
  title400Condensed: {
    marginBottom: paddingRem(0.75)
  },
  title400OnBlack: {
    color: "#fff"
  },
  title400SpacingNone: {
    margin: 0
  }
});
