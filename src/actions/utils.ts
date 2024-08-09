import { InstanceData, MappedId } from "@/store/preview/state";
import { Container } from "./type";

export const mappingContainer = (map: MappedId, data: InstanceData, currentId: string = "global"): Container => {
  const result: Container = (data?.[currentId] as Container) || {
    id: currentId,
    component: "Container",
    props: {},
  };
  if (result.component !== "Container") result.instances = [];
  else result.instances = Object.keys(map).map((key) => mappingContainer(map[key], data, key));
  return result;
};
