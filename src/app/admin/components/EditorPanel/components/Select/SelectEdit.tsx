import { FC } from "react";
import { ApIcon, ApInput } from "@/components";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { cloneDeep } from "lodash";
import { Option } from "@/components/ApRadioGroup/ApRadioGroup";
import { EditorProps } from "../../Editor";
import LabelWrapper from "../../LabelWrapper";
import { useAdminContext } from "../../../AdminContext/AdminContext";
import styles from "./SelectEdit.module.scss";

const SelectEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <LabelWrapper label="Options:">
      <Button
        variant="outlined"
        color="warning"
        startIcon={<ApIcon icon={faPlus} />}
        onClick={() => {
          const cloneOptions = [...instance.props.options, `Option ${instance.props.options.length + 1}`];
          setInstanceById({ ...instance, props: { ...instance.props, options: cloneOptions } });
        }}
      >
        New Options
      </Button>
      {instance.props.options.map((eachOptions: Option, index: number) => (
        <div key={index} className={styles.optionWrapper}>
          <ApInput
            value={eachOptions}
            setValue={(value: any) => {
              const cloneOptions = [...cloneDeep(instance.props.options)];
              cloneOptions[index] = value;
              setInstanceById({ ...instance, props: { ...instance.props, options: cloneOptions } });
            }}
            placehoder="Option label"
            width="85%"
          />
          <ApIcon
            icon={faXmark}
            color="red"
            onClick={() => {
              const cloneOptions = [...cloneDeep(instance.props.options)];
              cloneOptions.splice(index, 1);
              setInstanceById({
                ...instance,
                props: { ...instance.props, options: cloneOptions },
              });
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </LabelWrapper>
  );
};

export default SelectEdit;
