import { themes } from "@/utils/themes";

// Base chip styles
export const chipStyle: object = {
  position: "relative",
  backgroundColor: themes.color.priWhite,
  border: `1px solid ${themes.color.primaryDark}`,
  color: themes.color.primaryDark,

  "&&:hover": {
    backgroundColor: themes.color.primaryLight,
  },

  "&.MuiButtonBase-root.Mui-focusVisible": {
    backgroundColor: themes.color.primaryLight,
  },
};

// Conditional chip styles
export const iconStyle: object = {
  paddingLeft: "4px",
};

export const onlyIconStyle: object = {
  width: "30px",
  m: 0,
  p: 0,
  ".MuiChip-label": { m: 0, p: 0 },
  ".MuiChip-icon": { m: 0, p: 0 },
};

export const labelStyle: object = {
  // ".MuiChip-label": {
  //   padding: icon ? "0 3px 0 12px" : "0 6px",
  //   width: "100%",
  // },
};

// Chip colors
export interface ColorType {
  dark: string;
  base: string;
  light: string;
}

export const chipColors: { [key: string]: ColorType } = {
  green: {
    dark: "#367E18",
    base: "#B1D7B4",
    light: "#E1F0DA",
  },
  pink: {
    dark: "#F72798",
    base: "#FFC0D9",
    light: "#FED9ED",
  },
  purple: {
    dark: "#6420AA",
    base: "#DCBFFF",
    light: "#E5D4FF",
  },
  red: {
    dark: "#DF2E38",
    base: "#FFABAB",
    light: "#FCC8D1",
  },
  orange: {
    dark: "#FBA834",
    base: "#F7DED0",
    light: "#FEECE2",
  },
  yellow: {
    dark: "#e5cd1c",
    base: "#FFFC9B",
    light: "#FFFDD7",
  },
  blue: {
    dark: "#1D24CA",
    base: "#AEE2FF",
    light: "#E0F4FF",
  },
  brown: {
    dark: "#561C24",
    base: "#ddc5c5",
    light: "#FFE7E7",
  },
  maroon: {
    dark: "#B47B84",
    base: "#d6bcbc",
    light: "#FFE7E7",
  },
  peach: {
    dark: "#ffb082",
    base: "#F7DED0",
    light: "#FEECE2",
  },
  teal: {
    dark: "#176B87",
    base: "#C4DFDF",
    light: "#E3F4F4",
  },
  mint: {
    dark: "#33BBC5",
    base: "#C5FFF8",
    light: "#d8f7ec",
  },
  grey: {
    dark: "#7D7C7C",
    base: "#C7C8CC",
    light: "#F1F0E8",
  },
  black: {
    dark: "#0C0C0C",
    base: "#b0b3b6",
    light: "#D8D9DA",
  },
};
