import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import Group from "src/interfaces/Group";
import { groupsGetAll } from "./groupsGetAll";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export async function groupCreate(groupName: string): Promise<Group> {
  try {
    const name = groupName.trim();

    if (!name) {
      throw new AppError("O nome no campo está vazio");
    }

    const storageGroups = await groupsGetAll();

    const nameGroupAlreadyExists = storageGroups?.some(
      (group) => group.name === name
    );

    if (nameGroupAlreadyExists) {
      throw new AppError("Esse nome de grupo ja existe");
    }

    const newGroup: Group = { name, id: uuid.v4() as string };

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storageGroups, newGroup])
    );

    return newGroup;
  } catch (error) {
    throw error;
  }
}
