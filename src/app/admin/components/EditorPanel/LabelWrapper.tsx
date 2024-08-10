import { FC } from "react";
import styles from "./EditorPanel.module.scss";

interface LabelWrapperProps {
  label?: string;
  children: React.ReactNode;
}

const LabelWrapper: FC<LabelWrapperProps> = ({ label, children }) => {
  return (
    <div className={styles.wrapper}>
      {label && <div className={styles.label}>{label}</div>}
      {children}
    </div>
  );
};

export default LabelWrapper;
