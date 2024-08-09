// Base chip styles
export const chipStyle: object = {
  position: "relative",
  backgroundColor: "white",
  border: "1px solid #D8AE7E",
  color: "black",

  "&&:hover": {
    backgroundColor: "#FFE0B5",
  },

  "&.MuiButtonBase-root.Mui-focusVisible": {
    backgroundColor: "#FFE0B5",
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
