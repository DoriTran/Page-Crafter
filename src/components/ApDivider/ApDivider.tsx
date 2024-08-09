import { Divider } from "@mui/material";
import { FC, useMemo } from "react";

interface ApDividerProps {
  vertical?: boolean;
  thickness?: number;
  style?: object;
  sx?: object;
  [key: string]: any;
}

const ApDivider: FC<ApDividerProps> = ({ vertical, thickness, style, sx, ...restProps }) => {
  const styles = useMemo<object | undefined>(() => {
    if (!thickness) return style;
    return {
      ...style,
      ...(vertical ? { borderRightWidth: thickness } : { borderBottomWidth: thickness }),
    };
  }, [thickness, vertical, style]);

  return <Divider orientation={vertical ? "vertical" : "horizontal"} sx={{ ...styles, ...sx }} {...restProps} />;
};

export default ApDivider;
