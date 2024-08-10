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
import { Button } from "@mui/material";
import styles from "./Header.module.scss";
import { useAdminContext } from "../AdminContext/AdminContext";

const Header = () => {
  const {
    mousePosition,
    instances,
    dragging,
    canUndo,
    canRedo,
    undo,
    redo,
    saveContextData,
    clearBoard,
    importData,
    exportData,
  } = useAdminContext();

  const handleImport = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (result) {
            importData(result as string);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className={styles.header}>
      <div className={clsx(styles.wrapper, styles.left)}>
        <ApButton startIcon={<ApIcon icon={faSave} />} onClick={() => saveContextData()}>
          Save
        </ApButton>
        <ApButton disabled={!canUndo} icon={faUndo} onClick={() => undo()} />
        <ApButton disabled={!canRedo} icon={faRedo} onClick={() => redo()} />
      </div>
      <div className={styles.editorInfomation}>
        <ApChip icon={{ icon: faArrowPointer }} label={`x: ${mousePosition.x} , y: ${mousePosition.y}`} />
        <ApChip icon={{ icon: faHandBackFist }} label={`Dragging: ${dragging}`} />
        <ApChip icon={{ icon: faLayerGroup }} label={`Instances: ${Object.keys(instances).length}`} />
      </div>
      <div className={styles.wrapper}>
        <ApButton startIcon={<ApIcon icon={faFileArrowUp} />} onClick={handleImport}>
          Import
        </ApButton>
        <ApButton startIcon={<ApIcon icon={faFileArrowDown} />} onClick={() => exportData()}>
          Export
        </ApButton>
        <Button variant="contained" onClick={() => clearBoard()} color="error">
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Header;
