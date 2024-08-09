"use client";

import { nanoid } from "nanoid";
import { Instance, InstanceData, MappedId, Position } from "@/actions/type";
import { createContext, useContext, useState, ReactNode, FC, useMemo } from "react";
import { getDefaultProps } from "../Preview/components";

// Create context
const AdminContext = createContext<{
  mousePosition: Position;
  setMousePosition: (position: Position) => void;
  mappedIds: MappedId;
  setMappedIds: (mappedId: MappedId) => void;
  instances: InstanceData;
  setInstances: (instances: InstanceData) => void;
  selectedId: string;
  setSelectedId: (selectedId: string) => void;
  dragging: string;
  setDragging: (dragging: string) => void;
  createNewInstance: (path: string[], type: string) => void;
  setInstanceById: (data: Instance) => void;
}>({
  mousePosition: { x: 0, y: 0 },
  setMousePosition: () => {},
  mappedIds: { global: {} },
  setMappedIds: () => {},
  instances: {},
  setInstances: () => {},
  selectedId: "",
  setSelectedId: () => {},
  createNewInstance: () => {},
  setInstanceById: () => {},
  dragging: "None",
  setDragging: () => {},
});

// Custom hook to use the context
export const useAdminContext = () => {
  return useContext(AdminContext);
};

// Context provider
const MousePositionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [mappedIds, setMappedIds] = useState<MappedId>({ global: {} });
  const [instances, setInstances] = useState<InstanceData>({});
  const [selectedId, setSelectedId] = useState<string>("");
  const [dragging, setDragging] = useState<string>("None");

  const value = useMemo(() => {
    const createNewInstance = (path: string[], type: string) => {
      const id = nanoid();
      const newMappedIds = { ...mappedIds };
      path.reduce((acc: any, key: string) => acc[key], newMappedIds)[id] = {};

      setInstances({ ...instances, [id]: { id, component: type, props: getDefaultProps(type) } });
      setMappedIds(newMappedIds);
      setSelectedId(id);
    };

    const setInstanceById = (data: Instance) => {
      setInstances({ ...instances, [data.id || ""]: data });
    };

    return {
      mousePosition,
      setMousePosition,
      mappedIds,
      setMappedIds,
      instances,
      setInstances,
      selectedId,
      setSelectedId,
      dragging,
      setDragging,
      createNewInstance,
      setInstanceById,
    };
  }, [mousePosition, mappedIds, instances, selectedId, dragging]);

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default MousePositionProvider;
