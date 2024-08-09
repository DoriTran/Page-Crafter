import { FC } from "react";
import { ApInput } from "@/components";
import { EditorProps } from "../../Editor";
import LabelWrapper from "../../LabelWrapper";
import { useAdminContext } from "../../../AdminContext/AdminContext";

const ButtonEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <>
      <LabelWrapper label="Button Text:">
        <ApInput
          value={instance.props.text}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, text: value } })}
          placehoder="Button text"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Alert message:">
        <ApInput
          value={instance.props.alertMessage}
          setValue={(value: any) =>
            setInstanceById({ ...instance, props: { ...instance.props, alertMessage: value } })
          }
          placehoder="Alert message"
          width="100%"
        />
      </LabelWrapper>
    </>
  );
};

export default ButtonEdit;
