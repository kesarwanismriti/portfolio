import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  title500: {
    color: baseTheme.colour.grey[100],
    fontSize: baseTheme.fontSize[500],
    lineHeight: baseTheme.lineHeight[500],
    margin: 0,
    marginBottom: paddingRem(1.5),
    fontWeight: 500
  },
  title500Condensed: {
    marginBottom: paddingRem(0.5)
  },
  title500OnBlack: {
    color: "#fff"
  }
});
