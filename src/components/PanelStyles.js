import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  panel: {
    background: baseTheme.colour.grey[200],
    padding: paddingRem(3),
    display: "flex",
    maxWidth: 530,
    alignItems: "flex-start"
  },
  panelContent: {
    paddingLeft: paddingRem(3)
  },
  panelTitle: {
    color: "#fff",
    fontSize: baseTheme.fontSize[600],
    lineHeight: baseTheme.lineHeight[600],
    fontWeight: 500,
    marginBottom: paddingRem(1),
    display: "block"
  },
  panelDescription: {
    color: baseTheme.colour.grey[400],
    fontSize: baseTheme.fontSize[600],
    lineHeight: baseTheme.lineHeight[600],
    margin: 0
  },
  panelSmall: {
    display: "flex",
    alignItems: "flex-start"
  },
  panelSmallIcon: {
    width: 22,
    lineHeight: baseTheme.lineHeight[100]
  },
  panelSmallContent: {
    paddingLeft: paddingRem(2)
  },
  panelSmallTitle: {
    color: baseTheme.colour.grey[100],
    lineHeight: baseTheme.lineHeight[100],
    paddingBottom: paddingRem(0.5),
    fontWeight: 500,
    display: "block"
  },
  panelSmallDescription: {
    margin: 0,
    color: baseTheme.colour.grey[200],
    lineHeight: baseTheme.lineHeight[200]
  }
});
