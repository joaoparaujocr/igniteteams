import AsyncStorage from "@react-native-async-storage/async-storage";

import playersGetByGroup from "./playersGetByGroup";

import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import PlayerStorageDTO from "@interface/PlayerStorageDTO";
import { AppError } from "@utils/AppError";

export default async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    if (!newPlayer.name.trim()) {
      throw new AppError("Nome do jogador está vázio");
    }

    if (!newPlayer.team.trim()) {
      throw new AppError("O jogador está sem time selecionado");
    }

    const players = await playersGetByGroup(group);

    const playerAlreadyExists = players.some(
      ({ name }) => name === newPlayer.name
    );

    if (playerAlreadyExists) {
      throw new AppError("Já existe um jogador cadastrado com esse nome");
    }

    await AsyncStorage.setItem(
      `${PLAYERS_COLLECTION}-${group}`,
      JSON.stringify([...players, newPlayer])
    );
  } catch (error) {
    throw error;
  }
}
