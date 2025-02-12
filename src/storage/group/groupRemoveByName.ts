import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/constant";

export async function groupRemoveByName(groupName: string) {
  try {
    const storage = await groupsGetAll()
    const filterGroup = storage.filter(group => group !== groupName)

    AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filterGroup))
    AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
  } catch (error) {
    throw error
  }
}