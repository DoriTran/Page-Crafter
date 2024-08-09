/* eslint-disable react-hooks/exhaustive-deps */
import { themes } from "@/utils/themes";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC, useMemo } from "react";

interface ApCheckboxProps {
  checked: boolean | any[];
  setChecked: React.Dispatch<React.SetStateAction<boolean | any[]>>;

  readonly value?: any; // Value of the checkbox → Undefined case will use label as value
  readonly label?: string; // Display checkbox label
  labelPlacement?: "end" | "start" | "top" | "bottom" | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>, changeValue: boolean) => void;
  disabled?: boolean;

  style?: object;
  size?: "small" | "medium" | number;
  color?: string;

  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;

  [key: string]: any;
}

const ApCheckbox: FC<ApCheckboxProps> = ({
  checked,
  setChecked,

  value,
  label,
  labelPlacement = "end",
  onChange,
  disabled,

  style,
  size = "medium",
  color = themes.color.primaryDark,

  icon,
  checkedIcon,

  ...restProps
}) => {
  const checkboxValue = useMemo<any>(() => value || label || null, []);
  const isChecked = useMemo<any>(() => {
    if (typeof checked === "boolean") return checked;
    if (Array.isArray(checked)) return checked.includes(checkboxValue);
    return false;
  }, [checked]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, changeValue: boolean) => {
    if (setChecked) {
      if (typeof checked === "boolean") {
        setChecked(!checked);
      } else if (Array.isArray(checked)) {
        if (checked.includes(checkboxValue)) {
          setChecked(checked.filter((item) => item !== checkboxValue));
        } else {
          setChecked([...checked, checkboxValue]);
        }
      }
    }
    onChange?.(event, changeValue);
  };

  const checkboxProps = useMemo(() => {
    return {
      size: typeof size === "string" ? size : undefined,
      icon,
      checkedIcon,
      sx: {
        ...(color && { color, "&.Mui-checked": { color } }),
        "& .MuiSvgIcon-root": {
          fontSize: typeof size === "number" ? size : undefined,
        },
        ...style,
      },
    };
  }, [checked]);

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      disabled={disabled}
      control={<Checkbox checked={isChecked} onChange={handleChange} {...checkboxProps} {...restProps} />}
    />
  );
};

export default ApCheckbox;
