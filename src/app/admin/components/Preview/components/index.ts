import { defaultHeading } from "./Heading/Heading";
import { defaultParagraph } from "./Paragraph/Paragraph";
import { defaultButton } from "./Button/Button";
import { defaultCheckbox } from "./Checkbox/Checkbox";

export { default as Container } from "./Container/Container";
export { default as Heading } from "./Heading/Heading";
export { default as Paragraph } from "./Paragraph/Paragraph";
export { default as Button } from "./Button/Button";
export { default as Checkbox } from "./Checkbox/Checkbox";

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
    default:
      return { component: "Unknown", props: {} };
  }
};
