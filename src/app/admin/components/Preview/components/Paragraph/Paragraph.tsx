import { CSSProperties, FC, useMemo } from "react";
import ComponentProps from "../type";
import css from "./Paragraph.module.scss";

interface ParagraphProps extends ComponentProps {
  text?: string;
  fontSize?: number;
  fontWeight?: number;
  textDecoration?: string;
  fontStyle?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const defaultParagraph = {
  component: "Paragraph",
  props: {
    text: "",
    fontSize: "16px",
    fontWeight: 400,
    textDecoration: "none",
    fontStyle: "none",
  },
};

const Paragraph: FC<ParagraphProps> = ({ text, fontSize, fontWeight, textDecoration, fontStyle, onClick }) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      fontSize: typeof fontSize === "number" ? fontSize : `${fontSize}px`,
      fontWeight,
      fontStyle,
      textDecoration,
    };
  }, [fontSize, fontWeight, fontStyle, textDecoration]);

  return (
    <div className={css.paragraph} style={styles} onClick={onClick}>
      {text || "New paragraph"}
    </div>
  );
};

export default Paragraph;
