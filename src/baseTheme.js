const baseFontSize = 16;

const fontSizePx = {
  100: 52,
  200: 46,
  300: 32,
  400: 28,
  500: 21,
  600: 18,
  700: 16,
};

export const paddingRem = (padding) => {
  return `${(baseTheme.padding * padding) / baseFontSize}rem`;
};

export const baseTheme = {
  appMaxWidth: 1380,

  padding: 10,

  radius: 5,

  transition: "0.2s ease-in-out",

  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",

  screenSize: {
    small: "@media only screen and (min-width: 700px)",
    medium: "@media only screen and (min-width: 900px)",
  },

  fontSize: {
    100: `${fontSizePx[100] / baseFontSize}rem`,
    200: `${fontSizePx[200] / baseFontSize}rem`,
    300: `${fontSizePx[300] / baseFontSize}rem`,
    400: `${fontSizePx[400] / baseFontSize}rem`,
    500: `${fontSizePx[500] / baseFontSize}rem`,
    600: `${fontSizePx[600] / baseFontSize}rem`,
    700: `${fontSizePx[700] / baseFontSize}rem`,
  },

  lineHeight: {
    100: "1.285",
    200: "1.3",
    300: "1.3", // NOT TAKEN FROM SKETCH
    400: "1.375",
    500: "1.375",
    600: "1.375",
  },
  colour: {
    brand: {
      // primary: "#005AA4", // 7:1 accessibile
      primary: "#9122E7",
      primaryLight: "#45A5FF",
    },
    grey: {
      100: "#202022",
      200: "#484850",
      300: "#C0C0C9",
      400: "#E5E5EC",
    },
  },
};
