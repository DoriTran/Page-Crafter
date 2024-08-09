/* eslint-disable @typescript-eslint/no-unused-vars */
import { Instance, Container, InstanceData, MappedId } from "@/actions/type";
import { FC, useMemo } from "react";
import { mappingContainer } from "@/actions/utils";
import Display from "./Display";
import styles from "./Preview.module.scss";

export interface Position {
  x: number;
  y: number;
}

interface PreviewProps {
  map: MappedId;
  instances: InstanceData;
  setInstanceById: (id: string, data: Instance) => void;
  setMousePosition: (position: Position) => void;
}

const Preview: FC<PreviewProps> = ({ map, instances, setInstanceById, setMousePosition }) => {
  const globalContainer = useMemo<Container>(() => mappingContainer(map, instances), [map, instances]);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("type");
    // eslint-disable-next-line no-alert
    window.alert(type);
  };
  return (
    <div className={styles.preview} onMouseMove={handleMouseMove} onDragOver={handleDragOver} onDrop={handleDrop}>
      <Display container={globalContainer} />
    </div>
  );
};

export default Preview;
