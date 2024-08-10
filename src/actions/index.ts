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
  store.set("mappedIds", mappedIds);
  Object.keys(instances).forEach((key) => store.set(key, instances[key]));
}

// Clear storage
export async function clearData(): Promise<void> {
  localStorage.clear();
}

// ==================== Learning progress:
// export async function getLearningProgress(): Promise<LearningProgress> {
//   const at = store.get("at") || -1;
//   const learningPack = store.get("learningPack") || [];
//   const wrongPack = store.get("wrongPack") || [];
//   return { at, learningPack, wrongPack };
// }

// export async function next(): Promise<void> {
//   const at = store.get("at") || -1;
//   store.set("at", at + 1);
// }

// export async function back(): Promise<void> {
//   const at = store.get("at") || -1;
//   store.set("at", at - 1);
// }

// export async function resetLearningProgress(): Promise<void> {
//   store.set("at", -1);
//   store.set("learningPack", []);
//   store.set("wrongPack", []);
// }

// export async function setNewLearningPack(newLearningPack: CardInfo[]): Promise<void> {
//   store.set("at", -1);
//   store.set("learningPack", newLearningPack);
// }

// export async function wrong(wrongCard: CardInfo): Promise<void> {
//   const wrongPack = store.get("wrongPack") || [];
//   const index = wrongPack.findIndex((card: CardInfo) => card.keyword === wrongCard.keyword);

//   if (index > 0) wrongPack[index].wrongRelearnRemain++;
//   else wrongPack.push({ ...wrongCard, wrongRelearnRemain: 3 });

//   store.set("wrongPack", wrongPack);
// }

// export async function correct(correctCard: CardInfo): Promise<void> {
//   const wrongPack = store.get("wrongPack") || [];
//   const index = wrongPack.findIndex((card: CardInfo) => card.keyword === correctCard.keyword);

//   wrongPack[index].wrongRelearnRemain--;
//   if (wrongPack[index] === 0) wrongPack.slice(index, 1);

//   store.set("wrongPack", wrongPack);
// }

// // ==================== Learning settings:
// export async function getLearningSettings(): Promise<LearningSettings> {
//   const settings = store.get("settings") || defaultSettings;
//   return settings;
// }

// export async function setLearningSettings(newSettings: LearningSettings): Promise<void> {
//   const settings = store.get("settings") || defaultSettings;
//   store.set("settings", { ...settings, ...newSettings });
// }
