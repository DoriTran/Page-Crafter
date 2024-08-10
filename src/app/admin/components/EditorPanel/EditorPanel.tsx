"use client";

import { ApButton, ApScrollbar } from "@/components";
import { useMemo } from "react";
import styles from "./EditorPanel.module.scss";
import { useAdminContext } from "../AdminContext/AdminContext";
import Editor from "./Editor";

const EditorPanel = () => {
  const { selectedId, instances } = useAdminContext();
  const selectedInstance = useMemo(() => instances[selectedId], [instances, selectedId]);

  return (
    <div className={styles.rightPanel}>
      <ApScrollbar maxHeight="calc(100vh - 70px - 150px)" className={styles.editor}>
        {!selectedInstance && (
          <div className={styles.selectAnInstance}>
            Select an instance <br /> to start editing!
          </div>
        )}
        {selectedInstance && (
          <>
            <div className={styles.selectedInstance}>{selectedInstance.component}</div>
            <div className={styles.idWrapper}>Id: {selectedId || "Unknown"}</div>
            <Editor instance={selectedInstance} />
          </>
        )}
      </ApScrollbar>
      <div className={styles.viewAction}>
        <ApButton sx={{ width: "80%" }} onClick={() => window.open("/consumer", "_blank")}>
          View
        </ApButton>
      </div>
    </div>
  );
};

export default EditorPanel;
