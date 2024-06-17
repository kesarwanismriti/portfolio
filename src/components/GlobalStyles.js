import { StyleSheet } from "aphrodite/no-important";
import { paddingRem, baseTheme } from "../baseTheme";

export const globalStyles = StyleSheet.create({
  inlineBlock: {
    display: "inline-block",
  },
  noList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  marginRight: {
    marginRight: paddingRem(1),
  },
  marginBottom0: {
    marginBottom: paddingRem(0),
  },
  paddingBottom0: {
    paddingBottom: paddingRem(0),
  },
  paddingBottom: {
    paddingBottom: paddingRem(1),
  },
  paddingBottom2x: {
    paddingBottom: paddingRem(2),
  },
  paddingBottom5x: {
    paddingBottom: paddingRem(5),
  },
  paddingBottom10x: {
    paddingBottom: paddingRem(10),
  },
  paddingBottom5xUntilSmall: {
    [baseTheme.screenSize.small]: {
      paddingBottom: paddingRem(5),
    },
  },
  avatar: {
    borderRadius: 500,
    boxShadow: baseTheme.boxShadow,
    height: 70,
  },
  boxShadow: {
    boxShadow: baseTheme.boxShadow,
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [baseTheme.screenSize.small]: {
      flexDirection: "row",
    },
  },
  sectionHeaderLeading: { maxWidth: 630 },
  sectionHeaderTrailing: {
    alignItems: "flex-start",
    display: "flex",
    marginBottom: paddingRem(5),
    [baseTheme.screenSize.small]: {
      marginLeft: paddingRem(3),
      marginBottom: 0,
    },
  },
  imageFullWidth: {
    width: "100%",
  },
  imageHalfWidth:{
    width: '50%',
  },
  imageHeight: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  maxWidth600: { maxWidth: 600 },

  row: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [baseTheme.screenSize.small]: {
      flexDirection: "row",
    },
  },
  alignCenter : {
    alignItems: 'center'
  },

  columnThird: {
    paddingBottom: paddingRem(5),
    width: "100%",
    [baseTheme.screenSize.small]: {
      width: "calc(1/3*100% - (1 - 1/3)*50px)",
      paddingBottom: 0,
    },
  },
  columnHalf: {
    width: "100%",
    paddingBottom: paddingRem(5),
    [baseTheme.screenSize.small]: {
      width: "calc(1/2*100% - (1 - 1/2)*50px)",
      paddingBottom: 0,
    },
  },
  columnOneThird: {
    paddingBottom: paddingRem(5),
    [baseTheme.screenSize.small]: {
      width: "calc(1/3*100% - (1 - 1/3)*50px)",
    },
  },
  columnTwoThirds: {
    paddingBottom: paddingRem(5),
    [baseTheme.screenSize.small]: {
      width: "calc(2/3*100% - (1 - 2/3)*50px)",
    },
  },
  maxWidth750: {
    maxWidth: 750,
  },
  isAlignedRight: {
    textAlign: "right",
  },

  profileHeadshot: {
    maxHeight: 500,
    objectFit: "cover",
    objectPosition: "30%",
    height: "100%",
    [baseTheme.screenSize.small]: {
      maxHeight: 369,
    },
  },
});
