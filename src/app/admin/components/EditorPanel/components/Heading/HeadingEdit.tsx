import { FC } from "react";
import { ApInput, ApRadioGroup } from "@/components";
import { EditorProps } from "../../Editor";
import LabelWrapper from "../../LabelWrapper";
import { useAdminContext } from "../../../AdminContext/AdminContext";

const HeadingEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <>
      <div>{instance.id}</div>
      <LabelWrapper label="Tag heading:">
        <ApRadioGroup
          value={instance.props.heading || "h1"}
          setValue={(value) => setInstanceById({ ...instance, props: { ...instance.props, heading: value } })}
          horizontal
          options={[
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
            { label: "H5", value: "h5" },
          ]}
        />
      </LabelWrapper>
      <LabelWrapper label="Text:">
        <ApInput
          value={instance.props.text}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, text: value } })}
          placehoder="Heading text"
          width="100%"
        />
      </LabelWrapper>
    </>
  );
};

export default HeadingEdit;
