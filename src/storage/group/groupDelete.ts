import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupDelete(id: string) {
  try {
    const storage = await groupsGetAll();
    AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(storage.find((group) => group.id !== id))
    );
  } catch (error) {
    throw error;
  }
}
