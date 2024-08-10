"use client";

import { FC, useEffect, useState } from "react";
import { ApCheckbox } from "@/components";
import { usePathname } from "next/navigation";
import ComponentProps from "../type";

interface CheckboxProps extends ComponentProps {
  checked?: boolean;
  label?: string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
  disabled?: boolean;
}

export const defaultCheckbox = {
  checked: false,
  label: "Checkbox",
  labelPlacement: "end",
  disabled: false,
};

const Checkbox: FC<CheckboxProps> = ({ checked, label, labelPlacement = "end", disabled }) => {
  const pathname = usePathname();
  // const [isChecked, setIsChecked] = useState<boolean | any[]>(checked as boolean);
  // useEffect(() => {
  //   setIsChecked(checked as boolean);
  // }, [checked]);
  const [isChecked, setIsChecked] = useState<boolean | any[]>(true as boolean);

  return (
    <ApCheckbox
      checked={isChecked}
      setChecked={setIsChecked}
      label="Lmao"
      // {...(pathname !== "/admin" && { setChecked: setIsChecked })}
      // label={label}
      // labelPlacement={labelPlacement}
      // disabled={disabled}
    />
  );
};

export default Checkbox;
