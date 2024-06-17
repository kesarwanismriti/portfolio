import { StyleSheet } from "aphrodite/no-important";
import { baseTheme } from "../baseTheme";

export const styles = StyleSheet.create({
  paragraph: {
    color: baseTheme.colour.grey[200],
    fontSize: baseTheme.fontSize[500],
    lineHeight: baseTheme.lineHeight[500],
    margin: 0,
    maxWidth:1120
  },
  paragraphSmall: {
    fontSize: baseTheme.fontSize[600],
    lineHeight: baseTheme.lineHeight[600],
  },
  paragraphOnBlack: {
    color: baseTheme.colour.grey[300],
  },
  paragraphOnBrandPrimary: {
    color: "#fff",
  },
  paragraphExpanded: {
    lineHeight: 1.8,
  },
});
