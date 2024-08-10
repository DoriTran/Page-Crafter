/* eslint-disable no-alert */

"use client";

import { ApButton } from "@/components";
import { FC } from "react";
import { usePathname } from "next/navigation";
import ComponentProps from "../type";

interface ButtonProps extends ComponentProps {
  text?: string;
  alertMessage?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const defaultButton = {
  text: "",
  alertMessage: "",
};

const Button: FC<ButtonProps> = ({ onClick, text, alertMessage }) => {
  const pathname = usePathname();
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (pathname === "/admin") onClick?.(event);
    else window.alert(alertMessage);
  };

  return <ApButton onClick={handleClick}>{text || "Button"}</ApButton>;
};

export default Button;
