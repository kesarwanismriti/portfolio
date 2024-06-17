import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  cardWide: {
    background: "#fff",
    boxShadow: baseTheme.boxShadow,
    borderRadius: baseTheme.radius,
    padding: paddingRem(3),
    display: "block",
    textDecoration: "none",
    transition: `all ${baseTheme.transition}`,
    border: `${paddingRem(0.5)} solid ${baseTheme.colour.grey[400]}`
  },
  cardWideItemWrapper: {
    marginLeft: paddingRem(-3),

    [baseTheme.screenSize.medium]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  },
  cardWideItemWrapperNoFlex: {
    flex: "none"
  },
  cardWideItem: {
    alignSelf: "flex-start",

    paddingLeft: paddingRem(3),
    paddingBottom: paddingRem(3),
    ":last-child": {
      paddingBottom: 0
    },
    [baseTheme.screenSize.medium]: {
      paddingBottom: 0
    }
  }
});
