import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  subtitle: {
    color: baseTheme.colour.grey[200],
    fontSize: baseTheme.fontSize[300],
    lineHeight: baseTheme.lineHeight[300],
    fontWeight: 500,
    maxWidth: 1030,
    marginBottom: paddingRem(5)
  },
  subtitleOnBlack: {
    color: baseTheme.colour.grey[400]
  },
  subtitleOnBrandPrimary: {
    color: "rgba(255,255,255,0.85)"
  }
});
