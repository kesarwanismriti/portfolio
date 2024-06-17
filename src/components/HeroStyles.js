import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  heroWrapper: {
    margin: `0 ${paddingRem(1)}`,
    [baseTheme.screenSize.small]: {
      margin: `0 ${paddingRem(3)}`,
    },
  },
  hero: {
    background: baseTheme.colour.grey[400],
    maxWidth: `calc(${baseTheme.appMaxWidth}px - ${paddingRem(6)})`,
    margin: "0 auto",
    padding: paddingRem(3),

    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",

    [baseTheme.screenSize.small]: {
      flexDirection: "row",
      padding: paddingRem(6),
    },
  },
  heroLeading: {
    maxWidth: 630,
  },
  heroTrailing: {
    paddingLeft: 0,
    [baseTheme.screenSize.small]: {
      marginLeft: paddingRem(3),
      alignItems: "center",
      justifyContent: 'center',
      display: "flex",
      width: '50%'
    },
  },
  heroList: {
    margin: 0,
    padding: `0 0 ${paddingRem(3)} 0`,
    listStyle: "none",
    [baseTheme.screenSize.small]: {
      paddingBottom: 0,
    },
  },
  heroListItem: {
    marginBottom: paddingRem(3),
    fontSize: baseTheme.fontSize[500],
    lineHeight: baseTheme.lineHeight[500],
    color: baseTheme.colour.grey[200],
    fontWeight: 500,
    ":last-child": {
      marginBottom: 0,
    },
  },
});
