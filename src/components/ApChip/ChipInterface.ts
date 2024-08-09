import { FC } from "react";

interface IconProps {
  icon?: any;
  Icon?: FC<any>;
  size?: number;
}

interface ActionIconsProps {
  icons?: any[];
  hovers?: any[];
  actions?: ((...args: any[]) => any)[];
  sizes?: number[];
}

type ApChipColors = string | "green" | "pink" | "purple" | "red" | "orange" | "yellow" | "blue" | "black";

interface ApChipStyles {
  label?: object;
  endIcons?: object;
  hoverIcons?: object;
  [key: string]: any;
}

interface ChipClassName {
  container?: string;
  label?: string;
  chip?: string;
}

export interface ApChipProps {
  icon?: IconProps;
  endIcons?: ActionIconsProps;
  hoverIcons?: ActionIconsProps;
  label?: string;
  onClick?: (event: any) => void;
  onDoubleClick?: (event: any) => void;
  onRightClick?: (event: any) => void;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  small?: boolean;
  filled?: boolean;
  color?: ApChipColors | string;
  style?: ApChipStyles;
  sx?: object;
  className?: ChipClassName | string; // string type → chip classname
  width?: string | number;
  [key: string]: any;
}

export interface ChipIconsProps {
  icons?: ActionIconsProps;
  rippleControl: React.Dispatch<React.SetStateAction<boolean>>;
  unmount?: boolean;
  hover?: boolean;
  small?: boolean;
  color?: ApChipColors | string;
  style?: object;
}
