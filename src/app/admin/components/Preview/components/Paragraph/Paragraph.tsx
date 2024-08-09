import { CSSProperties, FC, useMemo } from "react";
import ComponentProps from "../type";

interface ParagraphProps extends ComponentProps {
  text?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export const defaultParagraph = {
  component: "Paragraph",
  props: {
    text: "",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "italic",
    textDecoration: "none",
  },
};

const Paragraph: FC<ParagraphProps> = ({ text, fontSize, bold, italic, underline }) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      fontSize,
      fontWeight: bold ? "bold" : "normal",
      fontStyle: italic ? "italic" : "normal",
      textDecoration: underline ? "underline" : "none",
    };
  }, [fontSize, bold, italic, underline]);

  return <div style={styles}>{text}</div>;
};

export default Paragraph;
