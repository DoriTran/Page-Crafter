/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { FC, useState } from "react";
import { Instance, InstanceData, MappedId } from "@/actions/type";
import { Header, ComponentPanel, Preview, EditorPanel } from "./components";
import styles from "./Admin.module.scss";

interface AdminProps {
  savedInstances: InstanceData;
  savedMappedIds: MappedId;
}

const Admin: FC<AdminProps> = ({ savedInstances, savedMappedIds }) => {
  const [mappedIds, setMappedIds] = useState<MappedId>(savedMappedIds);
  const [instances, setInstances] = useState<InstanceData>(savedInstances);
  const [selectedInstanceId, setSelectedInstanceId] = useState<string>("");
  const setInstanceById = (id: string, data: Instance): void => {
    setInstances({ ...instances, id: data });
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.body}>
        <ComponentPanel />
        <Preview map={mappedIds} instances={instances} setInstanceById={setInstanceById} />
        <EditorPanel selectedInstance={instances[selectedInstanceId]} setInstanceById={setInstanceById} />
      </div>
    </div>
  );
};

export default Admin;
