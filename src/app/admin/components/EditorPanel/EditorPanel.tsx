import { Instance } from "@/actions/type";
import { ApButton, ApDivider, ApInput } from "@/components";
import { FC } from "react";
import styles from "./EditorPanel.module.scss";

interface EditorPanelProps {
  selectedInstance: Instance;
  setInstanceById: (id: string, data: Instance) => void;
}

const EditorPanel: FC<EditorPanelProps> = ({ selectedInstance, setInstanceById }) => {
  return (
    <div className={styles.rightPanel}>
      <div className={styles.editor}>
        {selectedInstance &&
          Object.keys(selectedInstance.props).map((prop) => (
            <ApInput
              key={`${selectedInstance.id} ${prop}`}
              label={prop}
              value={selectedInstance.props[prop]}
              setValue={(value: any) =>
                setInstanceById(selectedInstance.id, {
                  ...selectedInstance,
                  props: { ...selectedInstance.props, prop: value },
                })
              }
            />
          ))}
      </div>
      <div className={styles.viewAction}>
        <ApDivider />
        <ApButton>View</ApButton>
      </div>
    </div>
  );
};

export default EditorPanel;
