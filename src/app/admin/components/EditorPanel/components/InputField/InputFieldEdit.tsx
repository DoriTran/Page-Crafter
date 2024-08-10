import { FC } from "react";
import { ApCheckbox, ApInput } from "@/components";
import { EditorProps } from "../../Editor";
import LabelWrapper from "../../LabelWrapper";
import { useAdminContext } from "../../../AdminContext/AdminContext";

const InputFieldEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <>
      <LabelWrapper label="Input type (text/number/file/image...):">
        <ApInput
          value={instance.props.type === undefined ? "text" : instance.props.type}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, type: value } })}
          placehoder="Placeholder"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Default value:">
        <ApInput
          value={instance.props.value || ""}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, value } })}
          placehoder="Default value"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Placeholder:">
        <ApInput
          value={instance.props.placeholder === undefined ? "Default placeholder" : instance.props.placeholder}
          setValue={(value: any) =>
            setInstanceById({ ...instance, props: { ...instance.props, placeholder: value } })
          }
          placehoder="Placeholder"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Options">
        <ApCheckbox
          checked={instance.props.readOnly || false}
          setChecked={(value) => setInstanceById({ ...instance, props: { ...instance.props, readOnly: value } })}
          label="Read Only"
        />
        <ApCheckbox
          checked={instance.props.disabled || false}
          setChecked={(value) => setInstanceById({ ...instance, props: { ...instance.props, disabled: value } })}
          label="Disable"
        />
      </LabelWrapper>
      <LabelWrapper label="Size and styles:">
        <LabelWrapper label="Width (px, vw, rem, %, ...):">
          <ApInput
            value={instance.props.width}
            setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, width: value } })}
            placehoder="Width"
            width="80%"
          />
        </LabelWrapper>
        <LabelWrapper label="Height (px, vw, rem, %, ...):">
          <ApInput
            value={instance.props.height}
            setValue={(value: any) =>
              setInstanceById({ ...instance, props: { ...instance.props, height: value } })
            }
            placehoder="Height"
            width="80%"
          />
        </LabelWrapper>
        <LabelWrapper label="Font size (px, vw, rem, %, ...):">
          <ApInput
            value={instance.props.fontSize}
            setValue={(value: any) =>
              setInstanceById({ ...instance, props: { ...instance.props, fontSize: value } })
            }
            placehoder="Font size"
            width="80%"
          />
        </LabelWrapper>
      </LabelWrapper>
    </>
  );
};

export default InputFieldEdit;
