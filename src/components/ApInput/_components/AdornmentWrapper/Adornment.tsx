import { ApIcon } from "@/components";
import { themes } from "@/utils/themes";
import { FC } from "react";
import clsx from "clsx";
import styles from "./Adornment.module.scss";

export interface AdornmentProps {
  size?: number;
  color?: string;
  clickable?: boolean;
  [key: string]: any;
}

const Adornment: FC<AdornmentProps> = ({
  size = 25,
  color = themes.color.primaryDark,
  clickable = false,
  ...restProps
}) => {
  return <ApIcon size={size} color={color} className={clsx(clickable && styles.clickable)} {...restProps} />;
};

export default Adornment;
