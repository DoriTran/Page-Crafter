"use client";

import { FC, useEffect, useState } from "react";
import { ApRadioGroup } from "@/components";
import { Option } from "@/components/ApRadioGroup/ApRadioGroup";
import ComponentProps from "../type";

interface RadioGroupProps extends ComponentProps {
  value?: string;
  options?: Option[];
  labelPlacement?: "top" | "bottom" | "start" | "end";
  horizontal?: boolean;
  gap?: number;
}

export const defaultRadioGroup = {
  value: "Default",
  options: [{ label: "Default", disabled: false }],
};

const RadioGroup: FC<RadioGroupProps> = ({ value, options, labelPlacement = "end", horizontal, gap }) => {
  const [radioValue, setValue] = useState<any>(value);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <ApRadioGroup
      value={radioValue}
      setValue={setValue}
      options={options || []}
      labelPlacement={labelPlacement}
      horizontal={horizontal}
      gap={gap}
    />
  );
};

export default RadioGroup;
