import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  largeQuoteWrapper: {
    display: "flex",
    alignContent: "flex-start",
    padding: `${paddingRem(10)} ${paddingRem(0)}`,

    [baseTheme.screenSize.small]: {
      padding: `${paddingRem(10)} ${paddingRem(5)}`
    },

    [baseTheme.screenSize.medium]: {
      padding: paddingRem(10)
    }
  },
  largeQuoteLeftQuote: {
    color: baseTheme.colour.grey[100],
    lineHeight: 0.84,
    fontSize: 100,
    [baseTheme.screenSize.small]: {
      fontSize: 200
    }
  },
  largeQuoteContent: {
    marginLeft: paddingRem(3)
  },
  largeQuoteDash: {
    color: baseTheme.colour.brand.primary,
    fontSize: baseTheme.fontSize[300]
  },
  largeQuote: {
    color: baseTheme.colour.grey[100],
    lineHeight: baseTheme.lineHeight[400],
    fontSize: baseTheme.fontSize[400],
    marginBottom: paddingRem(3),
    fontWeight: 500,
    display: "block",
    ":before": {
      content: "''"
    },
    [baseTheme.screenSize.small]: {
      lineHeight: baseTheme.lineHeight[200],
      fontSize: baseTheme.fontSize[200]
    }
  }
});
