import styles from "./ComponentPanel.module.scss";
import components from "./availableComponents";

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
