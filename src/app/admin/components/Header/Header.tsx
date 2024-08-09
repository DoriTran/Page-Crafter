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
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <ApButton startIcon={<ApIcon icon={faSave} />}>Save</ApButton>
        <ApButton icon={faUndo} />
        <ApButton icon={faRedo} />
      </div>
      <div className={styles.editorInfomation}>
        <ApChip icon={faArrowPointer} label="Mouse: (160 , 160)" />
        <ApChip icon={faHandBackFist} label="Dragging: None" />
        <ApChip icon={faLayerGroup} label="Instances: 3" />
      </div>
      <div className={styles.wrapper}>
        <ApButton startIcon={<ApIcon icon={faFileArrowUp} />}>Import</ApButton>
        <ApButton startIcon={<ApIcon icon={faFileArrowDown} />}>Export</ApButton>
      </div>
    </div>
  );
};

export default Header;
