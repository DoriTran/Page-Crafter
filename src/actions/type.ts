export interface Instance {
  id: string;
  component: string;
  props: { [key: string]: any };
}

export interface Container extends Instance {
  instances: Container[];
}

// Object of instance data with each keys as their ids
export interface InstanceData {
  [key: string]: Instance;
}

// Object of id and its component ids in recursive way
export interface MappedId {
  [key: string]: MappedId;
}
