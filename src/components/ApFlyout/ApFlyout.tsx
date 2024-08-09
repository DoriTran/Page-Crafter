"use client";

import React, { FC, useState } from "react";
import { ApScrollbar } from "@/components";
import { Fade, PopoverOrigin, Popover } from "@mui/material";

interface FlyoutStyle {
  children: object;
  [key: string]: any;
}

interface ApFlyoutProps {
  anchor: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;

  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  style?: FlyoutStyle;
  maxHeight?: string;
  autoFocus?: boolean;

  onOpen?: (event: any) => void;
  onClose?: () => void;

  noUnmountWhenClose?: boolean;

  children?: React.ReactNode;
}

const ApFlyout: FC<ApFlyoutProps> = ({
  anchor,
  anchorOrigin = {
    vertical: "center",
    horizontal: "center",
  },
  transformOrigin = {
    vertical: "top",
    horizontal: "left",
  },
  isOpen,
  setIsOpen,
  style,
  maxHeight = "75vh",
  autoFocus = false,
  onOpen,
  onClose,

  noUnmountWhenClose,
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    onOpen?.(event);
    setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    onClose?.();
    setIsOpen?.(false);
  };

  return (
    <>
      {React.cloneElement(anchor, {
        onClick: handleOpen,
        style: { cursor: "pointer" },
      })}
      {anchorEl && (
        <Popover
          autoFocus={autoFocus}
          anchorEl={anchorEl}
          open={noUnmountWhenClose || isOpen}
          onClose={handleClose}
          TransitionComponent={Fade}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
          sx={{ ...(noUnmountWhenClose && !isOpen && { display: "none" }), ...style }}
        >
          <ApScrollbar hidden maxHeight={maxHeight}>
            <div style={style?.children}>{children}</div>
          </ApScrollbar>
        </Popover>
      )}
    </>
  );
};

export default ApFlyout;
