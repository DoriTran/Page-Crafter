import { defaultHeading } from "./Heading/Heading";
import { defaultParagraph } from "./Paragraph/Paragraph";
import { defaultButton } from "./Button/Button";
import { defaultCheckbox } from "./Checkbox/Checkbox";
import { defaultRadioGroup } from "./RadioGroup/RadioGroup";
import { defaultSelect } from "./Select/Select";
import { defaultInputField } from "./InputField/InputField";
import { defaultImageProps } from "./Image/Image";

export { default as Container } from "./Container/Container";
export { default as Heading } from "./Heading/Heading";
export { default as Paragraph } from "./Paragraph/Paragraph";
export { default as Button } from "./Button/Button";
export { default as Checkbox } from "./Checkbox/Checkbox";
export { default as RadioGroup } from "./RadioGroup/RadioGroup";
export { default as Select } from "./Select/Select";
export { default as InputField } from "./InputField/InputField";
export { ImageComponent as Image } from "./Image/Image";

export { default as HighlightSelected } from "./HighlightSelected/HighlightSelected";

export const getDefaultProps = (type: string): object => {
  switch (type) {
    case "Heading":
      return defaultHeading;
    case "Paragraph":
      return defaultParagraph;
    case "Button":
      return defaultButton;
    case "Checkbox":
      return defaultCheckbox;
    case "RadioGroup":
      return defaultRadioGroup;
    case "Select":
      return defaultSelect;
    case "InputField":
      return defaultInputField;
    case "Image":
      return defaultImageProps;
    default:
      return { component: "Unknown", props: {} };
  }
};
