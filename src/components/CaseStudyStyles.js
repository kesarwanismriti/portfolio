import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  summaryList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  summaryListItemList: {
    margin: 0,
    paddingLeft: paddingRem(2),
    listStyle: "initial",
    color: baseTheme.colour.grey[300],
    fontSize: baseTheme.fontSize[600],
    lineHeight: baseTheme.lineHeight[600],
  },
  summaryListItemListVisible : {
    color: 'black'
  },
  summaryListItemListNoBullet: {
    listStyle: "none",
    paddingLeft: 0,
  },
  summaryListItemListItem: {
    marginBottom: paddingRem(1),
  },
  summaryListItemListItemEmphasise: {
    fontWeight: 600,
  },
});
