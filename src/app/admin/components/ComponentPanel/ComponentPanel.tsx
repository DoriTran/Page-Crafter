import styles from "./ComponentPanel.module.scss";
import Component from "./Component";
import components from "./available";

const ComponentPanel = () => {
  return (
    <div className={styles.leftPanel}>
      {components.map((each, index) => (
        <Component key={index} type={each.type} icon={each.icon} />
      ))}
    </div>
  );
};

export default ComponentPanel;
