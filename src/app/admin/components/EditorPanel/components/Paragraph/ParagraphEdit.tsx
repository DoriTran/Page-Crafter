import { FC } from "react";
import { ApCheckbox, ApInput, ApRadioGroup } from "@/components";
import { useAdminContext } from "../../../AdminContext/AdminContext";
import LabelWrapper from "../../LabelWrapper";
import { EditorProps } from "../../Editor";

const ParagraphEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <>
      <LabelWrapper label="Paragraph:">
        <ApInput
          value={instance.props.text}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, text: value } })}
          placehoder="Paragraph"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Font size:">
        <ApInput
          type="number"
          value={instance.props.fontSize}
          setValue={(value: any) =>
            setInstanceById({ ...instance, props: { ...instance.props, fontSize: value } })
          }
          placehoder="Font size"
          width="80%"
        />
      </LabelWrapper>
      <LabelWrapper label="Font weight:">
        <ApRadioGroup
          value={instance.props.fontWeight || 400}
          setValue={(value) => setInstanceById({ ...instance, props: { ...instance.props, fontWeight: value } })}
          horizontal
          options={[
            { label: "light", value: 300 },
            { label: "regular", value: 400 },
            { label: "medium", value: 500 },
            { label: "semibold", value: 600 },
            { label: "bold", value: 700 },
          ]}
        />
      </LabelWrapper>
      <LabelWrapper label="Text decoration:">
        <ApRadioGroup
          value={instance.props.textDecoration || "none"}
          setValue={(value) =>
            setInstanceById({ ...instance, props: { ...instance.props, textDecoration: value } })
          }
          horizontal
          options={[
            { label: "none", value: "none" },
            { label: "underline", value: "underline" },
            { label: "overline", value: "overline" },
            { label: "underline overline", value: "underline overline" },
            { label: "line through", value: "line-through" },
          ]}
        />
      </LabelWrapper>
      <LabelWrapper label="Font style:">
        <ApCheckbox
          checked={instance.props.fontStyle === "italic"}
          setChecked={(value) =>
            setInstanceById({ ...instance, props: { ...instance.props, fontStyle: value ? "italic" : "normal" } })
          }
          label="Italic"
        />
      </LabelWrapper>
    </>
  );
};

export default ParagraphEdit;
