import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { ApIcon } from "..";
import styles from "./ApChip.module.scss";
import { ChipIconsProps } from "./ChipInterface";

const ChipIcons: FC<ChipIconsProps> = ({
  icons,
  rippleControl,
  unmount = false,
  hover = false,
  small,
  color,
  style = {},
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setHoveredIndex(null);
  }, [icons]);

  if (!icons || unmount) return null;
  return (
    <div
      className={clsx(styles.actionWrapper, {
        [styles.hoverWrapper]: hover,
      })}
      style={{
        height: small ? "22px" : "27px",
        ...style,
      }}
    >
      {icons?.icons?.map((eachIcon, index) => (
        <ApIcon
          key={index}
          icon={hoveredIndex === index && icons?.hovers?.[hoveredIndex] ? icons?.hovers?.[hoveredIndex] : eachIcon}
          size={typeof icons.sizes === "number" ? icons.sizes : icons?.sizes?.[index] || small ? 15 : 20}
          color={color}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={(event: any) => {
            event.stopPropagation();
            rippleControl(true);
            icons?.actions?.[index]();
            setTimeout(() => rippleControl(false));
          }}
        />
      ))}
    </div>
  );
};

export default ChipIcons;
