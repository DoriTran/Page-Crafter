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
  if (!icon)
    return (
      <Button
        variant="contained"
        {...restButtonProps}
        sx={{
          backgroundColor: "#FFE0B5", // Default background color
          "&:hover": {
            backgroundColor: "#F8C794", // Hover background color
          },
          color: "#000", // Text color (optional)
          ...restButtonProps.sx,
        }}
      >
        {children}
      </Button>
    );
  return (
    <IconButton {...restButtonProps}>
      <ApIcon icon={icon} size={iconProps?.size || "1.5rem"} {...iconProps} />
    </IconButton>
  );
};

export default ApButton;
