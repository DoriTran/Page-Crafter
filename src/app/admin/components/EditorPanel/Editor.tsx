import { FC } from "react";
import { Instance } from "@/actions/type";
import styles from "./EditorPanel.module.scss";
import {
  ButtonEdit,
  CheckboxEdit,
  ContainerEdit,
  HeadingEdit,
  ImageEdit,
  InputFieldEdit,
  ParagraphEdit,
  RadioGroupEdit,
  SelectEdit,
  UnknownComponent,
} from "./components";

export interface EditorProps {
  instance: Instance;
}

const Editor: FC<EditorProps> = ({ instance }) => {
  const EditComponent = (() => {
    switch (instance.component) {
      case "Container":
        return ContainerEdit;
      case "Heading":
        return HeadingEdit;
      case "Paragraph":
        return ParagraphEdit;
      case "Button":
        return ButtonEdit;
      case "Checkbox":
        return CheckboxEdit;
      case "RadioGroup":
        return RadioGroupEdit;
      case "Select":
        return SelectEdit;
      case "InputField":
        return InputFieldEdit;
      case "Image":
        return ImageEdit;
      default:
        return UnknownComponent;
    }
  })();

  return (
    <div className={styles.editorWrapper}>
      <EditComponent key={instance.id} instance={instance} />
    </div>
  );
};

export default Editor;
