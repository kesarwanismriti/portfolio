import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  agilePhilosophyList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  agilePhilosophyListItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: paddingRem(5),
    ":last-child": {
      marginBottom: 0,
    },
  },
  agilePhilosophyListDetail: {
    maxWidth: 530,
  },
  agilePhilosophyNumber: {
    color: baseTheme.colour.grey[400],
    fontWeight: 500,
    lineHeight: 0.7,
    fontSize: 100,
    marginLeft: paddingRem(2),
    [baseTheme.screenSize.small]: {
      fontSize: 300,
    },
  },
});
