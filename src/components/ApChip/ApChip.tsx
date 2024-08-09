"use client";

import { Chip } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { themes } from "@/utils/themes";
import styles from "./ApChip.module.scss";
import { ApChipProps } from "./ChipInterface";
import { ApIcon } from "..";
import ChipIcons from "./ChipIcons";
import { chipColors, chipStyle, iconStyle, labelStyle, onlyIconStyle } from "./ChipStyle";

const ApChip: FC<ApChipProps> = ({
  icon,
  endIcons,
  hoverIcons,
  label,
  onClick,
  onDoubleClick,
  onRightClick,
  onMouseEnter,
  onMouseLeave,
  small,
  filled,
  color,
  style = {},
  sx = {},
  className,
  width = "fit-content",
  ...restProps
}) => {
  const [disableRipple, setDisableRipple] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  // Chip handlers
  const handleLeftClick = (event: any) => onClick?.(event);
  const handleRightClick = (event: any) => {
    event.preventDefault();
    onRightClick?.(event);
  };
  const handleMouseEnter = (event: any) => {
    onMouseEnter?.(event);
    setHover(true);
  };
  const handleMouseLeave = (event: any) => {
    onMouseLeave?.(event);
    setHover(false);
  };

  // Style calculations
  const iconColor = useMemo<string>(() => {
    const contrastColor = color ? chipColors[color].dark : themes.color.primaryDark;
    if (filled) return hover ? contrastColor : themes.color.priWhite;
    return contrastColor;
  }, [filled, color, hover]);

  // Hover handlers
  useEffect(() => {
    setHover(false);
  }, [endIcons, hoverIcons]);

  return (
    <Chip
      variant="outlined"
      icon={
        icon && <ApIcon icon={icon.icon} Icon={icon.Icon} size={icon.size || small ? 15 : 20} color={iconColor} />
      }
      onClick={handleLeftClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={handleRightClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={typeof className === "object" ? className?.chip : className}
      {...{ disableRipple }}
      label={
        <>
          <div
            className={clsx(styles.labelContainer, typeof className === "object" && className.container)}
            style={{ ...style?.label, width }}
          >
            {label && (
              <div className={clsx(styles.labelWrapper, typeof className === "object" && className.label)}>
                {label}
              </div>
            )}
            <ChipIcons
              icons={endIcons}
              rippleControl={setDisableRipple}
              unmount={hoverIcons && hover}
              small={small}
              color={iconColor}
              style={style.endIcons}
            />
          </div>
          <ChipIcons
            hover
            icons={hoverIcons}
            rippleControl={setDisableRipple}
            small={small}
            color={iconColor}
            style={{
              minWidth: hover ? (small ? "20px" : "29px") : 0,
              width: hover ? "auto" : 0,
              opacity: hover ? 1 : 0,
              ...(color && { backgroundColor: chipColors[color].base }),
              ...style.hoverIcons,
            }}
          />
        </>
      }
      sx={{
        position: "relative",
        height: small ? "25px" : "30px",
        ...chipStyle,

        ...(color && {
          backgroundColor: chipColors[color].light,
          borderColor: chipColors[color].dark,
          color: chipColors[color].dark,

          "&&:hover": {
            backgroundColor: chipColors[color].base,
          },
        }),

        ...(filled && {
          border: "none",
          backgroundColor: color ? chipColors[color].dark : themes.color.primaryDark,
          color: hover ? (color ? chipColors[color].dark : themes.color.primaryDark) : themes.color.priWhite,

          "&&:hover": {
            backgroundColor: color ? chipColors[color].base : themes.color.primary,
          },
        }),

        ...(icon && label && iconStyle),
        ...(icon && !label && onlyIconStyle),
        ...(label && labelStyle),

        ...sx,
        ...style,
      }}
      {...restProps}
    />
  );
};

export default ApChip;
