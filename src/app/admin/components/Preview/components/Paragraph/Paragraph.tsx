import { CSSProperties, FC, useMemo } from "react";

interface ParagraphProps {
  text?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

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
