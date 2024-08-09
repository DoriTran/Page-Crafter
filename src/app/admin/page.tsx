import { InstanceData, MappedId } from "@/actions/type";
import { getSavedInstances, getSavedMappedIds } from "@/actions";
import Admin from "./Admin";

const AdminPage = async () => {
  const savedInstances: InstanceData = await getSavedInstances();
  const savedMappedIds: MappedId = await getSavedMappedIds();

  return <Admin savedInstances={savedInstances} savedMappedIds={savedMappedIds} />;
};

export default AdminPage;
