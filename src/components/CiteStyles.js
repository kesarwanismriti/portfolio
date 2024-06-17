import { StyleSheet } from "aphrodite/no-important";
import { paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  cite: {
    textAlign: "left",
    margin: "0 auto",
    display: "inline-flex",
    alignContent: "center",
  },
  citeDetail: {
    marginLeft: paddingRem(3),
    alignSelf: "center",
    textDecoration: "none",
  },
});
