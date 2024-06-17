import { StyleSheet } from "aphrodite/no-important";
import { paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  industriesList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: 630,
  },
  industriesListItem: {
    width: "calc(1/2*100% - (1 - 1/2)*100px)",
    marginBottom: paddingRem(3),
  },
});
