import { StyleSheet } from "aphrodite/no-important";
import { paddingRem, baseTheme } from "../baseTheme";

export const styles = StyleSheet.create({
  callout: {
    background: "#fff",
    padding: `${paddingRem(5)} ${paddingRem(6)}`,
    maxWidth: baseTheme.appMaxWidth,
    margin: `0 -${paddingRem(6)}`
  }
});
