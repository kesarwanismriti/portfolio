import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  header: {
    maxWidth: baseTheme.appMaxWidth,
    margin: "0 auto",
    display: "block",
    alignItems: "center",
    padding: `0 ${paddingRem(4)}`,

    [baseTheme.screenSize.small]: {
      padding: `0 ${paddingRem(9)}`,
      display: "flex",
    },
  },
  headerTrailing: {
    margin: "0 auto",
    maxWidth: 150,
    display: "flex",
    justifyContent: "center",
    paddingBottom: `${paddingRem(2)}`,
    [baseTheme.screenSize.small]: {
      margin: "0 0 0 auto",
      paddingBottom: 0,
    },
  },
});
