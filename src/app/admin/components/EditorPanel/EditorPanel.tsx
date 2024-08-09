"use client";

import { ApButton, ApInput } from "@/components";
import { useMemo } from "react";
import styles from "./EditorPanel.module.scss";
import { useAdminContext } from "../AdminContext/AdminContext";

const EditorPanel = () => {
  const { selectedId, instances, setInstanceById } = useAdminContext();
  const selectedInstance = useMemo(() => instances[selectedId], [instances, selectedId]);

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
              key={`${selectedId} ${prop}`}
              label={prop}
              value={selectedInstance.props[prop]}
              setValue={(value: any) =>
                setInstanceById(selectedId, {
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
