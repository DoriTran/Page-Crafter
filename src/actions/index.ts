import store from "store2";
import { Data, InstanceData, MappedIds } from "./type";

const flattenMap = (map: { [key: string]: any }): { [key: string]: {} } => {
  const result: { [key: string]: {} } = {};

  const traverse = (currentMap: { [key: string]: any }) => {
    Object.keys(currentMap).forEach((key) => {
      result[key] = {}; // Add key to result with empty object
      traverse(currentMap[key]);
    });
  };

  traverse(map);
  return result;
};

// Get storage save
export async function getData(): Promise<Data> {
  const mappedIds = store.get("mappedIds") || { global: {} };
  const instances = flattenMap(mappedIds);
  Object.keys(instances).forEach((key) => {
    instances[key] = store.get(key);
  });

  return { mappedIds, instances: instances as InstanceData };
}

// Save to storage
export async function saveData(mappedIds: MappedIds, instances: InstanceData): Promise<void> {
  localStorage.clear();
  store.set("mappedIds", mappedIds);
  Object.keys(instances).forEach((key) => store.set(key, instances[key]));
}
