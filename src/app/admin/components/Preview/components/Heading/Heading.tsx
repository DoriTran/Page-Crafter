import { FC } from "react";

interface HeadingProps {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5";
  text?: string;
}

const Heading: FC<HeadingProps> = ({ heading, text }) => {
  const Tag = heading || "h1";

  return <Tag>{text}</Tag>;
};

export default Heading;
