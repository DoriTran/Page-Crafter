import { ApButton, ApChip, ApIcon } from "@/components";
import {
  faArrowPointer,
  faFileArrowDown,
  faFileArrowUp,
  faHandBackFist,
  faLayerGroup,
  faRedo,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import clsx from "clsx";
import styles from "./Header.module.scss";
import { Position } from "../Preview/Preview";

interface HeaderProps {
  mousePosition: Position;
}

const Header: FC<HeaderProps> = ({ mousePosition }) => {
  return (
    <div className={styles.header}>
      <div className={clsx(styles.wrapper, styles.left)}>
        <ApButton startIcon={<ApIcon icon={faSave} />}>Save</ApButton>
        <ApButton icon={faUndo} />
        <ApButton icon={faRedo} />
      </div>
      <div className={styles.editorInfomation}>
        <ApChip icon={{ icon: faArrowPointer }} label={`x: ${mousePosition.x} , y: ${mousePosition.y}`} />
        <ApChip icon={{ icon: faHandBackFist }} label="Dragging: None" />
        <ApChip icon={{ icon: faLayerGroup }} label="Instances: 3" />
      </div>
      <div className={styles.wrapper}>
        <ApButton startIcon={<ApIcon icon={faFileArrowUp} />}>Import</ApButton>
        <ApButton startIcon={<ApIcon icon={faFileArrowDown} />}>Export</ApButton>
      </div>
    </div>
  );
};

export default Header;
