"use client";

import { FC, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextInput from "../TextInput/TextInput";
import AdornmentWrapper from "../../_components/AdornmentWrapper/AdornmentWrapper";

interface PasswordInputProps {
  [key: string]: any;
}

const PasswordInput: FC<PasswordInputProps> = ({ ...restProps }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <AdornmentWrapper
      endAdornment={{
        Icon: showPassword ? Visibility : VisibilityOff,
        onClick: () => togglePasswordVisibility(),
      }}
    >
      <TextInput type={showPassword ? "text" : "password"} {...restProps} />
    </AdornmentWrapper>
  );
};

export default PasswordInput;
