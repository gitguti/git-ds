const primitiveColors = {
  blue: {
    50: "#e8e9f0",
    100: "#b8bacf",
    200: "#9698b8",
    300: "#666998",
    400: "#484c84",
    500: "#1a1f65",
    600: "#181c5c",
    700: "#121648",
    800: "#0e1138",
    900: "#0b0d2a",
  },
  green: {
    50: "#ebfcf4",
    100: "#c2f6db",
    200: "#a5f2ca",
    300: "#7cecb2",
    400: "#62e8a3",
    500: "#3be28c",
    600: "#36ce7f",
    700: "#2aa063",
    800: "#207c4d",
    900: "#195f3b",
  },
  yellow: {
    50: "#fffae9",
    100: "#fff0bb",
    200: "#ffe99a",
    300: "#ffdf6c",
    400: "#ffd950",
    500: "#ffcf24",
    600: "#e8bc21",
    700: "#b5931a",
    800: "#8c7214",
    900: "#6b570f",
  },
  red: {
    50: "#fdeeef",
    100: "#f8cace",
    200: "#f5b0b6",
    300: "#f08c95",
    400: "#ed7681",
    500: "#e95461",
    600: "#d44c58",
    700: "#a53c45",
    800: "#802e35",
    900: "#622329",
  },
  gray:
  {50: "#F7FAFC",
  100: "#EDF2F7",
  200: "#E2E8F0",
  300: "#CBD5E0",
  400: "#A0AEC0",
  500: "#718096",
  600: "#4A5568",
  700: "#2D3748",
  800: "#1A202C",
  900: "#171923"
}};

const lightTheme = {
  colors: {
    primary: primitiveColors.blue,
    success: primitiveColors.green,
    warning: primitiveColors.yellow,
    danger: primitiveColors.red,
    neutral: primitiveColors.gray,
    background: primitiveColors.gray[50],
    text: primitiveColors.gray[900],
  },
};

const darkTheme = {
  colors: {
    primary: {
      50: primitiveColors.blue[900],
      100: primitiveColors.blue[800],
      200: primitiveColors.blue[700],
      300: primitiveColors.blue[600],
      400: primitiveColors.blue[500],
      500: primitiveColors.blue[400],
      600: primitiveColors.blue[300],
      700: primitiveColors.blue[200],
      800: primitiveColors.blue[100],
      900: primitiveColors.blue[50],
    },
    success: {
      50: primitiveColors.green[900],
      100: primitiveColors.green[800],
      200: primitiveColors.green[700],
      300: primitiveColors.green[600],
      400: primitiveColors.green[500],
      500: primitiveColors.green[400],
      600: primitiveColors.green[300],
      700: primitiveColors.green[200],
      800: primitiveColors.green[100],
      900: primitiveColors.green[50],
    },
    warning: {
      50: primitiveColors.yellow[900],
      100: primitiveColors.yellow[800],
      200: primitiveColors.yellow[700],
      300: primitiveColors.yellow[600],
      400: primitiveColors.yellow[500],
      500: primitiveColors.yellow[400],
      600: primitiveColors.yellow[300],
      700: primitiveColors.yellow[200],
      800: primitiveColors.yellow[100],
      900: primitiveColors.yellow[50],
    },
    danger: {
      50: primitiveColors.red[900],
      100: primitiveColors.red[800],
      200: primitiveColors.red[700],
      300: primitiveColors.red[600],
      400: primitiveColors.red[500],
      500: primitiveColors.red[400],
      600: primitiveColors.red[300],
      700: primitiveColors.red[200],
      800: primitiveColors.red[100],
      900: primitiveColors.red[50],
    },
    neutral: {
      50: primitiveColors.gray[900],
      100: primitiveColors.gray[800],
      200: primitiveColors.gray[700],
      300: primitiveColors.gray[600],
      400: primitiveColors.gray[500],
      500: primitiveColors.gray[400],
      600: primitiveColors.gray[300],
      700: primitiveColors.gray[200],
      800: primitiveColors.gray[100],
      900: primitiveColors.gray[50],
    },
  },
  background: primitiveColors.gray[900],
  text: primitiveColors.gray[50],
};

export { primitiveColors, lightTheme, darkTheme };
