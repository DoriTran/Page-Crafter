import { CSSProperties, FC, useMemo } from "react";
import ComponentProps from "../type";

interface ParagraphProps extends ComponentProps {
  text?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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

const Paragraph: FC<ParagraphProps> = ({ text, fontSize, bold, italic, underline, onClick }) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      fontSize,
      fontWeight: bold ? "bold" : "normal",
      fontStyle: italic ? "italic" : "normal",
      textDecoration: underline ? "underline" : "none",
    };
  }, [fontSize, bold, italic, underline]);

  return (
    <div style={styles} onClick={onClick}>
      {text || "New paragraph"}
    </div>
  );
};

export default Paragraph;
