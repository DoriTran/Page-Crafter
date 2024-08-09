import { ApScrollbar } from "@/components";
import styles from "./ComponentPanel.module.scss";
import Component from "./Component";
import components from "./available";

const ComponentPanel = () => {
  return (
    <ApScrollbar maxHeight="calc(100vh - 70px)" className={styles.leftPanel}>
      {components.map((each, index) => (
        <Component key={index} type={each.type} icon={each.icon} />
      ))}
    </ApScrollbar>
  );
};

export default ComponentPanel;
