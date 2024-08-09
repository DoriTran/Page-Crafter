import { Button, IconButton } from "@mui/material";
import { FC } from "react";
import ApIcon from "../ApIcon/ApIcon";

interface ApButtonProps {
  icon?: any;
  iconProps?: { [key: string]: any };
  children?: React.ReactNode;
  [key: string]: any;
}

const ApButton: FC<ApButtonProps> = ({ icon, iconProps, children, ...restButtonProps }) => {
  if (!icon) return <Button {...restButtonProps}>{children}</Button>;
  return (
    <IconButton {...restButtonProps}>
      <ApIcon icon={icon} size={iconProps?.size || "2rem"} {...iconProps} />
    </IconButton>
  );
};

export default ApButton;
