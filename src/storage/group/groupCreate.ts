import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import Group from "src/interfaces/Group";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(group: Group) {
  try {
    const storageGroups = await groupsGetAll();
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storageGroups, group])
    );
  } catch (error) {
    throw error;
  }
}
