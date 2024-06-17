import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  outcomeCard: {
    background: "#fff",
    borderRadius: baseTheme.radius,
    boxShadow: baseTheme.boxShadow,
    height: "100%"
  },
  outcomeContent: {
    padding: paddingRem(3)
  },
  outcomeImg: {
    background: baseTheme.colour.grey[100]
  }
});
