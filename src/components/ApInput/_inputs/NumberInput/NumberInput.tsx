import { FC, useMemo } from "react";
import clsx from "clsx";
import TextInput from "../TextInput/TextInput";
import styles from "./NumberInput.module.scss";
import ClassNameProps from "../../_interface/ClassNameProps";

interface NumberInputProps {
  defaultAppearance?: boolean;
  className?: string | ClassNameProps;
  [key: string]: any;
}

const NumberInput: FC<NumberInputProps> = ({ defaultAppearance, className, ...restProps }) => {
  const cln = useMemo<ClassNameProps | string | undefined>(() => {
    if (defaultAppearance) return className;
    if (typeof className !== "object") return clsx(styles.preventDefaultAppearance, className);
    return {
      ...className,
      input: clsx(styles.preventDefaultAppearance, className.input),
    };
  }, [className, defaultAppearance]);

  return <TextInput type="number" className={cln} {...restProps} />;
};

export default NumberInput;
