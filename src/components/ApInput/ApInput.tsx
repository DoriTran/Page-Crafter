import { ForwardedRef, forwardRef } from "react";
import Input from "./Input";

interface ClassNameProps {
  input?: string;
  label?: string;
  startAdornment?: string;
  endAdornment?: string;
}

interface StyleProps {
  labelStyle?: object;
  startAdornmentStyle?: object;
  endAdornmentStyle?: object;
  [key: string]: any;
}

interface ApInputProps {
  // Label properties
  label?: string;
  width?: string | number;
  style?: StyleProps;
  className?: string | ClassNameProps;
  // Rest properties
  [key: string]: any;
}

const ApInput = forwardRef<HTMLInputElement, ApInputProps>(
  (
    { startAdornment, endAdornment, width = 100, ...restProps }: ApInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Input
        ref={ref}
        startAdornment={startAdornment !== undefined}
        endAdornment={endAdornment !== undefined}
        width={width}
        {...restProps}
      />
    );
  },
);
ApInput.displayName = "ApInput";

export default ApInput;
