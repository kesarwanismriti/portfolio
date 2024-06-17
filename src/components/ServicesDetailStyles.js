import { StyleSheet } from "aphrodite/no-important";
import { baseTheme, paddingRem } from "../baseTheme";

export const styles = StyleSheet.create({
  servicesDetailList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  servicesDetailListItem: {
    marginBottom: paddingRem(5),
    [baseTheme.screenSize.small]: {
      width: "calc(1/2*100% - (1 - 1/2)*100px)"
    }
  },
  servicesDetailIcon: {
    width:45,
    height: 45
  }
});
