import { themes } from "@/utils/themes";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface Option {
  // Priority value → If value is undefined then use label as value
  readonly label?: string;
  readonly value?: any;
  disabled?: boolean;
}

interface ApRadioGroupProps {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  defaultValue?: string;

  options: Option[];
  onChange?: (value: any) => void;

  labelPlacement?: "top" | "bottom" | "start" | "end";
  horizontal?: boolean;

  style?: object;
  gap?: number | string;
  size?: "small" | "medium" | number;
  color?: string;

  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;

  [key: string]: any;
}

const ApRadioGroup: FC<ApRadioGroupProps> = ({
  value,
  setValue,
  defaultValue,
  options,
  onChange,
  labelPlacement = "end",
  horizontal,
  style,
  gap = "5px",
  size = "medium",
  color = themes.color.primaryDark,
  icon,
  checkedIcon,

  ...restProps
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue?.(event.target.value);
    onChange?.(event);
  };

  return (
    <RadioGroup
      value={value}
      onChange={handleChange}
      defaultValue={defaultValue}
      sx={{ gap: typeof gap === "number" ? `${gap}px` : gap, width: horizontal ? undefined : "100%" }}
      row={horizontal}
    >
      {options.map((each, index) => (
        <FormControlLabel
          key={index}
          value={each.value || each.label}
          label={each.label}
          labelPlacement={labelPlacement}
          disabled={each.disabled}
          control={
            <Radio
              size={typeof size === "string" ? size : undefined}
              icon={icon}
              checkedIcon={checkedIcon}
              sx={{
                ...(color && { color, "&.Mui-checked": { color } }),
                "& .MuiSvgIcon-root": {
                  fontSize: typeof size === "number" ? size : undefined,
                },
                ...style,
              }}
              {...restProps}
            />
          }
        />
      ))}
    </RadioGroup>
  );
};

export default ApRadioGroup;
