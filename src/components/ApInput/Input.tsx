import { ForwardedRef, forwardRef } from "react";
import TextInput from "./TextInput";

interface InputProps {
  type: "text";
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  [key: string]: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, value, setValue, onChange, ...restProps }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    switch (type) {
      // case "date":
      //   return <DateInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      // case "datetime":
      //   return <DateTimeInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      // case "file":
      //   return <FileInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      // case "image":
      //   return <ImageInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      default:
        return (
          <TextInput ref={ref} type={type} value={value} setValue={setValue} onChange={onChange} {...restProps} />
        );
    }
  },
);
Input.displayName = "Input";

export default Input;
