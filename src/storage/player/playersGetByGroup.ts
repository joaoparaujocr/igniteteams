import PlayerStorageDTO from "@interface/PlayerStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export default async function playersGetByGroup(
  group: string
): Promise<PlayerStorageDTO[]> {
  try {
    if (!group.trim()) {
      throw new AppError("Não possui nome de um grupo cadastrado");
    }

    const storage = await AsyncStorage.getItem(
      `${PLAYERS_COLLECTION}-${group}`
    );

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
