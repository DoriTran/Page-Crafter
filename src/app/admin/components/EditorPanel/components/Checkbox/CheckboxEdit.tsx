import { FC } from "react";
import { ApCheckbox, ApInput, ApRadioGroup } from "@/components";
import { EditorProps } from "../../Editor";
import LabelWrapper from "../../LabelWrapper";
import { useAdminContext } from "../../../AdminContext/AdminContext";

const ChecboxEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <>
      <LabelWrapper label="Default:">
        <ApCheckbox
          checked={instance.props.checked || false}
          setChecked={(value) => setInstanceById({ ...instance, props: { ...instance.props, checked: value } })}
          label="Default checked"
        />
        <ApCheckbox
          checked={instance.props.disabled || false}
          setChecked={(value) => setInstanceById({ ...instance, props: { ...instance.props, disabled: value } })}
          label="Disabled"
        />
      </LabelWrapper>
      <LabelWrapper label="Label:">
        <ApInput
          value={instance.props.label}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, label: value } })}
          placehoder="Checkbox label"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Label placement:">
        <ApRadioGroup
          value={instance.props.labelPlacement || "end"}
          setValue={(value) =>
            setInstanceById({ ...instance, props: { ...instance.props, labelPlacement: value } })
          }
          options={[
            { label: "end", value: "end" },
            { label: "start", value: "start" },
            { label: "top", value: "top" },
            { label: "bottom", value: "bottom" },
          ]}
        />
      </LabelWrapper>
    </>
  );
};

export default ChecboxEdit;
