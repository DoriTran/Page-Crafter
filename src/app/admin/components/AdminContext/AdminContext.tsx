"use client";

import { nanoid } from "nanoid";
import { Action, Instance, InstanceData, MappedIds, Position } from "@/actions/type";
import { createContext, useContext, useState, ReactNode, FC, useMemo, useEffect } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { clearData, getData, saveData } from "@/actions";
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
  clearBoard: () => void;
  saveContextData: () => Promise<void>;
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
  clearBoard: () => {},
  saveContextData: async () => {},
});

// Custom hook to use the context
export const useAdminContext = () => {
  return useContext(AdminContext);
};

// Context provider
const AdminProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [mappedIds, setMappedIds] = useState<MappedIds>({ global: {} });
  const [instances, setInstances] = useState<InstanceData>({});
  const [undoStack, setUndoStack] = useState<Action[]>([]);
  const [redoStack, setRedoStack] = useState<Action[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [dragging, setDragging] = useState<string>("None");

  const { data, isSuccess } = useQuery({
    queryKey: ["adminData"],
    queryFn: getData,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setMappedIds(data.mappedIds);
      setInstances(data.instances);
    }
  }, [isSuccess, data]);

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

  const getCurrentData = (): Action => {
    return {
      instances: _.cloneDeep(instances),
      mappedIds: _.cloneDeep(mappedIds),
    };
  };

  const value = useMemo(() => {
    const createNewInstance = (path: string[], type: string) => {
      // Stack handle
      setUndoStack(_.cloneDeep([...undoStack, getCurrentData()]));
      setRedoStack([]);

      // Create new instance
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
    };

    const setInstanceById = (instanceData: Instance) => {
      // Stack handle
      setUndoStack(_.cloneDeep([...undoStack, getCurrentData()]));
      setRedoStack([]);

      // Set instance by id
      setInstances({ ...instances, [instanceData.id || ""]: _.cloneDeep(instanceData) });
    };

    const undo = () => {
      if (undoStack.length === 0) return;
      const undoData = _.cloneDeep(undoStack[undoStack.length - 1]);
      // Undo current data
      setInstances(_.cloneDeep(undoData.instances));
      if (undoData.mappedIds !== undefined) setMappedIds(_.cloneDeep(undoData.mappedIds));
      // Stack handle
      setRedoStack(_.cloneDeep([...redoStack, getCurrentData()]));
      setUndoStack(_.cloneDeep(undoStack.slice(0, -1)));
    };

    const redo = () => {
      if (redoStack.length === 0) return;
      const redoData = _.cloneDeep(redoStack[redoStack.length - 1]);
      // Redo current data
      setInstances(_.cloneDeep(redoData.instances));
      if (redoData.mappedIds !== undefined) setMappedIds(_.cloneDeep(redoData.mappedIds));
      // Stack handle
      setUndoStack(_.cloneDeep([...undoStack, getCurrentData()]));
      setRedoStack(_.cloneDeep(redoStack.slice(0, -1)));
    };

    const clearBoard = () => {
      setUndoStack([...undoStack, _.cloneDeep({ instances, mappedIds })]);
      setRedoStack([]);
      setInstances({});
      setMappedIds({ global: {} });
    };

    const saveContextData = async () => {
      try {
        await saveData(mappedIds, instances);
      } catch (error) {
        console.error("Failed to save context data", error);
      }
    };

    // const clearContextData = async () => {
    //   try {
    //     await clearData();
    //   } catch (error) {
    //     console.error("Failed to clear context data", error);
    //   }
    // };

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
      canUndo: undoStack.length > 0,
      canRedo: redoStack.length > 0,
      saveContextData,
      clearBoard,
    };
  }, [mousePosition, mappedIds, instances, selectedId, dragging, undoStack, redoStack, getCurrentData]);

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default AdminProvider;
