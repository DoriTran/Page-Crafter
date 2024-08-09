"use client";

import React, { FC, useState } from "react";
import { ApScrollbar } from "@/components";
import { Menu, MenuItem, Fade, PopoverOrigin } from "@mui/material";
import styles from "./ApMenu.module.scss";

interface ApMenuStyle {
  menu: object;
  option: object;
  header: object;
  footer: object;
  [key: string]: any;
}

interface MenuOption {
  value: any;
  label: React.ReactNode | string | number;
}

interface ApMenuProps {
  anchor: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;

  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  style?: ApMenuStyle;
  maxHeight?: string;
  autoFocus?: boolean;
  selected?: number;

  onOpen?: (event: any) => void;
  onClose?: () => void;

  noOptionToShowText?: string;
  options?: MenuOption[];

  disabled?: boolean;
  noUnmountWhenClose?: boolean;

  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const ApMenu: FC<ApMenuProps> = ({
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
  selected,
  onOpen,
  onClose,

  noOptionToShowText = "No options to show",
  options,
  disabled,
  noUnmountWhenClose,

  header,
  footer,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onOpen?.(event);
    setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (disabled) return;
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
        <Menu
          MenuListProps={{
            "aria-labelledby": "fade-button",
            sx: style?.menu,
          }}
          autoFocus={autoFocus}
          anchorEl={anchorEl}
          open={noUnmountWhenClose || isOpen}
          onClose={handleClose}
          TransitionComponent={Fade}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
          sx={{ ...(noUnmountWhenClose && !isOpen && { display: "none" }), ...style }}
          disableAutoFocusItem
        >
          <ApScrollbar hidden maxHeight={maxHeight}>
            <div style={style?.header}>{header}</div>
            {options?.length === 0 && <div className={styles.noOptionToShow}>{noOptionToShowText}</div>}
            {options?.map((eachItem: MenuOption, index: number) => (
              <MenuItem
                key={index}
                onClick={() => setAnchorEl(null)}
                selected={index === selected}
                sx={style?.option}
              >
                {eachItem.label}
              </MenuItem>
            ))}
            <div style={style?.footer}>{footer}</div>
          </ApScrollbar>
        </Menu>
      )}
    </>
  );
};

export default ApMenu;
