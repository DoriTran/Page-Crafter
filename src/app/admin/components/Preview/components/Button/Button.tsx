/* eslint-disable no-alert */
import { ApButton } from "@/components";
import { FC } from "react";

interface ButtonProps {
  text?: string;
  alertMessage?: string;
}

const Button: FC<ButtonProps> = ({ text, alertMessage }) => {
  return <ApButton onClick={() => window.alert(alertMessage)}>{text}</ApButton>;
};

export default Button;
