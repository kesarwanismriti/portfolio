import { StyleSheet } from "aphrodite/no-important";
import { paddingRem, baseTheme } from "../baseTheme";

export const styles = StyleSheet.create({
  footerWrapper: {
    background: baseTheme.colour.grey[100],
    color: "#fff",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    maxWidth: baseTheme.appMaxWidth,
    margin: "0 auto",
    padding: `${paddingRem(4)}`,
    flexDirection: "column",
    [baseTheme.screenSize.small]: {
      padding: `${paddingRem(9)}`,
      flexDirection: "row",
      paddingLeft: `${paddingRem(4)}`
    },
  },
  footerLeading: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    flexDirection: "column",
    [baseTheme.screenSize.small]: {
      flex: "2 0 0 ",
      flexDirection: "row",
    },
  },
  footerLeadingItem: {
    [baseTheme.screenSize.small]: {
      width: "calc(1/3*100% - (1 - 1/3)*30px)",
    },
  },
  footerList: {
    listStyle: "none",
    padding: `${paddingRem(3)} 0 0 0`,
    margin: 0,
  },
  footerListItem: {
    marginBottom: paddingRem(1),
    fontSize: baseTheme.fontSize[600],
    lineHeight: baseTheme.lineHeight[600],
  },
  footerTrailing: {
    [baseTheme.screenSize.small]: {
      flex: "1 0 0 ",
      textAlign: "right",
    },
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    height: 27,
  },
  footerName: {
    fontSize: 32
  },
  name: {
    fontWeight: 500,
    display: "block",
  },
  jobTitle: {
    margin: 0,
  },
});
