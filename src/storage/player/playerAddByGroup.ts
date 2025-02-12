import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/constant";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group)
    const playerAlreadyExists = storedPlayers.some(player => player.name === newPlayer.name)

    if (playerAlreadyExists) {
      throw new AppError('Já existe uma pessoa com esse nome em um time.')
    }

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify([...storedPlayers, newPlayer]))
  } catch (error) {
    throw error
  }
}
