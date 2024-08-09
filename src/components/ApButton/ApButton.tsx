import { Button, IconButton } from "@mui/material";
import { FC } from "react";
import ApIcon from "../ApIcon/ApIcon";

interface ApButtonProps {
  icon?: any;
  iconProps?: { [key: string]: any };
  disabled?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

const ApButton: FC<ApButtonProps> = ({ icon, iconProps, disabled, children, ...restButtonProps }) => {
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
        disabled={disabled}
      >
        {children}
      </Button>
    );
  return (
    <IconButton disabled={disabled} {...restButtonProps}>
      <ApIcon
        icon={icon}
        size={iconProps?.size || "1.5rem"}
        color={disabled ? "#a4a4a4" : "black"}
        {...iconProps}
      />
    </IconButton>
  );
};

export default ApButton;
