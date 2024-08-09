import clsx from "clsx";
import { ForwardedRef, forwardRef, useMemo } from "react";
import styles from "./TextInput.module.scss";
import ClassNameProps from "../../_interface/ClassNameProps";

interface TextInputProps {
  type: string;

  // Basic input logic
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;

  // Custom input event
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: (event: React.KeyboardEventHandler<HTMLInputElement>) => void;
  onEnter?: (event: React.KeyboardEventHandler<HTMLInputElement>) => void;
  onEsc?: (event: React.KeyboardEventHandler<HTMLInputElement>) => void;

  // Input accessory
  startAdornment?: boolean;
  endAdornment?: boolean;

  // Styling properties
  width: number | string;
  height?: number;
  align?: string;
  verticalAlign?: string;
  isCorrect?: boolean;
  isError?: boolean;
  style?: object;
  className?: string | ClassNameProps;

  // The rest properties
  [key: string]: any;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,
      value,
      setValue,
      onChange,
      onKeyDown,
      onEnter,
      onEsc,
      startAdornment,
      endAdornment,
      width,
      height = 35,
      align = "left",
      verticalAlign = "middle",
      isCorrect,
      isError,
      style = {},
      className,
      ...restProps
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const handleKeyDown = (event: any) => {
      onKeyDown?.(event);
      if (onEnter && event.key === "Enter") {
        event.preventDefault();
        if (event.shiftKey) setValue(`${value}\n`);
        else onEnter?.(event);
      } else if (onEsc && event.key === "Escape") {
        onEsc?.(event);
      }
    };

    const handleOnChange = (event: any) => {
      onChange?.(event);
      setValue(event.target.value);
    };

    const inputStyle = useMemo<object>(() => {
      return { ...style, textAlign: align, verticalAlign, width, height };
    }, [width, height, align, verticalAlign, style]);

    return (
      <input
        ref={ref}
        type={type}
        value={value}
        style={inputStyle}
        className={clsx(
          styles.input,
          isCorrect && styles.correct,
          isError && styles.error,
          typeof className === "string" ? className : className?.input,
          startAdornment && styles.inputWithStartAdornment,
          endAdornment && styles.inputWithEndAdornment,
        )}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        {...restProps}
      />
    );
  },
);

TextInput.displayName = "TextInput";
export default TextInput;
