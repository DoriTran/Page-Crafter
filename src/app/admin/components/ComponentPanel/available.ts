import {
  faInbox,
  faParagraph,
  faStop,
  faCheckSquare,
  faDotCircle,
  faCaretDown,
  faImage,
  faPen,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";

type Component = {
  type: string;
  icon: any;
};

const components: Component[] = [
  { type: "Container", icon: faInbox },
  { type: "Heading", icon: faHeading },
  { type: "Paragraph", icon: faParagraph },
  { type: "Button", icon: faStop },
  { type: "Checkbox", icon: faCheckSquare },
  { type: "RadioGroup", icon: faDotCircle },
  { type: "Select", icon: faCaretDown },
  { type: "InputField", icon: faPen },
  { type: "Image", icon: faImage },
];

export default components;
