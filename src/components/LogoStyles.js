import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  logo: {
    display: "block",
    textAlign: "center",
    padding: `${paddingRem(3)} 0 0 0`,
    [baseTheme.screenSize.small]: {
      padding: 0,
    },
  },
  logoImage: {
    display: "inline-block",
  },
});
