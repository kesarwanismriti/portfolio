import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  card: {
    background: "#fff",
    borderRadius: baseTheme.radius,
    padding: paddingRem(3),
    display: "block",
    textDecoration: "none",
    maxWidth: 530,
    transition: `all ${baseTheme.transition}`,
    boxShadow: `${baseTheme.boxShadow}, inset 0 0 0 ${paddingRem(0.1)} transparent`,

    ":hover": {
      boxShadow: `${baseTheme.boxShadow}, inset 0 0 0 ${paddingRem(0.5)} ${
        baseTheme.colour.brand.primary
      }`
    }
  }
});
