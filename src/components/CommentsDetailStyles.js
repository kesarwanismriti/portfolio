import { StyleSheet } from "aphrodite/no-important";
import { paddingRem, baseTheme } from "../baseTheme";

export const styles = StyleSheet.create({
  quoteWrapper: {
    textAlign: "left",
  },
  quote: {
    fontSize: baseTheme.fontSize[500],
    lineHeight: baseTheme.lineHeight[500],
    color: baseTheme.colour.grey[200],
    padding: `${paddingRem(2)} 0 ${paddingRem(5)} 0`,
    display: "block"
  }
});
