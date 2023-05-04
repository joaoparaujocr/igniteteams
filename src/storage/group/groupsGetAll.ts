import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import Group from "src/interfaces/Group";

export async function groupsGetAll(): Promise<Group[]> {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
