import AsyncStorage from "@react-native-async-storage/async-storage";
import playersGetByGroup from "./playersGetByGroup";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";

export default async function playerRemoveByGroup(
  namePlayer: string,
  groupName: string
) {
  try {
    const players = await playersGetByGroup(groupName);
    const playersFilter = players.filter(({ name }) => name !== namePlayer);

    await AsyncStorage.setItem(
      `${PLAYERS_COLLECTION}-${groupName}`,
      JSON.stringify(playersFilter)
    );

    return playersFilter;
  } catch (error) {
    throw error;
  }
}
