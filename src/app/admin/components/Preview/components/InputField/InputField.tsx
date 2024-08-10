"use client";

import { FC, useEffect, useState } from "react";
import ComponentProps from "../type";

interface InputFieldProps extends ComponentProps {
  type?: string;
  value?: any;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  fontSize?: number;
}

export const defaultInputField = {
  type: "text",
  value: "",
  placeholder: "Default placeholder",
  readonly: false,
  width: "250px",
  height: "40px",
  fontSize: "16px",
};

const InputField: FC<InputFieldProps> = ({
  type,
  value,
  placeholder,
  readOnly,
  disabled,
  width,
  height,
  fontSize,
}) => {
  const [inputValue, setValue] = useState<any>(value);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <input
      type={type}
      value={inputValue}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      style={{ width, height, fontSize }}
    />
  );
};

export default InputField;
