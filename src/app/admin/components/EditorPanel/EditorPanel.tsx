import { Instance } from "@/actions/type";
import { ApButton, ApInput } from "@/components";
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
        {!selectedInstance && (
          <div className={styles.selectAnInstance}>
            Select an instance <br /> to start editing!
          </div>
        )}
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
        <ApButton sx={{ width: "80%" }} onClick={() => window.open("/consumer", "_blank")}>
          View
        </ApButton>
      </div>
    </div>
  );
};

export default EditorPanel;
