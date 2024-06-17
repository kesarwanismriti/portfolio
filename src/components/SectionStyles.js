import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  sectionWrapperGrey: {
    background: baseTheme.colour.grey[400]
  },
  sectionWrapperBlack: {
    background: baseTheme.colour.grey[100]
  },
  sectionWrapperBrandPrimary: {
    background: baseTheme.colour.brand.primary
  },
  section: {
    maxWidth: baseTheme.appMaxWidth,
    margin: "0 auto",
    padding: paddingRem(4),
    [baseTheme.screenSize.small]: {
      padding: `${paddingRem(4)} ${paddingRem(9)}`
    }
  }
});
