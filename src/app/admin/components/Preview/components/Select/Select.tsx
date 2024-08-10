"use client";

import { FC, useEffect, useState } from "react";
import { ApSelect } from "@/components";
import { usePathname } from "next/navigation";
import ComponentProps from "../type";

interface SelectProps extends ComponentProps {
  value?: any;
  options?: string[];
}

export const defaultSelect = {
  value: [],
  options: [],
  placeholder: "Select",
};

const Select: FC<SelectProps> = ({ value, options }) => {
  const pathname = usePathname();
  const [selectValue, setValue] = useState<any[]>(value);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return <ApSelect value={selectValue} options={options} {...(pathname !== "/admin" && { setValue })} />;
};

export default Select;
