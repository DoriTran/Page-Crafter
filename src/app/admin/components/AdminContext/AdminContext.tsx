"use client";

import { nanoid } from "nanoid";
import { Action, Instance, InstanceData, MappedIds, Position } from "@/actions/type";
import { createContext, useContext, useState, ReactNode, FC, useMemo, useEffect } from "react";
import _ from "lodash";
import { getDefaultProps } from "../Preview/components";

// Create context
const AdminContext = createContext<{
  mousePosition: Position;
  setMousePosition: (position: Position) => void;
  mappedIds: MappedIds;
  setMappedIds: (mappedId: MappedIds) => void;
  instances: InstanceData;
  setInstances: (instances: InstanceData) => void;
  selectedId: string;
  setSelectedId: (selectedId: string) => void;
  dragging: string;
  setDragging: (dragging: string) => void;
  createNewInstance: (path: string[], type: string) => void;
  setInstanceById: (data: Instance) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
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
  undo: () => {},
  redo: () => {},
  canUndo: false,
  canRedo: false,
});

// Custom hook to use the context
export const useAdminContext = () => {
  return useContext(AdminContext);
};

// Context provider
const MousePositionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [mappedIds, setMappedIds] = useState<MappedIds>({ global: {} });
  const [instances, setInstances] = useState<InstanceData>({});
  const [undoStack, setUndoStack] = useState<Action[]>([{ instances, mappedIds }]);
  const [redoStack, setRedoStack] = useState<Action[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [dragging, setDragging] = useState<string>("None");

  useEffect(() => {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Undo stack:", undoStack);
  }, [undoStack]);

  useEffect(() => {
    console.log(instances, mappedIds);
  }, [instances, mappedIds]);

  useEffect(() => {
    console.log("Redo stack:", redoStack);
  }, [redoStack]);

  const value = useMemo(() => {
    const createNewInstance = (path: string[], type: string) => {
      const id = nanoid();
      const newInstances = _.cloneDeep({
        ...instances,
        [id]: { id, component: type, props: getDefaultProps(type) },
      });
      const newMappedIds = _.cloneDeep(mappedIds);
      path.reduce((acc: any, key: string) => acc[key], newMappedIds)[id] = {};

      setInstances(_.cloneDeep(newInstances));
      setMappedIds(_.cloneDeep(newMappedIds));
      setSelectedId(id);
      setUndoStack([...undoStack, { instances: _.cloneDeep(newInstances), mappedIds: _.cloneDeep(newMappedIds) }]);
      setRedoStack([]);
    };

    const setInstanceById = (data: Instance) => {
      setInstances({ ...instances, [data.id || ""]: _.cloneDeep(data) });
      setUndoStack([...undoStack, { instances: _.cloneDeep({ ...instances, [data.id || ""]: data }) }]);
      setRedoStack([]);
    };

    const undo = () => {
      if (undoStack.length === 0) return;
      setRedoStack([...redoStack, undoStack[undoStack.length - 1]]);
      const undoData = undoStack[undoStack.length - 2];
      setInstances(undoData.instances);
      if (undoData.mappedIds !== undefined) setMappedIds(undoData.mappedIds);
      setUndoStack(undoStack.slice(0, -1));
    };

    const redo = () => {
      if (redoStack.length === 0) return;
      setUndoStack([...undoStack, { instances, mappedIds }]);
      const redoData = redoStack[redoStack.length - 1];
      setInstances(redoData.instances);
      if (redoData.mappedIds !== undefined) setMappedIds(redoData.mappedIds);
      setRedoStack(redoStack.slice(0, -1));
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
      undo,
      redo,
      canUndo: undoStack.length > 1,
      canRedo: redoStack.length > 0,
    };
  }, [mousePosition, mappedIds, instances, selectedId, dragging, undoStack, redoStack]);

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default MousePositionProvider;
