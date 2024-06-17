import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  titleWrapper: {
    fontSize: baseTheme.fontSize[100],
    lineHeight: baseTheme.lineHeight[100],
    marginBottom: paddingRem(3)
  },
  sequence: {
    color: baseTheme.colour.brand.primary,
    fontWeight: 400
  },
  sequenceOnBrandPrimary: {
    color: "rgba(255,255,255,0.85)"
  },
  title: {
    color: baseTheme.colour.grey[100],
    fontWeight: 500
  },
  titleWrapperCentered: {
    textAlign: "center"
  },
  titleOnBlack: {
    color: "#fff"
  },
  titleOnBrandPrimary: {
    color: "#fff"
  }
});
