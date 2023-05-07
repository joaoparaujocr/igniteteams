import { Alert, FlatList, TextInput } from "react-native";
import {
  ParamListBase,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Fragment, useCallback, useRef, useState } from "react";

import { PlayersView, Form, NumbersOfPlayes, HeaderList } from "./styles";

import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Header from "@components/Header";
import Input from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import Group from "@interface/Group";
import playerAddByGroup from "@storage/player/playerAddByGroup";
import { AppError } from "@utils/AppError";
import PlayerStorageDTO from "@interface/PlayerStorageDTO";
import playersGetByGroup from "@storage/player/playersGetByGroup";
import playerRemoveByGroup from "@storage/player/playerRemoveByGroup";
import groupRemoveByName from "@storage/group/groupRemoveByName";

interface CustomRouteProp extends RouteProp<ParamListBase> {
  params: Group;
}

export default function Players() {
  const navigation = useNavigation();
  const {
    params: { name: groupName, id },
  } = useRoute<CustomRouteProp>();
  const inputRef = useRef<TextInput>(null);
  const [allPlayers, setAllPlayers] = useState<PlayerStorageDTO[]>([]);
  const [playersFilter, setPlayersFilter] = useState<PlayerStorageDTO[]>([]);
  const [newPlayer, setNewPlayer] = useState<string>("");
  const [selected, setSelected] = useState<string>("Time A");

  const removeGroup = async () => {
    try {
      await groupRemoveByName(groupName);
      navigation.navigate("groups");
    } catch (error) {
      console.error(error);
      Alert.alert("Remover Grupo", "Ocorreu um erro ao tentar remover");
    }
  };

  const handleDeleteGroup = () => {
    Alert.alert("Remover Grupo", "Deseja remover esse grupo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "SIm",
        onPress: removeGroup,
      },
    ]);
  };

  const handleDeletePlayer = async (namePlayer: string) => {
    try {
      const players = await playerRemoveByGroup(namePlayer, groupName);
      setPlayersAndFilterTeam(players);
    } catch (error) {
      console.error(error);
      Alert.alert("Remover jogador", "Não foi possivel remover esse jogador");
    }
  };

  const handleTeam = (team: string) => {
    setSelected(team);
    setPlayersFilter(allPlayers.filter((player) => player.team === team));
  };

  function setPlayersAndFilterTeam(players: PlayerStorageDTO[]) {
    const playersFilterByTeam = players.filter(
      (player) => player.team === selected
    );
    setAllPlayers(players);
    setPlayersFilter(playersFilterByTeam);
  }

  async function handleAddNewPlayer() {
    try {
      await playerAddByGroup({ name: newPlayer, team: selected }, groupName);
      inputRef.current?.blur();
      setNewPlayer("");
      fetchGetPlayers();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Adicioanar jogador", error.message);
      } else {
        Alert.alert(
          "Adicionar jogador",
          "Ocorreu algum erro ao adicionar o jogador"
        );
      }
    }
  }

  async function fetchGetPlayers() {
    const players = await playersGetByGroup(groupName);
    setPlayersAndFilterTeam(players);
  }

  useFocusEffect(
    useCallback(() => {
      fetchGetPlayers();
    }, [])
  );

  return (
    <PlayersView>
      <Header showBackButton />
      <Highlight
        title={groupName}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          inputRef={inputRef}
          value={newPlayer}
          onChangeText={setNewPlayer}
          placeholder="Adicionar pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddNewPlayer} name="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={[
            {
              id: 1,
              name: "Time A",
            },
            {
              id: 2,
              name: "Time B",
            },
          ]}
          renderItem={({ item: { id, name } }) => (
            <Filter
              isSelected={name === selected}
              onPress={() => handleTeam(name)}
              title={name}
              key={id}
            />
          )}
          horizontal
        />
        <NumbersOfPlayes>{playersFilter.length}</NumbersOfPlayes>
      </HeaderList>
      <FlatList
        data={playersFilter}
        renderItem={({ item: { name, team } }) => {
          if (team === selected) {
            return (
              <PlayerCard
                key={team}
                name={name}
                handleClose={() => handleDeletePlayer(name)}
              />
            );
          }
          return <Fragment />;
        }}
        ListEmptyComponent={<ListEmpty message="Não há players nesse time" />}
        contentContainerStyle={[
          {
            paddingBottom: 50,
          },
          playersFilter.length === 0 && { flex: 1 },
        ]}
      />
      <Button
        onPress={handleDeleteGroup}
        text="Remover grupo"
        type="secondary"
      />
    </PlayersView>
  );
}
