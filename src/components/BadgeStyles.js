import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  badge: {
    display: "inline-block",
    background: baseTheme.colour.brand.primary,
    padding: `${paddingRem(0.5)} ${paddingRem(1)}`,
    borderRadius: baseTheme.radius,
    color: "#fff",
    fontWeight: 600,
  },
  badgeSmall: {
    padding: `${paddingRem(0.25)} ${paddingRem(0.5)}`,
    fontSize: baseTheme.fontSize[700],
  },
});
