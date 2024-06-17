import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  logoList: {
    listStyle: "none",
    display: "grid",
    gap: paddingRem(2),
    gridTemplateColumns: `repeat(2,minmax(0,1fr))`,

    padding: 0,
    [baseTheme.screenSize.small]: {
      gridTemplateColumns: `repeat(3,minmax(0,1fr))`,
    },
  },
  logoListItem: {
    padding: paddingRem(3),
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
    marginBottom: paddingRem(2),
  },
  logoListItemCV: {
    flexDirection: "column",
  },
  logoListItemImage: {
    maxHeight: paddingRem(7),
    display: "block",
    minHeight: 50,
  },
});
