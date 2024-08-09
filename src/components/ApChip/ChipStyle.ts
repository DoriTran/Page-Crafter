// Base chip styles
export const chipStyle: object = {
  position: "relative",
  backgroundColor: "white",
  border: "1px solid black",
  color: "black",

  "&&:hover": {
    backgroundColor: "grey",
  },

  "&.MuiButtonBase-root.Mui-focusVisible": {
    backgroundColor: "grey",
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
