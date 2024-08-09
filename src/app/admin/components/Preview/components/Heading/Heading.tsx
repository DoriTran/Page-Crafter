import { FC } from "react";
import ComponentProps from "../type";

interface HeadingProps extends ComponentProps {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5";
  text?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const defaultHeading = {
  component: "Heading",
  props: {
    text: "",
    heading: "h1",
  },
};

const Heading: FC<HeadingProps> = ({ heading, text, onClick }) => {
  const Tag = heading || "h1";

  return <Tag onClick={onClick}>{text || `Heading - ${Tag}`}</Tag>;
};

export default Heading;
