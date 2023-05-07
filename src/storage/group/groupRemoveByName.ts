import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION, PLAYERS_COLLECTION } from "@storage/storageConfig";

export default async function groupRemoveByName(groupName: string) {
  try {
    const groups = await groupsGetAll();
    const groupsFilter = groups.filter((group) => group.name !== groupName);
    
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groupsFilter));
    await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
