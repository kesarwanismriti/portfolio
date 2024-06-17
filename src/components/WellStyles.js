import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  well: {
    display: "inline-block",
    background: baseTheme.colour.grey[400],
    padding: `${paddingRem(1.5)} ${paddingRem(2)}`,
    borderRadius: baseTheme.radius
  },
  wellOnGrey: {
    background: "#fff"
  }
});
