import { FC } from "react";
import { ApCheckbox, ApIcon, ApInput, ApRadioGroup } from "@/components";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { cloneDeep } from "lodash";
import { Option } from "@/components/ApRadioGroup/ApRadioGroup";
import { EditorProps } from "../../Editor";
import LabelWrapper from "../../LabelWrapper";
import { useAdminContext } from "../../../AdminContext/AdminContext";
import styles from "./RadioGroupEdit.module.scss";

const RadioGroupEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <>
      <LabelWrapper label="Default value:">
        <ApInput
          value={instance.props.value || ""}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, value } })}
          placehoder="Default value"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Label placement:">
        <ApRadioGroup
          value={instance.props.labelPlacement || "end"}
          setValue={(value) =>
            setInstanceById({ ...instance, props: { ...instance.props, labelPlacement: value } })
          }
          gap={0}
          options={[
            { label: "end", value: "end" },
            { label: "start", value: "start" },
            { label: "top", value: "top" },
            { label: "bottom", value: "bottom" },
          ]}
        />
      </LabelWrapper>
      <LabelWrapper label="Options gap (px,vw,vh ...)">
        <ApCheckbox
          checked={instance.props.horizontal || false}
          setChecked={(value) => setInstanceById({ ...instance, props: { ...instance.props, horizontal: value } })}
          label="Options align horizontal"
        />
        <ApInput
          value={instance.props.gap || 0}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, gap: value } })}
          placehoder="Options gap"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Options:">
        <ApCheckbox
          checked={instance.props.horizontal || false}
          setChecked={(value) => setInstanceById({ ...instance, props: { ...instance.props, horizontal: value } })}
          label="Options align horizontal"
        />
        <Button
          variant="outlined"
          color="warning"
          startIcon={<ApIcon icon={faPlus} />}
          onClick={() => {
            const cloneOptions = [
              ...cloneDeep(instance.props.options),
              { label: `Label ${instance.props.options.length + 1}`, disabled: false },
            ];
            setInstanceById({ ...instance, props: { ...instance.props, options: cloneOptions } });
          }}
        >
          New Options
        </Button>
        {instance.props.options.map((eachOptions: Option, index: number) => (
          <div key={index} className={styles.optionWrapper}>
            <ApInput
              value={eachOptions.label}
              setValue={(value: any) => {
                const cloneOptions = [...cloneDeep(instance.props.options)];
                cloneOptions[index] = { ...cloneOptions[index], label: value };
                setInstanceById({ ...instance, props: { ...instance.props, options: cloneOptions } });
              }}
              placehoder="Option label"
              width="65%"
            />
            <div className={styles.action}>
              <ApCheckbox
                checked={!eachOptions.disabled as boolean}
                setChecked={(value: any) => {
                  const cloneOptions = [...cloneDeep(instance.props.options)];
                  cloneOptions[index] = { ...cloneOptions[index], disabled: !value };
                  setInstanceById({ ...instance, props: { ...instance.props, options: cloneOptions } });
                }}
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
          </div>
        ))}
      </LabelWrapper>
    </>
  );
};

export default RadioGroupEdit;
