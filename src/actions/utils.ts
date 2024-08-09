import { Container, InstanceData, MappedIds } from "./type";

export const mappingContainer = (map: MappedIds, data: InstanceData, currentId: string = ""): Container => {
  if (currentId === "") return mappingContainer(map.global, data, "global");
  const result: Container = (data?.[currentId] as Container) || {
    id: currentId,
    component: "Container",
    props: {},
  };
  if (result.component !== "Container") result.instances = [];
  else result.instances = Object.keys(map).map((key) => mappingContainer(map[key], data, key));
  return result;
};
