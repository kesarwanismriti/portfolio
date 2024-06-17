import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  principlesRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  principlesColumn: {
    [baseTheme.screenSize.small]: {
      width: "calc(1/3*100% - (1 - 1/3)*100px)"
    }
  },
  principle: {
    marginBottom: paddingRem(5)
  }
});
