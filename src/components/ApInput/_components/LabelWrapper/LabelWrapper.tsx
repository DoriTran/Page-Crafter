import clsx from "clsx";
import { FC } from "react";
import useTrueWidth from "@/hooks/useTrueWidth";
import styles from "./LabelWrapper.module.scss";
import ClassNameProps from "../../_interface/ClassNameProps";

interface LabelWrapperProps {
  children: React.ReactNode;
  label?: string;
  style?: object;
  width: string | number;
  className?: ClassNameProps;
}

const LabelWrapper: FC<LabelWrapperProps> = ({ children, label, style = {}, width, className }) => {
  const trueWidth = useTrueWidth(width);

  if (!label) return children;
  return (
    <div className={styles.container} style={{ width: trueWidth }}>
      <div style={style} className={clsx(styles.label, className?.label)}>
        {label}
      </div>
      {children}
    </div>
  );
};

LabelWrapper.displayName = "Label";
export default LabelWrapper;
