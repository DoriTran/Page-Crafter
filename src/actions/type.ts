export interface Instance {
  id?: string;
  component: string;
  props: { [key: string]: any };
}

export interface Container extends Instance {
  instances: Container[];
}

// Mouse position
export interface Position {
  x: number;
  y: number;
}

// Object of instance data with each keys as their ids
export interface InstanceData {
  [key: string]: Instance;
}

// Object of id and its component ids in recursive way
export interface MappedIds {
  [key: string]: MappedIds;
}

export interface Action {
  instances: InstanceData;
  mappedIds?: MappedIds;
}

export interface Data {
  instances: InstanceData;
  mappedIds: MappedIds;
}
