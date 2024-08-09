"use client";

import { FC, useMemo, useRef } from "react";
import CustomScrollbar from "./CustomScrollbar";

type OverflowType = "visible" | "hidden" | "scroll" | "auto" | "inherit" | "initial" | "unset";

interface AppScrollbarProps {
  maxWidth?: string;
  maxHeight?: string;
  hidden?: boolean;
  horizontal?: OverflowType;
  vertical?: OverflowType;
  size?: number;
  color?: string;
  style?: object;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const AppScrollbar: FC<AppScrollbarProps> = ({
  maxWidth = "100vw",
  maxHeight = "100vh",
  hidden,
  horizontal,
  vertical,
  size = 8,
  color,
  style,
  className,
  children,
  ...restProps
}) => {
  const scrollbarRef = useRef(null);
  const scrollbarColor = useMemo<string>(() => {
    return color || "black";
  }, [color]);

  return (
    <CustomScrollbar
      ref={scrollbarRef}
      className={className}
      style={{
        overflowX: horizontal || "auto",
        overflowY: vertical || "auto",
        ...(!className && { maxWidth }),
        ...(!className && { maxHeight }),
        ...style,
      }}
      display={hidden ? "none" : "unset"}
      size={size}
      color={scrollbarColor}
      {...restProps}
    >
      {children}
    </CustomScrollbar>
  );
};

export default AppScrollbar;
