import { FC } from "react";
import clsx from "clsx";
import useTrueWidth from "@/hooks/useTrueWidth";
import Adornment, { AdornmentProps } from "./Adornment";
import ClassNameProps from "../../_interface/ClassNameProps";
import styles from "./Adornment.module.scss";

interface AdornmentWrapperProps {
  children: React.ReactNode;
  startAdornment?: AdornmentProps;
  endAdornment?: AdornmentProps;
  startAdornmentStyle?: object;
  endAdornmentStyle?: object;
  width: string | number;
  className?: ClassNameProps;
}

const AdornmentWrapper: FC<AdornmentWrapperProps> = ({
  children,
  startAdornment,
  endAdornment,
  startAdornmentStyle = {},
  endAdornmentStyle = {},
  width,
  className,
}) => {
  const trueWidth = useTrueWidth(width);

  if ((!startAdornment && !endAdornment) || (typeof width === "number" && width < 70)) return children;
  return (
    <div className={styles.wrapper} style={{ width: trueWidth }}>
      {startAdornment && (
        <div
          className={clsx(
            styles.startAdornment,
            className?.startAdornment,
            startAdornment.onClick && styles.clickable,
          )}
          style={startAdornmentStyle}
        >
          {typeof startAdornment === "object" ? (
            <Adornment clickable={startAdornment.onClick} {...startAdornment} />
          ) : (
            startAdornment
          )}
        </div>
      )}
      {children}
      {endAdornment && (
        <div
          className={clsx(styles.endAdornment, className?.endAdornment, endAdornment.onClick && styles.clickable)}
          style={{
            ...(typeof width === "string" && width.includes("%") && { left: `calc(${width} - 45px)` }),
            ...endAdornmentStyle,
          }}
        >
          {typeof endAdornment === "object" ? (
            <Adornment clickable={endAdornment.onClick} {...endAdornment} />
          ) : (
            endAdornment
          )}
        </div>
      )}
    </div>
  );
};

export default AdornmentWrapper;
