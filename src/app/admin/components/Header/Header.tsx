"use client";

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
import clsx from "clsx";
import styles from "./Header.module.scss";
import { useAdminContext } from "../AdminContext/AdminContext";

const Header = () => {
  const { mousePosition, instances, selectedId, isDragging } = useAdminContext();

  return (
    <div className={styles.header}>
      <div className={clsx(styles.wrapper, styles.left)}>
        <ApButton startIcon={<ApIcon icon={faSave} />}>Save</ApButton>
        <ApButton icon={faUndo} />
        <ApButton icon={faRedo} />
      </div>
      <div className={styles.editorInfomation}>
        <ApChip icon={{ icon: faArrowPointer }} label={`x: ${mousePosition.x} , y: ${mousePosition.y}`} />
        <ApChip
          icon={{ icon: faHandBackFist }}
          label={`Dragging: ${isDragging ? instances[selectedId].component : "None"}`}
        />
        <ApChip icon={{ icon: faLayerGroup }} label={`Instances: ${Object.keys(instances).length}`} />
      </div>
      <div className={styles.wrapper}>
        <ApButton startIcon={<ApIcon icon={faFileArrowUp} />}>Import</ApButton>
        <ApButton startIcon={<ApIcon icon={faFileArrowDown} />}>Export</ApButton>
      </div>
    </div>
  );
};

export default Header;
