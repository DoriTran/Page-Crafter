/* eslint-disable @typescript-eslint/no-unused-vars */
import { Instance, Container, InstanceData, MappedId } from "@/actions/type";
import { FC, useMemo } from "react";
import { mappingContainer } from "@/actions/utils";
import Display from "./Display";
import styles from "./Preview.module.scss";

interface PreviewProps {
  map: MappedId;
  instances: InstanceData;
  setInstanceById: (id: string, data: Instance) => void;
}

const Preview: FC<PreviewProps> = ({ map, instances, setInstanceById }) => {
  const globalContainer = useMemo<Container>(() => mappingContainer(map, instances), [map, instances]);

  return (
    <div className={styles.preview}>
      <Display container={globalContainer} />
    </div>
  );
};

export default Preview;
